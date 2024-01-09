import Dropdown from '../../../../../../../../../complect/dropdown/Dropdown';
import { DropdownItem } from '../../../../../../../../../complect/dropdown/Dropdown.model';
import { CmTranslationConfigsRef } from '../../../hooks/configs';
import { TrnslationScreenConfig } from '../../../model';

export enum CmTranslateCurrentScreenConfigurationTypeFontWeight {
  Normal = 'normal',
  Bold = 'bold',
  Thin = 'lighter',
}

let items: DropdownItem<CmTranslateCurrentScreenConfigurationTypeFontWeight>[] = [
  {
    id: CmTranslateCurrentScreenConfigurationTypeFontWeight.Normal,
    title: 'Нормальный',
  },
  {
    id: CmTranslateCurrentScreenConfigurationTypeFontWeight.Bold,
    title: 'Жирный',
  },
  {
    id: CmTranslateCurrentScreenConfigurationTypeFontWeight.Thin,
    title: 'Тонкий',
  },
];

export const CmTranslateCurrentScreenConfigurationType = ({
  configsStateRef,
  currentConfig,
}: {
  configsStateRef: CmTranslationConfigsRef;
  currentConfig: TrnslationScreenConfig;
}) => {
  return (
    <>
      <div className="flex flex-gap flex-max">
        Тип
        <Dropdown
          id={currentConfig.fontWeight}
          items={items}
          onSelectId={fontWeight => configsStateRef.current.updateConfig({ fontWeight })}
        />
      </div>
    </>
  );
};
