import { BackgroundNameType } from '../../../../index/parts/actions/files/complect/BackgroundSelector';
import { ScreenTranslateCurrentConfigTypeTextAlign } from './TextAlign';
import { ScreenTranslateConfigTypeFontWeight } from './FontWeight';

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

export interface ScreenTranslationTextConfig {
  fontFamily?: string;
  fontWeight: ScreenTranslateConfigTypeFontWeight;
  color: string;
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
