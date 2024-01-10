import { BackgroundSelector } from '../../../../../../../../index/parts/actions/files/complect/BackgroundSelector';
import { CmTranslationConfigsRef } from '../../../hooks/configs';
import { TranslationScreenConfig } from '../../../model';

export const CmTranslateCurrentScreenConfigurationBackground = ({
  configsStateRef,
  currentConfig,
}: {
  configsStateRef: CmTranslationConfigsRef;
  currentConfig: TranslationScreenConfig;
}) => {
  return (
    <>
      <div className="flex flex-gap">
        Фон
        <BackgroundSelector
          background={currentConfig.background}
          onSelect={background => configsStateRef.current.updateConfig({ background })}
        />
      </div>
    </>
  );
};
