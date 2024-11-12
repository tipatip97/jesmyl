import { useMemo } from 'react';
import { useAliasRoomState } from './state';
import { GamerAliasRoomState } from 'shared/api';

const initialMemberList: string[] = [];

export const useAliasMemberListNaked = () => useAliasMemberList(useAliasRoomState());

export const useAliasMemberList = (state: GamerAliasRoomState | und) => {
  return useMemo(() => {
    return state?.teams.reduce((list, team) => list.concat(team.members), initialMemberList);
  }, [state?.teams]);
};
