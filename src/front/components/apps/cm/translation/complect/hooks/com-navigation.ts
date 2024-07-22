import { useCallback } from 'react';
import { useCmTranslationComListContext } from '../../../base/translations/context';
import useCmNav from '../../../base/useCmNav';
import { Com } from '../../../col/com/Com';
import { useCcom } from '../../../col/com/useCcom';
import { useCmScreenTranslationComTextNavigations } from './com-texts';

export const useCmScreenTranslationComNavigations = () => {
  const { setAppRouteData } = useCmNav();
  const ccom = useCcom();
  const setCom: (com: Com) => void = useCallback((com: Com) => setAppRouteData({ ccomw: com.wid }), [setAppRouteData]);

  const comPack = useCmTranslationComListContext();
  const { setTexti } = useCmScreenTranslationComTextNavigations();

  return {
    setCom,
    comPack,
    prevCom: useCallback(() => {
      const comi = getComi(ccom?.wid, comPack.list);
      if (!comPack.list || comi < 0) return;
      const nextCom = comPack.list[comi === 0 ? comPack.list.length - 1 : comi - 1];

      setCom(nextCom);
      setTexti(0);
      scrollToView(nextCom);
    }, [ccom?.wid, comPack, setCom, setTexti]),
    nextCom: useCallback(() => {
      const comi = getComi(ccom?.wid, comPack.list);
      if (!comPack.list || comi < 0) return;
      const nextCom = comPack.list[comi === comPack.list.length - 1 ? 0 : comi + 1];

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
