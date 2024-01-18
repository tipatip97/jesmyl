import { CSSProperties, useMemo } from 'react';
import { useScreenTranslationPositionsStyles } from '../../../../+complect/translations/complect/hooks/position-styles';
import { useIsScreenTranslationTextVisible } from '../../../../+complect/translations/hooks/is-visible';
import { BibleTranslationScreenConfig } from '../../model';
import { useScreenTranslationTextStyles } from '../../../../+complect/translations/complect/hooks/text-styles';

export const screenGridArea = 'screen-grid-area';

export const useGetBibleScreenTranslationScreenStyle = (currentConfig: BibleTranslationScreenConfig | und) => {
  const isVisible = useIsScreenTranslationTextVisible();
  const positions = useScreenTranslationPositionsStyles(currentConfig?.screen);
  const textStyles = useScreenTranslationTextStyles(currentConfig);

  return useMemo((): CSSProperties => {
    return currentConfig !== undefined
      ? {
          ...positions,
          ...textStyles,
          gridArea: screenGridArea,

          color: isVisible ? currentConfig.color : 'transparent',
        }
      : {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        };
  }, [currentConfig, isVisible, positions, textStyles]);
};
