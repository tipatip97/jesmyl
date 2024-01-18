import {
  ScreenTranslationBackgroundConfigs,
  ScreenTranslationPositionConfig,
  ScreenTranslationTextConfig,
} from '../../+complect/translations/complect/model';

export interface BibleTranslationScreenConfig extends ScreenTranslationBackgroundConfigs, ScreenTranslationTextConfig {
  addressPanel: ScreenTranslationPositionConfig;

  screen: ScreenTranslationPositionConfig;

  address: {
    isOnBottom: boolean;
  } & ScreenTranslationBackgroundConfigs &
    ScreenTranslationPositionConfig &
    ScreenTranslationTextConfig;
}
