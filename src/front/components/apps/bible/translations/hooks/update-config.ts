import { useCallback } from 'react';
import { useScreenTranslationCurrentConfigi } from '../../../+complect/translations/hooks/configs';
import { justBibleStorageSet } from '../../hooks/storage';
import { BibleTranslationScreenConfig } from '../model';
import { useBibleScreenTranslationConfigs } from './configs';

export const useUpdateBibleTranslationConfig = () => {
  const configs: BibleTranslationScreenConfig[] = useBibleScreenTranslationConfigs();

  return useCallback(
    (config: Partial<BibleTranslationScreenConfig> | null, configi: number) => {
      const newConfigs = [...configs];
      if (config === null) {
        newConfigs.splice(configi, 1);
      } else newConfigs[configi] = { ...newConfigs[configi], ...config };
      justBibleStorageSet('translationScreenConfigs', newConfigs);
    },
    [configs],
  );
};

export const useUpdateBibleCurrentTranslationConfig = () => {
  const update = useUpdateBibleTranslationConfig();
  const currentConfigi = useScreenTranslationCurrentConfigi();

  return useCallback(
    (config: Partial<BibleTranslationScreenConfig> | null) => update(config, currentConfigi),
    [currentConfigi, update],
  );
};
