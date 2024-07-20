import useCmNav from '../../base/useCmNav';
import { CmCatWid } from '../../../../../../back/apps/cm/Cm.enums';
import { useCols } from '../../cols/useCols';
import { Cat } from './Cat';

export function useCcat(isTakeZeroCat?: boolean): Cat | nil {
  const { appRouteData } = useCmNav();
  const cols = useCols();

  return isTakeZeroCat
    ? cols?.cats.find(cat => CmCatWid.zero === cat.wid)
    : appRouteData.ccatw !== undefined
      ? cols?.cats.find(cat => appRouteData.ccatw === cat.wid)
      : undefined;
}
