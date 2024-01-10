import { CmTranslationConfigsRef } from '../../hooks/configs';
import { TranslationScreenConfig } from '../../model';
import { CmTranslateCurrentScreenConfigurationBackground } from './complect/Background';
import { CmTranslateCurrentScreenConfigurationColor } from './complect/Color';
import { CmTranslateCurrentScreenConfigurationFontFamily } from './complect/FontFamily';
import { CmTranslateCurrentScreenConfigurationName } from './complect/Name';
import { CmTranslateCurrentScreenConfigurationTextAlign } from './complect/TextAlign';
import { CmTranslateCurrentScreenConfigurationType } from './complect/Type';

export const CmTranslateCurrentScreenConfigurations = ({
  configsStateRef,
  currentConfig,
}: {
  configsStateRef: CmTranslationConfigsRef;
  currentConfig: TranslationScreenConfig;
}) => {
  return (
    <>
      <CmTranslateCurrentScreenConfigurationName
        configsStateRef={configsStateRef}
        currentConfig={currentConfig}
      />
      <CmTranslateCurrentScreenConfigurationColor
        configsStateRef={configsStateRef}
        currentConfig={currentConfig}
      />
      <CmTranslateCurrentScreenConfigurationType
        configsStateRef={configsStateRef}
        currentConfig={currentConfig}
      />
      <CmTranslateCurrentScreenConfigurationTextAlign
        configsStateRef={configsStateRef}
        currentConfig={currentConfig}
      />
      <CmTranslateCurrentScreenConfigurationFontFamily
        configsStateRef={configsStateRef}
        currentConfig={currentConfig}
      />
      <CmTranslateCurrentScreenConfigurationBackground
        configsStateRef={configsStateRef}
        currentConfig={currentConfig}
      />
    </>
  );
};
