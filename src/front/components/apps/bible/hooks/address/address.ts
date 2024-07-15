import { useCallback } from 'react';
import { atom, useAtomSet, useAtomValue } from '../../../../../complect/atoms';
import { BibleTranslationJoinAddress } from '../../model';
import { useBibleSingleAddressSetter } from '../../translations/lists/atoms';
import { useBibleTranslationSearchResultSelectedSet } from '../../translations/search/hooks/results';

export const useBibleTranslationAddressIndexesSetter = () => {
  const setJoin = useBibleTranslationJoinAddressSetter();
  const setAddress = useBibleSingleAddressSetter();
  const setResultSelected = useBibleTranslationSearchResultSelectedSet();

  return (
    booki: number,
    chapteri: number,
    versei: number,
    resultSelectedi?: number,
    onClick?: (booki: number, chapteri: number, versei: number) => void,
  ) => {
    return () => {
      setAddress(booki, chapteri, versei);
      if (resultSelectedi !== undefined) {
        setResultSelected(resultSelectedi);
        setJoin(null);
      }

      onClick?.(booki, chapteri, versei);
    };
  };
};

export const useSetBibleAddressIndexes = () => {
  const setJoin = useBibleTranslationJoinAddressSetter();
  const setAddress = useBibleSingleAddressSetter();
  const setResultSelected = useBibleTranslationSearchResultSelectedSet();

  return useCallback(
    (booki: number, chapteri: number, versei: number, resultSelectedi?: number) => {
      setAddress(booki, chapteri, versei);

      if (resultSelectedi !== undefined) {
        setResultSelected(resultSelectedi);
        setJoin(null);
      }
    },
    [setAddress, setJoin, setResultSelected],
  );
};

const joinAddressAtom = atom<BibleTranslationJoinAddress | null>(null);

export const useBibleTranslationJoinAddress = () => useAtomValue(joinAddressAtom);

export const useBibleTranslationJoinAddressSetter = () => {
  const setAddress = useAtomSet(joinAddressAtom);

  return useCallback((join: BibleTranslationJoinAddress | null) => setAddress(join), [setAddress]);
};
