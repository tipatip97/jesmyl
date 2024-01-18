import EvaCheckbox from '../../../../../complect/eva-icon/EvaCheckbox';
import { BackgroundSelector } from '../../../../index/parts/actions/files/complect/BackgroundSelector';
import { ScreenTranslationBackgroundConfigs, ScreenTranslationPartialConfigProps } from './model';

type Props = ScreenTranslationPartialConfigProps<ScreenTranslationBackgroundConfigs>;

export const ScreenTranslateConfigurationBackground = ({ config, updateConfig, title = 'Фон' }: Props) => {
  return (
    <>
      <div className="flex flex-gap">
        {title}
        <EvaCheckbox
          checked={config.isWithBackground}
          onChange={() => updateConfig({ isWithBackground: !config.isWithBackground })}
        />
        <BackgroundSelector
          background={config.backgroundInteractive}
          onSelect={backgroundInteractive => updateConfig({ backgroundInteractive })}
        />
        <input
          className="bgcolor--3 color--1"
          value={config.background}
          onChange={event => updateConfig({ background: event.target.value })}
        />
        <input
          type="color"
          value={config.backgroundColor}
          onChange={event => updateConfig({ backgroundColor: event.target.value })}
        />
      </div>
    </>
  );
};
