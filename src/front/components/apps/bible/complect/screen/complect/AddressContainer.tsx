import { useRef } from 'react';
import { useScreenTranslationCurrentConfigi } from '../../../../+complect/translations/hooks/configs';
import { useSetScreenTranslationInteractiveBackground } from '../../../../+complect/translations/hooks/interactive-back';
import { useBibleScreenTranslationConfig } from '../../hooks/configs';
import { useGetBibleScreenTranslationAddressStyle } from '../../hooks/styles/address-style';
import { BibleTranslationScreenAddressContent } from './AddressContent';
import { BibleTranslationScreenTechAddressContent } from './TechAddressContent';

interface Props {
  screeni: number | und;
  isTech: boolean | und;
  isChangeAddressPanelHeight: boolean;
}

export const BibleTranslationScreenAddressContainer = (props: Props) => {
  const currentConfigi = useScreenTranslationCurrentConfigi();
  const currentConfig = useBibleScreenTranslationConfig(props.screeni ?? currentConfigi);
  const addressBackground = useSetScreenTranslationInteractiveBackground(
    currentConfig?.address.isWithBackground ? currentConfig.address.backgroundInteractive : undefined,
  );
  const wrapperRef = useRef<HTMLDivElement>(null);

  const addressContainerStyle = useGetBibleScreenTranslationAddressStyle(currentConfig);

  return (
    <>
      <div
        className="relative full-size flex center"
        style={addressContainerStyle}
        ref={wrapperRef}
      >
        {addressBackground}
        {!props.isChangeAddressPanelHeight && props.isTech && currentConfig && (
          <BibleTranslationScreenTechAddressContent
            screeni={props.screeni}
            wrapperRef={wrapperRef}
          />
        )}
        <BibleTranslationScreenAddressContent screeni={props.screeni} />
      </div>
    </>
  );
};
