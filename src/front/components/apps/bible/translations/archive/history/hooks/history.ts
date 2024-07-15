import { useCallback } from 'react';
import { atom, useAtom, useAtomSet, useAtomValue } from '../../../../../../../complect/atoms';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { useActualRef } from '../../../../../../../complect/useActualRef';
import { BibleTranslationAddress } from '../../../../model';

const historyAtom = atom<BibleTranslationAddress[]>([]);

export const useBibleTranslationHistory = () => useAtomValue(historyAtom);

export const useBibleTranslationAddToHistory = () => {
  const historyRef = useActualRef(useAtom(historyAtom));

  return useCallback(
    (item: BibleTranslationAddress, isReplaceFirstNearVersei = false) => {
      const [history, setHistory] = historyRef.current;

      const previ = history.findIndex(historyItem => mylib.isEq(historyItem, item, true));
      const newHistory = [...history];
      if (previ > -1) newHistory.splice(previ, 1);

      if (isReplaceFirstNearVersei && mylib.isArr(newHistory[0])) {
        const [biblei, chapteri, versei] = newHistory[0];
        if (mylib.isEq(item, [biblei, chapteri, versei + 1]) || mylib.isEq(item, [biblei, chapteri, versei - 1])) {
          newHistory.shift();
        }
      }

      newHistory.unshift(item);
      if (newHistory.length > 50) newHistory.length = 50;

      setHistory(newHistory);
    },
    [historyRef],
  );
};

export const useBibleClearTranslationHistorySetter = () => {
  const set = useAtomSet(historyAtom);

  return useCallback(() => set([]), [set]);
};
