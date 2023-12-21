import { useCallback, useMemo } from 'react';
import mylib from '../../../../../../complect/my-lib/MyLib';
import { GamerRoom, GamerRoomMember, GamerRoomMemberLogin } from '../../../Gamer.model';
import { gamerExer } from '../../../Gamer.store';
import { useGamerPlayers } from '../../../complect/rooms/hooks/players';
import { useGamerCurrentRoom } from '../../../complect/rooms/room/hooks/current-room';
import { AliasGameTeam, GamerAliasRoomState, StartAliasRoundProps } from '../Alias.model';
import { useAliasCurrentTeamNaked } from './current-team';
import { useAliasRoomState } from './state';
import { useAliasCurrentWordInfo } from './word';

const sendExec = (room: GamerRoom | und, action: string, args?: {}) => {
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
  const wordInfo = useAliasCurrentWordInfo(state);

  return useCallback(
    (scope: 'cor' | 'inc') => {
      if (!state || !currentRoom) return;

      if (teami === null) return null;

      return sendExec(currentRoom, 'strikeAliasWord', {
        roomw: currentRoom.w,
        scope,
        teami,
        word: wordInfo.word,
      });
    },
    [currentRoom, state, teami, wordInfo.word],
  );
};

export const useAliasRejectWord = () => {
  const currentRoom = useGamerCurrentRoom();
  const state = useAliasRoomState();

  return useCallback(
    (wordi: number) => {
      return state?.cor.merge(state.inc).includes(wordi) ? sendExec(currentRoom, 'rejectAliasWord', { wordi }) : null;
    },
    [currentRoom, state?.cor, state?.inc],
  );
};

export const useAliasStartRoundNaked = () =>
  useAliasStartRound(useAliasRoomState(), useGamerPlayers(useGamerCurrentRoom()));

export interface AliasNewRoundState {
  isComputeNewTeams: boolean;
  isResortWords: boolean;
  teamsCount: number;
  roundTime: number;
  dream: number;
  dicts: number[];
  teamsTitles: string[];
}

export const useAliasStartRound = (state: GamerAliasRoomState | und, players: GamerRoomMember[] | und) => {
  const currentRoom = useGamerCurrentRoom();

  return useCallback(
    (props: AliasNewRoundState) => {
      if (!players || !currentRoom) return;

      let teams: AliasGameTeam[] = [];
      const teamMembers: GamerRoomMemberLogin[][] = [];
      const sortedPlayers = mylib.randomSort([...players]);

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
        teams =
          state?.teams.map((team) => {
            return {
              ...team,
              rounds: 0,
              score: 0,
              cor: null,
              inc: null,
            };
          }) || [];
      }

      const startProps: StartAliasRoundProps = {
        teams,
        roundTime: props.roundTime,
        dream: props.dream,
        dicts: props.dicts,
        isResortWords: props.isResortWords,
      };

      sendExec(currentRoom, 'startAliasRound', startProps);
    },
    [currentRoom, players, state],
  );
};

export const useAliasSimpleExecs = () => {
  const currentRoom = useGamerCurrentRoom();

  return useMemo(
    () => ({
      rememberScore: () => sendExec(currentRoom, 'computeAliasScore'),
      skipTheMemberTurn: () => sendExec(currentRoom, 'skipTheMemberTurn'),
      resetSpeech: () => sendExec(currentRoom, 'resetAliasSpeech'),
      fixWord: (wordi: number) => sendExec(currentRoom, 'fixAliasWord', { wordi }),
      startSpeech: () => {
        if (!currentRoom) return;

        sendExec(currentRoom, 'startAliasSpeech', {
          roomw: currentRoom.w,
          startTs: Date.now(),
        });
        sendExec(currentRoom, 'startAliasSpeechTimeout');
      },
    }),
    [currentRoom],
  );
};

export const toStopAliasGame = (currentRoom: GamerRoom | und) => sendExec(currentRoom, 'resetAliasGame');
