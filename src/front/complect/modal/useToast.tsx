import { ReactNode, useState } from "react";
import Portal from "../popups/[complect]/Portal";

type ModalConfigMood = 'norm' | 'ko' | 'ok';

interface UserModalConfig {
    mood?: ModalConfigMood,
}

export interface ToastModalConfig extends UserModalConfig {
    showTime?: number,
}

interface UseModalConfig extends UserModalConfig {
    isOpen: boolean,
    content?: ReactNode,
}

const defaultUseModalConfig: UseModalConfig = {
    isOpen: false,
};

export default function useToast(): [ReactNode, (content?: ReactNode, config?: ToastModalConfig) => void] {
    const [config, setConfig] = useState(defaultUseModalConfig);

    return [
        (config.isOpen) && <Portal>
            <div
                className="modal-application-screen type_toast">
                <div className="modal-screen-wrapper type_toast">
                    <div className={'modal-screen type_toast mood mood_' + config.mood}>
                        {config.content}
                    </div>
                </div>
            </div>
        </Portal>,
        (content, config) => {
            setConfig({
                ...config,
                isOpen: true,
                content,
            });
            setTimeout(() => setConfig((prev) => ({ ...prev, isOpen: false })), config?.showTime ?? 3000);
        },
    ];
}
