import Dropdown from '../../../../../complect/dropdown/Dropdown';
import { DropdownItem } from '../../../../../complect/dropdown/Dropdown.model';
import { ScreenTranslationPartialConfigProps } from './model';

export enum ScreenTranslateConfigTypeFontWeight {
  Normal = 'normal',
  Bold = 'bold',
  Thin = 'lighter',
}

let items: DropdownItem<ScreenTranslateConfigTypeFontWeight>[] = [
  {
    id: ScreenTranslateConfigTypeFontWeight.Normal,
    title: 'Нормальный',
  },
  {
    id: ScreenTranslateConfigTypeFontWeight.Bold,
    title: 'Жирный',
  },
  {
    id: ScreenTranslateConfigTypeFontWeight.Thin,
    title: 'Тонкий',
  },
];

type Props = ScreenTranslationPartialConfigProps<{ fontWeight: ScreenTranslateConfigTypeFontWeight }>;

export const ScreenTranslateConfigurationFontWeight = ({ config, updateConfig }: Props) => {
  return (
    <>
      <div className="flex flex-gap flex-max">
        Тип
        <Dropdown
          id={config.fontWeight}
          items={items}
          onSelectId={fontWeight => updateConfig({ fontWeight })}
        />
      </div>
    </>
  );
};
