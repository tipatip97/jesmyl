import { ScreenTranslationPartialConfigProps } from './model';

type Props = ScreenTranslationPartialConfigProps<{ color: string }>;

export const ScreenTranslateConfigurationColor = ({ config, updateConfig, title = 'Цвет шрифта' }: Props) => {
  return (
    <>
      <div className="flex flex-gap flex-max">
        {title}
        <input
          type="color"
          value={config.color}
          onChange={event => updateConfig({ color: event.target.value })}
        />
      </div>
    </>
  );
};
