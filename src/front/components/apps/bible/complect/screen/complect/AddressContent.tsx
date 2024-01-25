import { useMemo } from 'react';
import {
  useScreenTranslationCurrentConfig,
  useScreenTranslationCurrentConfigi,
} from '../../../../+complect/translations/hooks/configs';
import { useBibleSlideSyncContentUpdatesNum } from '../../../hooks/slide-sync';
import { useBibleCurrentAddressText } from '../../../hooks/texts';
import { useBibleScreenTranslationConfig } from '../../hooks/configs';
import { useBibleScreenTranslationFontSizeAddressAdapter } from '../../hooks/font-size-adapter/address-adapter';
import { useGetBibleScreenTranslationAddressTextWrapperStyle } from '../../hooks/styles/address-text-wrapper-style';

interface Props {
  screeni: number | und;
  isPreview: boolean | und;
}

export const BibleTranslationScreenAddressContent = (props: Props) => {
  const currentConfigi = useScreenTranslationCurrentConfigi();
  const currentConfig = useBibleScreenTranslationConfig(props.screeni ?? currentConfigi);
  const fullContentUpdatesNum = useBibleSlideSyncContentUpdatesNum();

  const config = useScreenTranslationCurrentConfig();

  const addressPreviewContent = useBibleCurrentAddressText();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const addressActualContent = useMemo(() => addressPreviewContent, [fullContentUpdatesNum]);
  const addressContent = props.isPreview ? addressPreviewContent : addressActualContent;

  const addressTextWrapperStyle = useGetBibleScreenTranslationAddressTextWrapperStyle(currentConfig);
  const [addressWrapperRef, addressContentRef] = useBibleScreenTranslationFontSizeAddressAdapter(
    addressContent,
    currentConfig,
    config,
  );

  if (currentConfig === undefined) return;

  return (
    <>
      <div
        className="absolute flex"
        style={addressTextWrapperStyle}
        ref={addressWrapperRef}
      >
        <div
          className="nowrap"
          ref={addressContentRef}
        >
          {addressContent}
        </div>
      </div>
    </>
  );
};
