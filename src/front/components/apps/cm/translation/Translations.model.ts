import { FontSizeContainPropsPosition } from '../base/font-size-contain/FontSizeContain.model';

export interface TranslationScreenProps {
  updater?: (resizer: () => void) => void;
  position?: FontSizeContainPropsPosition;
}
