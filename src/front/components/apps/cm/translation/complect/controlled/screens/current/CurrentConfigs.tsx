import { ScreenTranslateConfigurationBackground } from '../../../../../../+complect/translations/complect/Background';
import { ScreenTranslateConfigurationColor } from '../../../../../../+complect/translations/complect/Color';
import { ScreenTranslateConfigurationFontFamily } from '../../../../../../+complect/translations/complect/FontFamily';
import { ScreenTranslateConfigurationNameChanger } from '../../../../../../+complect/translations/complect/NameChanger';
import { ScreenTranslateConfigurationTextAlign } from '../../../../../../+complect/translations/complect/TextAlign';
import { ScreenTranslateConfigurationType } from '../../../../../../+complect/translations/complect/Type';
import { useDebounceAction } from '../../../../../../../../complect/useDebounceAction';
import { useUpdateCmCurrentTranslationConfig } from '../../hooks/update-config';
import { CmTranslationScreenConfig } from '../../model';

interface Props {
  currentConfig: CmTranslationScreenConfig;
}

export const CmTranslateCurrentScreenConfigurations = ({ currentConfig }: Props) => {
  const updateConfig = useUpdateCmCurrentTranslationConfig();
  const update = useDebounceAction(updateConfig);

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
    </>
  );
};
