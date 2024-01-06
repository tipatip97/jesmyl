import { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import Eventer, { EventerListeners } from '../../../back/complect/Eventer';
import { backSwipableContainerMaker } from '../backSwipableContainerMaker';
import EvaButton from '../eva-icon/EvaButton';
import { ThrowEvent } from '../eventer/ThrowEvent';
import Portal from '../popups/[complect]/Portal';

const events: EventerListeners<void> = [];

const swiper = backSwipableContainerMaker(() => Eventer.invoke(events, undefined));

export type FullContentOpenMode = null | 'open' | 'closable';
export type FullContentValue<PassValue = unknown> = (close: () => void, passValue?: PassValue) => ReactNode;

export default function useFullContent<PassValue>(
  content: FullContentValue<PassValue> | nil,
  forceOpenMode?: FullContentOpenMode,
  switchIsForceOpen?: (is: boolean) => void,
): [ReactNode, (isClosable?: boolean, passValue?: PassValue) => void, () => void] {
  const [openMode, setOpenMode] = useState<FullContentOpenMode>(null);
  const [passValue, setPassValue] = useState<PassValue>();
  const mode = forceOpenMode === undefined ? openMode : forceOpenMode;
  const switchIsForceOpenRef = useRef(switchIsForceOpen);
  switchIsForceOpenRef.current = switchIsForceOpen;

  const onClose = useCallback(<El,>(event?: MouseEvent<El>) => {
    event?.stopPropagation();
    setOpenMode(null);
    switchIsForceOpenRef.current?.(false);
  }, []);

  useEffect(() => {
    if (mode) {
      const close = Eventer.listen(events, () => onClose());
      const escape = ThrowEvent.listenKeyDown('Escape', () => onClose());

      return () => {
        close();
        escape();
      };
    }
  }, [mode, onClose]);

  return [
    mode && (
      <Portal>
        <div
          className={`fullscreen-content-container ${mode || ''}`}
          onClick={mode === 'closable' ? onClose : undefined}
          {...swiper}
        >
          {mode === 'closable' ? null : (
            <EvaButton
              name="close"
              className="close-button"
              onClick={onClose}
            />
          )}
          <div className="full-container padding-big-gap">{content?.(() => setOpenMode(null), passValue)}</div>
        </div>
      </Portal>
    ),
    (isClosable, passValue) => {
      setOpenMode(isClosable ? 'closable' : 'open');
      setPassValue(passValue);
    },
    () => setOpenMode(null),
  ];
}
