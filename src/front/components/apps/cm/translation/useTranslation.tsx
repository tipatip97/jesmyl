import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderComponentInNewWindow } from "../../../../..";
import { isTouchDevice } from "../../../../complect/device-differences";
import mylib from "../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../shared/store";
import di from "../Cm.store";
import useCmNav from "../base/useCmNav";
import { Com } from "../col/com/Com";
import { useCcom } from "../col/com/useCcom";
import useComPack from "../col/com/useComPack";
import TranslationScreen from "./TranslationScreen";

let currWin: Window | null = null;

const startViewTransition = mylib.isFunc((document as any).startViewTransition)
  ? (callback: () => void) => {
    (currWin?.document as any)?.startViewTransition(callback);
    (document as any).startViewTransition(callback);
  }
  : (callback: () => void) => callback();

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
    currWin,
    isSelfTranslation: isTouchDevice,
    isTranslationBlockVisible: isVisible,
    currText: isVisible ? texts && texts[currTexti] : "",
    currTexti,
    texts,
    position: useSelector(translationBlockPositionSelector),
    comPack: useComPack(ccom, true),
    nextText: () => {
      if (state.texts && currTexti < state.texts.length - 1)
        startViewTransition(() => state.setTexti(currTexti + 1));
    },
    prevText: () => {
      if (currTexti > 0)
        startViewTransition(() => state.setTexti(currTexti - 1));
    },
    prevCom: () => {
      const [comList] = state.comPack;
      const comi = getComi(ccom?.wid, comList);
      if (!comList || comi < 0) return;
      const nextCom = comList[comi === 0 ? comList.length - 1 : comi - 1];
      startViewTransition(() => {
        setCom(nextCom);
        state.setTexti(0);
        scrollToView(nextCom);
      });
    },
    nextCom: () => {
      const [comList] = state.comPack;
      const comi = getComi(ccom?.wid, comList);
      if (!comList || comi < 0) return;
      const nextCom = comList[comi === comList.length - 1 ? 0 : comi + 1];

      startViewTransition(() => {
        setCom(nextCom);
        state.setTexti(0);
        scrollToView(nextCom);
      });
    },
    setTexti: (blocki: number) => {
      dispatch(di.translationBlock(blocki));
      const nextd = window.document.getElementById(
        `translation-window-line-${blocki}`
      );

      if (nextd) {
        const nextParent = nextd.parentElement;
        if (nextParent)
          nextParent.scrollLeft =
            nextd.offsetLeft +
            nextd.clientWidth / 2 -
            nextParent.clientWidth / 2;
      }
    },
    switchVisible: () => dispatch(di.isTranslationBlockVisible(!isVisible)),
    switchPosition: () => {
      dispatch(
        di.translationBlockPosition(
          state.position === "center" ? "top center" : "center"
        )
      );
    },
    closeTranslation: () => {
      currWin?.close();
      if (state.isSelfTranslation) {
        goBack();
        if (document.fullscreenElement) document.exitFullscreen();
      }
      return false;
    },
    goToTranslation: (isSetFirstCom?: boolean) => {
      if (isSetFirstCom) {
        const [comList] = state.comPack;
        if (comList?.length) setCom(comList[0]);
      }

      state.setTexti(0);
      if (state.isSelfTranslation) {
        goTo("translation", null, true);
        document.body.requestFullscreen();
        registerBackAction(() => state.closeTranslation());
      } else goTo("translation");
    },
    watchTranslation: (left: number, top: number, isSetFirstCom = false) => {
      if (currWin) {
        currWin.focus();
        if (!currWin.closed) return;
      }

      if (isSetFirstCom) {
        const [comList] = state.comPack;
        if (comList) setCom(comList[0]);
      }


      renderComponentInNewWindow(
        (win) => {
          currWin = win;
          dispatch(di.riseUpTranslationUpdates());
          win.document.body.style.margin = "0";
          win.document.body.style.padding = "0";
          win.document.body.style.userSelect = "none";
          const closeWin = () => win.close();

          window.addEventListener("unload", closeWin);
          win.addEventListener("unload", () => {
            window.removeEventListener("unload", closeWin);
            currWin = null;
            dispatch(di.riseUpTranslationUpdates());
          });

          return <TranslationScreen
            updater={(update) => win.addEventListener("resize", () => update())}
          />;
        },
        undefined,
        "translation-win",
        `top=${top},left=${left},width=200,height=200`
      );
    },
  };

  return state;
}

const getComi = (comw?: number, comList?: Com[] | nil) => {
  if (!comList) return -1;
  return comw == null ? -1 : comList.findIndex((com) => comw === com.wid);
};

const scrollToView = (com: Com) => {
  const comFace = document.querySelector(`.face-item.current.wid_${com.wid}`);
  if (comFace) comFace.scrollIntoView({ block: "center" });
};

