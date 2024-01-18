import { useCallback } from 'react';
import { ScreenTranslationPositionConfig } from '../../../../+complect/translations/complect/model';
import { ScreenTranslateCurrentPositionConfigurators } from '../../../../+complect/translations/complect/position/Position';
import { useScreenTranslationCurrentConfigi } from '../../../../+complect/translations/hooks/configs';
import { useBibleScreenTranslationConfig } from '../../hooks/configs';
import { useUpdateBibleCurrentTranslationConfig } from '../../hooks/update-config';

export const BibleTranslationScreenTechAddressContent = (props: {
  screeni: number | und;
  wrapperRef: React.RefObject<HTMLDivElement>;
}) => {
  const currentConfigi = useScreenTranslationCurrentConfigi();
  const updateConfig = useUpdateBibleCurrentTranslationConfig();
  const currentConfig = useBibleScreenTranslationConfig(props.screeni ?? currentConfigi);

  const updateConfigAddress = useCallback(
    (config: Partial<ScreenTranslationPositionConfig>) => {
      if (currentConfig) updateConfig({ ...currentConfig, address: { ...currentConfig.address, ...config } });
    },
    [currentConfig, updateConfig],
  );

  if (currentConfig === undefined) return;

  return (
    <>
      <ScreenTranslateCurrentPositionConfigurators
        config={currentConfig.address}
        updateConfig={updateConfigAddress}
        wrapperRef={props.wrapperRef}
      />
    </>
  );
};
