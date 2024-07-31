import { useCallback } from 'react';
import { CmComWid } from '../../../../../back/apps/cm/Cm.enums';
import { atom, useAtom } from '../../../../complect/atoms';
import { Com } from '../col/com/Com';
import { useCols } from '../cols/useCols';

const scomwsAtom = atom<CmComWid[]>([], 'cm', 'scomws');

export default function useSelectedComs() {
  const cols = useCols();

  const [selectedComws, setSelectedComws] = useAtom(scomwsAtom);
  const takeSelectedComs = useCallback(() => {
    return (
      (cols && (selectedComws.map(comw => cols.coms.find(com => com.wid === comw)).filter(com => com) as Com[])) || []
    );
  }, [cols, selectedComws]);

  const ret = {
    selectedComws,
    takeSelectedComs,
    selectedComPosition: (comWid: number) => selectedComws.indexOf(comWid) + 1,
    updateSelectedComws: (selectedComws: number[]) => setSelectedComws(selectedComws),
    clearSelectedComws: () => ret.updateSelectedComws([]),
    toggleSelectedCom: (comWid: number) => {
      ret.updateSelectedComws(
        ret.selectedComPosition(comWid) ? selectedComws.filter(comw => comWid !== comw) : [...selectedComws, comWid],
      );
    },
  };
  return ret;
}
