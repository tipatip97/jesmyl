import Dropdown from '../../../../../../../../../complect/dropdown/Dropdown';
import { DropdownItem } from '../../../../../../../../../complect/dropdown/Dropdown.model';
import { useDebounceAction } from '../../../../../../../../../complect/useDebounceAction';
import { CmTranslationConfigsRef } from '../../../hooks/configs';
import { TrnslationScreenConfig } from '../../../model';

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
  currentConfig: TrnslationScreenConfig;
}) => {
  const update = useDebounceAction(configsStateRef.current.updateConfig);

  return (
    <>
      <div className="flex flex-gap flex-max">
        Выравнивание
        <Dropdown
          id={currentConfig.textAlign}
          items={items}
          onSelectId={textAlign => update({ textAlign })}
        />
      </div>
    </>
  );
};
