import { useMemo } from 'react';
import { itIt } from 'shared/utils';
import { GamerRoomMember } from '../../../Gamer.model';
import { useGamerRoomPlayers } from '../../../complect/rooms/room/hooks/players';
import { SpyRoomState } from '../Spy.model';
import { SPY_ROLE, unsecretSpyRole } from './locations';
import { useSpyRoomStateNaked } from './state';

export const useSpyCurrentLocationNaked = () => useSpyCurrentLocation(useSpyRoomStateNaked(), useGamerRoomPlayers());

export const useSpyCurrentLocation = (state: SpyRoomState | und, players: GamerRoomMember[] | und) => {
  return useMemo(() => {
    const roles = state?.roles;

    return roles == null
      ? ''
      : players
          ?.map(player => {
            const location = unsecretSpyRole(roles[player.login] || '');
            return location === SPY_ROLE ? null : location;
          })
          .find(itIt);
  }, [players, state?.roles]);
};
