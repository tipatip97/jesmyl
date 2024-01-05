import { useActualRef } from '../../../../../../../complect/useActualRef';
import { useCmTranslationConfigs } from '../hooks/configs';
import { CmTranslateScreenConfigurationsFaceLine } from './complect/FaceLine';
import { CmTranslateCurrentScreenConfigurations } from './current/CurrentConfigs';

export const CmTranslateScreenConfigurations = () => {
  const configsState = useCmTranslationConfigs();
  const configsStateRef = useActualRef(configsState);

  return (
    <div className="margin-big-gap-t">
      <CmTranslateScreenConfigurationsFaceLine />
      {configsState.currentConfig && (
        <CmTranslateCurrentScreenConfigurations
          currentConfig={configsState.currentConfig}
          configsStateRef={configsStateRef}
        />
      )}
    </div>
  );
};
