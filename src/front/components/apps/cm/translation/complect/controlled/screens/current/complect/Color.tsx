import { useDebounceAction } from '../../../../../../../../../complect/useDebounceAction';
import { CmTranslationConfigsRef } from '../../../hooks/configs';
import { TranslationScreenConfig } from '../../../model';

export const CmTranslateCurrentScreenConfigurationColor = ({
  configsStateRef,
  currentConfig,
}: {
  configsStateRef: CmTranslationConfigsRef;
  currentConfig: TranslationScreenConfig;
}) => {
  const update = useDebounceAction(configsStateRef.current.updateConfig);

  return (
    <>
      <div className="flex flex-gap flex-max">
        Цвет шрифта
        <input
          type="color"
          value={currentConfig.color}
          onChange={event => update({ color: event.target.value })}
        />
      </div>
    </>
  );
};
