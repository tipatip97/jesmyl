import { FixedResizerLines } from '../components/apps/+complect/translations/complect/model';
import { ScreenTranslationConfig } from '../components/apps/+complect/translations/model';
import { FullContentOpenMode } from './fullscreen-content/useFullContent';

export interface ComplectStorage {
  rememberExpandes: string[];
  screenTranslationConfigs: ScreenTranslationConfig[];
  currentTranslationConfigi: number;
  isTranslationTextVisible: boolean;
  currentTranslationTextApp: 'cm' | 'bible';
}

export interface ComplectState extends ComplectStorage {
  fullscreenContentOpenMode: FullContentOpenMode;
  isAbsoluteFloatPopupOpen: boolean;
  isAbsoluteBottomPopupOpen: boolean;
  numAbsoluteBottomPopupUpdates: number;
  isFullscreen: boolean;
  numExerUpdates: number;
  numTranslationsUpdates: number;
  isNumberSearch: boolean;
  fixedResizerLines?: FixedResizerLines;
}
