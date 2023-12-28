import { AliasHelp } from '../AliasHelp';
import { useAliasRoomState } from './state';

export const useAliasComputeScore = () => {
  const state = useAliasRoomState();

  return state ? AliasHelp.computeGameScore(state.cor, state.inc, state.fix) : 0;
};
