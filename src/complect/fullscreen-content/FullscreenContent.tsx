import { useDispatch, useSelector } from "react-redux";
import useNav from "../../components/apps/cm/base/useNav";
import { RootState } from "../../store";
import { switchFullscreenContentOpen } from "../Complect.store";
import "./FullscreenContent.scss";

let fullscreenContent: JSX.Element | null;
let element: HTMLDivElement | null;
let isFloated = false;

export default function useFullscreenContent() {
  const dispatch = useDispatch();
  const isFullscreenContentOpen = useSelector(
    (state: RootState) => state.complect.isFullscreenContentOpen
  );
  const { registerBackAction } = useNav();

  const ret = {
    isFullscreenContentOpen,
    closeFullscreenContent: () => {
      if (!element) return true;
      if (isFloated) fullscreenContent = null;
      dispatch(switchFullscreenContentOpen(false));
      element?.classList.remove("open");
      element = null;
    },
    openFullscreenContent: (content: JSX.Element) => {
      fullscreenContent = content;
      dispatch(switchFullscreenContentOpen(true));
      element?.classList.add("open");
      registerBackAction(() => ret.closeFullscreenContent());
    },
  };
  return ret;
}

export function FULLSCREEN__CONTENT({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`fullscreen-content-container ${isOpen ? "open" : ""}`}
      ref={(elem) => elem && (element = elem)}
    >
      {fullscreenContent}
    </div>
  );
}
