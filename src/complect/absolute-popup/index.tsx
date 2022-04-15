import { ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useNav from "../../components/apps/cm/base/useNav";
import { RootState } from "../../store";
import { setAbsolutePopupOpen } from "../Complect.store";
import "./AbsolutePopup.scss";

export interface AbsolutePopupConfig {
  mode: AbsolutePopupMode;
  x?: number;
  y?: number;
}

export type AbsolutePopupMode = null | "float" | "bottom";

let absolutePopupContent: ReactNode = null;
let floatElement: HTMLDivElement | null;
let isFloated = false;
let isClosed = true;

export default function useAbsolutePopup() {
  const dispatch = useDispatch();
  const { registerBackAction } = useNav();
  const absolutePopupOpenMode = useSelector(
    (state: RootState) => state.complect.absolutePopupOpenMode
  );

  const ret = {
    absolutePopupOpenMode,
    closeAbsolutePopup: () => {
      if (isClosed) return true;
      isClosed = true;
      if (isFloated) absolutePopupContent = null;
      dispatch(setAbsolutePopupOpen(null));
    },
    openAbsolutePopup: (content: ReactNode) => {
      isClosed = false;
      registerBackAction(() => ret.closeAbsolutePopup());
      absolutePopupContent = content;

      let isConfigured = false;
      const configure = (mode: AbsolutePopupMode) => {
        dispatch(setAbsolutePopupOpen(mode));
        isConfigured = true;
      };
      setTimeout(() => !isConfigured && configure("bottom"));

      return {
        config: (config: AbsolutePopupConfig) => {
          const { mode, x, y } = config;
          isFloated = mode !== "bottom" && y != null && x != null;
          configure(mode);

          if (isFloated && floatElement)
            setTimeout(() => {
              if (!isFloated || !floatElement) return;
              const top =
                (y as number) + floatElement.clientHeight > window.innerHeight
                  ? window.innerHeight - floatElement.clientHeight - 5
                  : y;
              const left =
                (x as number) + floatElement.clientWidth > window.innerWidth
                  ? window.innerWidth - floatElement.clientWidth - 5
                  : x;

              floatElement.style.top = `${top}px`;
              floatElement.style.left = `${left}px`;
            });
        },
      };
    },
  };
  return ret;
}

export function ABSOLUTE_POPUP_ELEMENT() {
  const { absolutePopupOpenMode, closeAbsolutePopup } = useAbsolutePopup();

  useEffect(
    () =>
      window.addEventListener(
        "keydown",
        (event) => event.code === "Escape" && closeAbsolutePopup()
      ),
    []
  );

  return (
    <div
      className={`absolute-popup ${
        absolutePopupOpenMode && absolutePopupContent
          ? `open ${absolutePopupOpenMode}`
          : ""
      }`}
      onClick={() => closeAbsolutePopup()}
    >
      <div
        className={`absolute-popup-content bottom-content`}
        onClick={(event) => event.stopPropagation()}
      >
        {absolutePopupContent}
      </div>
      <div
        className={`absolute-popup-content float-content`}
        onClick={(event) => event.stopPropagation()}
        ref={(elem) => elem && (floatElement = elem)}
      >
        {absolutePopupContent}
      </div>
    </div>
  );
}
