import { useCallback } from 'react';
import { useSwitchIsScreenTranslationTextVisible } from '../../+complect/translations/hooks/is-visible';
import { useActualRef } from '../../../../complect/useActualRef';
import { useStorageValueGetter } from '../../../../complect/useStorage';
import bibleStorage from '../bibleStorage';
import { useBibleTranslationAddToHistory } from '../translations/archive/history/hooks/history';
import { useBibleTranslationJoinAddress } from './address/address';
import { useBibleAddressBooki } from './address/books';
import { useBibleAddressChapteri } from './address/chapters';
import { useBibleAddressVersei } from './address/verses';
import { justBibleStorageSet } from './storage';

export const useBibleSlideSyncContentUpdatesNum = () =>
  useStorageValueGetter(bibleStorage, 'translationSlideSyncContentUpdatesNum', 0);

const ink = (num: number) => num + 1;

export const useBibleTranslationSlideSyncContentSetter = () => {
  const currentBookiRef = useActualRef(useBibleAddressBooki());
  const currentChapteriRef = useActualRef(useBibleAddressChapteri());
  const currentVerseiRef = useActualRef(useBibleAddressVersei());
  const currentJoinAddress = useBibleTranslationJoinAddress();
  const addToHistory = useBibleTranslationAddToHistory();
  const switchIsVisible = useSwitchIsScreenTranslationTextVisible();

  return useCallback(
    (isReplaceFirstNearVersei = false) => {
      justBibleStorageSet('translationSlideSyncContentUpdatesNum', ink);
      switchIsVisible(true);

      setTimeout(() => {
        addToHistory(
          currentJoinAddress ?? [currentBookiRef.current, currentChapteriRef.current, currentVerseiRef.current],
          isReplaceFirstNearVersei,
        );
      });
    },
    [addToHistory, currentBookiRef, currentChapteriRef, currentJoinAddress, currentVerseiRef, switchIsVisible],
  );
};
