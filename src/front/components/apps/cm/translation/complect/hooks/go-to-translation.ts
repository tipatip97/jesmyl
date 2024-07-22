import { useCallback } from 'react';
import { isTouchDevice } from '../../../../../../complect/device-differences';
import useCmNav from '../../../base/useCmNav';
import { useCloseTranslation } from './close-translation';
import { useCmScreenTranslationComNavigations } from './com-navigation';
import { useCmScreenTranslationComTextNavigations } from './com-texts';

export const useGoToTranslation = () => {
  const { goTo, registerBackAction } = useCmNav();
  const { setTexti } = useCmScreenTranslationComTextNavigations();
  const { setCom, comPack } = useCmScreenTranslationComNavigations();
  const closeTranslation = useCloseTranslation();

  return useCallback(
    (isSetFirstCom?: boolean) => {
      if (isSetFirstCom) {
        if (comPack.list?.length) setCom(comPack.list[0]);
      }

      setTexti(0);
      if (isTouchDevice) {
        goTo('translation', null, true);
        try {
          document.body.requestFullscreen();
        } catch (e) {}

        registerBackAction(() => closeTranslation());
      } else goTo('translation');
    },
    [closeTranslation, comPack, goTo, registerBackAction, setCom, setTexti],
  );
};
