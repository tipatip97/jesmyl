import { useSelector } from 'react-redux';
import {
  defaultScreenTranslationBackgroundConfig,
  defaultScreenTranslationPositionConfig,
  defaultScreenTranslationTextConfig,
} from '../../../+complect/translations/complect/defaults';
import {
  useMakeScreenTranslationConfigsFillPack,
  useScreenTranslationCurrentConfigi,
} from '../../../+complect/translations/hooks/configs';
import { RootState } from '../../../../../shared/store';
import { BibleTranslationScreenConfig } from '../model';

const defaultConfig: BibleTranslationScreenConfig = {
  ...defaultScreenTranslationTextConfig,
  ...defaultScreenTranslationBackgroundConfig,
  insertedtext: {
    color: '#ffffff',
    opacity: 0.7,
  },
  textinbrackets: {
    color: '#ffffff',
    display: 'none',
  },
  addressPanel: {
    height: 20,
    left: 0,
    top: 80,
    width: 100,
  },

  screen: defaultScreenTranslationPositionConfig,

  address: {
    ...defaultScreenTranslationPositionConfig,
    ...defaultScreenTranslationTextConfig,
    ...defaultScreenTranslationBackgroundConfig,
    isOnBottom: true,
  },
};

const configsSelector = (state: RootState) => state.bible.translationScreenConfigs;

export const useBibleScreenTranslationConfigs = () =>
  useMakeScreenTranslationConfigsFillPack(useSelector(configsSelector), defaultConfig);

export const useBibleScreenTranslationConfig = (configi: number | und): BibleTranslationScreenConfig | und => {
  const configs = useBibleScreenTranslationConfigs();
  return configi === undefined ? undefined : configs[configi];
};

export const useBibleScreenTranslationCurrentConfig = (): BibleTranslationScreenConfig | und =>
  useBibleScreenTranslationConfigs()[useScreenTranslationCurrentConfigi()];
