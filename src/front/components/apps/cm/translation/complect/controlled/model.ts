import { ScreenTranslateCurrentConfigTypeTextAlign } from '../../../../+complect/translations/complect/TextAlign';
import { ScreenTranslateConfigTypeFontWeight } from '../../../../+complect/translations/complect/Type';
import { ScreenTranslationBackgroundConfigs } from '../../../../+complect/translations/complect/model';

export interface CmTranslationScreenConfig extends ScreenTranslationBackgroundConfigs {
  left: number;
  top: number;
  width: number;
  height: number;
  fontFamily?: string;
  fontWeight: ScreenTranslateConfigTypeFontWeight;
  color: string;
  textAlign: ScreenTranslateCurrentConfigTypeTextAlign;
}
