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
      (cols &&
        (selectedComws.map((comw) => cols.coms.find((com) => com.wid === comw)).filter((com) => com) as Com[])) ||
      []
    );
  }, [cols, selectedComws]);

  const ret = {
    selectedComws,
    takeSelectedComs,
    selectedComPosition: (com: Com) => selectedComws.indexOf(com.wid) + 1,
    updateSelectedComws: (selectedComws: number[]) => setAppRouteData({ selectedComws }),
    clearSelectedComws: () => ret.updateSelectedComws([]),
    toggleSelectedCom: (com: Com) => {
      ret.updateSelectedComws(
        ret.selectedComPosition(com) ? selectedComws.filter((comw) => com.wid !== comw) : [...selectedComws, com.wid],
      );
    },
  };
  return ret;
}
