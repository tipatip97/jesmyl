import { useCallback } from 'react';
import { useStorageValueGetter } from '../../../../../complect/useStorage';
import bibleStorage from '../../bibleStorage';
import { useBibleTranslatesContext } from '../../translates/TranslatesContext';
import { useBibleShowTranslates } from '../../translates/hooks';
import { useBibleTranslationSlideSyncContentSetter } from '../slide-sync';
import { justBibleStorageSet } from '../storage';
import { useBibleTranslationJoinAddress, useBibleTranslationJoinAddressSetter } from './address';
import { useBibleAddressBooki } from './books';
import { useBibleAddressChapteri } from './chapters';

const useBibleAddressCurrentVersei = () => useStorageValueGetter(bibleStorage, 'translationVersei', 0);

export const useBibleAddressIsCurrentVersei = (versei: number) => {
  const joinAddress = useBibleTranslationJoinAddress();
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVersei = useBibleAddressVersei();
  return joinAddress === null
    ? currentVersei === versei
    : joinAddress?.[currentBooki]?.[currentChapteri].includes(versei) ?? false;
};

export const useBibleAddressVersei = () => {
  const currentChapteri = useBibleAddressChapteri();
  const currentBooki = useBibleAddressBooki();
  const currentVersei = useBibleAddressCurrentVersei();
  const showTranslates = useBibleShowTranslates();
  const chapter = useBibleTranslatesContext()[showTranslates[0]]?.chapters?.[currentBooki]?.[currentChapteri];

  return currentVersei < 0
    ? 0
    : chapter != null && currentVersei > chapter.length - 1
      ? chapter.length - 1
      : currentVersei;
};

export const usePutBibleAddressVerseiSetter = () => {
  const currentChapteri = useBibleAddressChapteri();
  const currentBooki = useBibleAddressBooki();
  const currentJoinAddress = useBibleTranslationJoinAddress();
  const syncSlide = useBibleTranslationSlideSyncContentSetter();
  const setJoin = useBibleTranslationJoinAddressSetter();

  return useCallback(
    (versei: number, isDblClick: boolean): (() => void) | null => {
      if (isDblClick) syncSlide();
      else setJoin(null);

      justBibleStorageSet('translationVersei', versei);

      return () => {
        if (currentJoinAddress?.[currentBooki]?.[currentChapteri]?.includes(versei)) {
          setJoin(currentJoinAddress);
        }
      };
    },
    [currentBooki, currentChapteri, currentJoinAddress, setJoin, syncSlide],
  );
};

export const usePutBibleJoinAddressSetter = () => {};
