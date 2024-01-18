import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import di from '../../../../../complect/Complect.store';
import { ScreenTranslationConfig } from '../model';
import { useScreenTranslationConfigs } from './configs';

export const useUpdateScreenTranslationConfig = () => {
  const configs = useScreenTranslationConfigs();
  const dispatch = useDispatch();

  return useCallback(
    (configi: number, config: Partial<ScreenTranslationConfig> | null) => {
      const newConfigs = [...configs];

      if (config === null) newConfigs.splice(configi, 1);
      else newConfigs[configi] = { ...newConfigs[configi], ...config };

      dispatch(di.screenTranslationConfigs(newConfigs));
    },
    [configs, dispatch],
  );
};

export const useSetScreenTranslationCurrentConfigi = () => {
  const dispatch = useDispatch();

  return useCallback((configi: number) => dispatch(di.currentTranslationConfigi(configi)), [dispatch]);
};
