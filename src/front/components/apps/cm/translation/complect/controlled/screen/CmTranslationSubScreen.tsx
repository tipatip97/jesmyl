import { useCallback } from 'react';
import { ScreenTranslationPositionConfig } from '../../../../../+complect/translations/complect/model';
import { ScreenTranslateCurrentPositionConfigurators } from '../../../../../+complect/translations/complect/position/Position';
import { useApplyScreenFontFamilyEffect } from '../../../../../+complect/translations/hooks/set-font-family';
import FontSizeContain from '../../../../base/font-size-contain/FontSizeContain';
import { FontSizeContainProps } from '../../../../base/font-size-contain/FontSizeContain.model';
import { CmTranslationScreenConfig, CmTranslationTextScreenConfig } from '../model';
import { cmTranslationSubConfigNext } from '../screens/defaults';
import { useGetCmScreenTranslationStyle } from './hooks/get-style';

interface Props {
  config: CmTranslationTextScreenConfig;
  win?: Window;
  text: string;
  subUpdates: string;
  isTech: boolean | und;
  wrapperRef: React.RefObject<HTMLDivElement>;
  parentConfig: CmTranslationScreenConfig;
  updateConfig: (config: Partial<CmTranslationScreenConfig> | null) => void;
}

export const CmTranslationSubScreen = ({
  config,
  win,
  text,
  subUpdates,
  isTech,
  parentConfig,
  updateConfig,
  wrapperRef,
}: Props & Partial<FontSizeContainProps>) => {
  const style = useGetCmScreenTranslationStyle(config);

  const updateSubConfig = useCallback(
    (config: Partial<ScreenTranslationPositionConfig>) => {
      updateConfig({
        ...parentConfig,
        subs: {
          ...parentConfig.subs,
          next: {
            ...cmTranslationSubConfigNext,
            ...parentConfig.subs?.next,
            ...config,
          },
        },
      });
    },
    [parentConfig, updateConfig],
  );

  useApplyScreenFontFamilyEffect(config?.fontFamily, win);

  return (
    <>
      <FontSizeContain
        className="inline-flex white-pre-children"
        style={style}
        html={text}
        subUpdate={subUpdates + config.width + config.height}
      />
      {isTech && config && (
        <ScreenTranslateCurrentPositionConfigurators
          config={config}
          updateConfig={updateSubConfig}
          wrapperRef={wrapperRef}
        />
      )}
    </>
  );
};
