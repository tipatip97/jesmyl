import { useSelector } from "react-redux";
import mylib, { MyLib } from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import { GamerRoom, GamerRoomMember, GamerRoomMemberLogin } from "../../Gamer.model";
import { gamerExer } from "../../Gamer.store";
import useGamerRooms from "../../complect/rooms/room/useGamerRooms";
import { AliasGameTeam, AliasWordNid, GamerAliasRoomState } from "./Alias.model";
import { AliasHelp } from "./AliasHelp";
import React, { useContext } from "react";

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

const isIs = (is: unknown) => is;

export const useAliasContextStateMaker = () => {
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
        aliasWords,
        currentWordNid,
        getWordInfo: (nid?: number) => AliasHelp.takeWordInfo(aliasWords, state?.dicts, nid),
        takeCurrentWord: () => ret.getWordInfo(currentWordNid)?.word,
        isMySpeech: () => auth ? auth.login === ret.takeSpeakerLogin() : null,
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
        rememberScore: () => sendExec('computeAliasScore'),
        resetSpeech: () => sendExec('resetAliasSpeech'),
        fixWord: (nid: number) => sendExec('fixAliasWord', { nid }),
        computeScore: () => {
            const corrects = state?.cor.map((wordNid) => ret.getWordInfo(wordNid)!).filter(isIs) || [];
            const incorrects = state?.inc.map((wordNid) => ret.getWordInfo(wordNid)!).filter(isIs) || [];

            const score = !state
                ? 0
                : AliasHelp.computeGameScore(corrects, incorrects, state.fix);

            return {
                score,
                corrects,
                incorrects,
            };
        },
        startSpeech: () => {
            if (!currentRoom) return;

            sendExec('startAliasSpeech', {
                roomw: currentRoom.w,
                startTs: Date.now(),
            });
            sendExec('startAliasSpeechTimeout');
        },
        rejectWord: (nid: number) => state?.cor.concat(state.inc).includes(nid) ? sendExec('rejectAliasWord', { nid }) : null,
        startRound: (props: {
            isComputeNewTeams: boolean,
            isPrevWords: boolean,
            teamsCount: number,
            roundTime: number,
            dream: number,
            dicts: number[],
            teamsTitles: string[]
        }) => {
            if (!players || !currentRoom) return;

            let teams: AliasGameTeam[] = [];
            let words: AliasWordNid[] = [];
            const teamMembers: GamerRoomMemberLogin[][] = [];
            const sortedPlayers = mylib.randomSort([...players]);
            const speaks = players.reduce<number[]>((acc) => acc.concat(0), []);

            if (!props.isPrevWords || !state) {
                aliasWords.forEach((pack, packi) => {
                    const max = props.dicts[packi];
                    if (max === 0) return;

                    MyLib.entries(pack.words).forEach(([word, weight], wordi) => {
                        if (weight > max || word === '' || weight === 0) return;
                        const num = AliasHelp.encodeWordNid(packi, weight, wordi);
                        if (num !== null) words.push(num);
                    });
                });
                mylib.randomSort(words);
            } else words = state.words;

            while (sortedPlayers.length)
                for (let i = 0; i < props.teamsCount; i++) {
                    if (teamMembers[i] === undefined) teamMembers[i] = [];
                    const member = sortedPlayers.shift();
                    if (member) teamMembers[i].push(member.login);
                }

            mylib.randomSort(teamMembers);

            if (props.isComputeNewTeams)
                for (let i = 0; i < props.teamsCount; i++) {
                    teams.push({
                        members: teamMembers[i],
                        messages: [],
                        score: 0,
                        rounds: 0,
                        title: props.teamsTitles[i],
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

            const stateArgs: Partial<GamerAliasRoomState> = {
                teams,
                roundTime: props.roundTime,
                speaks,
                speakeri: 0,
                words,
                startTs: 0,
                dream: props.dream,
                dicts: props.dicts,
            };

            sendExec('startAliasRound', stateArgs as never);
        },
        resetGame: () => sendExec('resetAliasGame'),
    };
    return ret;
}

export const AliasStateContext = React.createContext<ReturnType<typeof useAliasContextStateMaker> | null>(null);
export const useAliasState = () => useContext(AliasStateContext)!;
