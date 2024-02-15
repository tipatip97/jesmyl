import { useMemo } from 'react';
import { TranslationScreenProps } from '../../../+complect/translations/Translations.model';
import {
  useScreenTranslationCurrentConfig,
  useScreenTranslationCurrentConfigi,
} from '../../../+complect/translations/hooks/configs';
import { useIsScreenTranslationTextVisible } from '../../../+complect/translations/hooks/is-visible';
import { useBibleSlideSyncContentUpdatesNum } from '../../hooks/slide-sync';
import { useBibleCurrentAddressText, useBibleCurrentSlideText } from '../../hooks/texts';
import { useBibleScreenTranslationConfig } from '../hooks/configs';
import { BibleTranslationScreen } from './BibleTranslationScreen';

export const BibleTranslationCurrentScreen = (props: TranslationScreenProps) => {
  const currentConfigi = useScreenTranslationCurrentConfigi();
  const currentConfig = useBibleScreenTranslationConfig(props.screeni ?? currentConfigi);

  const fullContentUpdatesNum = useBibleSlideSyncContentUpdatesNum();
  const isActualVisible = useIsScreenTranslationTextVisible();

  const addressPreviewContent = useBibleCurrentAddressText();
  const config = useScreenTranslationCurrentConfig();

  const screenPreviewContent = useBibleCurrentSlideText();

  const [screenActualContent, addressActualContent] = useMemo(
    () => [screenPreviewContent, addressPreviewContent],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fullContentUpdatesNum],
  );

  return (
    <BibleTranslationScreen
      {...props}
      bibleConfig={currentConfig}
      addressContent={props.isPreview ? addressPreviewContent : addressActualContent}
      windowResizeUpdatesNum={config?.proportion}
      screenContent={props.isPreview ? screenPreviewContent : screenActualContent}
      isVisible={props.isPreview ? true : isActualVisible}
    />
  );
};
