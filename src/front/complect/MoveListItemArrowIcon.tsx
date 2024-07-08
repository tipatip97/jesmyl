import { IconArrowMoveDownRightStrokeRounded as ZerIcon } from './the-icon/icons/arrow-move-down-right';
import { IconArrowMoveUpRightStrokeRounded as SecIcon } from './the-icon/icons/arrow-move-up-right';

export const MoveListItemArrowIcon = (itemi: number) => (itemi === 0 ? ZerIcon : SecIcon);
