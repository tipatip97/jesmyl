import { GamerAliasRoomState } from '../Alias.model';
import { useAliasRoomState } from './state';
import { useTokenSortedWordsNaked } from './token-sorted-words';

export const useAliasCurrentWordInfoNaked = () => useAliasCurrentWordInfo(useAliasRoomState());

export const useAliasCurrentWordInfo = (state: GamerAliasRoomState | und) => {
  return useTokenSortedWordsNaked()[state?.wordsi || 0];
};

export const useAliasWordInfo = () => {
  const wordInfos = useTokenSortedWordsNaked();
  return (wordi: number) => wordInfos[wordi];
};
