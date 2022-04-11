import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderApplication } from "../../../..";
import { isTouchDevice } from "../../../../complect/device-differences";
import modalService from "../../../../complect/modal/Modal.service";
import { RootState } from "../../../../store";
import useNav from "../base/useNav";
import {
  riseUpTranslationUpdates,
  setIsShowMarksMode,
  setTranslationBlock,
  setTranslationBlockIsVisible,
  setTranslationBlockPosition
} from "../Cm.store";
import { useCcol } from "../col/useCcol";
import TranslationScreen from "./TranslationScreen";

let currWin: Window | null = null;

export default function useTranslation() {
  const dispatch = useDispatch();
  const { setPhase, isFullScreen, switchFullscreen } = useNav();
  const [ccom] = useCcol("com");
  const currBlocki = useSelector(
    (state: RootState) => state.cm.translationBlock
  );
  const isVisible = useSelector(
    (state: RootState) => state.cm.translationBlockIsVisible
  );
  useSelector((state: RootState) => state.cm.translationUpdates);
  const position = useSelector(
    (state: RootState) => state.cm.translationBlockPosition
  );
  const isShowMarksMode = useSelector(
    (state: RootState) => state.cm.isShowMarksMode
  );
  const blocks = ccom?.getOrderedTexts();

  useEffect(() => ret.setBlocki(0), [ccom]);

  const ret = {
    currWin,
    isTouchDevice,
    isShowMarksMode,
    currBlock: isVisible ? blocks && blocks[currBlocki] : "",
    currBlocki,
    blocks,
    position,
    nextBlock: () =>
      ret.blocks &&
      currBlocki < ret.blocks.length - 1 &&
      ret.setBlocki(currBlocki + 1),
    prevBlock: () => currBlocki > 0 && ret.setBlocki(currBlocki - 1),
    setBlocki: (blocki: number) => {
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
    switchVisible: () => dispatch(setTranslationBlockIsVisible(!isVisible)),
    switchPosition: () => {
      dispatch(
        setTranslationBlockPosition(
          position === "center" ? "top center" : "center"
        )
      );
    },
    closeTranslation: () => {
      currWin?.close();
      switchFullscreen(false);
      if (isTouchDevice) setPhase("com");
    },
    openTranslations: () => {
      if (isTouchDevice) switchFullscreen(true);
      setPhase("translations");
    },
    showMarks: (isShow: boolean) => dispatch(setIsShowMarksMode(isShow)),
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
        setPhase("translations");
      }
    },
    onKeyUpTranslations: async (event: MouseEvent | any) => {
      event.preventDefault();
      const shiftKey = event.shiftKey;

      switch (event.keyCode) {
        case 37: // arr left
          if (!shiftKey) ret.prevBlock();
          break;

        case 39: // arr right
          if (!shiftKey) ret.nextBlock();
          break;

        //   case 69: // e
        //     currWin.equiv();
        //     break;

        case 27: // esc
          if (isFullScreen) ret.closeTranslation();
          else {
            event.ctrlKey
              ? currWin &&
                (await modalService.confirm("Закончить Трансляцию?")) &&
                currWin.close()
              : ret.switchVisible();
          }
          break;

        case 86: // v
          ret.switchVisible();
          break;

        case 70: // f
          currWin && currWin.focus();
          break;
      }
    },
  };

  return ret;
}
