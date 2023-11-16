import { useSelector } from "react-redux";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import { GamerRoom, GamerRoomMember, GamerRoomMemberLogin } from "../../Gamer.model";
import { gamerExer } from "../../Gamer.store";
import useGamerRooms from "../../complect/rooms/room/useGamerRooms";
import { AliasGameTeam, AliasWordNid, GamerAliasRoomState } from "./Alias.model";
import { AliasHelp } from "./AliasHelp";

const aliasWordsSelector = (state: RootState) => state.gamer.aliasWords;

const initialMemberList: string[] = [];

let localCurrentRoom: GamerRoom | nil;
const sendExec = (action: string, args?: Record<string, unknown>) => {
    if (!localCurrentRoom) return;

    return gamerExer.send({
        action,
        args: {
            roomw: localCurrentRoom.w,
            ...args,
        },
    });
};

export default function useAliasState() {
    const { players, currentRoom, auth, memberPossibilities } = useGamerRooms();

    localCurrentRoom = currentRoom;

    const state = currentRoom?.games?.alias as GamerAliasRoomState | und;
    const aliasWords = useSelector(aliasWordsSelector);
    let speaker: GamerRoomMember | und;
    const currentWordNid = state?.words?.[0];

    const memberList = state?.teams.reduce((list, team) => list.concat(team.members), initialMemberList);

    const ret = {
        currentRoom,
        state,
        auth,
        players,
        memberPossibilities,
        getWord: (nid?: AliasWordNid) => {
            const nids = AliasHelp.decodeWordNid(nid);
            if (!nids) return undefined;
            const [packi, leveli, wordi] = nids;
            return aliasWords?.[packi as never]?.words[leveli as never]?.[wordi as never];
        },
        takeCurrentWord: () => {
            return ret.getWord(currentWordNid);
        },
        getAnswerList: (scope: 'cor' | 'inc'): [AliasWordNid, string?][] | nil => {
            return ret.takeCurrentTeam('team')?.[scope]?.map((wordNid) => [wordNid, ret.getWord(wordNid)]);
        },
        isMySpeech: () => {
            return auth ? auth.login === ret.takeSpeakerLogin() : null;
        },
        takeSpeaker: () => {
            if (speaker) return speaker;
            const memberLogin = ret.takeSpeakerLogin();
            return speaker = players?.find(({ login }) => memberLogin === login);
        },
        takeCurrentTeam: <RetMode extends 'index' | 'team'>(returnMode: RetMode): (RetMode extends 'index' ? number : AliasGameTeam) | null => {
            if (!state || !memberList) return null;

            const member = memberList[state.speakeri || 0];
            return (returnMode === 'index'
                ? state.teams.findIndex((team) => team.members.includes(member))
                : state.teams.find((team) => team.members.includes(member)) ?? null) as never;
        },
        takeSpeakerLogin: () => {
            if (!auth || state?.speakeri == null || !memberList) return null;
            return memberList[state.speakeri];
        },
        takePlayerTids: () => {
            const playerTids: Record<number, GamerRoomMember> = {};

            state?.teams.forEach((team, teami) => {
                team.members.forEach((memberLogin, memberi) => {
                    const member = players?.find(({ login }) => login === memberLogin);
                    if (member)
                        playerTids[+`${teami}.${memberi}`] = member;
                });
            });

            return playerTids;
        },
        strikeWord: (scope: 'cor' | 'inc') => {
            if (!state || !currentRoom) return;

            const teami = ret.takeCurrentTeam('index');
            if (teami === null) return null;

            return sendExec('strikeAliasWord', {
                roomw: currentRoom.w,
                scope,
                teami,
                word: currentWordNid,
            });
        },
        rememberScore: (scoreIncrement: number) => {
            if (state?.speakeri == null) return;
            const teami = ret.takeCurrentTeam('index');

            if (teami === null) return;

            return sendExec('rememberAliasScore', {
                teami,
                scoreIncrement,
            });
        },
        startSpeech: () => {
            if (!currentRoom) return;

            sendExec('startAliasSpeech', {
                roomw: currentRoom.w,
                startTs: Date.now(),
            });
            sendExec('startAliasSpeechTimeout');
        },
        startRound: (isComputeNewTeams: boolean, teamsCount: number, roundTime: number, dream: number, teamsTitles: string[]) => {
            if (!players || !currentRoom) return;

            let teams: AliasGameTeam[] = [];
            let words: AliasWordNid[] = [];
            const teamMembers: GamerRoomMemberLogin[][] = [];
            const sortedPlayers = mylib.randomSort([...players]);
            const speaks = players.reduce<number[]>((acc) => acc.concat(0), []);

            if (!state || state.words.length < 10) {
                aliasWords.forEach((pack, packi) => {
                    pack.words.forEach((level, leveli) => {
                        level?.forEach((word, wordi) => {
                            if (word) {
                                const num = AliasHelp.encodeWordNid(packi, leveli, wordi);
                                if (num !== null) words.push(num);
                            }
                        });
                    });
                });
                mylib.randomSort(words);
            } else words = state.words;

            while (sortedPlayers.length)
                for (let i = 0; i < teamsCount; i++) {
                    if (teamMembers[i] === undefined) teamMembers[i] = [];
                    const member = sortedPlayers.shift();
                    if (member) teamMembers[i].push(member.login);
                }

            mylib.randomSort(teamMembers);

            if (isComputeNewTeams)
                for (let i = 0; i < teamsCount; i++) {
                    teams.push({
                        members: teamMembers[i],
                        messages: [],
                        score: 0,
                        rounds: 0,
                        title: teamsTitles[i],
                    });
                }
            else {
                teams = state?.teams.map(team => {
                    return {
                        ...team,
                        rounds: 0,
                        score: 0,
                        cor: null,
                        inc: null,
                    };
                }) || [];
            }

            const stateArgs: GamerAliasRoomState = {
                teams,
                roundTime,
                speaks,
                speakeri: 0,
                words,
                startTs: 0,
                dream,
            };

            sendExec('startAliasRound', stateArgs as never);
        },
        resetGame: () => sendExec('resetAliasGame'),
    };
    return ret;
}