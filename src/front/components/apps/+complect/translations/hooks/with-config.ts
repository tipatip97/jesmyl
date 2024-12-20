import { useCallback } from 'react';
import { ScreenTranslationConfig } from '../model';
import { useScreenTranslationConfigsSet, useScreenTranslationConfigsValue } from '../molecules';

export const useUpdateScreenTranslationConfig = () => {
  const configs = useScreenTranslationConfigsValue();
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
