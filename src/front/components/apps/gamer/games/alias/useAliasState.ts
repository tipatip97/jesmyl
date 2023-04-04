import { useSelector } from "react-redux";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../shared/store";
import useGamerRooms from "../../complect/rooms/room/useGamerRooms";
import { GamerRoomMember, GamerRoomMemberLogin } from "../../Gamer.model";
import { gamerExer } from "../../Gamer.store";
import { AliasGameTeam, AliasMemberTid, AliasWordNid, GamerAliasRoomState } from "./Alias.model";
import { AliasHelp } from "./AliasHelp";

const aliasWordsSelector = (state: RootState) => state.gamer.aliasWords;

export default function useAliasState() {
    const { players, currentRoom, auth, memberPossibilities } = useGamerRooms();
    const state = currentRoom?.games?.alias as GamerAliasRoomState | und;
    const aliasWords = useSelector(aliasWordsSelector);
    let speakerLogin: string;
    let speaker: GamerRoomMember | und;
    const currentWordNid = state?.stack?.[0];

    const ret = {
        currentRoom,
        state,
        auth,
        players,
        memberPossibilities,
        takeCurrentWord: () => {
            const nids = AliasHelp.decodeWordNid(currentWordNid);
            if (!nids) return undefined;
            const [packi, leveli, wordi] = nids;
            return aliasWords?.[packi as never]?.words[leveli as never]?.[wordi as never];
        },
        isMySpeech: () => {
            return auth ? auth.login === ret.takeSpeakerLogin() : null;
        },
        takeSpeaker: () => {
            if (speaker) return speaker;
            const memberLogin = ret.takeSpeakerLogin();
            return speaker = players?.find(({ login }) => memberLogin === login);
        },
        takeSpeakerLogin: () => {
            if (speakerLogin) return speakerLogin;
            if (!auth || !state) return null;
            const memberNids = AliasHelp.decodeMemberNid(state.queue[state.speaker || 0]);
            if (!memberNids) return null;
            const [teami, memberi] = memberNids;
            if (teami === undefined) return null;
            const memberLogin = state.teams[teami as never]?.members[memberi as never];
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
        strikeWord: (stack: 'cor' | 'inc') => {
            if (!state) return;

            const memberNids = AliasHelp.decodeMemberNid(state.queue[state.speaker || 0]);
            if (!memberNids) return null;
            const [teami] = memberNids;

            gamerExer.send({
                action: 'strikeAliasWord',
                args: {
                    roomw: currentRoom?.w,
                    stack,
                    teami: +teami,
                    word: currentWordNid,
                },
            });
        },
        startSpeech: () => {
            const speechTime = Date.now();

            gamerExer.send({
                action: 'startAliasSpeech',
                args: {
                    roomw: currentRoom?.w,
                    speechTime,
                },
            });
        },
        startRound: (teamsCount: number, roundTime: number, teamsTitles?: string[]) => {
            if (!players) return;

            const teams: AliasGameTeam[] = [];
            const queue: AliasMemberTid[] = [];
            const teamMembers: GamerRoomMemberLogin[][] = [];
            const sortedPlayers = mylib.randomSort([...players]);

            const stack: AliasWordNid[] = [];
            aliasWords.forEach((pack, packi) => {
                pack.words.forEach((level, leveli) => {
                    level?.forEach((word, wordi) => {
                        if (word)
                            stack.push(AliasHelp.encodeWordNid(packi, leveli, wordi));
                    });
                });
            });
            mylib.randomSort(stack);

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
                };
                if (teamsTitles) team.title = teamsTitles[i];
                teams.push(team);
            }

            if (players.length % teamsCount === 0) {
                const teamSize = teams[0].members.length;
                for (let memberi = 0; memberi < teamSize; memberi++)
                    for (let teami = 0; teami < teams.length; teami++)
                        queue.push(AliasHelp.encodeMemberNid(teami, memberi));
            }

            gamerExer.send({
                action: 'startAliasRound',
                args: {
                    roomw: currentRoom?.w,
                    teams,
                    roundTime,
                    queue,
                    speaker: 0,
                    stack,
                },
            });
        }
    };
    return ret;
}