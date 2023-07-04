import { AreaHTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";
import { isTouchDevice } from "../device-differences";
import EvaIcon, { EvaIconName } from "../eva-icon/EvaIcon";
import { ThrowEvent } from "../eventer/ThrowEvent";
import mylib from "../my-lib/MyLib";
import Portal from "../popups/[complect]/Portal";
import useMountTransition from "../popups/useMountTransition";
import "./AbsolutePopup.scss";

const isNIs = (is: unknown) => !is;
const initialScrollTop = window.innerHeight * 0.3;
const inactiveScrollTop = window.innerHeight * 0.25;

let scrollDebounce: any;
let scrollTop = 0;
let needClose = false;
let animateScrollInProcess = false;
let isMouseDown = false;
let isInitialScroll = true;

export type AbsoluteBottomPopupItem = {
  className?: string,
  icon: EvaIconName,
  titleNode?: ReactNode,
  title?: string,
  rightNode?: ReactNode,
  isError?: boolean,
  iconWrapperClassName?: string,
} & AreaHTMLAttributes<HTMLDivElement>;

export type BottomPopupSkeletIcon = AbsoluteBottomPopupItem | nil | false | BottomPopupSkeletIcon[];

export interface BottomPopupContentProps {
  items: BottomPopupSkeletIcon[],
  footer?: ReactNode,
}

const prepare = ({ items, footer }: BottomPopupContentProps) => {
  return <div className="abs-item flex column">
    {items.map((item, itemi) => {
      if (!item) return null;
      const map = (item: BottomPopupSkeletIcon, itemi: number): ReactNode => {
        if (!item) return null;
        if (mylib.isArr(item)) return item.map((item, itemi) => map(item, itemi));
        const { className, icon, titleNode, title, iconWrapperClassName, rightNode, isError, ...other } = item;

        return <div key={itemi} {...other} className={`abs-item ${className || ''}`}>
          <div className="flex flex-gap">
            <div className={`icon-box ${iconWrapperClassName || ''}`}>
              <EvaIcon name={icon} className="abs-icon" />
            </div>
            <div className="title">{titleNode ?? title}</div>
          </div>
          {rightNode && <div className="abs-action flex around pointer">{rightNode}</div>}
        </div>;
      };

      return map(item, itemi);
    })}
    {footer}
  </div>;
};

export type BottomPopupContenterPreparer = (props: BottomPopupContentProps) => JSX.Element;
export type BottomPopupContenter<Props extends Record<string, unknown> = {}>
  = (
    close: () => void,
    prepare: BottomPopupContenterPreparer,
    props: Props,
  ) => [ReactNode, ReactNode] | JSX.Element | nil;

const emptyProps = {};

export function useBottomPopup<
  Contenter extends BottomPopupContenter,
  Props extends ReturnType<Contenter> extends [ReactNode, ReactNode] ? Record<string, unknown> : Partial<Record<string, unknown>>,
>(contenter: Contenter, props: Props = emptyProps as never): [ReactNode, (isOpen?: boolean) => void] {
  const close = () => setIsOpen(false);
  const contentScalar = contenter(close, prepare, props);
  let throwContent = null;
  let content = null;

  if (mylib.isArr(contentScalar)) {
    [throwContent, content] = contentScalar;
  } else content = contentScalar;

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

  const [isOpen, setIsOpen] = useState(false);

  const [isMounted, className] = useMountTransition(isOpen, 'absolute-bottom-popup', 500);

  useEffect(() => {
    if (isOpen && bottomContainer.current)
      if (isTouchDevice)
        bottomContainer.current.scrollTop = scrollTop = initialScrollTop;
      else bottomContainer.current.scrollTop = scrollTop = 0;

    if (isOpen) {
      return ThrowEvent.listenKeyDown('Escape', () => close());
    }
  }, [isOpen]);

  return [<>
    {throwContent}
    {isMounted && <Portal>
      <div className={className} onClick={() => close()}>
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
                      if (needClose) close();
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
                  if (needClose) close();
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
            // onClick={(event) => !isClosable && event.stopPropagation()}
            ref={bottomContentContainer}
          >
            {content}
          </div>
        </div>
      </div>
    </Portal>
    }</>,
  (isOpen?: boolean) => setIsOpen(isOpen ?? isNIs)
  ];
}
