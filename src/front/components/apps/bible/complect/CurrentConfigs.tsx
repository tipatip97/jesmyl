import { useCallback } from 'react';
import { ScreenTranslateConfigurationBackground } from '../../+complect/translations/complect/Background';
import { ScreenTranslateConfigurationColor } from '../../+complect/translations/complect/Color';
import { ScreenTranslateConfigurationFontFamily } from '../../+complect/translations/complect/FontFamily';
import { ScreenTranslateConfigurationNameChanger } from '../../+complect/translations/complect/NameChanger';
import { ScreenTranslateConfigurationTextAlign } from '../../+complect/translations/complect/TextAlign';
import { ScreenTranslateConfigurationType } from '../../+complect/translations/complect/Type';
import { ExpandableContent } from '../../../../complect/expand/ExpandableContent';
import { useActualRef } from '../../../../complect/useActualRef';
import { useDebounceAction } from '../../../../complect/useDebounceAction';
import { useUpdateBibleCurrentTranslationConfig } from './hooks/update-config';
import { BibleTranslationScreenConfig } from './model';

interface Props {
  currentConfig: BibleTranslationScreenConfig;
}

export const BibleTranslateCurrentScreenConfigurations = ({ currentConfig }: Props) => {
  const updateConfig = useUpdateBibleCurrentTranslationConfig();
  const update = useDebounceAction(updateConfig);
  const configRef = useActualRef(currentConfig);

  const updateConfigAddress = useCallback(
    (configAddress: Partial<BibleTranslationScreenConfig['address']>) => {
      update({ ...configRef.current, address: { ...configRef.current.address, ...configAddress } });
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
      <ScreenTranslateConfigurationType
        config={currentConfig}
        updateConfig={update}
      />
      <ScreenTranslateConfigurationTextAlign
        config={currentConfig}
        updateConfig={update}
      />
      <ScreenTranslateConfigurationFontFamily
        config={currentConfig}
        updateConfig={update}
      />
      <ScreenTranslateConfigurationBackground
        config={currentConfig}
        updateConfig={update}
      />
      <ExpandableContent title="Ссылка">
        <div className="margin-gap-l">
          <ScreenTranslateConfigurationColor
            config={currentConfig.address}
            updateConfig={updateConfigAddress}
          />
          <ScreenTranslateConfigurationBackground
            config={currentConfig.address}
            updateConfig={updateConfigAddress}
          />
          <ScreenTranslateConfigurationTextAlign
            config={currentConfig.address}
            updateConfig={updateConfigAddress}
          />
          <ScreenTranslateConfigurationFontFamily
            config={currentConfig.address}
            updateConfig={updateConfigAddress}
          />
        </div>
      </ExpandableContent>
    </>
  );
};
