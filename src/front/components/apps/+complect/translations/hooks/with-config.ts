import { useCallback } from 'react';
import { useScreenTranslationConfigsSet } from '../molecules';
import { ScreenTranslationConfig } from '../model';
import { useScreenTranslationConfigs } from './configs';

export const useUpdateScreenTranslationConfig = () => {
  const configs = useScreenTranslationConfigs();
  const set = useScreenTranslationConfigsSet();

  return useCallback(
    (configi: number, config: Partial<ScreenTranslationConfig> | null) => {
      const newConfigs = [...configs];

      if (config === null) newConfigs.splice(configi, 1);
      else newConfigs[configi] = { ...newConfigs[configi], ...config };

      set(newConfigs);
    },
    [configs, set],
  );
};
