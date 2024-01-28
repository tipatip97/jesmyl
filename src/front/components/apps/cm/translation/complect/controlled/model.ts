import {
  ScreenTranslationBackgroundConfigs,
  ScreenTranslationPositionConfig,
  ScreenTranslationTextConfig,
} from '../../../../+complect/translations/complect/model';

export type CmTranslationTextScreenConfig = ScreenTranslationPositionConfig & ScreenTranslationTextConfig;

export interface CmTranslationScreenConfig extends CmTranslationTextScreenConfig, ScreenTranslationBackgroundConfigs {
  subs?: Partial<Record<'next', CmTranslationTextScreenConfig>>;
}
