import { useState } from 'react';
import { BibleAddress } from '../../../address/Address';
import { BibleTranslationAddress } from '../../../model';
import { useBibleScreenTranslationFontSizeAddressAdapter } from '../../hooks/font-size-adapter/address-adapter';
import { useGetBibleScreenTranslationAddressTextWrapperStyle } from '../../hooks/styles/address-text-wrapper-style';
import { BibleTranslationScreenConfig } from '../../model';

interface Props {
  screeni: number | und;
  isPreview: boolean | und;
  bibleConfig: BibleTranslationScreenConfig | und;
  windowResizeUpdatesNum: number | und;
  address?: BibleTranslationAddress;
  addressText?: string;
}

export default function BibleTranslationScreenAddressContent(props: Props) {
  const addressTextWrapperStyle = useGetBibleScreenTranslationAddressTextWrapperStyle(props.bibleConfig);
  const [addressContent, setAddressContent] = useState('');

  const [addressWrapperRef, addressContentRef] = useBibleScreenTranslationFontSizeAddressAdapter(
    addressContent,
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
          className="nowrap"
          ref={addressContentRef}
        >
          {props.addressText ?? (
            <BibleAddress
              address={props.address}
              isShowCachable={!props.isPreview}
            >
              {(address, cachedAddress) => {
                if (props.isPreview) {
                  if (addressContent !== address) setTimeout(setAddressContent, 200, address);
                  return address;
                }

                if (addressContent !== cachedAddress) setTimeout(setAddressContent, 200, cachedAddress);
                return cachedAddress;
              }}
            </BibleAddress>
          )}
        </div>
      </div>
    </>
  );
}
