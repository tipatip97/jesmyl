import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderApplication } from "../../../..";
import { isTouchDevice } from "../../../../complect/device-differences";
import mylib from "../../../../complect/my-lib/MyLib";
import useComPack from "../../../../complect/useComPack";
import { RootState } from "../../../../shared/store";
import useCmNav from "../base/useCmNav";
import {
  riseUpTranslationUpdates,
  setTranslationBlock,
  setTranslationBlockPosition,
  switchShowMarks,
  switchTranslationBlockVisible,
} from "../Cm.store";
import { Com } from "../col/com/Com";
import { useCcom } from "../col/com/useCcom";
import TranslationScreen from "./TranslationScreen";

let currWin: Window | null = null;

export default function useTranslation() {
  useSelector((state: RootState) => state.cm.translationUpdates);

  const dispatch = useDispatch();
  const { goTo, goBack } = useCmNav();
  const [ccom, setCcom] = useCcom();
  const currTexti = useSelector(
    (state: RootState) => state.cm.translationBlock
  );
  const isVisible = useSelector(
    (state: RootState) => state.cm.isTranslationBlockVisible
  );
  const texts = useMemo(() => ccom?.getOrderedTexts(), [ccom]);

  const ret = {
    currWin,
    isShowFullscreen: isTouchDevice,
    isShowMarks: useSelector((state: RootState) => state.cm.isShowMarks),
    isTranslationBlockVisible: isVisible,
    currText: isVisible ? texts && texts[currTexti] : "",
    currTexti,
    texts,
    position: useSelector(
      (state: RootState) => state.cm.translationBlockPosition
    ),
    comPack: useComPack(),
    nextText: () =>
      ret.texts &&
      currTexti < ret.texts.length - 1 &&
      ret.setTexti(currTexti + 1),
    prevText: () => currTexti > 0 && ret.setTexti(currTexti - 1),
    prevCom: () => {
      const [comList] = ret.comPack;
      const comi = getComi(ccom?.wid, comList);
      if (!comList || comi < 0) return;
      const nextCom = comList[comi === 0 ? comList.length - 1 : comi - 1];
      setCcom(nextCom);
      ret.setTexti(0);
      scrollToView(nextCom);
    },
    nextCom: () => {
      const [comList] = ret.comPack;
      const comi = getComi(ccom?.wid, comList);
      if (!comList || comi < 0) return;
      const nextCom = comList[comi === comList.length - 1 ? 0 : comi + 1];
      setCcom(nextCom);
      ret.setTexti(0);
      scrollToView(nextCom);
    },
    setTexti: (blocki: number) => {
      dispatch(setTranslationBlock(blocki));
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
    switchVisible: () => dispatch(switchTranslationBlockVisible(!isVisible)),
    switchPosition: () => {
      dispatch(
        setTranslationBlockPosition(
          ret.position === "center" ? "top center" : "center"
        )
      );
    },
    closeTranslation: () => {
      currWin?.close();
      if (ret.isShowFullscreen) {
        goBack();
        document.exitFullscreen();
      }
    },
    openTranslations: () => {
      const [comList] = ret.comPack;

      if (comList?.length) setCcom(comList[0]);

      ret.setTexti(0);
      if (ret.isShowFullscreen) {
        goTo("translation", null, true);
        document.body.requestFullscreen();
      } else goTo("translation");
    },
    showMarks: (isShow: boolean) => dispatch(switchShowMarks(isShow)),
    newTranslation: (left: number, top: number) => {
      if (currWin) {
        currWin.focus();
        if (!currWin.closed) return;
      }
      const win = window.open(
        undefined,
        "translation-win",
        `top=${top},left=${left},width=200,height=200`
      );

      if (win) {
        currWin = win;
        dispatch(riseUpTranslationUpdates());
        win.document.body.style.margin = "0";
        win.document.body.style.padding = "0";
        win.document.body.style.userSelect = "none";
        const closeWin = () => win.close();

        window.addEventListener("unload", closeWin);
        win.addEventListener("unload", () => {
          window.removeEventListener("unload", closeWin);
          currWin = null;
          dispatch(riseUpTranslationUpdates());
        });

        renderApplication(
          <TranslationScreen
            fontSizeContainId="other-translate-window"
            updater={(update) => {
              win.addEventListener("resize", () => update());
            }}
          />,
          win.document.body
        );
        goTo("translation");
      }
    },
    onKeyTranslations: async (event: KeyboardEvent) => {
      switch (event.code) {
        case "Enter":
          ret.newTranslation(200, 200);
          break;

        case "ArrowUp":
          if (event.ctrlKey) ret.prevCom();
          break;

        case "ArrowDown":
          if (event.ctrlKey) ret.nextCom();
          break;

        case "ArrowLeft":
          ret.prevText();
          break;

        case "ArrowRight":
          ret.nextText();
          break;

        case "Escape":
          if (ret.isShowFullscreen) ret.closeTranslation();
          else ret.switchVisible();
          break;

        case "KeyV":
          ret.switchVisible();
          break;

        case "KeyF":
          currWin && currWin.focus();
          break;

        case "KeyT":
          ret.switchPosition();
          break;
      }
    },
  };

  return ret;
}

const getComi = (comw?: number, comList?: Com[] | nil) => {
  if (!comList) return -1;
  return comw == null ? -1 : comList.findIndex((com) => comw === com.wid);
};

const scrollToView = (com: Com) => {
  const comFace = document.querySelector(`.com-face.current.wid_${com.wid}`);
  if (comFace) mylib.scrollToView(comFace, "center");
};
