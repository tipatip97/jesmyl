import { ReactNode, useState } from 'react';
import { useActualRef } from '../../../../../../../complect/useActualRef';
import FontSizeContain from '../../../../base/font-size-contain/FontSizeContain';
import { TranslationScreenProps } from '../Translations.model';
import { useControlledTranslation } from '../hooks';
import { useCmTranslationConfigs, useSetCurrentConfigi } from '../hooks/configs';
import { useScreenKeyDownListen } from './hooks/keydown-listen';
import { useSetScreenFontFamily } from './hooks/set-font-family';
import { useSetScreenInteractiveBackground } from './hooks/set-interactive-back';
import { useScreenWinResizeListen } from './hooks/win-resize-lesten';

export default function TranslationScreen(props: TranslationScreenProps) {
  const { updateConfig, currentConfig, configs } = useCmTranslationConfigs(props.screeni);
  const stateRef = useActualRef(useControlledTranslation());
  const setCurrentConfigiRef = useActualRef(useSetCurrentConfigi());
  const [background, setBackground] = useState<ReactNode | null>(null);

  const forceUpdates = useScreenWinResizeListen(props.win, props.screeni, updateConfig, setCurrentConfigiRef);

  useScreenKeyDownListen(props.win, configs, props.screeni, setCurrentConfigiRef, stateRef);
  useSetScreenInteractiveBackground(props.win, currentConfig?.background, setBackground);
  useSetScreenFontFamily(props.win, currentConfig?.fontFamily);

  return (
    <div className="relative full-height full-width bgcolor-black">
      {background}
      <FontSizeContain
        className="inline-flex center white-pre-children"
        style={{
          fontFamily:
            (currentConfig?.fontFamily && `'${currentConfig.fontFamily}',`) +
            'montserrat,main,calibri,georgia,times,serif,verdana,arial',

          ...(currentConfig
            ? {
                color: stateRef.current.isVisible ? currentConfig.color : 'transparent',
                fontWeight: currentConfig.fontWeight,
                textAlign: currentConfig.textAlign,
              }
            : {
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }),
        }}
        shadowStyle={{
          padding:
            currentConfig &&
            `${
              currentConfig.paddingFix
                ? `${currentConfig.paddingVPx}px`
                : `${currentConfig.paddingVPx}px ${currentConfig.paddingHPx}px`
            }`,
          transformOrigin:
            currentConfig && stateRef.current.positionY !== 'center'
              ? `center ${currentConfig.paddingVPx}px`
              : undefined,
        }}
        html={stateRef.current.permanentText}
        subUpdate={
          stateRef.current.currentConfigi +
          forceUpdates +
          (props.proportion === undefined ? 1000 : props.proportion) +
          (currentConfig === undefined
            ? 10000
            : +currentConfig.paddingFix + currentConfig.paddingVPx + currentConfig.paddingHPx)
        }
      />
    </div>
  );
}
