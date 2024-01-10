import { ReactNode, useState } from 'react';
import { useActualRef } from '../../../../../../../complect/useActualRef';
import FontSizeContain from '../../../../base/font-size-contain/FontSizeContain';
import { TranslationScreenProps } from '../Translations.model';
import { useControlledTranslation } from '../hooks';
import { useCmTranslationConfigs, useSetCurrentConfigi } from '../hooks/configs';
import { useGetFontSizeContainScreenStyle } from './hooks/get-fsc-style';
import { useSetScreenInteractiveBackground } from './hooks/interactive-back';
import { useScreenKeyDownListen } from './hooks/keydown-listen';
import { useSetScreenFontFamily } from './hooks/set-font-family';
import { useScreenWinResizeListen } from './hooks/win-resize-lesten';

export default function TranslationScreen(props: TranslationScreenProps) {
  const { updateConfig, currentConfig, configs } = useCmTranslationConfigs(props.screeni);
  const stateRef = useActualRef(useControlledTranslation());
  const setCurrentConfigiRef = useActualRef(useSetCurrentConfigi());
  const [background, setBackground] = useState<ReactNode | null>(null);

  const forceUpdates = useScreenWinResizeListen(props.win, props.screeni, updateConfig, setCurrentConfigiRef);
  const style = useGetFontSizeContainScreenStyle(currentConfig, stateRef.current.isVisible);

  useScreenKeyDownListen(props.win, configs, props.screeni, setCurrentConfigiRef, stateRef);
  useSetScreenInteractiveBackground(props.win, currentConfig?.background, setBackground);
  useSetScreenFontFamily(props.win, currentConfig?.fontFamily);

  return (
    <div className="relative full-height full-width bgcolor-black">
      {background}
      {props.innerNode}
      <FontSizeContain
        className="inline-flex center white-pre-children"
        style={style}
        html={stateRef.current.text}
        subUpdate={
          stateRef.current.currentConfigi +
          forceUpdates +
          (props.proportion === undefined ? 1000 : props.proportion) +
          (currentConfig === undefined
            ? 10000
            : currentConfig.width + currentConfig.height + currentConfig.top + currentConfig.left)
        }
      />
    </div>
  );
}
