import { ScreenTranslationConfig } from '../../../../+complect/translations/model';
import { BibleTranslationScreenConfig } from '../../model';
import { useBibleScreenTranslationFontSizeAdapter } from './adapter';

export const useBibleScreenTranslationFontSizeScreenAdapter = (
  content: string,
  currentConfig: BibleTranslationScreenConfig | und,
  config: ScreenTranslationConfig | und,
) => {
  const subUpdater =
    (currentConfig === undefined
      ? '-'
      : currentConfig.screen.height +
        currentConfig.screen.width +
        currentConfig.address.height +
        currentConfig.fontWeight +
        currentConfig.fontFamily +
        currentConfig.addressPanel.height) + config?.proportion;

  return useBibleScreenTranslationFontSizeAdapter(content, subUpdater);
};
