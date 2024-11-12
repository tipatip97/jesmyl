import { AliasCleans } from 'shared/api';
import { useAliasRoomState } from './state';

export const useAliasComputeScore = () => {
  const state = useAliasRoomState();

  return state ? AliasCleans.computeGameScore(state.cor, state.inc, state.fix) : 0;
};
