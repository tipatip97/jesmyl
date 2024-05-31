import IconCheckbox from '../../../../../complect/the-icon/IconCheckbox';
import { ScreenTranslationPartialConfigProps } from './model';

export type ScreenTranslateConfigTypeDisplay = 'none' | 'initial';

type Props = ScreenTranslationPartialConfigProps<{ display?: ScreenTranslateConfigTypeDisplay }>;

export const ScreenTranslateConfigurationDisplay = ({ config, updateConfig }: Props) => {
  return (
    <>
      <div className="flex flex-gap flex-max">
        Видимость
        <IconCheckbox
          checked={config.display !== 'none'}
          onChange={() => updateConfig({ display: config.display === 'initial' ? 'none' : 'initial' })}
        />
      </div>
    </>
  );
};
