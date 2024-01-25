import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../shared/store';
import { useCallback } from 'react';
import { bibleStoreActions } from '../Bible.store';
import { useBibleTranslationJoinAddress } from './address/address';
import { useBibleTranslationAddToHistory } from '../complect/archive/history/hooks/history';
import { useBibleAddressBooki } from './address/books';
import { useBibleAddressChapteri } from './address/chapters';
import { useBibleAddressVersei } from './address/verses';

const slideSyncContentUpdatesNumSelector = (state: RootState) => state.bible.translationSlideSyncContentUpdatesNum;

export const useBibleSlideSyncContentUpdatesNum = () => useSelector(slideSyncContentUpdatesNumSelector);

export const useBibleTranslationSlideSyncContentSetter = () => {
  const dispatch = useDispatch();
  const currentBooki = useBibleAddressBooki();
  const currentChapteri = useBibleAddressChapteri();
  const currentVersei = useBibleAddressVersei();
  const currentJoinAddress = useBibleTranslationJoinAddress();
  const addToHistory = useBibleTranslationAddToHistory();

  return useCallback(
    (isAddToHistory = true, isReplaceFirstNearVersei = false) => {
      dispatch(bibleStoreActions.translationSlideSyncContentUpdatesNum());
      if (isAddToHistory)
        addToHistory(currentJoinAddress ?? [currentBooki, currentChapteri, currentVersei], isReplaceFirstNearVersei);
    },
    [addToHistory, currentBooki, currentChapteri, currentJoinAddress, currentVersei, dispatch],
  );
};
