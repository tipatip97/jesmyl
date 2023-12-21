import { ReactNode, useEffect, useRef } from 'react';
import { isTouchDevice } from '../../device-differences';
import { ThrowEvent } from '../../eventer/ThrowEvent';
import Portal from '../../popups/[complect]/Portal';
import useMountTransition from '../../popups/useMountTransition';

const initialScrollTop = window.innerHeight * 0.3;
const inactiveScrollTop = window.innerHeight * 0.25;

let scrollDebounce: any;
let scrollTop = 0;
let needClose = false;
let animateScrollInProcess = false;
let isMouseDown = false;
let isInitialScroll = true;

export const BottomPopup = ({ content, close }: { content: ReactNode; close: () => void }) => {
  const bottomContentContainer = useRef<HTMLDivElement>(null);
  const bottomContainer = useRef<HTMLDivElement>(null);

  const scrollableContent = (bottomContentContainer.current?.clientHeight || 0) - 5 > initialScrollTop;

  const animateScroll = () => {
    if (inactiveScrollTop > scrollTop) {
      animateScrollInProcess = true;
      setTimeout(() => {
        if (bottomContainer.current) scrollTop = bottomContainer.current.scrollTop += 3;
        animateScroll();
      }, 2);
    } else {
      animateScrollInProcess = false;
      isInitialScroll = false;
    }
  };

  const [isMounted, className] = useMountTransition(true, 'absolute-bottom-popup', 500);

  useEffect(() => {
    if (bottomContainer.current)
      if (isTouchDevice) bottomContainer.current.scrollTop = scrollTop = initialScrollTop;
      else bottomContainer.current.scrollTop = scrollTop = 0;

    return ThrowEvent.listenKeyDown('Escape', () => close());
  }, [close]);

  return (
    <>
      {isMounted && (
        <Portal>
          <div
            className={className}
            onClick={() => close()}
          >
            <div
              className={
                'container no-scrollbar' +
                (isTouchDevice ? '' : ' not-touch-device') +
                `${scrollableContent ? '' : ' not-'}scrollable-content`
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
      )}
    </>
  );
};
