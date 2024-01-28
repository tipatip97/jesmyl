import { useRef } from 'react';
import { TranslationScreenProps } from '../../../../../+complect/translations/Translations.model';
import { ScreenTranslateCurrentPositionConfigurators } from '../../../../../+complect/translations/complect/position/Position';
import {
  useGetScreenTranslationConfig,
  useScreenTranslationCurrentConfigi,
} from '../../../../../+complect/translations/hooks/configs';
import { useSetScreenTranslationInteractiveBackground } from '../../../../../+complect/translations/hooks/interactive-back';
import { useApplyScreenFontFamilyEffect } from '../../../../../+complect/translations/hooks/set-font-family';
import FontSizeContain from '../../../../base/font-size-contain/FontSizeContain';
import { FontSizeContainProps } from '../../../../base/font-size-contain/FontSizeContain.model';
import { useCmScreenTranslationComCurrentTexti } from '../../hooks/com-texts';
import { useCmCurrentComTexts } from '../../hooks/get-com-text';
import { useCmScreenTranslationConfig } from '../hooks/configs';
import { useUpdateCmCurrentTranslationConfig } from '../hooks/update-config';
import { CmTranslationSubScreen } from './CmTranslationSubScreen';
import { useGetCmScreenTranslationStyle } from './hooks/get-style';
import { useGetCmScreenTranslationWrapperStyle } from './hooks/get-wrapper-style';
import { useScreenKeyDownListen } from './hooks/keydown-listen';
import { useScreenWinResizeListen } from './hooks/win-resize-lesten';

export const CmTranslationScreen = (props: TranslationScreenProps & Partial<FontSizeContainProps>) => {
  const updateConfig = useUpdateCmCurrentTranslationConfig();
  const getCurrentConfig = useGetScreenTranslationConfig();
  const currentConfigi = useScreenTranslationCurrentConfigi();
  const currentConfig = useCmScreenTranslationConfig(props.screeni ?? currentConfigi);
  const texts = useCmCurrentComTexts();
  const currTexti = useCmScreenTranslationComCurrentTexti();
  const text = texts?.[currTexti];
  const wrapperRef = useRef<HTMLDivElement>(null);

  const style = useGetCmScreenTranslationStyle(currentConfig);
  const wrapperStyle = useGetCmScreenTranslationWrapperStyle(currentConfig);
  const forceUpdates = useScreenWinResizeListen(props.win);
  const background = useSetScreenTranslationInteractiveBackground(
    currentConfig?.isWithBackground ? currentConfig.backgroundInteractive : undefined,
  );

  const subUpdates = '' + currentConfigi + forceUpdates + getCurrentConfig(currentConfigi)?.proportion;

  useScreenKeyDownListen(props.win);
  useApplyScreenFontFamilyEffect(currentConfig?.fontFamily, props.win);
  let subScreens = null;

  if (currentConfig?.subs?.next !== undefined) {
    const config = currentConfig.subs.next;

    subScreens = (
      <CmTranslationSubScreen
        config={config}
        win={props.win}
        subUpdates={subUpdates}
        text={texts?.[currTexti + 1] ?? ''}
        wrapperRef={wrapperRef}
        isTech={props.isTech}
        parentConfig={currentConfig}
        updateConfig={updateConfig}
      />
    );
  }

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
      {subScreens}
      <FontSizeContain
        className="inline-flex white-pre-children"
        style={style}
        html={text}
        subUpdate={subUpdates + (currentConfig === undefined ? '' : currentConfig.width + currentConfig.height)}
      />
    </div>
  );
};
