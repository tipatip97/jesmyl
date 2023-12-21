import { ReactNode, TouchEventHandler, useCallback, useEffect, useState } from 'react';
import { ThrowEvent } from '../eventer/ThrowEvent';
import Portal from '../popups/[complect]/Portal';

type ModalConfigMood = 'norm' | 'ko' | 'ok';

interface UserModalConfig {
  mood?: ModalConfigMood;
  onOpenSwitch?: () => void;
}

const stoppedEvent: TouchEventHandler<HTMLDivElement> = (event) => event.stopPropagation();

export interface ScreenModalConfig extends UserModalConfig {}

interface UseModalConfig extends UserModalConfig {
  isOpen: boolean;
  content?: Contenter;
}

const defaultUseModalConfig: UseModalConfig = {
  isOpen: false,
};

const modalElements = {
  actionButton: (content: ReactNode) => <div className="modal-action-button">{content}</div>,
  header: (content: ReactNode) => <div className="modal-header">{content}</div>,
  body: (content: ReactNode) => <div className="modal-body margin-big-gap-v">{content}</div>,
  footer: (content: ReactNode) => <div className="modal-footer">{content}</div>,
};

type Contenter = (elements: typeof modalElements, close: () => void) => JSX.Element;

export default function useModal(
  topContent?: Contenter,
  onOpenSwitch?: (is: boolean) => void,
  isForceOpen?: boolean,
): [ReactNode, (_event?: any, content?: Contenter, config?: ScreenModalConfig) => void, () => void] {
  const [config, setConfig] = useState(defaultUseModalConfig);
  const close = useCallback(() => {
    config.onOpenSwitch?.();
    onOpenSwitch?.(false);
    setConfig((prev) => ({ ...prev, isOpen: false }));
  }, [config, onOpenSwitch]);

  useEffect(() => {
    if (isForceOpen || config.isOpen) {
      return ThrowEvent.listenKeyDown('Escape', close);
    }
  }, [close, isForceOpen, config.isOpen]);

  return [
    (isForceOpen || config.isOpen) && (
      <Portal>
        <div
          onTouchStart={stoppedEvent}
          className={'modal-application-screen type_screen' + (isForceOpen === false ? ' force-hidden' : '')}
          onClick={(event) => {
            event.stopPropagation();
            close();
          }}
        >
          <div className="modal-screen-wrapper type_screen">
            <div
              className={'modal-screen type_screen mood mood_' + config.mood}
              onClick={(event) => event.stopPropagation()}
            >
              {config.content === undefined ? topContent?.(modalElements, close) : config.content(modalElements, close)}
            </div>
          </div>
        </div>
      </Portal>
    ),
    (_event, content, config) => {
      onOpenSwitch?.(true);
      setConfig({
        ...config,
        isOpen: true,
        content,
      });
    },
    close,
  ];
}
