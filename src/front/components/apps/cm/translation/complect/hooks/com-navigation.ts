import { useCallback } from 'react';
import useCmNav from '../../../base/useCmNav';
import { Com } from '../../../col/com/Com';
import { useCcom } from '../../../col/com/useCcom';
import useComPack from '../../../col/com/useComPack';
import { useCmScreenTranslationComTextNavigations } from './com-texts';

export const useCmScreenTranslationComNavigations = () => {
  const { setAppRouteData } = useCmNav();
  const ccom = useCcom();
  const setCom: (com: Com) => void = useCallback((com: Com) => setAppRouteData({ ccomw: com.wid }), [setAppRouteData]);

  const comPack = useComPack(ccom, true);
  const { setTexti } = useCmScreenTranslationComTextNavigations();

  return {
    setCom,
    comPack,
    prevCom: useCallback(() => {
      const [comList] = comPack;
      const comi = getComi(ccom?.wid, comList);
      if (!comList || comi < 0) return;
      const nextCom = comList[comi === 0 ? comList.length - 1 : comi - 1];

      setCom(nextCom);
      setTexti(0);
      scrollToView(nextCom);
    }, [ccom?.wid, comPack, setCom, setTexti]),
    nextCom: useCallback(() => {
      const [comList] = comPack;
      const comi = getComi(ccom?.wid, comList);
      if (!comList || comi < 0) return;
      const nextCom = comList[comi === comList.length - 1 ? 0 : comi + 1];

      setCom(nextCom);
      setTexti(0);
      scrollToView(nextCom);
    }, [ccom?.wid, comPack, setCom, setTexti]),
  };
};

const getComi = (comw?: number, comList?: Com[] | nil) => {
  if (!comList) return -1;
  return comw == null ? -1 : comList.findIndex(com => comw === com.wid);
};

const scrollToView = (com: Com) => {
  const comFace = document.getElementById(`com_face_wid_${com.wid}`);
  if (comFace) comFace.scrollIntoView({ block: 'center' });
};
