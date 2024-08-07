import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CmComWid } from '../../../../../back/apps/cm/Cm.enums';
import { atom, useAtom } from '../../../../complect/atoms';
import mylib from '../../../../complect/my-lib/MyLib';
import { Com } from '../col/com/Com';
import { useCols } from '../cols/useCols';

const scomwsAtom = atom<CmComWid[]>([], 'cm', 'scomws');

export default function useSelectedComs() {
  const cols = useCols();
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedComws, setSelectedComws] = useAtom(scomwsAtom);
  const takeSelectedComs = useCallback(() => {
    return (
      (cols && (selectedComws.map(comw => cols.coms.find(com => com.wid === comw)).filter(com => com) as Com[])) || []
    );
  }, [cols, selectedComws]);

  useEffect(() => {
    const scomws = searchParams.get('scomws');
    if (scomws === null) return;

    try {
      const comws = JSON.parse(scomws);
      if (mylib.isArr(comws) && !comws.some(it => !mylib.isNum(it))) {
        setSelectedComws(comws);
      }
    } catch (error) {}

    setSearchParams(prev => {
      const news = { ...prev };

      delete (news as any)['scomws'];

      return news;
    });
  }, [searchParams, setSearchParams, setSelectedComws]);

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
