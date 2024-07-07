import { useIsScreenTranslationTextVisible } from '../../../../+complect/translations/atoms';
import { useBibleScreenTranslationFontSizeAdapter } from '../../../../../../complect/useFontSizeAdapter';
import { BibleTranslationScreenConfig } from '../../model';

export const useBibleScreenTranslationFontSizeAddressAdapter = (
  content: string,
  currentConfig: BibleTranslationScreenConfig | und,
  windowResizeUpdatesNum: number | und,
) => {
  const subUpdater =
    (currentConfig === undefined
      ? '-'
      : currentConfig.address.height +
        currentConfig.address.width +
        currentConfig.fontWeight +
        currentConfig.fontFamily +
        currentConfig.addressPanel.height) +
    windowResizeUpdatesNum +
    useIsScreenTranslationTextVisible();

  return useBibleScreenTranslationFontSizeAdapter(content, subUpdater);
};
