import { useMemo } from 'react';
import { CSSProperties } from 'styled-components';
import { useScreenTranslationBackgroundStyles } from '../../../../+complect/translations/complect/hooks/background-styles';
import { useIsScreenTranslationTextVisible } from '../../../../+complect/translations/hooks/is-visible';
import { BibleTranslationScreenConfig } from '../../model';

export const addressGridArea = 'address-grid-area';

export const useGetBibleScreenTranslationAddressStyle = (currentConfig: BibleTranslationScreenConfig | und) => {
  const isVisible = useIsScreenTranslationTextVisible();
  const background = useScreenTranslationBackgroundStyles(currentConfig?.address);

  return useMemo((): CSSProperties => {
    if (currentConfig === undefined) return {};

    return {
      position: 'relative',
      color: currentConfig.address.color,
      gridArea: addressGridArea,
      bottom: 0,

      display: isVisible ? undefined : 'none',
      background,
      zIndex: 10,
    };
  }, [background, currentConfig, isVisible]);
};
