import { useMemo } from 'react';
import { useNumComUpdates } from '../../atoms';
import useCmNav from '../../base/useCmNav';
import { useCols } from '../../cols/useCols';
import { Com } from './Com';

export function useCcom(topComw?: number): Com | und {
  useNumComUpdates();
  const cols = useCols();
  const cmNav = useCmNav();
  const comw = topComw ?? cmNav.appRouteData.ccomw;

  return useMemo(() => cols?.coms.find(com => com.wid === comw), [comw, cols]);
}
