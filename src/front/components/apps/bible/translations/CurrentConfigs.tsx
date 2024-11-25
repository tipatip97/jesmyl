import { useCallback } from 'react';
import { ScreenTranslateConfigurationBackground } from '../../+complect/translations/complect/Background';
import { ScreenTranslateConfigurationColor } from '../../+complect/translations/complect/Color';
import { ScreenTranslateConfigurationDisplay } from '../../+complect/translations/complect/Display';
import { ScreenTranslateConfigurationFontFamily } from '../../+complect/translations/complect/FontFamily';
import { ScreenTranslateConfigurationFontStyle } from '../../+complect/translations/complect/FontStyle';
import { ScreenTranslateConfigurationFontWeight } from '../../+complect/translations/complect/FontWeight';
import { ScreenTranslateConfigurationNameChanger } from '../../+complect/translations/complect/NameChanger';
import { ScreenTranslateConfigurationOpacity } from '../../+complect/translations/complect/Opacity';
import { ScreenTranslateConfigurationTextAlign } from '../../+complect/translations/complect/TextAlign';
import { ExpandableContent } from '../../../../complect/expand/ExpandableContent';
import { useActualRef } from '../../../../complect/useActualRef';
import { useDebounceAction } from '../../../../complect/useDebounceAction';
import { useUpdateBibleCurrentTranslationConfig } from './hooks/update-config';
import { BibleTranslationScreenConfig } from './model';

interface Props {
  currentConfig: BibleTranslationScreenConfig;
}

export default function BibleTranslateCurrentScreenConfigurations({ currentConfig }: Props) {
  const updateConfig = useUpdateBibleCurrentTranslationConfig();
  const update = useDebounceAction(updateConfig);
  const configRef = useActualRef(currentConfig);

  const putUpdateConfigInner = useCallback(
    <Area extends 'address' | 'insertedtext' | 'textinbrackets'>(area: Area) =>
      (configInner: Partial<BibleTranslationScreenConfig[Area]>) => {
        update({ ...configRef.current, [area]: { ...configRef.current[area], ...configInner } });
      },
    [configRef, update],
  );

  return (
    <>
      <ScreenTranslateConfigurationNameChanger />
      <ScreenTranslateConfigurationColor
        config={currentConfig}
        updateConfig={update}
      />
      <ScreenTranslateConfigurationFontStyle
        config={currentConfig}
        updateConfig={updateConfig}
      />
      <ScreenTranslateConfigurationFontWeight
        config={currentConfig}
        updateConfig={updateConfig}
      />
      <ScreenTranslateConfigurationTextAlign
        config={currentConfig}
        updateConfig={updateConfig}
      />
      <ScreenTranslateConfigurationFontFamily
        config={currentConfig}
        updateConfig={updateConfig}
      />
      <ScreenTranslateConfigurationBackground
        config={currentConfig}
        updateConfig={update}
      />
      {currentConfig.insertedtext && (
        <ExpandableContent title="Вставка">
          <div className="margin-gap-l">
            <ScreenTranslateConfigurationColor
              config={currentConfig.insertedtext}
              updateConfig={putUpdateConfigInner('insertedtext')}
            />
            <ScreenTranslateConfigurationFontStyle
              config={currentConfig.insertedtext}
              updateConfig={putUpdateConfigInner('insertedtext')}
            />
            <ScreenTranslateConfigurationOpacity
              config={currentConfig.insertedtext}
              updateConfig={putUpdateConfigInner('insertedtext')}
            />
            <ScreenTranslateConfigurationDisplay
              config={currentConfig.insertedtext}
              updateConfig={putUpdateConfigInner('insertedtext')}
            />
          </div>
        </ExpandableContent>
      )}
      {currentConfig.textinbrackets && (
        <ExpandableContent title="Текст в [скобках]">
          <div className="margin-gap-l">
            <ScreenTranslateConfigurationColor
              config={currentConfig.textinbrackets}
              updateConfig={putUpdateConfigInner('textinbrackets')}
            />
            <ScreenTranslateConfigurationFontStyle
              config={currentConfig.textinbrackets}
              updateConfig={putUpdateConfigInner('textinbrackets')}
            />
            <ScreenTranslateConfigurationOpacity
              config={currentConfig.textinbrackets}
              updateConfig={putUpdateConfigInner('textinbrackets')}
            />
            <ScreenTranslateConfigurationDisplay
              config={currentConfig.textinbrackets}
              updateConfig={putUpdateConfigInner('textinbrackets')}
            />
          </div>
        </ExpandableContent>
      )}
      <ExpandableContent title="Ссылка">
        <div className="margin-gap-l">
          <ScreenTranslateConfigurationColor
            config={currentConfig.address}
            updateConfig={putUpdateConfigInner('address')}
          />
          <ScreenTranslateConfigurationFontStyle
            config={currentConfig.address}
            updateConfig={putUpdateConfigInner('address')}
          />
          <ScreenTranslateConfigurationBackground
            config={currentConfig.address}
            updateConfig={putUpdateConfigInner('address')}
          />
          <ScreenTranslateConfigurationTextAlign
            config={currentConfig.address}
            updateConfig={putUpdateConfigInner('address')}
          />
          <ScreenTranslateConfigurationFontFamily
            config={currentConfig.address}
            updateConfig={putUpdateConfigInner('address')}
          />
        </div>
      </ExpandableContent>
    </>
  );
}
