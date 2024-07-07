import { TranslationScreenProps } from '../../../../../+complect/translations/Translations.model';
import { useIsScreenTranslationTextVisible } from '../../../../../+complect/translations/atoms';
import {
  useGetScreenTranslationConfig,
  useScreenTranslationCurrentConfigi,
} from '../../../../../+complect/translations/hooks/configs';
import { useComTranslationBlock } from '../../../../atoms';
import { FontSizeContainProps } from '../../../../base/font-size-contain/FontSizeContain.model';
import { useCmCurrentComTexts } from '../../hooks/get-com-text';
import { useCmScreenTranslationConfig } from '../hooks/configs';
import { CmTranslationScreen } from './CmTranslationScreen';
import { useScreenWinResizeListen } from './hooks/win-resize-lesten';

const emptyArr: [] = [];

export const CmTranslationCurrentScreen = (props: TranslationScreenProps & Partial<FontSizeContainProps>) => {
  const getCurrentConfig = useGetScreenTranslationConfig();
  const currentConfigi = useScreenTranslationCurrentConfigi();
  const currentConfig = useCmScreenTranslationConfig(props.screeni ?? currentConfigi);
  const texts = useCmCurrentComTexts();
  const [currTexti] = useComTranslationBlock();
  const forceUpdates = useScreenWinResizeListen(props.win);
  const isVisible = useIsScreenTranslationTextVisible();

  return (
    <CmTranslationScreen
      {...props}
      cmConfig={currentConfig}
      texti={currTexti}
      texts={texts ?? emptyArr}
      isVisible={isVisible}
      subUpdates={'' + currentConfigi + forceUpdates + getCurrentConfig(currentConfigi)?.proportion}
    />
  );
};
