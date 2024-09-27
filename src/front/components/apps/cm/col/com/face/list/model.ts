import { CmComWid } from '../../../../../../../../back/apps/cm/Cm.enums';
import { Com } from '../../Com';
import { ComFaceInheritProps } from '../ComFace.model';

export interface IComFaceList extends ComFaceInheritProps {
  ccomw?: CmComWid | NaN;
  isNeedRenderingDelay?: boolean;
  importantOnClick?: (com: Com, comi: number, event: MouseEvent) => void;
  selectable?: boolean;
}
