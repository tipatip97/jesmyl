import { CmComWid } from '../../../../../../../../back/apps/cm/Cm.enums';
import { ComFaceInheritProps } from '../ComFace.model';

export interface IComFaceList extends ComFaceInheritProps {
  ccomw?: CmComWid | NaN;
  isNeedRenderingDelay?: boolean;
}
