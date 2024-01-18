import { CSSProperties, useMemo } from 'react';
import { useScreenTranslationPositionsStyles } from '../../../../../../+complect/translations/complect/hooks/position-styles';
import { useScreenTranslationTextStyles } from '../../../../../../+complect/translations/complect/hooks/text-styles';
import { useIsScreenTranslationTextVisible } from '../../../../../../+complect/translations/hooks/is-visible';
import { CmTranslationScreenConfig } from '../../model';

export const useGetCmScreenTranslationStyle = (currentConfig: CmTranslationScreenConfig | und) => {
  const isVisible = useIsScreenTranslationTextVisible();
  const textStyles = useScreenTranslationTextStyles(currentConfig);
  const position = useScreenTranslationPositionsStyles(currentConfig);

  return useMemo((): CSSProperties => {
    return currentConfig !== undefined
      ? {
          ...textStyles,
          ...position,

          color: isVisible ? currentConfig.color : 'transparent',
        }
      : {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        };
  }, [currentConfig, isVisible, position, textStyles]);
};
