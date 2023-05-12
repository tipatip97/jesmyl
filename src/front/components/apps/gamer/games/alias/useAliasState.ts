import { useSelector } from "react-redux";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import { GamerRoom, GamerRoomMember, GamerRoomMemberLogin } from "../../Gamer.model";
import { gamerExer } from "../../Gamer.store";
import useGamerRooms from "../../complect/rooms/room/useGamerRooms";
import { AliasGameTeam, AliasMemberTid, AliasWordNid, GamerAliasRoomState } from "./Alias.model";
import { AliasHelp } from "./AliasHelp";

const aliasWordsSelector = (state: RootState) => state.gamer.aliasWords;
const decodeMemberNid = (state: GamerAliasRoomState) => AliasHelp.decodeMemberNid(state.speakers[state.speakeri || 0]);

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
    let speakerLogin: string;
    let speaker: GamerRoomMember | und;
    const currentWordNid = state?.words?.[0];

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
            return ret.takeCurrentTeam()?.[scope]?.map((wordNid) => [wordNid, ret.getWord(wordNid)]);
        },
        isMySpeech: () => {
            return auth ? auth.login === ret.takeSpeakerLogin() : null;
        },
        takeSpeaker: () => {
            if (speaker) return speaker;
            const memberLogin = ret.takeSpeakerLogin();
            return speaker = players?.find(({ login }) => memberLogin === login);
        },
        takeCurrentTeam: () => {
            if (!state) return null;

            const memberNids = AliasHelp.decodeMemberNid(state.speakers[state.speakeri || 0]);
            if (!memberNids) return null;
            const [teami] = memberNids;

            return state.teams[teami] ?? null;
        },
        takeSpeakerLogin: () => {
            if (speakerLogin) return speakerLogin;
            if (!auth || !state) return null;
            const memberNids = decodeMemberNid(state);
            if (!memberNids) return null;
            const [teami, memberi] = memberNids;
            if (teami === undefined) return null;
            const memberLogin = state.teams?.[teami as never]?.members?.[memberi as never];
            if (!memberLogin) return null;
            return speakerLogin = memberLogin;
        },
        takePlayerTids: () => {
            const playerTids: Record<AliasMemberTid, GamerRoomMember> = {};

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
            if (!state) return;

            const memberNids = AliasHelp.decodeMemberNid(state.speakers[state.speakeri || 0]);
            if (!memberNids) return null;
            const [teami] = memberNids;

            return sendExec('strikeAliasWord', {
                roomw: currentRoom?.w,
                scope,
                teami: +teami,
                word: currentWordNid,
            });
        },
        onSpeechFinish: () => sendExec('finishAliasSpeech'),
        rememberScore: (scoreIncrement: number) => {
            if (state?.speakeri == null) return;
            const memberNids = decodeMemberNid(state);

            if (!memberNids) return;

            const [teami] = memberNids;

            return sendExec('rememberAliasScore', {
                nextSpeakeri: mylib.nextCircularIndex(state.speakeri, state.speakers),
                teami,
                scoreIncrement,
            });
        },
        startSpeech: () => {
            if (!currentRoom)
                return;

            sendExec('startAliasSpeech', {
                roomw: currentRoom.w,
                startTs: Date.now(),
            });
        },
        startRound: (teamsCount: number, roundTime: number, teamsTitles?: string[]) => {
            if (!players || !currentRoom) return;

            const teams: AliasGameTeam[] = [];
            const speakers: AliasMemberTid[] = [];
            const teamMembers: GamerRoomMemberLogin[][] = [];
            const sortedPlayers = mylib.randomSort([...players]);

            const words: AliasWordNid[] = [];
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

            while (sortedPlayers.length)
                for (let i = 0; i < teamsCount; i++) {
                    if (teamMembers[i] === undefined) teamMembers[i] = [];
                    const member = sortedPlayers.shift();
                    if (member) teamMembers[i].push(member.login);
                }

            mylib.randomSort(teamMembers);

            for (let i = 0; i < teamsCount; i++) {
                const team: AliasGameTeam = {
                    members: teamMembers[i],
                    messages: [],
                    score: 0,
                };
                if (teamsTitles) team.title = teamsTitles[i];
                teams.push(team);
            }

            if (players.length % teamsCount === 0) {
                const teamSize = teams[0].members.length;
                for (let memberi = 0; memberi < teamSize; memberi++)
                    for (let teami = 0; teami < teams.length; teami++) {
                        const speaker = AliasHelp.encodeMemberNid(teami, memberi);
                        if (speaker !== null) speakers.push(speaker);
                    }
            }

            const stateArgs: GamerAliasRoomState = {
                teams,
                roundTime,
                speakers,
                speakeri: 0,
                words,
                startTs: 0,
            };

            sendExec('startAliasRound', stateArgs as never);
        }
    };
    return ret;
}