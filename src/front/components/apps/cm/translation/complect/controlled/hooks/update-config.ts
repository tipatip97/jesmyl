import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useScreenTranslationCurrentConfigi } from '../../../../../+complect/translations/hooks/configs';
import cmStoreActions from '../../../../Cm.store';
import { CmTranslationScreenConfig } from '../model';
import { useCmScreenTranslationConfigs } from './configs';

export const useUpdateCmTranslationConfig = () => {
  const dispatch = useDispatch();
  const configs = useCmScreenTranslationConfigs();

  return useCallback(
    (config: Partial<CmTranslationScreenConfig> | null, configi: number) => {
      const newConfigs = [...configs];
      if (config === null) {
        newConfigs.splice(configi, 1);
      } else newConfigs[configi] = { ...newConfigs[configi], ...config };
      dispatch(cmStoreActions.translationScreenConfigs(newConfigs));
    },
    [configs, dispatch],
  );
};

export const useUpdateCmCurrentTranslationConfig = () => {
  const update = useUpdateCmTranslationConfig();
  const currentConfigi = useScreenTranslationCurrentConfigi();

  return useCallback(
    (config: Partial<CmTranslationScreenConfig> | null) => update(config, currentConfigi),
    [currentConfigi, update],
  );
};
