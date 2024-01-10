import { useMemo } from 'react';
import { CSSProperties } from 'styled-components';
import { TranslationScreenConfig } from '../../model';

export const useGetFontSizeContainScreenStyle = (currentConfig: TranslationScreenConfig | und, isVisible: boolean) => {
  return useMemo((): CSSProperties => {
    const fontFamily = 'montserrat,main,calibri,georgia,times,serif,verdana,arial';

    return currentConfig
      ? {
          fontWeight: currentConfig.fontWeight,
          textAlign: currentConfig.textAlign,
          fontFamily: currentConfig.fontFamily ?? fontFamily,

          color: isVisible ? currentConfig.color : 'transparent',
          width: currentConfig.width + '%',
          height: currentConfig.height + '%',
          left: currentConfig.left + '%',
          top: currentConfig.top + '%',
        }
      : {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          fontFamily,
        };
  }, [currentConfig, isVisible]);
};
