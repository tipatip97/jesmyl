import { FontFamilySelector } from '../../../../index/parts/actions/files/complect/FontFamilySelector';
import { ScreenTranslationPartialConfigProps } from './model';

type Props = ScreenTranslationPartialConfigProps<{ fontFamily?: string }>;

export const ScreenTranslateConfigurationFontFamily = ({ config, updateConfig }: Props) => {
  return (
    <>
      <div className="flex flex-gap">
        Шрифт
        <FontFamilySelector
          fontFamily={config.fontFamily}
          onSelect={fontFamily => updateConfig({ fontFamily })}
        />
      </div>
    </>
  );
};
