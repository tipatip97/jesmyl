import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCmNav from "../../components/apps/cm/base/useCmNav";
import { RootState } from "../../shared/store";
import { switchFullscreenContentOpen } from "../Complect.store";
import EvaIcon from "../eva-icon";
import "./FullscreenContent.scss";

let fullscreenContent: ReactNode;
let isOpen = false;

export default function useFullscreenContent() {
  const dispatch = useDispatch();
  const isFullscreenContentOpen = useSelector(
    (state: RootState) => state.complect.isFullscreenContentOpen
  );
  const { registerBackAction } = useCmNav();

  const ret = {
    isFullscreenContentOpen,
    closeFullscreenContent: () => {
      dispatch(switchFullscreenContentOpen(false));
      fullscreenContent = null;
      if (!isOpen) return true;
      isOpen = false;
    },
    openFullscreenContent: (content: ReactNode) => {
      isOpen = true;
      fullscreenContent = content;
      dispatch(switchFullscreenContentOpen(true));
      registerBackAction(() => ret.closeFullscreenContent());
    },
  };
  return ret;
}

export function FULLSCREEN__CONTENT() {
  const { isFullscreenContentOpen, closeFullscreenContent } =
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
        isFullscreenContentOpen ? "open" : ""
      }`}
    >
      <EvaIcon
        name="close"
        className="close-button"
        onClick={() => closeFullscreenContent()}
      />
      {fullscreenContent}
    </div>
  );
}
