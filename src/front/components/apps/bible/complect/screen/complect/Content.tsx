import { useMemo } from 'react';
import {
  useScreenTranslationCurrentConfig,
  useScreenTranslationCurrentConfigi,
} from '../../../../+complect/translations/hooks/configs';
import { useBibleSlideSyncContentUpdatesNum } from '../../../hooks/slide-sync';
import { useBibleCurrentSlideText } from '../../../hooks/texts';
import { useBibleScreenTranslationConfig } from '../../hooks/configs';
import { useBibleScreenTranslationFontSizeScreenAdapter } from '../../hooks/font-size-adapter/screen-adapter';
import { useGetBibleScreenTranslationScreenStyle } from '../../hooks/styles/screen-style';

interface Props {
  screeni: number | und;
  win: Window | und;
  isPreview: boolean | und;
}

export const BibleTranslationScreenContent = (props: Props) => {
  const currentConfigi = useScreenTranslationCurrentConfigi();
  const fullContentUpdatesNum = useBibleSlideSyncContentUpdatesNum();

  const currentConfig = useBibleScreenTranslationConfig(props.screeni ?? currentConfigi);
  const config = useScreenTranslationCurrentConfig();

  const screenStyle = useGetBibleScreenTranslationScreenStyle(currentConfig);

  const screenPreviewContent = useBibleCurrentSlideText();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addressFullContent = useMemo(() => screenPreviewContent, [fullContentUpdatesNum]);
  const screenContent = props.isPreview ? screenPreviewContent : addressFullContent;

  const [screenWrapperRef, screenContentRef] = useBibleScreenTranslationFontSizeScreenAdapter(
    screenContent,
    currentConfig,
    config,
  );

  return (
    <>
      <div
        className="absolute flex center"
        style={screenStyle}
        ref={screenWrapperRef}
      >
        <div ref={screenContentRef}>{screenContent}</div>
      </div>
    </>
  );
};
