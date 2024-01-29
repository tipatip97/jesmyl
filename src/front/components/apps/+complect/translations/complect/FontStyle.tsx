import Dropdown from '../../../../../complect/dropdown/Dropdown';
import { DropdownItem } from '../../../../../complect/dropdown/Dropdown.model';
import { ScreenTranslationPartialConfigProps } from './model';

export enum ScreenTranslateCurrentConfigTypeFontStyle {
  Italic = 'italic',
  None = 'none',
}

const items: DropdownItem<ScreenTranslateCurrentConfigTypeFontStyle>[] = [
  {
    id: ScreenTranslateCurrentConfigTypeFontStyle.None,
    title: 'Обычный',
  },
  {
    id: ScreenTranslateCurrentConfigTypeFontStyle.Italic,
    title: 'Наклон',
  },
];

type Props = ScreenTranslationPartialConfigProps<{ fontStyle?: ScreenTranslateCurrentConfigTypeFontStyle }>;

export const ScreenTranslateConfigurationFontStyle = ({ config, updateConfig }: Props) => {
  return (
    <>
      <div className="flex flex-gap flex-max">
        Стиль текста
        <Dropdown
          id={config.fontStyle}
          items={items}
          onSelectId={fontStyle => updateConfig({ fontStyle })}
        />
      </div>
    </>
  );
};
