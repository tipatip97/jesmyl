import { CSSProperties, useMemo } from 'react';
import { useScreenTranslationBackgroundStyles } from '../../../../../../+complect/translations/complect/hooks/background-styles';
import { CmTranslationScreenConfig } from '../../model';

export const useGetCmScreenTranslationWrapperStyle = (currentConfig: CmTranslationScreenConfig | und) => {
  const background = useScreenTranslationBackgroundStyles(currentConfig);

  return useMemo((): CSSProperties => {
    return currentConfig !== undefined
      ? {
          background,
        }
      : {};
  }, [background, currentConfig]);
};
