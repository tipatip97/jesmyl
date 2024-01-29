import { useEffect, useState } from 'react';
import { ScreenTranslationPartialConfigProps } from './model';

type Props = ScreenTranslationPartialConfigProps<{ opacity?: number }>;

export const ScreenTranslateConfigurationOpacity = ({ config, updateConfig }: Props) => {
  const [opacity, setValue] = useState(config.opacity ?? 1);

  useEffect(() => updateConfig({ opacity }), [opacity, updateConfig]);

  return (
    <>
      <div className="flex flex-gap flex-max">
        Прозрачность
        <input
          type="range"
          value={opacity}
          max={1}
          min={0}
          step={0.01}
          onChange={event => setValue(+event.target.value)}
        />
      </div>
    </>
  );
};
