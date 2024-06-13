import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { complectActions } from '../../../../../complect/Complect.store';
import { RootState } from '../../../../../shared/store';
import { TranslationViewApp } from '../Translations.model';

const currentTranslationTextAppSelector = (state: RootState) => state.complect.currentTranslationTextApp;

export const useCurrentTranslationTextApp = (): TranslationViewApp => useSelector(currentTranslationTextAppSelector);

export const useSwitchCurrentTranslationTextApp = () => {
  const dispatch = useDispatch();
  const app = useCurrentTranslationTextApp();

  return useCallback(
    (setApp?: TranslationViewApp) => {
      dispatch(complectActions.currentTranslationTextApp(setApp ?? (app === 'cm' ? 'bible' : 'cm')));
    },
    [app, dispatch],
  );
};
