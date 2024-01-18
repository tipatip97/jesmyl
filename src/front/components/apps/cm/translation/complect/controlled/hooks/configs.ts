import { useSelector } from 'react-redux';
import {
  defaultScreenTranslationBackgroundConfig,
  defaultScreenTranslationPositionConfig,
  defaultScreenTranslationTextConfig,
} from '../../../../../+complect/translations/complect/defaults';
import { ScreenTranslationBackgroundConfigs } from '../../../../../+complect/translations/complect/model';
import {
  useMakeScreenTranslationConfigsFillPack,
  useScreenTranslationCurrentConfigi,
} from '../../../../../+complect/translations/hooks/configs';
import { RootState } from '../../../../../../../shared/store';
import { CmTranslationScreenConfig } from '../model';

const defaultConfig: CmTranslationScreenConfig & ScreenTranslationBackgroundConfigs = {
  ...defaultScreenTranslationPositionConfig,
  ...defaultScreenTranslationTextConfig,
  ...defaultScreenTranslationBackgroundConfig,
  isWithBackground: false,
};

const configsSelector = (state: RootState) => state.cm.translationScreenConfigs;

export const useCmScreenTranslationConfigs = () =>
  useMakeScreenTranslationConfigsFillPack(useSelector(configsSelector), defaultConfig);

export const useCmScreenTranslationConfig = (configi: number | und): CmTranslationScreenConfig | und => {
  const configs = useCmScreenTranslationConfigs();
  return configi === undefined ? undefined : configs[configi];
};

export const useCmScreenTranslationCurrentConfig = (): CmTranslationScreenConfig | und =>
  useCmScreenTranslationConfigs()[useScreenTranslationCurrentConfigi()];
