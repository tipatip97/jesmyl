import {
  ScreenTranslationBackgroundConfigs,
  ScreenTranslationPositionConfig,
  ScreenTranslationSimpleTextConfig,
  ScreenTranslationTextConfig,
} from '../../+complect/translations/complect/model';

export interface BibleTranslationScreenConfig extends ScreenTranslationBackgroundConfigs, ScreenTranslationTextConfig {
  addressPanel: ScreenTranslationPositionConfig;

  screen: ScreenTranslationPositionConfig;

  insertedtext?: ScreenTranslationSimpleTextConfig;
  textinbrackets?: ScreenTranslationSimpleTextConfig;

  address: {
    isOnBottom: boolean;
  } & ScreenTranslationBackgroundConfigs &
    ScreenTranslationPositionConfig &
    ScreenTranslationTextConfig;
}
