import { BackgroundNameType } from '../../../../index/parts/actions/files/complect/BackgroundSelector';
import { ScreenTranslateConfigTypeDisplay } from './Display';
import { ScreenTranslateCurrentConfigTypeFontStyle } from './FontStyle';
import { ScreenTranslateConfigTypeFontWeight } from './FontWeight';
import { ScreenTranslateCurrentConfigTypeTextAlign } from './TextAlign';

export type ScreenTranslationPartialConfigProps<Config> = {
  config: Config;
  updateConfig: (config: Partial<Config>) => void;
  title?: string;
};

export interface ScreenTranslationBackgroundConfigs {
  backgroundInteractive?: BackgroundNameType;
  background: string;
  isWithBackground: boolean;
  backgroundColor: string;
}

export interface ScreenTranslationSimpleTextConfig {
  color: string;
  display?: ScreenTranslateConfigTypeDisplay;
  opacity?: number;
  fontStyle?: ScreenTranslateCurrentConfigTypeFontStyle;
}

export interface ScreenTranslationTextConfig extends ScreenTranslationSimpleTextConfig {
  fontFamily?: string;
  fontWeight: ScreenTranslateConfigTypeFontWeight;
  textAlign: ScreenTranslateCurrentConfigTypeTextAlign;
}

export interface ScreenTranslationPositionConfig {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface FixedResizerLines {
  type: 'vert' | 'horz';
  value: number;
}
