import { useCallback } from 'react';
import { useAtomSet, useAtomValue } from '../../../../../complect/atoms';
import mylib from '../../../../../complect/my-lib/MyLib';
import { BibleBooki, BibleChapteri, BibleTranslationJoinAddress, BibleVersei } from '../../model';
import { bibleMolecule } from '../../molecules';
import { useBibleSingleAddressSetter } from '../../translations/lists/atoms';
import { useBibleTranslationSearchResultSelectedSet } from '../../translations/search/hooks/results';

export const useBibleTranslationAddressIndexesSetter = () => {
  const setJoin = useBibleTranslationJoinAddressSetter();
  const setAddress = useBibleSingleAddressSetter();
  const setResultSelected = useBibleTranslationSearchResultSelectedSet();

  return (
    booki: BibleBooki,
    chapteri: BibleChapteri,
    versei: BibleVersei,
    resultSelectedi?: number,
    onClick?: (booki: BibleBooki, chapteri: BibleChapteri, versei: BibleVersei) => void,
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
    (booki: BibleBooki, chapteri: BibleChapteri, versei: BibleVersei, resultSelectedi?: number) => {
      setAddress(booki, chapteri, versei);

      if (resultSelectedi !== undefined) {
        setResultSelected(resultSelectedi);
        setJoin(null);
      }
    },
    [setAddress, setJoin, setResultSelected],
  );
};

const joinAddressAtom = bibleMolecule.select(s => s.joinAddress);

export const useBibleTranslationJoinAddress = () => useAtomValue(joinAddressAtom);
export const useBibleTranslationJoinAddressSetter = () => useAtomSet(joinAddressAtom);

export const useGetterJoinedAddressMaxValues = () =>
  useCallback((joinAddress: BibleTranslationJoinAddress) => {
    const booki = Math.max(...mylib.keys(joinAddress)) as BibleBooki;
    const chapteri = Math.max(...mylib.keys(joinAddress[booki])) as BibleChapteri;

    return [booki, chapteri, Math.max(...joinAddress[booki][chapteri]) as BibleVersei] as const;
  }, []);
