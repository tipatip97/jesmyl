import { ReactNode } from 'react';
import useAbsoluteFloatPopup from '../../../../../../complect/absolute-popup/useAbsoluteFloatPopup';
import useSelectedComs from '../../../base/useSelectedComs';
import { Com } from '../Com';

export interface ComFaceInheritProps {
  importantOnClick?: (com: Com, comi: number) => void;
  groupClass?: string;
  selectable?: boolean;
  description?: (com: Com, comi: number) => ReactNode;
  isWithoutIds?: boolean;
}

export interface FreeComFaceProps {
  closeAbsoluteFloatPopup: ReturnType<typeof useAbsoluteFloatPopup>['closeAbsoluteFloatPopup'];
  openAbsoluteFloatPopup: ReturnType<typeof useAbsoluteFloatPopup>['openAbsoluteFloatPopup'];
  selectedComPosition: ReturnType<typeof useSelectedComs>['selectedComPosition'];
  toggleSelectedCom: ReturnType<typeof useSelectedComs>['toggleSelectedCom'];
}
