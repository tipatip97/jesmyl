import { AreaHTMLAttributes, ReactNode, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import {
  riseUpAbsoluteBottomPopupUpdates,
  switchAbsoluteBottomPopupOpen
} from "../Complect.store";
import { isTouchDevice } from "../device-differences";
import EvaIcon, { EvaIconName } from "../eva-icon/EvaIcon";
import mylib from "../my-lib/MyLib";
import useMountTransition from "../popups/useMountTransition";
import Portal from "../popups/[complect]/Portal";
import "./AbsolutePopup.scss";

let absolutePopupContent: ReactNode = null;
let isClosed = true;
let isClosable = true;
let onOpenPopup: ((close: () => boolean) => void) | und;

const isAbsoluteBottomPopupOpenSelector = (state: RootState) => state.complect.isAbsoluteBottomPopupOpen;
const numAbsoluteBottomPopupUpdatesSelector = (state: RootState) => state.complect.numAbsoluteBottomPopupUpdates;

export type AbsoluteBottomPopupItem = {
  className?: string,
  icon: EvaIconName,
  title: string,
  rightNode?: ReactNode,
  isError?: boolean,
  iconWrapperClassName?: string,
} & AreaHTMLAttributes<HTMLDivElement>;

type SkeletIcon = AbsoluteBottomPopupItem | nil | false | SkeletIcon[];

export interface AbsoluteBottomPopupContentProps {
  items: SkeletIcon[],
  footer?: ReactNode,
}

export default function useAbsoluteBottomPopup() {
  const dispatch = useDispatch();
  const isAbsoluteBottomPopupOpen = useSelector(isAbsoluteBottomPopupOpenSelector);
  useSelector(numAbsoluteBottomPopupUpdatesSelector);

  const ret = {
    isAbsoluteBottomPopupOpen,
    closeAbsoluteBottomPopup: () => {
      dispatch(switchAbsoluteBottomPopupOpen(false));
      if (isClosed) return false;
      isClosed = true;
      return true;
    },
    prepareAbsoluteBottomPopupContent: ({ items, footer }: AbsoluteBottomPopupContentProps) => {
      return <div className="abs-item flex column">
        {items.map((item) => {
          if (!item) return null;
          const map = (item: SkeletIcon): ReactNode => {
            if (!item) return null;
            if (mylib.isArr(item)) return item.map(item => map(item));
            const { className, icon, title, iconWrapperClassName, rightNode, ...other } = item;

            return <div key={`${icon} ${title}`} {...other} className={`abs-item ${className || ''}`}>
              <div className="flex flex-gap">
                <div className={iconWrapperClassName}>
                  <EvaIcon name={icon} className="abs-icon" />
                </div>
                <div className="title">{title}</div>
              </div>
              {rightNode && <div className="abs-action flex around pointer">{rightNode}</div>}
            </div>;
          };

          return map(item);
        })}
        {footer}
      </div>;
    },
    openAbsoluteBottomPopup: (
      content: ((close: () => void) => ReactNode) | ReactNode,
      closable = true
    ) => {
      isClosable = closable;
      isClosed = false;
      isInitialScroll = true;
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
let isInitialScroll = true;
const initialScrollTop = window.innerHeight * 0.3;
const inactiveScrollTop = window.innerHeight * 0.25;

export function ABSOLUTE__BOTTOM__POPUP({ onOpen }: { onOpen: (close: () => boolean) => void }) {
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
    } else {
      animateScrollInProcess = false;
      isInitialScroll = false;
    }
  };

  const [isMounted, className] = useMountTransition(isAbsoluteBottomPopupOpen, 'absolute-bottom-popup', 500);

  useEffect(() => {
    if (isAbsoluteBottomPopupOpen && bottomContainer.current)
      if (isTouchDevice)
        bottomContainer.current.scrollTop = scrollTop = initialScrollTop;
      else bottomContainer.current.scrollTop = scrollTop = 0;
  }, [isAbsoluteBottomPopupOpen]);

  return (<>{
    isMounted && <Portal>
      <div className={className} onClick={() => closeAbsoluteBottomPopup()}>
        <div
          className={
            'container no-scrollbar'
            + (isTouchDevice ? "" : " not-touch-device")
            + (`${scrollableContent ? "" : " not-"}scrollable-content`)
          }
          ref={bottomContainer}
          onScroll={
            isTouchDevice
              ? () => {
                setTimeout(() => {
                  if (!bottomContainer.current || animateScrollInProcess) return;
                  needClose = !isInitialScroll && bottomContainer.current.scrollTop < scrollTop;
                  scrollTop = bottomContainer.current.scrollTop;
                  clearTimeout(scrollDebounce);

                  if (!isMouseDown && scrollTop < inactiveScrollTop)
                    scrollDebounce = setTimeout(() => {
                      if (needClose) closeAbsoluteBottomPopup();
                      else animateScroll();
                    }, 100);
                });
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
    </Portal>
  }</>);
}
