import { useCallback } from 'react';
import { useCurrentTranslationConfigiValue } from '../atoms';
import { ScreenTranslationConfig } from '../model';
import { useScreenTranslationConfigsSet, useScreenTranslationConfigsValue } from '../molecules';

const defaultConfig: ScreenTranslationConfig = {
  title: 'Трансляция',
  proportion: 1,
};

export const useScreenTranslationConfigs: () => ScreenTranslationConfig[] = () => useScreenTranslationConfigsValue();

export const useMakeScreenTranslationConfigsFillPack = <Config>(configs: Config[], defaultConfig: Config) => {
  return useScreenTranslationConfigsValue().map((_, configi) => {
    return configs[configi] ?? defaultConfig;
  });
};

export const useAddScreenTranslationConfig = () => {
  const configs = useScreenTranslationConfigs();
  const set = useScreenTranslationConfigsSet();

  return useCallback(() => {
    set([...configs, { ...defaultConfig, title: defaultConfig.title + ' №' + (configs.length + 1) }]);

    return configs.length;
  }, [configs, set]);
};

export const useRemoveScreenTranslationConfig = () => {
  const configs = useScreenTranslationConfigs();
  const set = useScreenTranslationConfigsSet();

  return useCallback(
    (configi: number) => {
      set(configs.toSpliced(configi, 1));
    },
    [configs, set],
  );
};

export const useGetScreenTranslationConfig = () => {
  const configs = useScreenTranslationConfigs();
  return useCallback((configi: number): ScreenTranslationConfig | nil => configs[configi], [configs]);
};

export const useScreenTranslationCurrentConfigi: () => number = () => useCurrentTranslationConfigiValue();

export const useScreenTranslationCurrentConfig = (): ScreenTranslationConfig | und =>
  useScreenTranslationConfigs()[useScreenTranslationCurrentConfigi()];
