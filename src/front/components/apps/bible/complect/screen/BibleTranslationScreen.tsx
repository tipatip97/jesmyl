import { useRef, useState } from 'react';
import { TranslationScreenProps } from '../../../+complect/translations/Translations.model';
import { useScreenTranslationCurrentConfigi } from '../../../+complect/translations/hooks/configs';
import { useSetScreenTranslationInteractiveBackground } from '../../../+complect/translations/hooks/interactive-back';
import { useApplyScreenFontFamilyEffect } from '../../../+complect/translations/hooks/set-font-family';
import EvaButton from '../../../../../complect/eva-icon/EvaButton';
import { useBibleAddressVersei } from '../../hooks/address/verses';
import { useBibleScreenTranslationConfig } from '../hooks/configs';
import { useBibleScreenTranslationKeyListener } from '../hooks/key-listener';
import { useGetBibleScreenTranslationWrapperStyle } from '../hooks/styles/wrapper-style';
import { BibleTranslationScreenAddressContainer } from './complect/AddressContainer';
import { BibleTranslationScreenContent } from './complect/Content';
import { BibleTranslationScreenAddressPanel } from './complect/AddressPanel';
import { BibleTranslationScreenContentConfiguration } from './complect/ContentConfiguration';

export const BibleTranslationScreen = (props: TranslationScreenProps) => {
  const [isChangeAddressPanelHeight, setIsChangeAddressPanelHeight] = useState(true);

  const currentConfigi = useScreenTranslationCurrentConfigi();
  const currentConfig = useBibleScreenTranslationConfig(props.screeni ?? currentConfigi);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const screenWrapperRef = useRef<HTMLDivElement>(null);
  const versei = useBibleAddressVersei();

  useBibleScreenTranslationKeyListener(versei, props.win);

  const wrapperStyle = useGetBibleScreenTranslationWrapperStyle(currentConfig);

  const background = useSetScreenTranslationInteractiveBackground(
    currentConfig?.isWithBackground ? currentConfig.backgroundInteractive : undefined,
  );

  useApplyScreenFontFamilyEffect(currentConfig?.fontFamily, props.win);

  return (
    <div
      className="relative full-size bgcolor-black white-pre-line"
      style={wrapperStyle}
      ref={wrapperRef}
    >
      {props.isTech && (
        <>
          <EvaButton
            name="radio-button-on"
            className="absolute pos-left pos-bottom z-index:130"
            onClick={event => {
              event.preventDefault();
              setIsChangeAddressPanelHeight(is => !is);
            }}
          />
          {isChangeAddressPanelHeight && currentConfig && (
            <BibleTranslationScreenAddressPanel
              screeni={props.screeni}
              wrapperRef={wrapperRef}
            />
          )}
        </>
      )}
      {background}
      <div
        className="relative full-size"
        ref={screenWrapperRef}
      >
        {props.isTech && currentConfig && (
          <BibleTranslationScreenContentConfiguration
            screeni={props.screeni}
            wrapperRef={screenWrapperRef}
          />
        )}
        <BibleTranslationScreenContent
          screeni={props.screeni}
          win={props.win}
          isPreview={props.isPreview}
        />
      </div>
      <BibleTranslationScreenAddressContainer
        isChangeAddressPanelHeight={isChangeAddressPanelHeight}
        isTech={props.isTech}
        isPreview={props.isPreview}
        screeni={props.screeni}
      />
    </div>
  );
};
