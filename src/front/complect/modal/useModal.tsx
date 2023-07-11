import { ReactNode, useCallback, useEffect, useState } from "react";
import { ThrowEvent } from "../eventer/ThrowEvent";
import Portal from "../popups/[complect]/Portal";


type ModalConfigMood = 'norm' | 'ko' | 'ok';

interface UserModalConfig {
    mood?: ModalConfigMood,
    onClose?: () => void,
}

export interface ScreenModalConfig extends UserModalConfig {
}

interface UseModalConfig extends UserModalConfig {
    isOpen: boolean,
    content?: ReactNode,
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

export default function useModal(topContent?: (
    elements: typeof modalElements, close: () => void) => JSX.Element,
    onClose?: (() => void) | nil,
    isForceOpen?: boolean,
    switchIsForceOpen?: (is: boolean) => void,
): [ReactNode, (content?: ReactNode, config?: ScreenModalConfig) => void] {
    const [config, setConfig] = useState(defaultUseModalConfig);
    const close = useCallback(() => {
        (config.onClose ?? onClose)?.();
        switchIsForceOpen?.(false);
        setConfig((prev) => ({ ...prev, isOpen: false }));
    }, [config.onClose, onClose, switchIsForceOpen]);

    useEffect(() => {
        if (isForceOpen || config.isOpen) {
            return ThrowEvent.listenKeyDown('Escape', close);
        }
    }, [close, isForceOpen, config.isOpen]);

    return [
        (isForceOpen || config.isOpen) && <Portal>
            <div
                className={'modal-application-screen type_screen' + (isForceOpen === false ? ' force-hidden' : '')}
                onClick={(event) => {
                    event.stopPropagation();
                    close();
                }}>
                <div className="modal-screen-wrapper type_screen">
                    <div
                        className={'modal-screen type_screen mood mood_' + config.mood}
                        onClick={(event) => event.stopPropagation()}
                    >
                        {config.content ?? topContent?.(modalElements, close)}
                    </div>
                </div>
            </div>
        </Portal>,
        (content?: ReactNode, config?: ScreenModalConfig) => {
            setConfig({
                ...config,
                isOpen: true,
                content,
            });
        },
    ];
}
