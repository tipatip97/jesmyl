import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { complectActions } from '../../../../../complect/Complect.store';
import { RootState } from '../../../../../shared/store';

const currentTranslationTextAppSelector = (state: RootState) => state.complect.currentTranslationTextApp;

export const useCurrentTranslationTextApp = () => useSelector(currentTranslationTextAppSelector);

export const useSwitchCurrentTranslationTextApp = () => {
  const dispatch = useDispatch();
  const app = useCurrentTranslationTextApp();

  return useCallback(() => {
    dispatch(complectActions.currentTranslationTextApp(app === 'cm' ? 'bible' : 'cm'));
  }, [app, dispatch]);
};
