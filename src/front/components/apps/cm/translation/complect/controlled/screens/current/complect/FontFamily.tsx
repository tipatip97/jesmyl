import { FontFamilySelector } from '../../../../../../../../index/parts/actions/files/complect/FontFamilySelector';
import { CmTranslationConfigsRef } from '../../../hooks/configs';
import { TranslationScreenConfig } from '../../../model';

export const CmTranslateCurrentScreenConfigurationFontFamily = ({
  configsStateRef,
  currentConfig,
}: {
  configsStateRef: CmTranslationConfigsRef;
  currentConfig: TranslationScreenConfig;
}) => {
  return (
    <>
      <div className="flex flex-gap">
        Шрифт
        <FontFamilySelector
          fontFamily={currentConfig.fontFamily}
          onSelect={fontFamily => configsStateRef.current.updateConfig({ fontFamily })}
        />
      </div>
    </>
  );
};
