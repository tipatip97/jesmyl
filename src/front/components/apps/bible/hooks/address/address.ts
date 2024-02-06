import { useCallback } from 'react';
import { useStorageValueGetter } from '../../../../../complect/useStorage';
import bibleStorage from '../../bibleStorage';
import { BibleTranslationJoinAddress } from '../../model';
import { justBibleStorageSet } from '../storage';

export const useBibleTranslationAddressIndexesSetter = () => {
  const setJoin = useBibleTranslationJoinAddressSetter();

  return useCallback(
    (booki: number, chapteri: number, versei: number, resultSelectedi?: number) => {
      return () => {
        justBibleStorageSet('translationBooki', booki);
        justBibleStorageSet('translationChapteri', chapteri);
        justBibleStorageSet('translationVersei', versei);
        if (resultSelectedi !== undefined) {
          justBibleStorageSet('translationSearchResultSelected', resultSelectedi);
          setJoin(null);
        }
      };
    },
    [setJoin],
  );
};

export const useSetBibleAddressIndexes = () => {
  const setJoin = useBibleTranslationJoinAddressSetter();

  return useCallback(
    (booki: number, chapteri: number, versei: number, resultSelectedi?: number) => {
      justBibleStorageSet('translationBooki', booki);
      justBibleStorageSet('translationChapteri', chapteri);
      justBibleStorageSet('translationVersei', versei);

      if (resultSelectedi !== undefined) {
        justBibleStorageSet('translationSearchResultSelected', resultSelectedi);
        setJoin(null);
      }
    },
    [setJoin],
  );
};

export const useBibleTranslationJoinAddress = () =>
  useStorageValueGetter(bibleStorage, 'translationTranslationJoinAddress', null);
export const useBibleTranslationJoinAddressSetter = () => {
  return useCallback(
    (join: BibleTranslationJoinAddress | null) => justBibleStorageSet('translationTranslationJoinAddress', join),
    [],
  );
};
