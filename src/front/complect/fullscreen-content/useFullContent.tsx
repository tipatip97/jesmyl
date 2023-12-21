import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import { backSwipableContainerMaker } from '../backSwipableContainerMaker';
import EvaButton from '../eva-icon/EvaButton';
import Eventer from '../eventer/Eventer';
import { ThrowEvent } from '../eventer/ThrowEvent';
import Portal from '../popups/[complect]/Portal';

const events = {
  close: [],
};

const swiper = backSwipableContainerMaker(() => Eventer.invoke(events, 'close', undefined));

export type FullContentOpenMode = null | 'open' | 'closable';
export type FullContentValue<PassValue = unknown> = (close: () => void, passValue?: PassValue) => ReactNode;

export default function useFullContent<PassValue>(
  content: FullContentValue<PassValue> | nil,
  forceOpenMode?: FullContentOpenMode,
  switchIsForceOpen?: (is: boolean) => void,
): [ReactNode, (isClosable?: boolean, passValue?: PassValue) => void, () => void] {
  const [openMode, setOpenMode] = useState<FullContentOpenMode>(null);
  const close = () => setOpenMode(null);
  const [passValue, setPassValue] = useState<PassValue>();
  const mode = forceOpenMode === undefined ? openMode : forceOpenMode;
  const onClose = <El,>(event?: MouseEvent<El>) => {
    event?.stopPropagation();
    close();
    switchIsForceOpen?.(false);
  };

  useEffect(() => {
    if (mode) {
      const close = Eventer.listen(events, 'close', () => onClose());
      const escape = ThrowEvent.listenKeyDown('Escape', () => onClose());

      return () => {
        close();
        escape();
      };
    }
  }, [mode]);

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
          <div className="full-container padding-big-gap">{content?.(close, passValue)}</div>
        </div>
      </Portal>
    ),
    (isClosable?: boolean, passValue?: PassValue) => {
      setOpenMode(isClosable ? 'closable' : 'open');
      setPassValue(passValue);
    },
    close,
  ];
}
