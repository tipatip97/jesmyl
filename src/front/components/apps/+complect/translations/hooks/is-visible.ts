import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { complectActions } from '../../../../../complect/Complect.store';
import { RootState } from '../../../../../shared/store';

const isTranslationTextVisibleSelector = (state: RootState) => state.complect.isTranslationTextVisible;

export const useIsScreenTranslationTextVisible = () => useSelector(isTranslationTextVisibleSelector);

export const useSwitchIsScreenTranslationTextVisible = () => {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(complectActions.isTranslationTextVisible()), [dispatch]);
};
