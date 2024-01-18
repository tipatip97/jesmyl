import { ScreenTranslationConfig } from '../../../../+complect/translations/model';
import { BibleTranslationScreenConfig } from '../../model';
import { useBibleScreenTranslationFontSizeAdapter } from './adapter';

export const useBibleScreenTranslationFontSizeAddressAdapter = (
  content: string,
  currentConfig: BibleTranslationScreenConfig | und,
  config: ScreenTranslationConfig | und,
) => {
  const subUpdater =
    (currentConfig === undefined
      ? '-'
      : currentConfig.address.height +
        currentConfig.address.width +
        currentConfig.fontWeight +
        currentConfig.fontFamily +
        currentConfig.addressPanel.height) + config?.proportion;

  return useBibleScreenTranslationFontSizeAdapter(content, subUpdater);
};
