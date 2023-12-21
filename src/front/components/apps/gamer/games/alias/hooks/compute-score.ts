import { useMemo } from 'react';
import { AliasHelp } from '../AliasHelp';
import { useAliasRoomState } from './state';
import { useAliasWordInfo } from './word';

const isIs = (is: unknown) => is;

export const useAliasComputeScore = () => {
  const state = useAliasRoomState();
  const getWordInfo = useAliasWordInfo();

  const corrects = useMemo(() => {
    return state?.cor.map(wordi => getWordInfo(wordi)!).filter(isIs) || [];
  }, [getWordInfo, state?.cor]);

  const incorrects = useMemo(() => {
    return state?.inc.map(wordi => getWordInfo(wordi)!).filter(isIs) || [];
  }, [getWordInfo, state?.inc]);

  return {
    score: state ? AliasHelp.computeGameScore(corrects, incorrects, state.fix) : 0,
    corrects,
    incorrects,
  };
};
