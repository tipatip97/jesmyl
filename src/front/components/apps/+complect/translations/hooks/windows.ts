import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { complectActions } from '../../../../../complect/Complect.store';
import { RootState } from '../../../../../shared/store';
import { useScreenTranslationCurrentConfigi } from './configs';

const windows: { readonly wins: readonly (Window | nil)[] } = { wins: [] };

const updatesSelector = (state: RootState) => state.complect.numTranslationsUpdates;

export const useScreenTranslationWindows = () => {
  useSelector(updatesSelector);
  return windows.wins;
};

export const useUpdateScreenTranslationWindows = () => {
  useSelector(updatesSelector);
  const dispatch = useDispatch();

  return useCallback(
    (wins: (Window | nil)[]) => {
      (windows as any).wins = wins;

      dispatch(complectActions.riseUpTranslationUpdates());
    },
    [dispatch],
  );
};

export const useScreenTranslationCurrentWindow = () => windows.wins[useScreenTranslationCurrentConfigi()];
