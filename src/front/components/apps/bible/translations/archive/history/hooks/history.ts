import { useCallback } from 'react';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { useActualRef } from '../../../../../../../complect/useActualRef';
import { useStorageValueGetter } from '../../../../../../../complect/useStorage';
import bibleStorage from '../../../../bibleStorage';
import { justBibleStorageSet, useBibleStorageSet } from '../../../../hooks/storage';
import { BibleTranslationAddress } from '../../../../model';

export const useBibleTranslationHistory = () => useStorageValueGetter(bibleStorage, 'translationHistory', []);

export const useBibleTranslationAddToHistory = () => {
  const bibleValSet = useBibleStorageSet();
  const historyRef = useActualRef(useBibleTranslationHistory());

  return useCallback(
    (item: BibleTranslationAddress, isReplaceFirstNearVersei = false) => {
      const previ = historyRef.current.findIndex(historyItem => mylib.isEq(historyItem, item, true));
      const newHistory = [...historyRef.current];
      if (previ > -1) newHistory.splice(previ, 1);

      if (isReplaceFirstNearVersei && mylib.isArr(newHistory[0])) {
        const [biblei, chapteri, versei] = newHistory[0];
        if (mylib.isEq(item, [biblei, chapteri, versei + 1]) || mylib.isEq(item, [biblei, chapteri, versei - 1])) {
          newHistory.shift();
        }
      }

      newHistory.unshift(item);
      if (newHistory.length > 50) newHistory.length = 50;

      bibleValSet('translationHistory', newHistory);
    },
    [bibleValSet, historyRef],
  );
};

export const useBibleClearTranslationHistorySetter = () => {
  return useCallback(() => justBibleStorageSet('translationHistory', []), []);
};
