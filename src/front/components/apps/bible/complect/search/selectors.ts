import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../shared/store';
import { bibleStoreActions } from '../../Bible.store';
import { BibleSearchZone } from '../../model';

const zoneSelector = (state: RootState) => state.bible.translationSearchZone;
const searchTermSelector = (state: RootState) => state.bible.translationSearchTerm;
const addressTermSelector = (state: RootState) => state.bible.translationAddressTerm;

export const useBibleSearchZone = () => useSelector(zoneSelector);
export const useBibleSearchTerm = () => useSelector(searchTermSelector);
export const useBibleAddressTerm = () => useSelector(addressTermSelector);

export const useBibleTranslationSearchZoneSetter = () => {
  const dispatch = useDispatch();

  return useCallback((zone: BibleSearchZone) => dispatch(bibleStoreActions.translationSearchZone(zone)), [dispatch]);
};

export const useBibleTranslationSearchTermSetter = () => {
  const dispatch = useDispatch();

  return useCallback((term: string) => dispatch(bibleStoreActions.translationSearchTerm(term)), [dispatch]);
};

export const useBibleTranslationAddressTermSetter = () => {
  const dispatch = useDispatch();

  return useCallback(
    (addressTerm: string) => dispatch(bibleStoreActions.translationAddressTerm(addressTerm)),
    [dispatch],
  );
};
