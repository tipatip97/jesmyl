import { useCallback } from 'react';
import { Com } from '../col/com/Com';
import { useCols } from '../cols/useCols';
import useCmNav from './useCmNav';

const emptyArr: [] = [];

export default function useSelectedComs() {
  const cols = useCols();
  const {
    appRouteData: { selectedComws = emptyArr },
    setAppRouteData,
  } = useCmNav();
  const takeSelectedComs = useCallback(() => {
    return (
      (cols && (selectedComws.map(comw => cols.coms.find(com => com.wid === comw)).filter(com => com) as Com[])) || []
    );
  }, [cols, selectedComws]);

  const ret = {
    selectedComws,
    takeSelectedComs,
    selectedComPosition: (comWid: number) => selectedComws.indexOf(comWid) + 1,
    updateSelectedComws: (selectedComws: number[]) => setAppRouteData({ selectedComws }),
    clearSelectedComws: () => ret.updateSelectedComws([]),
    toggleSelectedCom: (comWid: number) => {
      ret.updateSelectedComws(
        ret.selectedComPosition(comWid) ? selectedComws.filter(comw => comWid !== comw) : [...selectedComws, comWid],
      );
    },
  };
  return ret;
}
