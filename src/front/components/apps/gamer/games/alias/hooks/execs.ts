import { mylib } from 'front/utils';
import { useCallback, useMemo } from 'react';
import { AliasGameTeam, GamerAliasRoomState, StartAliasRoundProps } from 'shared/api';
import { useGamerPlayers } from '../../../complect/rooms/hooks/players';
import { useGamerCurrentRoom } from '../../../complect/rooms/room/hooks/current-room';
import { GamerRoom, GamerRoomMember, GamerRoomMemberLogin } from '../../../Gamer.model';
import { gamerExer } from '../../../gamerExer';
import { useAliasCurrentTeamNaked } from './current-team';
import { useAliasRoomState } from './state';

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

  return useCallback(
    (scope: 'cor' | 'inc') => {
      if (!state || !currentRoom || !state.winfo) return;

      if (teami === null) return null;

      return sendExec(currentRoom, 'strikeAliasWord', {
        roomw: currentRoom.w,
        scope,
      });
    },
    [currentRoom, state, teami],
  );
};

export const useAliasRejectWord = () => {
  const currentRoom = useGamerCurrentRoom();
  const state = useAliasRoomState();

  return useCallback(
    (wordi: number) => {
      return state?.cor.concat(state.inc).some(winfo => winfo.wordi === wordi)
        ? sendExec(currentRoom, 'invertAliasWord', { wordi })
        : null;
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
      const sortedPlayers = mylib.toRandomSorted([...players]);

      while (sortedPlayers.length)
        for (let i = 0; i < props.teamsCount; i++) {
          if (teamMembers[i] === undefined) teamMembers[i] = [];
          const member = sortedPlayers.shift();
          if (member) teamMembers[i].push(member.login);
        }

      mylib.toRandomSorted(teamMembers);

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
          state?.teams.map(team => {
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
        });
        sendExec(currentRoom, 'startAliasSpeechTimeout');
      },
    }),
    [currentRoom],
  );
};

export const toStopAliasGame = (currentRoom: GamerRoom | und) => sendExec(currentRoom, 'resetAliasGame');
