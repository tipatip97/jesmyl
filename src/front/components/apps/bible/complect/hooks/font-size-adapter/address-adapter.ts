import { useIsScreenTranslationTextVisible } from '../../../../+complect/translations/hooks/is-visible';
import { BibleTranslationScreenConfig } from '../../model';
import { useBibleScreenTranslationFontSizeAdapter } from './adapter';

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
