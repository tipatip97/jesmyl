import {
  defaultScreenTranslationBackgroundConfig,
  defaultScreenTranslationPositionConfig,
  defaultScreenTranslationTextConfig,
} from '../../../+complect/translations/complect/defaults';
import {
  useMakeScreenTranslationConfigsFillPack,
  useScreenTranslationCurrentConfigi,
} from '../../../+complect/translations/hooks/configs';
import { useStorageValueGetter } from '../../../../../complect/useStorage';
import bibleStorage from '../../bibleStorage';
import { BibleTranslationScreenConfig } from '../model';

export const defaultBibleConfig: BibleTranslationScreenConfig = {
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

const emptyArr: [] = [];

export const useBibleScreenTranslationConfigs = () =>
  useMakeScreenTranslationConfigsFillPack(
    useStorageValueGetter(bibleStorage, 'translationScreenConfigs', emptyArr),
    defaultBibleConfig,
  );

export const useBibleScreenTranslationConfig = (configi: number | und): BibleTranslationScreenConfig | und => {
  const configs = useBibleScreenTranslationConfigs();
  return configi === undefined ? undefined : configs[configi];
};

export const useBibleScreenTranslationCurrentConfig = (): BibleTranslationScreenConfig | und =>
  useBibleScreenTranslationConfigs()[useScreenTranslationCurrentConfigi()];
