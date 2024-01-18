import { useRef } from 'react';
import { TranslationScreenProps } from '../../../../../+complect/translations/Translations.model';
import { ScreenTranslateCurrentPositionConfigurators } from '../../../../../+complect/translations/complect/position/Position';
import {
  useGetScreenTranslationConfig,
  useScreenTranslationCurrentConfigi,
} from '../../../../../+complect/translations/hooks/configs';
import { useSetScreenTranslationInteractiveBackground } from '../../../../../+complect/translations/hooks/interactive-back';
import { useApplyScreenFontFamilyEffect } from '../../../../../+complect/translations/hooks/set-font-family';
import { useSetScreenTranslationCurrentConfigi } from '../../../../../+complect/translations/hooks/with-config';
import { useActualRef } from '../../../../../../../complect/useActualRef';
import FontSizeContain from '../../../../base/font-size-contain/FontSizeContain';
import { FontSizeContainProps } from '../../../../base/font-size-contain/FontSizeContain.model';
import { useCmScreenTranslationComCurrentText } from '../../hooks/com-texts';
import { useCmScreenTranslationConfig, useCmScreenTranslationConfigs } from '../hooks/configs';
import { useUpdateCmCurrentTranslationConfig } from '../hooks/update-config';
import { useGetCmScreenTranslationStyle } from './hooks/get-style';
import { useGetCmScreenTranslationWrapperStyle } from './hooks/get-wrapper-style';
import { useScreenKeyDownListen } from './hooks/keydown-listen';
import { useScreenWinResizeListen } from './hooks/win-resize-lesten';

export const CmTranslationScreen = (props: TranslationScreenProps & Partial<FontSizeContainProps>) => {
  const updateConfig = useUpdateCmCurrentTranslationConfig();
  const setCurrentConfigiRef = useActualRef(useSetScreenTranslationCurrentConfigi());
  const getCurrentConfig = useGetScreenTranslationConfig();
  const configs = useCmScreenTranslationConfigs();
  const currentConfigi = useScreenTranslationCurrentConfigi();
  const currentConfig = useCmScreenTranslationConfig(props.screeni ?? currentConfigi);
  const text = useCmScreenTranslationComCurrentText();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const style = useGetCmScreenTranslationStyle(currentConfig);
  const wrapperStyle = useGetCmScreenTranslationWrapperStyle(currentConfig);
  const forceUpdates = useScreenWinResizeListen(props.win, props.screeni, updateConfig, setCurrentConfigiRef);
  const background = useSetScreenTranslationInteractiveBackground(
    currentConfig?.isWithBackground ? currentConfig.backgroundInteractive : undefined,
  );

  useScreenKeyDownListen(props.win, configs, props.screeni);
  useApplyScreenFontFamilyEffect(currentConfig?.fontFamily, props.win);

  return (
    <div
      className="relative full-size bgcolor-black"
      style={wrapperStyle}
      ref={wrapperRef}
    >
      {background}
      {props.isTech && currentConfig && (
        <ScreenTranslateCurrentPositionConfigurators
          config={currentConfig}
          updateConfig={updateConfig}
          wrapperRef={wrapperRef}
        />
      )}
      <FontSizeContain
        className="inline-flex center white-pre-children"
        style={style}
        html={text}
        subUpdate={
          currentConfigi +
          forceUpdates +
          (getCurrentConfig(currentConfigi)?.proportion ?? 0) +
          (currentConfig === undefined
            ? 10000
            : currentConfig.width + currentConfig.height + currentConfig.top + currentConfig.left)
        }
      />
    </div>
  );
};
