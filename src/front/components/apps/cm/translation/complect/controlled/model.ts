import { CmTranslateCurrentScreenConfigurationTypeTextAlign } from './screens/current/complect/TextAlign';
import { CmTranslateCurrentScreenConfigurationTypeFontWeight } from './screens/current/complect/Type';

export interface TrnslationScreenConfig {
  title: string;
  paddingVPx: number;
  paddingHPx: number;
  paddingFix: boolean;
  paddingShowLimits: boolean;
  fontWeight: CmTranslateCurrentScreenConfigurationTypeFontWeight;
  color: string;
  textAlign: CmTranslateCurrentScreenConfigurationTypeTextAlign;
  proportion: number;
}

export type TranslationWinUpdateEffectFeedback = (_event?: unknown, config?: TrnslationScreenConfig) => void;
export type TranslationWinUpdateEffect = (update: TranslationWinUpdateEffectFeedback) => () => void;

export type TranslationYPosition = null | 'center' | 'top';
