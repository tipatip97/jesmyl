import { mylib } from 'front/utils';
import { useMemo } from 'react';
import { useIndexNounPronsWords } from '../../../../../index/molecules';

export const useNounsPronounsLines = () => {
  const randomNounProns = useIndexNounPronsWords();

  return useMemo(() => {
    return {
      pronouns: randomNounProns?.pronouns ? mylib.keys(randomNounProns.pronouns) : [],
      nouns: randomNounProns?.nouns ? mylib.keys(randomNounProns.nouns) : [],
    };
  }, [randomNounProns]);
};
