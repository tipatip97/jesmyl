import { useCallback } from 'react';
import { useScreenTranslationCurrentConfigi } from '../../../+complect/translations/hooks/configs';
import { useAtomSet } from '../../../../../complect/atoms';
import { bibleMolecule } from '../../molecules';
import { BibleTranslationScreenConfig } from '../model';
import { useBibleScreenTranslationConfigs } from './configs';

const translationScreenConfigsAtom = bibleMolecule.select(s => s.translationScreenConfigs);

export const useUpdateBibleTranslationConfig = () => {
  const configs: BibleTranslationScreenConfig[] = useBibleScreenTranslationConfigs();
  const setConfigs = useAtomSet(translationScreenConfigsAtom);

  return useCallback(
    (config: Partial<BibleTranslationScreenConfig> | null, configi: number) => {
      const newConfigs = [...configs];
      if (config === null) {
        newConfigs.splice(configi, 1);
      } else newConfigs[configi] = { ...newConfigs[configi], ...config };
      setConfigs(newConfigs);
    },
    [configs, setConfigs],
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
