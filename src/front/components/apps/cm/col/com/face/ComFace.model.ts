import { ReactNode } from 'react';
import useSelectedComs from '../../../base/useSelectedComs';
import { Com } from '../Com';

export interface ComFaceInheritProps {
  groupClass?: string;
  comDescription?: (com: Com, comi: number) => ReactNode;
  isPutCcomFaceOff?: boolean;
}

export interface ListComFaceProps {
  selectedComPosition: ReturnType<typeof useSelectedComs>['selectedComPosition'];
  toggleSelectedCom: ReturnType<typeof useSelectedComs>['toggleSelectedCom'];
}
