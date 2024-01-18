import Dropdown from '../../../../../complect/dropdown/Dropdown';
import { DropdownItem } from '../../../../../complect/dropdown/Dropdown.model';
import { ScreenTranslationPartialConfigProps } from './model';

export enum ScreenTranslateCurrentConfigTypeTextAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
  Justify = 'justify',
}

const items: DropdownItem<ScreenTranslateCurrentConfigTypeTextAlign>[] = [
  {
    id: ScreenTranslateCurrentConfigTypeTextAlign.Left,
    title: 'Лево',
  },
  {
    id: ScreenTranslateCurrentConfigTypeTextAlign.Center,
    title: 'Центр',
  },
  {
    id: ScreenTranslateCurrentConfigTypeTextAlign.Right,
    title: 'Право',
  },
  {
    id: ScreenTranslateCurrentConfigTypeTextAlign.Justify,
    title: 'Ширина',
  },
];

type Props = ScreenTranslationPartialConfigProps<{ textAlign: ScreenTranslateCurrentConfigTypeTextAlign }>;

export const ScreenTranslateConfigurationTextAlign = ({ config, updateConfig }: Props) => {
  return (
    <>
      <div className="flex flex-gap flex-max">
        Выравнивание
        <Dropdown
          id={config.textAlign}
          items={items}
          onSelectId={textAlign => updateConfig({ textAlign })}
        />
      </div>
    </>
  );
};
