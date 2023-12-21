import { useMemo } from 'react';
import { AliasGameTeam, GamerAliasRoomState } from '../Alias.model';
import { useAliasMemberList } from './member-list';
import { useAliasRoomState } from './state';

export const useAliasCurrentTeam = <RetMode extends 'index' | 'team'>(
  returnMode: RetMode,
  state: GamerAliasRoomState | und,
  memberList: string[] | und,
): (RetMode extends 'index' ? number : AliasGameTeam) | null => {
  return useMemo(() => {
    if (!state || !memberList) return null;

    const member = memberList[state.speakeri || 0];
    return (
      returnMode === 'index'
        ? state.teams.findIndex((team) => team.members.includes(member))
        : state.teams.find((team) => team.members.includes(member)) ?? null
    ) as never;
  }, [memberList, returnMode, state]);
};

export const useAliasCurrentTeamNaked = <RetMode extends 'index' | 'team'>(returnMode: RetMode) => {
  const state = useAliasRoomState();
  return useAliasCurrentTeam(returnMode, state, useAliasMemberList(state));
};
