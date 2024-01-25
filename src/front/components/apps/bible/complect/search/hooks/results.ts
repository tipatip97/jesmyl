import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../shared/store';
import { bibleStoreActions } from '../../../Bible.store';
import { BibleTranslationSingleAddress } from '../../../model';

const resultListSelector = (state: RootState) => state.bible.translationSearchResultList;
const resultSelectedSelector = (state: RootState) => state.bible.translationSearchResultSelected;

export const useBibleTranslationSearchResultList = () => useSelector(resultListSelector);
export const useBibleTranslationSearchResultSelected = () => useSelector(resultSelectedSelector);

export const useBibleTranslationSearchResultListSetter = () => {
  const dispatch = useDispatch();

  return useCallback(
    (list: BibleTranslationSingleAddress[]) => dispatch(bibleStoreActions.translationSearchResultList(list)),
    [dispatch],
  );
};

export const useBibleTranslationSearchResultSelectedSetter = () => {
  const dispatch = useDispatch();

  return useCallback(
    (itemi: number | null) => dispatch(bibleStoreActions.translationSearchResultSelected(itemi)),
    [dispatch],
  );
};
