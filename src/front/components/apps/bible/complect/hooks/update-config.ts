import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { bibleStoreActions } from '../../Bible.store';
import { BibleTranslationScreenConfig } from '../model';
import { useBibleScreenTranslationConfigs } from './configs';
import { useScreenTranslationCurrentConfigi } from '../../../+complect/translations/hooks/configs';

export const useUpdateBibleTranslationConfig = () => {
  const dispatch = useDispatch();
  const configs = useBibleScreenTranslationConfigs();

  return useCallback(
    (config: Partial<BibleTranslationScreenConfig> | null, configi: number) => {
      const newConfigs = [...configs];
      if (config === null) {
        newConfigs.splice(configi, 1);
      } else newConfigs[configi] = { ...newConfigs[configi], ...config };
      dispatch(bibleStoreActions.translationScreenConfigs(newConfigs));
    },
    [configs, dispatch],
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
