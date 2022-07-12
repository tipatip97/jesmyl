import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCmNav from "../../components/apps/cm/base/useCmNav";
import { RootState } from "../../shared/store";
import { setFullscreenContentOpenMode } from "../Complect.store";
import EvaIcon from "../eva-icon/EvaIcon";
import "./FullscreenContent.scss";

export type FullScreenContentOpenMode = null | "open" | "closable";

let fullscreenContent: ReactNode;
let isOpen = false;

export default function useFullscreenContent() {
  // todo: make universal using
  const { registerBackAction } = useCmNav();

  const ret = {
    dispatch: useDispatch(),
    fullscreenContentOpenMode: useSelector(
      (state: RootState) => state.complect.fullscreenContentOpenMode
    ),
    closeFullscreenContent: (): boolean => {
      ret.dispatch(setFullscreenContentOpenMode(null));
      fullscreenContent = null;
      if (!isOpen) return false;
      isOpen = false;
      if (document.fullscreenElement) document.exitFullscreen();
      return true;
    },
    openFullscreenContent: (
      content: ReactNode | ((close: () => void) => ReactNode),
      closable = false,
      isRequestFullscreen = false
    ) => {
      if (isRequestFullscreen) document.body.requestFullscreen();
      isOpen = true;
      fullscreenContent =
        typeof content === "function"
          ? content(ret.closeFullscreenContent)
          : content;
      ret.dispatch(
        setFullscreenContentOpenMode(closable ? "closable" : "open")
      );
      registerBackAction(() => ret.closeFullscreenContent());
    },
  };
  return ret;
}

export function FULLSCREEN__CONTENT() {
  const { fullscreenContentOpenMode, closeFullscreenContent } =
    useFullscreenContent();
  useEffect(
    () =>
      window.addEventListener(
        "keydown",
        (event) => event.code === "Escape" && closeFullscreenContent()
      ),
    []
  );

  return (
    <div
      className={`fullscreen-content-container ${
        fullscreenContentOpenMode ? "open" : ""
      } ${fullscreenContentOpenMode || ""}`}
      onClick={
        fullscreenContentOpenMode === "closable"
          ? () => closeFullscreenContent()
          : undefined
      }
    >
      {fullscreenContentOpenMode === "closable" ? null : (
        <EvaIcon
          name="close"
          className="close-button"
          onClick={() => closeFullscreenContent()}
        />
      )}
      {fullscreenContent}
    </div>
  );
}
