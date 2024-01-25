import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mylib from '../../../../../../../complect/my-lib/MyLib';
import { useActualRef } from '../../../../../../../complect/useActualRef';
import { RootState } from '../../../../../../../shared/store';
import { bibleStoreActions } from '../../../../Bible.store';
import { BibleTranslationAddress } from '../../../../model';

const historySelector = (state: RootState) => state.bible.translationHistory;

export const useBibleTranslationHistory = () => useSelector(historySelector);

export const useBibleTranslationAddToHistory = () => {
  const dispatch = useDispatch();
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

      dispatch(bibleStoreActions.translationHistory(newHistory));
    },
    [dispatch, historyRef],
  );
};

export const useBibleClearTranslationHistorySetter = () => {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(bibleStoreActions.translationHistory([])), [dispatch]);
};
