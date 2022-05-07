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
  const dispatch = useDispatch();
  const fullscreenContentOpenMode = useSelector(
    (state: RootState) => state.complect.fullscreenContentOpenMode
  );
  const { registerBackAction } = useCmNav();

  const ret = {
    fullscreenContentOpenMode,
    closeFullscreenContent: () => {
      dispatch(setFullscreenContentOpenMode(null));
      fullscreenContent = null;
      if (!isOpen) return true;
      isOpen = false;
      if (document.fullscreenElement) document.exitFullscreen();
    },
    openFullscreenContent: (
      content: ReactNode,
      closable = false,
      isRequestFullscreen = false
    ) => {
      if (isRequestFullscreen) document.body.requestFullscreen();
      isOpen = true;
      fullscreenContent = content;
      dispatch(setFullscreenContentOpenMode(closable ? "closable" : "open"));
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
      }`}
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
