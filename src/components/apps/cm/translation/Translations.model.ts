import { FontSizeContainPropsPosition } from "../complect/font-size-contain/FontSizeContain.model";


export interface TranslationScreenProps {
    fontSizeContainId?: string;
    updater?: (resizer: (containerId?: string) => void) => void;
    position?: FontSizeContainPropsPosition;
}