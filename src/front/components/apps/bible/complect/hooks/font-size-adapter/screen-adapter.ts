import { useIsScreenTranslationTextVisible } from '../../../../+complect/translations/hooks/is-visible';
import { BibleTranslationScreenConfig } from '../../model';
import { useBibleScreenTranslationFontSizeAdapter } from './adapter';

export const useBibleScreenTranslationFontSizeScreenAdapter = (
  content: string,
  currentConfig: BibleTranslationScreenConfig | und,
  windowResizeUpdatesNum: number | und,
) => {
  const subUpdater =
    (currentConfig === undefined
      ? '-'
      : currentConfig.screen.height +
        currentConfig.screen.width +
        currentConfig.address.height +
        currentConfig.fontWeight +
        currentConfig.fontFamily +
        currentConfig.addressPanel.height) +
    windowResizeUpdatesNum +
    useIsScreenTranslationTextVisible();

  return useBibleScreenTranslationFontSizeAdapter(content, subUpdater);
};
