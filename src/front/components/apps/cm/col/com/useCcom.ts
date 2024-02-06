import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../shared/store';
import useCmNav from '../../base/useCmNav';
import { useCols } from '../../cols/useCols';

const numComUpdatesSelector = (state: RootState) => state.cm.numComUpdates;

export function useCcom(topComw?: number) {
  useSelector(numComUpdatesSelector);
  const cols = useCols();
  const cmNav = useCmNav();
  const comw = topComw ?? cmNav.appRouteData.ccomw;

  return useMemo(() => cols?.coms.find(com => com.wid === comw), [comw, cols]);
}
