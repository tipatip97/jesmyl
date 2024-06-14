import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { complectActions } from '../../../../../complect/Complect.store';
import { RootState } from '../../../../../shared/store';
import { ScreenTranslationConfig } from '../model';

const defaultConfig: ScreenTranslationConfig = {
  title: 'Трансляция',
  proportion: 1,
};

const configsSelector = (state: RootState) => state.complect.screenTranslationConfigs;

export const useScreenTranslationConfigs: () => ScreenTranslationConfig[] = () => useSelector(configsSelector);

export const useMakeScreenTranslationConfigsFillPack = <Config>(configs: Config[], defaultConfig: Config) => {
  return useSelector(configsSelector).map((_, configi) => {
    return configs[configi] ?? defaultConfig;
  });
};

const currentConfigiSelector = (state: RootState) => state.complect.currentTranslationConfigi;

export const useAddScreenTranslationConfig = () => {
  const configs = useScreenTranslationConfigs();
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(
      complectActions.screenTranslationConfigs([
        ...configs,
        { ...defaultConfig, title: defaultConfig.title + ' №' + (configs.length + 1) },
      ]),
    );
    return configs.length;
  }, [configs, dispatch]);
};

export const useRemoveScreenTranslationConfig = () => {
  const configs = useScreenTranslationConfigs();
  const dispatch = useDispatch();

  return useCallback(
    (configi: number) => {
      dispatch(complectActions.screenTranslationConfigs(configs.toSpliced(configi, 1)));
    },
    [configs, dispatch],
  );
};

export const useGetScreenTranslationConfig = () => {
  const configs = useScreenTranslationConfigs();
  return useCallback((configi: number): ScreenTranslationConfig | nil => configs[configi], [configs]);
};

export const useScreenTranslationCurrentConfigi = () => useSelector(currentConfigiSelector);

export const useScreenTranslationCurrentConfig = (): ScreenTranslationConfig | und =>
  useScreenTranslationConfigs()[useScreenTranslationCurrentConfigi()];
