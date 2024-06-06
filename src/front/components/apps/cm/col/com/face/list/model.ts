import { Com } from '../../Com';
import { ComFaceInheritProps } from '../ComFace.model';

export interface IComFaceList extends ComFaceInheritProps {
  ccom?: Com;
  isNeedRenderingDelay?: boolean;
}
