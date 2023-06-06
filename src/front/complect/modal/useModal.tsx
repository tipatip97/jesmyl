import { ReactNode, useCallback, useEffect, useState } from "react";
import { ThrowEvent } from "../eventer/ThrowEvent";
import Portal from "../popups/[complect]/Portal";

export enum ModalType {
    Toast = 'toast',
    Screen = 'screen',
};

type ModalConfigMood = 'norm' | 'ko' | 'ok';

interface UserModalConfig {
    mood?: ModalConfigMood,
    onClose?: () => void,
}

export interface ModalConfig extends UserModalConfig {
    showTime?: number,
}

interface UseModalConfig extends UserModalConfig {
    isOpen: boolean,
    content?: ReactNode,
    type?: ModalType,
}

const defaultUseModalConfig: UseModalConfig = {
    isOpen: false,
};

const modalElements = {
    actionButton: (content: ReactNode) => <div className="modal-action-button">{content}</div>,
    header: (content: ReactNode) => <div className="modal-header">{content}</div>,
    body: (content: ReactNode) => <div className="modal-body">{content}</div>,
    footer: (content: ReactNode) => <div className="modal-footer">{content}</div>,
};

export default function useModal(topContent?: (
    elements: typeof modalElements, close: () => void) => JSX.Element,
    onClose?: (() => void) | nil,
    isForceOpen?: boolean,
    switchIsForceOpen?: (is?: boolean) => void,
) {
    const [config, setConfig] = useState(defaultUseModalConfig);
    const typeClassName = ' type_' + (isForceOpen ? 'screen' : config.type);
    const close = useCallback(() => {
        (config.onClose ?? onClose)?.();
        switchIsForceOpen?.(false);
        setConfig((prev) => ({ ...prev, isOpen: false }));
    }, [config.onClose, onClose]);

    useEffect(() => {
        if (config.isOpen && config.type !== ModalType.Toast) {
            return ThrowEvent.listenKeyDown('Escape', close);
        }
    }, [close, config.isOpen, config.type]);

    const ret = {
        screen: (content?: ReactNode, config?: ModalConfig) => {
            setConfig({
                ...config,
                isOpen: true,
                type: ModalType.Screen,
                content,
            });
        },
        toast: (content?: ReactNode, config?: ModalConfig) => {
            setConfig({
                ...config,
                isOpen: true,
                type: ModalType.Toast,
                content,
            });
            setTimeout(() => setConfig((prev) => ({ ...prev, isOpen: false })), config?.showTime ?? 3000);
        },
        modalNode: ((isForceOpen || config.isOpen) && <Portal>
            <div className={'modal-application-screen ' + typeClassName} onClick={close}>
                <div className={'modal-screen-wrapper ' + typeClassName}>
                    <div className={'modal-screen ' + typeClassName + (' mood mood_' + config.mood)} onClick={(event) => event.stopPropagation()}>
                        {topContent?.(modalElements, close) ?? config.content}
                    </div>
                </div>
            </div>
        </Portal>) as ReactNode,
    };
    return ret;
}
