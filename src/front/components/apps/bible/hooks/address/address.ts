import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../shared/store';
import { bibleStoreActions } from '../../Bible.store';
import { BibleTranslationJoinAddress } from '../../model';

export const useBibleTranslationAddressIndexesSetter = () => {
  const dispatch = useDispatch();
  const setJoin = useBibleTranslationJoinAddressSetter();

  return useCallback(
    (booki: number, chapteri: number, versei: number, resultSelectedi?: number) => {
      return () => {
        dispatch(bibleStoreActions.translationBooki(booki));
        dispatch(bibleStoreActions.translationChapteri(chapteri));
        dispatch(bibleStoreActions.translationVersei(versei));
        if (resultSelectedi !== undefined) {
          dispatch(bibleStoreActions.translationSearchResultSelected(resultSelectedi));
          setJoin(null);
        }
      };
    },
    [dispatch, setJoin],
  );
};

export const useSetBibleAddressIndexes = () => {
  const dispatch = useDispatch();
  const setJoin = useBibleTranslationJoinAddressSetter();

  return useCallback(
    (booki: number, chapteri: number, versei: number, resultSelectedi?: number) => {
      dispatch(bibleStoreActions.translationBooki(booki));
      dispatch(bibleStoreActions.translationChapteri(chapteri));
      dispatch(bibleStoreActions.translationVersei(versei));
      if (resultSelectedi !== undefined) {
        dispatch(bibleStoreActions.translationSearchResultSelected(resultSelectedi));
        setJoin(null);
      }
    },
    [dispatch, setJoin],
  );
};

const joinAddressSelector = (state: RootState) => state.bible.translationTranslationJoinAddress;

export const useBibleTranslationJoinAddress = () => useSelector(joinAddressSelector);
export const useBibleTranslationJoinAddressSetter = () => {
  const dispatch = useDispatch();

  return useCallback(
    (join: BibleTranslationJoinAddress | null) => dispatch(bibleStoreActions.translationTranslationJoinAddress(join)),
    [dispatch],
  );
};
