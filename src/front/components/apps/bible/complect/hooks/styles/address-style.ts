import { useMemo } from 'react';
import { CSSProperties } from 'styled-components';
import { useIsScreenTranslationTextVisible } from '../../../../+complect/translations/hooks/is-visible';
import { BibleTranslationScreenConfig } from '../../model';
import { useScreenTranslationBackgroundStyles } from '../../../../+complect/translations/complect/hooks/background-styles';

export const addressGridArea = 'address-grid-area';

export const useGetBibleScreenTranslationAddressStyle = (currentConfig: BibleTranslationScreenConfig | und) => {
  const isVisible = useIsScreenTranslationTextVisible();
  const background = useScreenTranslationBackgroundStyles(currentConfig?.address);

  return useMemo((): CSSProperties => {
    return currentConfig !== undefined
      ? {
          position: 'relative',
          color: currentConfig.address.color,
          gridArea: addressGridArea,
          bottom: 0,

          display: isVisible ? undefined : 'none',
          background,
          zIndex: 10,
        }
      : {
          color: '#777777',
          fontWeight: 'bold',
          textAlign: 'center',
        };
  }, [background, currentConfig, isVisible]);
};
