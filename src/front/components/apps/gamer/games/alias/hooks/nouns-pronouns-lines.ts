import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import mylib from '../../../../../../complect/my-lib/MyLib';
import { RootState } from '../../../../../../shared/store';

const selector = (state: RootState) => state.index.nounPronsWords;

export const useNounsPronouns = () => useSelector(selector);

export const useNounsPronounsLines = () => {
  const randomNounProns = useNounsPronouns();

  return useMemo(() => {
    return {
      pronouns: randomNounProns?.pronouns ? mylib.keys(randomNounProns.pronouns) : [],
      nouns: randomNounProns?.nouns ? mylib.keys(randomNounProns.nouns) : [],
    };
  }, [randomNounProns]);
};
