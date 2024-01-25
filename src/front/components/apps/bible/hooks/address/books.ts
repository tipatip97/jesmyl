import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActualRef } from '../../../../../complect/useActualRef';
import { RootState } from '../../../../../shared/store';
import { bibleStoreActions } from '../../Bible.store';

const bookiSelector = (state: RootState) => state.bible.translationBooki;

export const useBibleAddressBooki = () => useSelector(bookiSelector);

export const useSetBibleAddressBooki = () => {
  const bookiRef = useActualRef(useBibleAddressBooki());
  const dispatch = useDispatch();

  return useCallback(
    (setter: (booki: number) => number) => dispatch(bibleStoreActions.translationBooki(setter(bookiRef.current))),
    [bookiRef, dispatch],
  );
};

export const usePutBibleAddressBookiSetter = () => {
  const dispatch = useDispatch();

  return useCallback((booki: number) => () => dispatch(bibleStoreActions.translationBooki(booki)), [dispatch]);
};

export const useBibleAddressBookiSetter = () => {
  const dispatch = useDispatch();

  return useCallback((booki: number) => dispatch(bibleStoreActions.translationBooki(booki)), [dispatch]);
};
