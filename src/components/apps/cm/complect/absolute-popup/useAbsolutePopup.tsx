import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import useParanja from "../../base/useParanja";
import { riseUpAbsolutePopupUpdates } from "../../Cm.store";
import { AbsolutePopupMode } from "./AbsolutePopup.model";

let absolutePopupContent: JSX.Element | null;

export default function useAbsolutePopup() {
  const dispatch = useDispatch();
  const { openParanja, closeParanja } = useParanja();
  useSelector((state: RootState) => state.cm.numModalUpdates);

  const ret = {
    absolutePopupContent,
    closeAbsolutePopup: () => {
      absolutePopupContent = null;
      dispatch(riseUpAbsolutePopupUpdates());
      closeParanja();
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
      let element: HTMLDivElement;
      const isFloated = mode !== "bottom" && y != null && x != null;
      openParanja(() => ret.closeAbsolutePopup());
      
      absolutePopupContent = (
        <div
          className={`absolute-popup ${mode ?? "bottom"}-mode`}
          ref={
            isFloated
              ? (elem) => {
                  if (elem && !element) {
                    element = elem;

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
                }
              : null
          }
        >
          {content}
        </div>
      );
      dispatch(riseUpAbsolutePopupUpdates());
    },
  };
  return ret;
}
