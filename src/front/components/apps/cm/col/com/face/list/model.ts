import { CmComWid } from '../../../../../../../../back/apps/cm/Cm.enums';
import { Com } from '../../Com';
import { ComFaceInheritProps } from '../ComFace.model';

export interface IComFaceList extends ComFaceInheritProps {
  ccomw?: CmComWid;
  isNeedRenderingDelay?: boolean;
}
