import { ReactNode } from 'react';
import { FontSizeContainProps } from '../../../base/font-size-contain/FontSizeContain.model';

export type TranslationScreenProps = Partial<FontSizeContainProps> & {
  screeni?: number;
  win?: Window;
  proportion?: number;
  canShowLimits?: boolean;
  innerNode?: ReactNode;
};
