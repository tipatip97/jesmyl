import { ScreenTranslationBackgroundConfigs } from '../model';

export const useScreenTranslationBackgroundStyles = (config: ScreenTranslationBackgroundConfigs | und) => {
  return config !== undefined && config.isWithBackground ? config.background || config.backgroundColor : undefined;
};
