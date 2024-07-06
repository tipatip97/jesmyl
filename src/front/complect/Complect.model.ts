import { TranslationViewApp } from '../components/apps/+complect/translations/Translations.model';
import { FixedResizerLines } from '../components/apps/+complect/translations/complect/model';
import { ScreenTranslationConfig } from '../components/apps/+complect/translations/model';

export interface ComplectStorage {
  rememberExpandes: string[];
  screenTranslationConfigs: ScreenTranslationConfig[];
  currentTranslationConfigi: number;
  isTranslationTextVisible: boolean;
  currentTranslationTextApp: TranslationViewApp;
}

export interface ComplectState extends ComplectStorage {
  isAbsoluteFloatPopupOpen: boolean;
  isAbsoluteBottomPopupOpen: boolean;
  numAbsoluteBottomPopupUpdates: number;
  numExerUpdates: number;
  numTranslationsUpdates: number;
  isNumberSearch: boolean;
  fixedResizerLines?: FixedResizerLines;
}
