import { ReactNode, useState } from "react";
import Portal from "../popups/[complect]/Portal";

export enum ModalType {
    Toast = 'toast',
};

type ModalConfigMood = 'norm' | 'ko' | 'ok';

interface UserModalConfig {
    mood?: ModalConfigMood,
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

export default function useModal<
    TopContent extends JSX.Element | undefined,
    Content extends TopContent extends undefined ? ReactNode : null,
>(topContent?: TopContent) {
    const [config, setConfig] = useState(defaultUseModalConfig);
    const typeClassName = ' type_' + config.type;

    const ret = {
        toast: (content: Content, config?: ModalConfig) => {
            setConfig({
                ...config,
                isOpen: true,
                type: ModalType.Toast,
                content,
            });
            setTimeout(() => setConfig((prev) => ({ ...prev, isOpen: false })), config?.showTime ?? 3000);
        },
        modalNode: (config.isOpen && <Portal>
            <div className={'modal-application-screen ' + typeClassName}>
                <div className={'modal-screen-wrapper ' + typeClassName}>
                    <div className={'modal-screen ' + typeClassName + (' mood mood_' + config.mood)}>
                        {topContent ?? config.content}
                    </div>
                </div>
            </div>
        </Portal>) as ReactNode,
    };
    return ret;
}
