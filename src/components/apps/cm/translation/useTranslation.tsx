import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderApplication } from "../../../..";
import { isTouchDevice } from "../../../../complect/device-differences";
import modalService from "../../../../complect/modal/Modal.service";
import { RootState } from "../../../../shared/store";
import useCmNav from "../base/useCmNav";
import {
  riseUpTranslationUpdates,
  setTranslationBlock,
  setTranslationBlockPosition,
  switchShowMarks,
  switchTranslationBlockVisible,
} from "../Cm.store";
import { useCcom } from "../col/useCcol";
import TranslationScreen from "./TranslationScreen";

let currWin: Window | null = null;

export default function useTranslation() {
  const dispatch = useDispatch();
  const { setPhase } = useCmNav();
  const [ccom] = useCcom();
  const currBlocki = useSelector(
    (state: RootState) => state.cm.translationBlock
  );
  const isVisible = useSelector(
    (state: RootState) => state.cm.isTranslationBlockVisible
  );
  useSelector((state: RootState) => state.cm.translationUpdates);
  const position = useSelector(
    (state: RootState) => state.cm.translationBlockPosition
  );
  const isShowMarks = useSelector((state: RootState) => state.cm.isShowMarks);
  const blocks = ccom?.getOrderedTexts();
  const isShowFullscreen = isTouchDevice;

  useEffect(() => ret.setBlocki(0), [ccom]);

  const ret = {
    currWin,
    isShowFullscreen,
    isShowMarks,
    isTranslationBlockVisible: isVisible,
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
    switchVisible: () => dispatch(switchTranslationBlockVisible(!isVisible)),
    switchPosition: () => {
      dispatch(
        setTranslationBlockPosition(
          position === "center" ? "top center" : "center"
        )
      );
    },
    closeTranslation: () => {
      currWin?.close();
      if (isShowFullscreen) setPhase("com");
    },
    openTranslations: () => {
      if (isShowFullscreen) {
        setPhase(["translation", undefined, true]);
      } else setPhase("translation");
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
        setPhase("translation");
      }
    },
    onKeyTranslations: async (event: KeyboardEvent) => {
      if ((event.code === "KeyC" || event.code === "KeyR") && event.ctrlKey) return;
      event.preventDefault();

      switch (event.code) {
        case "ArrowLeft":
          ret.prevBlock();
          break;

        case "Enter":
          ret.newTranslation(200, 200);
          break;

        case "ArrowRight":
          ret.nextBlock();
          break;

        case "Escape":
          if (isShowFullscreen) ret.closeTranslation();
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
