import { useCallback, useMemo } from "react";
import mylib, { MyLib } from "../../../../../../complect/my-lib/MyLib";
import { GamerRoom, GamerRoomMember, GamerRoomMemberLogin } from "../../../Gamer.model";
import { gamerExer } from "../../../Gamer.store";
import { useGamerPlayers } from "../../../complect/rooms/hooks/players";
import { useGamerCurrentRoom } from "../../../complect/rooms/room/hooks/current-room";
import { AliasGameTeam, AliasWordNid, AliasWordsPack, GamerAliasRoomState } from "../Alias.model";
import { AliasHelp } from "../AliasHelp";
import { useAliasCurrentTeamNaked } from "./current-team";
import { useNounsPronouns } from "./nouns-pronouns-lines";
import { useAliasPacks } from "./packs";
import { useAliasRoomState } from "./state";
import { takeAliasCurrentWordNid } from "./word";


const sendExec = (room: GamerRoom | und, action: string, args?: Record<string, unknown>) => {
    if (!room) return;

    return gamerExer.send({
        action,
        args: {
            roomw: room.w,
            ...args,
        },
    });
};

export const useAliasStrikeWord = () => {
    const state = useAliasRoomState();
    const currentRoom = useGamerCurrentRoom();
    const teami = useAliasCurrentTeamNaked('index');

    return useCallback((scope: 'cor' | 'inc') => {
        if (!state || !currentRoom) return;

        if (teami === null) return null;

        return sendExec(currentRoom, 'strikeAliasWord', {
            roomw: currentRoom.w,
            scope,
            teami,
            word: takeAliasCurrentWordNid(state),
        });
    }, [currentRoom, state, teami]);
};

export const useAliasRejectWord = () => {
    const currentRoom = useGamerCurrentRoom();
    const state = useAliasRoomState();

    return useCallback((nid: number) => {
        return state?.cor.concat(state.inc).includes(nid)
            ? sendExec(currentRoom, 'rejectAliasWord', { nid })
            : null
    }, [currentRoom, state?.cor, state?.inc]);
};

export const useAliasStartRoundNaked = () => useAliasStartRound(useAliasRoomState(), useAliasPacks(), useGamerPlayers(useGamerCurrentRoom()));

export const useAliasStartRound = (state: GamerAliasRoomState | und, packs: AliasWordsPack[], players: GamerRoomMember[] | und) => {
    const currentRoom = useGamerCurrentRoom();
    const randomNounProns = useNounsPronouns();

    return useCallback((props: {
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
            const nouns = randomNounProns ? mylib.keys(randomNounProns.nouns) : [];
            const pronouns = randomNounProns ? mylib.keys(randomNounProns.pronouns) : [];

            packs.forEach((pack, packi) => {
                const max = props.dicts[packi];
                if (max === 0 || max === undefined) return;

                if (mylib.isNum(pack.words)) {
                    while (words.length < max) {
                        const nouni = mylib.randomIndex(nouns);
                        const pronouni = mylib.randomIndex(pronouns, -1);

                        const weight = randomNounProns
                            ? randomNounProns.nouns[nouns[nouni]]
                            + randomNounProns.pronouns[pronouns[pronouni]]
                            : 1;

                        const num = AliasHelp.encodeWordNid(pack.words + pronouni, weight > 9 ? 0 : weight, nouni);

                        if (num !== null) words.push(num);
                    }
                    return;
                }

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

        sendExec(currentRoom, 'startAliasRound', stateArgs as never);
    }, [currentRoom, packs, players, randomNounProns, state]);
};


export const useAliasSimpleExecs = () => {
    const currentRoom = useGamerCurrentRoom();

    return useMemo(() => ({
        rememberScore: () => sendExec(currentRoom, 'computeAliasScore'),
        resetSpeech: () => sendExec(currentRoom, 'resetAliasSpeech'),
        fixWord: (nid: number) => sendExec(currentRoom, 'fixAliasWord', { nid }),
        resetGame: () => sendExec(currentRoom, 'resetAliasGame'),
        startSpeech: () => {
            if (!currentRoom) return;

            sendExec(currentRoom, 'startAliasSpeech', {
                roomw: currentRoom.w,
                startTs: Date.now(),
            });
            sendExec(currentRoom, 'startAliasSpeechTimeout');
        },
    }), [currentRoom]);
};
