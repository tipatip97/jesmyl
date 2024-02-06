import { useCallback } from 'react';
import { useStorageSet, useStorageValueGetter } from '../../../../../complect/useStorage';
import bibleStorage from '../../bibleStorage';
import { justBibleStorageSet } from '../storage';

export const useBibleAddressBooki = () => useStorageValueGetter(bibleStorage, 'translationBooki', 0);
export const justSetBibleBooki = (booki: number) => {
  justBibleStorageSet('translationBooki', booki);
  justBibleStorageSet('translationChapteri', 0);
  justBibleStorageSet('translationVersei', 0);
};

export const usePutBibleBookiSetter = () => {
  const setValue = useStorageSet(bibleStorage);

  return useCallback(
    (booki: number) => {
      return () => {
        setValue('translationBooki', booki);
        setValue('translationChapteri', 0);
        setValue('translationVersei', 0);
      };
    },
    [setValue],
  );
};
