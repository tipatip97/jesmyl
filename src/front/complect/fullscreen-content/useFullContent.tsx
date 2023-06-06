import { ReactNode, useEffect, useState } from "react";
import { ThrowEvent } from "../ThrowEvent";
import EvaButton from "../eva-icon/EvaButton";
import Portal from "../popups/[complect]/Portal";

export type FullContentOpenMode = null | "open" | "closable";

export default function useFullContent<PassValue>(content: (close: () => void, passValue?: PassValue) => ReactNode, forceOpenMode?: FullContentOpenMode, switchIsForceOpen?: (is?: boolean) => void): [ReactNode, (isClosable?: boolean, passValue?: PassValue) => void, () => void] {
    const [openMode, setOpenMode] = useState<FullContentOpenMode>(null);
    const close = () => setOpenMode(null);
    const [passValue, setPassValue] = useState<PassValue>();
    const mode = (forceOpenMode === undefined ? openMode : forceOpenMode);
    const onClose = () => {
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
                {content(close, passValue)}
            </div>
        </div>
    </Portal>,
    (isClosable?: boolean, passValue?: PassValue) => {
        setOpenMode(isClosable ? 'closable' : 'open');
        setPassValue(passValue);
    },
        close];
}
