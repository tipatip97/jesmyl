import { useBibleScreenTranslationFontSizeAddressAdapter } from '../../hooks/font-size-adapter/address-adapter';
import { useGetBibleScreenTranslationAddressTextWrapperStyle } from '../../hooks/styles/address-text-wrapper-style';
import { BibleTranslationScreenConfig } from '../../model';

interface Props {
  screeni: number | und;
  isPreview: boolean | und;
  bibleConfig: BibleTranslationScreenConfig | und;
  addressContent: string;
  windowResizeUpdatesNum: number | und;
}

export const BibleTranslationScreenAddressContent = (props: Props) => {
  const addressTextWrapperStyle = useGetBibleScreenTranslationAddressTextWrapperStyle(props.bibleConfig);
  const [addressWrapperRef, addressContentRef] = useBibleScreenTranslationFontSizeAddressAdapter(
    props.addressContent,
    props.bibleConfig,
    props.windowResizeUpdatesNum,
  );

  return (
    <>
      <div
        className="absolute flex"
        style={addressTextWrapperStyle}
        ref={addressWrapperRef}
      >
        <div
          className="nowrap fade-00"
          ref={addressContentRef}
        >
          {props.addressContent}
        </div>
      </div>
    </>
  );
};
