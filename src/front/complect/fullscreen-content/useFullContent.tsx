import { MouseEvent, ReactNode, useEffect, useState } from "react";
import EvaButton from "../eva-icon/EvaButton";
import { ThrowEvent } from "../eventer/ThrowEvent";
import Portal from "../popups/[complect]/Portal";

export type FullContentOpenMode = null | "open" | "closable";
export type FullContentValue<PassValue = unknown> = (close: () => void, passValue?: PassValue) => ReactNode;

export default function useFullContent<PassValue>(content: FullContentValue<PassValue> | null, forceOpenMode?: FullContentOpenMode, switchIsForceOpen?: (is: boolean) => void): [ReactNode, (isClosable?: boolean, passValue?: PassValue) => void, () => void] {
    const [openMode, setOpenMode] = useState<FullContentOpenMode>(null);
    const close = () => setOpenMode(null);
    const [passValue, setPassValue] = useState<PassValue>();
    const mode = (forceOpenMode === undefined ? openMode : forceOpenMode);
    const onClose = <El,>(event?: MouseEvent<El>) => {
        event?.stopPropagation();
        close();
        switchIsForceOpen?.(false);
    };

    useEffect(() => {
        if (mode) {
            return ThrowEvent.listenKeyDown('Escape', () => onClose());
        }
    }, [mode]);

    return [mode && <Portal>
        <div
            className={`fullscreen-content-container ${mode || ""}`}
            onClick={mode === "closable" ? onClose : undefined}
        >
            {mode === "closable" ? null : (
                <EvaButton
                    name="close"
                    className="close-button"
                    onClick={onClose}
                />
            )}
            <div className="full-container padding-big-gap">
                {content?.(close, passValue)}
            </div>
        </div>
    </Portal>,
    (isClosable?: boolean, passValue?: PassValue) => {
        setOpenMode(isClosable ? 'closable' : 'open');
        setPassValue(passValue);
    },
        close];
}
