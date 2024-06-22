import { useCallback } from 'react';
import { useStorageSet, useStorageValueGetter } from '../../../../../complect/useStorage';
import bibleStorage from '../../bibleStorage';
import { useBibleTranslatesContext } from '../../translates/TranslatesContext';
import { useBibleShowTranslates } from '../../translates/hooks';
import { useBibleAddressBooki } from './books';

export const useBibleAddressChapteri = () => {
  const justChapteri = useStorageValueGetter(bibleStorage, 'translationChapteri', 0);
  const currentBooki = useBibleAddressBooki();
  const showTranslates = useBibleShowTranslates();
  const chapter = useBibleTranslatesContext()[showTranslates[0]]?.chapters?.[currentBooki];

  return justChapteri < 0
    ? 0
    : chapter != null && justChapteri > chapter.length - 1
      ? chapter.length - 1
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
