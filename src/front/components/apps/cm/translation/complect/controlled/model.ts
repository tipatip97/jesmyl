import { BackgroundNameType } from '../../../../../index/parts/actions/files/complect/BackgroundSelector';
import { CmTranslateCurrentScreenConfigurationTypeTextAlign } from './screens/current/complect/TextAlign';
import { CmTranslateCurrentScreenConfigurationTypeFontWeight } from './screens/current/complect/Type';

export interface TranslationScreenConfig {
  title: string;
  left: number;
  top: number;
  width: number;
  height: number;
  fontFamily?: string;
  background?: BackgroundNameType;
  fontWeight: CmTranslateCurrentScreenConfigurationTypeFontWeight;
  color: string;
  textAlign: CmTranslateCurrentScreenConfigurationTypeTextAlign;
  proportion: number;
}

export type TranslationWinUpdateEffectFeedback = (_event?: unknown, config?: TranslationScreenConfig) => void;
export type TranslationWinUpdateEffect = (update: TranslationWinUpdateEffectFeedback) => () => void;

export type TranslationYPosition = null | 'center' | 'top';
