import { FontSizeContainProps } from '../../../base/font-size-contain/FontSizeContain.model';

export type TranslationScreenProps = Partial<FontSizeContainProps> & {
  backColor?: string;
  screeni?: number;
  win?: Window;
  proportion?: number;
  canShowLimits?: boolean;
};
