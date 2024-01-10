import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../../../shared/store';
import di from '../../../../Cm.store';
import { TranslationScreenConfig } from '../model';
const windows: (Window | nil)[] = [];

const currentTranslationScreenConfigiSelector = (state: RootState) => state.cm.currentTranslationConfigi;
const translationScreenConfigsSelector = (state: RootState) => state.cm.translationScreenConfigs;

export const useSetCurrentConfigi = () => {
  const dispatch = useDispatch();

  return useCallback(
    (configi: number) => {
      dispatch(di.currentTranslationConfigi(configi));
    },
    [dispatch],
  );
};

export const useCmTranslationConfigs = (configi?: number) => {
  const dispatch = useDispatch();
  const currentTranslationConfigi = useSelector(currentTranslationScreenConfigiSelector);
  const configs = useSelector(translationScreenConfigsSelector);

  const currentConfigi = configi ?? currentTranslationConfigi;

  return {
    configs,
    currentConfigi,
    currentConfig: configs[currentConfigi] as TranslationScreenConfig | und,
    windows,
    currWin: windows[currentConfigi],
    updateConfig: useCallback(
      (config: Partial<TranslationScreenConfig> | null, configi = currentConfigi) => {
        const newConfigs = [...configs];
        if (config === null) {
          newConfigs.splice(configi, 1);
          windows[configi]?.close();
          setTimeout(() => windows.splice(configi, 1));
        } else newConfigs[configi] = { ...newConfigs[configi], ...config };
        dispatch(di.translationScreenConfigs(newConfigs));
      },
      [configs, currentConfigi, dispatch],
    ),
  };
};

export type CmTranslationConfigsRef = { current: ReturnType<typeof useCmTranslationConfigs> };
