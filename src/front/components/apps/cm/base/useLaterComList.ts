import { useCallback, useEffect, useMemo } from 'react';
import { useAtom } from '../../../../complect/atoms';
import { useActualRef } from '../../../../complect/useActualRef';
import { Com } from '../col/com/Com';
import { Cols } from '../cols/Cols';
import { useCols } from '../cols/useCols';
import { cmMolecule } from '../molecules';

let laterComs: Com[] | und;
const setLaterComs = (cols: Cols, list: number[]) =>
  (laterComs = list.map(comw => cols.coms.find(com => com.wid === comw)).filter(com => com) as Com[]);

const laterComwListAtom = cmMolecule.select(s => s.laterComwList);

export default function useLaterComList({ maxStack = 4 } = {}) {
  const [list, setList] = useAtom(laterComwListAtom);
  const listRef = useActualRef(list);
  const cols = useCols();

  if (cols && laterComs == null) setLaterComs(cols, listRef.current);
  useEffect(() => {
    cols && setLaterComs(cols, listRef.current);
  }, [cols, listRef]);

  const addLaterComw = useCallback(
    (comw: number) => {
      const newList = [comw].concat(
        listRef.current.filter(laterComw => laterComw !== comw).filter((_, laterComwi) => maxStack - 1 > laterComwi),
      );
      setList(newList);
    },
    [listRef, maxStack, setList],
  );

  return useMemo(
    () => ({
      laterComs,
      updateLaterComwList: setList,
      addLaterComw,
    }),
    [addLaterComw, setList],
  );
}
