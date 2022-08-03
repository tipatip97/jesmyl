import { ReactNode, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import {
  riseUpAbsoluteBottomPopupUpdates,
  switchAbsoluteBottomPopupOpen,
} from "../Complect.store";
import { isTouchDevice } from "../device-differences";
import "./AbsolutePopup.scss";

let absolutePopupContent: ReactNode = null;
let isClosed = true;
let isClosable = true;
let onOpenPopup: ((close: () => boolean) => void) | und;

export default function useAbsoluteBottomPopup() {
  const dispatch = useDispatch();
  const isAbsoluteBottomPopupOpen = useSelector(
    (state: RootState) => state.complect.isAbsoluteBottomPopupOpen
  );
  useSelector(
    (state: RootState) => state.complect.numAbsoluteBottomPopupUpdates
  );

  const ret = {
    isAbsoluteBottomPopupOpen,
    closeAbsoluteBottomPopup: () => {
      dispatch(switchAbsoluteBottomPopupOpen(false));
      if (isClosed) return false;
      isClosed = true;
      return true;
    },
    openAbsoluteBottomPopup: (
      content: ((close: () => void) => ReactNode) | ReactNode,
      closable = true
    ) => {
      isClosable = closable;
      isClosed = false;
      onOpenPopup?.(ret.closeAbsoluteBottomPopup);
      absolutePopupContent =
        typeof content === "function"
          ? content(() => ret.closeAbsoluteBottomPopup())
          : content;
      dispatch(switchAbsoluteBottomPopupOpen(true));
      setTimeout(() => dispatch(riseUpAbsoluteBottomPopupUpdates()));
    },
  };
  return ret;
}

let scrollDebounce: any;
let scrollTop = 0;
let needClose = false;
let animateScrollInProcess = false;
let isMouseDown = false;
const initialScrollTop = window.innerHeight * 0.3;
const inactiveScrollTop = window.innerHeight * 0.25;

export function ABSOLUTE__BOTTOM__POPUP({
  onOpen,
}: {
  onOpen: (close: () => boolean) => void;
}) {
  const { isAbsoluteBottomPopupOpen, closeAbsoluteBottomPopup } =
    useAbsoluteBottomPopup();
  onOpenPopup = onOpen;

  useEffect(() => {
    window.addEventListener(
      "keydown",
      (event) => event.code === "Escape" && closeAbsoluteBottomPopup()
    );
  }, []);
  const bottomContentContainer = useRef<HTMLDivElement>(null);
  const bottomContainer = useRef<HTMLDivElement>(null);

  const scrollableContent =
    (bottomContentContainer.current?.clientHeight || 0) - 5 > initialScrollTop;

  const animateScroll = () => {
    if (inactiveScrollTop > scrollTop) {
      animateScrollInProcess = true;
      setTimeout(() => {
        if (bottomContainer.current)
          scrollTop = bottomContainer.current.scrollTop += 3;
        animateScroll();
      }, 2);
    } else animateScrollInProcess = false;
  };

  useEffect(() => {
    if (isAbsoluteBottomPopupOpen && bottomContainer.current)
      if (isTouchDevice)
        bottomContainer.current.scrollTop = scrollTop = initialScrollTop;
      else bottomContainer.current.scrollTop = scrollTop = 0;
  }, [isAbsoluteBottomPopupOpen]);

  return (
    <div
      className={`absolute-bottom-popup${
        isAbsoluteBottomPopupOpen ? " open" : ""
      }`}
      onClick={() => closeAbsoluteBottomPopup()}
    >
      <div
        className={`container no-scrollbar${
          isTouchDevice ? "" : " not-touch-device"
        } ${scrollableContent ? "" : "not-"}scrollable-content`}
        ref={bottomContainer}
        onScroll={
          isTouchDevice
            ? () => {
                if (!bottomContainer.current || animateScrollInProcess) return;
                needClose = bottomContainer.current.scrollTop < scrollTop;
                scrollTop = bottomContainer.current.scrollTop;
                clearTimeout(scrollDebounce);

                if (!isMouseDown && scrollTop < inactiveScrollTop)
                  scrollDebounce = setTimeout(() => {
                    if (needClose) closeAbsoluteBottomPopup();
                    else animateScroll();
                  }, 300);
              }
            : undefined
        }
        onTouchStart={() => (isMouseDown = true)}
        onTouchEnd={
          isTouchDevice
            ? () => {
                isMouseDown = false;
                if (scrollTop < inactiveScrollTop)
                  if (needClose) closeAbsoluteBottomPopup();
                  else animateScroll();
              }
            : undefined
        }
      >
        <div className="absolute full-width flex center margin-gap-v">
          <div className="badge" />
        </div>
        <div
          className="content"
          onClick={(event) => !isClosable && event.stopPropagation()}
          ref={bottomContentContainer}
        >
          {absolutePopupContent}
        </div>
      </div>
    </div>
  );
}
