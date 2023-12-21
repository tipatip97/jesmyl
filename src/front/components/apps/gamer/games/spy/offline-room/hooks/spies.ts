import { useMemo } from 'react';
import { GamerRoomMember } from '../../../../Gamer.model';
import { useGamerOfflineRoomsPlayers } from '../../../../complect/rooms/offline-room/hooks/players';
import { SpyRoomState } from '../../Spy.model';
import { SPY_ROLE, unsecretSpyRole } from '../../hooks/locations';
import { useSpyOfflineCurrentRoomState } from './state';

export const useGamerOfflineCurrentRoomSpiesNaked = () => {
  return useGamerOfflineCurrentRoomSpies(useSpyOfflineCurrentRoomState(), useGamerOfflineRoomsPlayers());
};

const extractLogin = (player: { login: string }) => player.login;

export const useGamerOfflineCurrentRoomSpies = (state: SpyRoomState | und, players: GamerRoomMember[] | und) => {
  return useMemo(() => {
    const roles = state?.roles;

    return roles == null
      ? []
      : players?.filter((player) => unsecretSpyRole(roles[player.login]) === SPY_ROLE).map(extractLogin);
  }, [players, state?.roles]);
};
