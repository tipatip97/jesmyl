import { useCallback } from 'react';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { useCurrentOfflineRoomUpdater } from '../../../../complect/rooms/offline-room/hooks/actions';
import { useGamerOfflineRoomsPlayers } from '../../../../complect/rooms/offline-room/hooks/players';
import { SpyRoomState } from '../../Spy.model';
import { secretSpyRole, unsecretSpyRole, useSpyActualLocationsNaked } from '../../hooks/locations';
import { useSpyOfflineCurrentRoomState } from './state';
import { useJoinedOfflineGame } from '../../../../molecules';

export default function useSpyOfflineRoomStateUpdaters() {
  const players = useGamerOfflineRoomsPlayers();
  const updateCurrentOfflineRoom = useCurrentOfflineRoomUpdater();
  const joinGame = useJoinedOfflineGame();
  const state = useSpyOfflineCurrentRoomState();
  const actualLocations = useSpyActualLocationsNaked();

  const updateCurrentState = useCallback(
    (updater: (state: SpyRoomState) => SpyRoomState | void | nil) => {
      if (!state) return;
      const newState = updater(state);

      updateCurrentOfflineRoom(room => ({
        ...room,
        games: {
          ...room.games,
          spy: { ...state, ...newState },
        },
      }));
    },
    [state, updateCurrentOfflineRoom],
  );

  const ret = {
    joinGame,
    finishGame: () => {
      updateCurrentState(state => {
        return {
          ...state,
          retired: null,
          roles: null,
        };
      });
    },
    startOfflineGame: (spiesCount: number) => {
      const roles: Record<string, string> = {};
      const location = mylib.randomItem(actualLocations).split('');
      const spies: string[] = [];

      while (players && spies.length < spiesCount) {
        const player = players[mylib.randomOf(0, players.length - 1)];
        if (spies.indexOf(player.login) < 0) spies.push(player.login);
      }

      players?.forEach(player => {
        roles[player.login] = secretSpyRole(spies.indexOf(player.login) < 0 ? location : 'ШПИОН'.split(''));
      });

      updateCurrentOfflineRoom(room => ({
        ...room,
        games: {
          ...room.games,
          spy: {
            ...state,
            iterations: (state?.iterations || 0) + 1,
            roles,
            locations: [...(state?.locations || []), secretSpyRole(location)],
          },
        },
      }));
    },
    switchLocation: (location: string) => {
      state &&
        updateCurrentState(() => {
          return {
            ...state,
            locations:
              state.locations && state.locations?.some(loc => unsecretSpyRole(loc) === location)
                ? state.locations?.filter(loc => unsecretSpyRole(loc) !== location)
                : (state.locations || []).concat(secretSpyRole(location.split(''))),
          };
        });
    },
    excludeMember: useCallback(
      (memberLogin: string) => {
        updateCurrentState(state => {
          return { ...state, retired: [...(state.retired || []), memberLogin] };
        });
      },
      [updateCurrentState],
    ),
  };
  return ret;
}
