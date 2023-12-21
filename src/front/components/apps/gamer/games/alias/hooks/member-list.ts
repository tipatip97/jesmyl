import { useMemo } from 'react';
import { GamerAliasRoomState } from '../Alias.model';
import { useAliasRoomState } from './state';

const initialMemberList: string[] = [];

export const useAliasMemberListNaked = () => useAliasMemberList(useAliasRoomState());

export const useAliasMemberList = (state: GamerAliasRoomState | und) => {
  return useMemo(() => {
    return state?.teams.reduce((list, team) => list.concat(team.members), initialMemberList);
  }, [state?.teams]);
};
