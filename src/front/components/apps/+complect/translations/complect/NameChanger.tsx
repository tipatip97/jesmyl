import { useScreenTranslationCurrentConfig, useScreenTranslationCurrentConfigi } from '../hooks/configs';
import { useScreenTranslationWindows } from '../hooks/windows';
import { useUpdateScreenTranslationConfig } from '../hooks/with-config';

export const ScreenTranslateConfigurationNameChanger = () => {
  const config = useScreenTranslationCurrentConfig();
  const updateConfig = useUpdateScreenTranslationConfig();
  const currentConfigi = useScreenTranslationCurrentConfigi();
  const windows = useScreenTranslationWindows();

  if (config == null) return null;

  return (
    <div className="flex flex-gap">
      Название
      <input
        value={config.title}
        className="bgcolor--2"
        onChange={event => {
          const title = event.target.value;
          updateConfig(currentConfigi, { title });
          if (windows[currentConfigi] == null) return;
          windows[currentConfigi]!.document.title = title;
        }}
      />
    </div>
  );
};
