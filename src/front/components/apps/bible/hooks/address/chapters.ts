import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useActualRef } from '../../../../../complect/useActualRef';
import { RootState } from '../../../../../shared/store';
import { bibleStoreActions } from '../../Bible.store';
import { chapterBooks } from '../texts';
import { useBibleAddressBooki } from './books';

const chapteriSelector = (state: RootState) => state.bible.translationChapteri;

export const useBibleAddressJustChapteriSelect = () => useSelector(chapteriSelector);

export const useBibleAddressChapteri = () => {
  const justChapteri = useBibleAddressJustChapteriSelect();
  const currentBooki = useBibleAddressBooki();

  return justChapteri < 0
    ? 0
    : justChapteri > chapterBooks[currentBooki].length - 1
      ? chapterBooks[currentBooki].length - 1
      : justChapteri;
};

export const useSetBibleAddressChapteri = () => {
  const chapteriRef = useActualRef(useBibleAddressChapteri());
  const dispatch = useDispatch();

  return useCallback(
    (setter: (chapteri: number) => number) =>
      dispatch(bibleStoreActions.translationChapteri(setter(chapteriRef.current))),
    [chapteriRef, dispatch],
  );
};

export const usePutBibleAddressChapteriSetter = () => {
  const dispatch = useDispatch();

  return useCallback((chapteri: number) => () => dispatch(bibleStoreActions.translationChapteri(chapteri)), [dispatch]);
};

export const useBibleAddressChapteriSetter = () => {
  const dispatch = useDispatch();

  return useCallback((chapteri: number) => dispatch(bibleStoreActions.translationChapteri(chapteri)), [dispatch]);
};
