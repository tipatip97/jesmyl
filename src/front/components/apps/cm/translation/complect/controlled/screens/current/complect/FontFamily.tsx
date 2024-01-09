import { FontFamilySelector } from '../../../../../../../../index/parts/actions/files/complect/FontFamilySelector';
import { CmTranslationConfigsRef } from '../../../hooks/configs';
import { TrnslationScreenConfig } from '../../../model';

export const CmTranslateCurrentScreenConfigurationFontFamily = ({
  configsStateRef,
  currentConfig,
}: {
  configsStateRef: CmTranslationConfigsRef;
  currentConfig: TrnslationScreenConfig;
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
