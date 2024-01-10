import Dropdown from '../../../../../../../../../complect/dropdown/Dropdown';
import { DropdownItem } from '../../../../../../../../../complect/dropdown/Dropdown.model';
import { CmTranslationConfigsRef } from '../../../hooks/configs';
import { TranslationScreenConfig } from '../../../model';

export enum CmTranslateCurrentScreenConfigurationTypeTextAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
  Justify = 'justify',
}

const items: DropdownItem<CmTranslateCurrentScreenConfigurationTypeTextAlign>[] = [
  {
    id: CmTranslateCurrentScreenConfigurationTypeTextAlign.Left,
    title: 'Лево',
  },
  {
    id: CmTranslateCurrentScreenConfigurationTypeTextAlign.Center,
    title: 'Центр',
  },
  {
    id: CmTranslateCurrentScreenConfigurationTypeTextAlign.Right,
    title: 'Право',
  },
  {
    id: CmTranslateCurrentScreenConfigurationTypeTextAlign.Justify,
    title: 'Ширина',
  },
];

export const CmTranslateCurrentScreenConfigurationTextAlign = ({
  configsStateRef,
  currentConfig,
}: {
  configsStateRef: CmTranslationConfigsRef;
  currentConfig: TranslationScreenConfig;
}) => {
  return (
    <>
      <div className="flex flex-gap flex-max">
        Выравнивание
        <Dropdown
          id={currentConfig.textAlign}
          items={items}
          onSelectId={textAlign => configsStateRef.current.updateConfig({ textAlign })}
        />
      </div>
    </>
  );
};
