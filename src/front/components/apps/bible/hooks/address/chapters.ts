import { useCallback } from 'react';
import { useStorageSet, useStorageValueGetter } from '../../../../../complect/useStorage';
import bibleStorage from '../../bibleStorage';
import { useBibleChaptersCombine } from '../texts';
import { useBibleAddressBooki } from './books';

export const useBibleAddressChapteri = () => {
  const justChapteri = useStorageValueGetter(bibleStorage, 'translationChapteri', 0);
  const currentBooki = useBibleAddressBooki();
  const { chapters } = useBibleChaptersCombine();

  return justChapteri < 0
    ? 0
    : chapters?.[currentBooki] !== undefined && justChapteri > chapters[currentBooki].length - 1
      ? chapters[currentBooki].length - 1
      : justChapteri;
};

export const usePutBibleChapteriSetter = () => {
  const setValue = useStorageSet(bibleStorage);

  return useCallback(
    (chapteri: number) => {
      return () => {
        setValue('translationChapteri', chapteri);
        setValue('translationVersei', 0);
      };
    },
    [setValue],
  );
};
