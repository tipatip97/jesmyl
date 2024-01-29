import { CSSProperties, useMemo } from 'react';
import { useScreenTranslationPositionsStyles } from '../../../../+complect/translations/complect/hooks/position-styles';
import { useScreenTranslationTextStyles } from '../../../../+complect/translations/complect/hooks/text-styles';
import { useIsScreenTranslationTextVisible } from '../../../../+complect/translations/hooks/is-visible';
import { BibleTranslationScreenConfig } from '../../model';

export const screenGridArea = 'screen-grid-area';

const packInnerStyles = <Config extends Partial<Record<'insertedtext' | 'textinbrackets', {}>>>(
  area: 'insertedtext' | 'textinbrackets',
  currentConfig: Config,
) => {
  return Object.entries(currentConfig[area] ?? {}).reduce((innerStyles, [key, val]) => {
    if (val == null) return innerStyles;
    innerStyles[('--' + area + '-' + key) as never] = ('' + val) as never;
    return innerStyles;
  }, {});
};

export const useGetBibleScreenTranslationScreenStyle = (currentConfig: BibleTranslationScreenConfig | und) => {
  const isVisible = useIsScreenTranslationTextVisible();
  const positions = useScreenTranslationPositionsStyles(currentConfig?.screen);
  const textStyles = useScreenTranslationTextStyles(currentConfig);

  return useMemo((): CSSProperties => {
    if (currentConfig === undefined)
      return {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        top: '5%',
        left: '5%',
        width: '90%',
        height: '90%',
      };

    return {
      ...positions,
      ...textStyles,
      ...packInnerStyles('insertedtext', currentConfig),
      ...packInnerStyles('textinbrackets', currentConfig),
      gridArea: screenGridArea,
      textDecoration: 'italic',

      color: isVisible ? currentConfig.color : 'transparent',
    };
  }, [currentConfig, isVisible, positions, textStyles]);
};
