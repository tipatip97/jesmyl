import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isTouchDevice } from '../../../../complect/device-differences';
import { RootState } from '../../../../shared/store';
import di from '../Cm.store';
import useCmNav from '../base/useCmNav';
import { Com } from '../col/com/Com';
import { useCcom } from '../col/com/useCcom';
import useComPack from '../col/com/useComPack';

const translationUpdatesSelector = (state: RootState) => state.cm.translationUpdates;
const translationBlockSelector = (state: RootState) => state.cm.translationBlock;
const isTranslationBlockVisibleSelector = (state: RootState) => state.cm.isTranslationBlockVisible;
const translationBlockPositionSelector = (state: RootState) => state.cm.translationBlockPosition;

export function useTranslation() {
  useSelector(translationUpdatesSelector);

  const dispatch = useDispatch();
  const { goTo, goBack, registerBackAction, setAppRouteData } = useCmNav();
  const ccom = useCcom();
  const currTexti = useSelector(translationBlockSelector);
  const isVisible = useSelector(isTranslationBlockVisibleSelector);
  const texts = useMemo(() => ccom?.getOrderedTexts(), [ccom]);
  const setCom = (com: Com) => setAppRouteData({ ccomw: com.wid });

  const state = {
    goTo,
    text: texts && texts[currTexti],
    isVisible,
    currTexti,
    isShowFullscreen: isTouchDevice,
    texts,
    positionY: useSelector(translationBlockPositionSelector),
    comPack: useComPack(ccom, true),
    nextText: () => {
      if (texts && currTexti < texts.length - 1) state.setTexti(currTexti + 1);
    },
    prevText: () => {
      if (currTexti > 0) state.setTexti(currTexti - 1);
    },
    prevCom: () => {
      const [comList] = state.comPack;
      const comi = getComi(ccom?.wid, comList);
      if (!comList || comi < 0) return;
      const nextCom = comList[comi === 0 ? comList.length - 1 : comi - 1];

      setCom(nextCom);
      state.setTexti(0);
      scrollToView(nextCom);
    },
    nextCom: () => {
      const [comList] = state.comPack;
      const comi = getComi(ccom?.wid, comList);
      if (!comList || comi < 0) return;
      const nextCom = comList[comi === comList.length - 1 ? 0 : comi + 1];

      setCom(nextCom);
      state.setTexti(0);
      scrollToView(nextCom);
    },
    setTexti: (blocki: number) => {
      dispatch(di.translationBlock(blocki));
      const nextd = window.document.getElementById(`translation-window-line-${blocki}`);

      if (nextd) {
        const nextParent = nextd.parentElement;
        if (nextParent) nextParent.scrollLeft = nextd.offsetLeft + nextd.clientWidth / 2 - nextParent.clientWidth / 2;
      }
    },
    switchVisible: (isVisible?: boolean) => dispatch(di.isTranslationBlockVisible(isVisible)),
    switchPosition: () => {
      dispatch(di.translationBlockPosition(state.positionY === 'center' ? 'top center' : 'center'));
    },
    closeTranslation: useCallback(
      (event?: EventStopper) => {
        event?.stopPropagation();
        goBack();
        if (document.fullscreenElement) document.exitFullscreen();
        return false;
      },
      [goBack],
    ),
    goToTranslation: (isSetFirstCom?: boolean) => {
      if (isSetFirstCom) {
        const [comList] = state.comPack;
        if (comList?.length) setCom(comList[0]);
      }

      state.setTexti(0);
      if (isTouchDevice) {
        state.goTo('translation', null, true);
        document.body.requestFullscreen();

        registerBackAction(() => state.closeTranslation());
      } else goTo('translation');
    },
  };

  return state;
}

const getComi = (comw?: number, comList?: Com[] | nil) => {
  if (!comList) return -1;
  return comw == null ? -1 : comList.findIndex(com => comw === com.wid);
};

const scrollToView = (com: Com) => {
  const comFace = document.querySelector(`.face-item.current.wid_${com.wid}`);
  if (comFace) comFace.scrollIntoView({ block: 'center' });
};
