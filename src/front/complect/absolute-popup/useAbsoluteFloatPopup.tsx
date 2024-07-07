import { ReactNode } from 'react';
import { atom, useAtom } from '../atoms';
import Portal from '../popups/[complect]/Portal';
import useMountTransition from '../popups/useMountTransition';
import './AbsolutePopup.scss';

let popupContent: ReactNode = null;
let floatElement: HTMLDivElement | null;
let isFloated = false;
let isClosed = true;
let isClosable = true;
let onOpenPopup: ((close: () => boolean) => void) | und;

const isOpenAtom = atom(false);

export default function useAbsoluteFloatPopup() {
  const [isAbsoluteFloatPopupOpen, close] = useAtom(isOpenAtom);

  const ret = {
    isAbsoluteFloatPopupOpen,
    closeAbsoluteFloatPopup: () => {
      close(false);
      if (isFloated) popupContent = null;
      if (isClosed) return false;
      isClosed = true;
      return true;
    },
    openAbsoluteFloatPopup: (content: ReactNode, x: number, y: number, closable = true) => {
      isClosable = closable;
      isClosed = false;
      onOpenPopup?.(ret.closeAbsoluteFloatPopup);
      popupContent = content;
      close(true);

      setTimeout(() => {
        if (!floatElement) return;
        const top =
          y + floatElement.clientHeight > window.innerHeight ? window.innerHeight - floatElement.clientHeight - 5 : y;
        const left =
          x + floatElement.clientWidth > window.innerWidth ? window.innerWidth - floatElement.clientWidth - 5 : x;

        floatElement.style.top = `${top}px`;
        floatElement.style.left = `${left}px`;
      });
    },
  };
  return ret;
}

export function ABSOLUTE__FLOAT__POPUP({ onOpen }: { onOpen: (close: () => boolean) => void }) {
  onOpenPopup = onOpen;
  const { isAbsoluteFloatPopupOpen, closeAbsoluteFloatPopup } = useAbsoluteFloatPopup();

  const [isMounted, className] = useMountTransition(
    isAbsoluteFloatPopupOpen && !!popupContent,
    'absolute-float-popup',
    500,
  );

  return (
    <>
      {isMounted && (
        <Portal>
          <div
            className={className}
            onClick={() => closeAbsoluteFloatPopup()}
          >
            <div
              className={`absolute-popup-content`}
              onClick={event => !isClosable && event.stopPropagation()}
              ref={elem => elem && (floatElement = elem)}
            >
              {popupContent}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
