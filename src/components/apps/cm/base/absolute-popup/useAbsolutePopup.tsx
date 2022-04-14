import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import useParanja from "../useParanja";
import { switchAbsolutePopupOpen } from "../../Cm.store";
import { AbsolutePopupMode } from "./AbsolutePopup.model";
import useNav from "../useNav";

let absolutePopupContent: JSX.Element | null;
let element: HTMLDivElement | null;
let isFloated = false;

export default function useAbsolutePopup() {
  const dispatch = useDispatch();
  const { openParanja, closeParanja } = useParanja();
  const { registerBackAction } = useNav();
  const isAbsolutePopupOpen = useSelector(
    (state: RootState) => state.cm.isAbsolutePopupOpen
  );

  const ret = {
    absolutePopupContent,
    isAbsolutePopupOpen,
    closeAbsolutePopup: () => {
      if (!element) return true;
      if (isFloated) absolutePopupContent = null;
      dispatch(switchAbsolutePopupOpen(false));
      closeParanja();
      element?.classList.remove("open");
      element = null;
    },
    openAbsolutePopup: <
      Mode extends AbsolutePopupMode,
      Pos extends Mode extends "float" ? number : nil
    >(
      content: JSX.Element,
      mode?: Mode,
      x?: Pos,
      y?: Pos
    ) => {
      const deregisterCloseOnBackButton = registerBackAction(() => ret.closeAbsolutePopup());
      isFloated = mode !== "bottom" && y != null && x != null;
      openParanja(() => {
        deregisterCloseOnBackButton();
        ret.closeAbsolutePopup();
      });

      absolutePopupContent = (
        <div
          className={`absolute-popup ${mode ?? "bottom"}-mode`}
          ref={(elem) => {
            if (elem && !element) {
              element = elem;

              setTimeout(() => elem.classList.add("open"));

              if (isFloated)
                setTimeout(() => {
                  if (!isFloated) return;
                  const top =
                    (y as number) + elem.clientHeight > window.innerHeight
                      ? window.innerHeight - elem.clientHeight - 5
                      : y;
                  const left =
                    (x as number) + elem.clientWidth > window.innerWidth
                      ? window.innerWidth - elem.clientWidth - 5
                      : x;

                  elem.style.top = `${top}px`;
                  elem.style.left = `${left}px`;
                });
            }
          }}
        >
          {content}
        </div>
      );
      dispatch(switchAbsolutePopupOpen(true));
    },
  };
  return ret;
}
