import { ReactNode, useEffect, useState } from "react";
import { ThrowEvent } from "../ThrowEvent";
import EvaButton from "../eva-icon/EvaButton";
import Portal from "../popups/[complect]/Portal";

export type FullContentOpenMode = null | "open" | "closable";

export default function useFullContent(content: (close: () => void) => ReactNode): [ReactNode, (isClosable?: boolean) => void, () => void] {
    const [openMode, setOpenMode] = useState<FullContentOpenMode>(null);
    const close = () => setOpenMode(null);

    useEffect(() => {
        if (openMode) {
            return ThrowEvent.listenKeyDown('Escape', () => setOpenMode(null));
        }
    }, [openMode]);

    return [openMode && <Portal>
        <div className={`fullscreen-content-container ${openMode || ""}`}
            onClick={
                openMode === "closable"
                    ? () => close()
                    : undefined
            }
        >
            {openMode === "closable" ? null : (
                <EvaButton
                    name="close"
                    className="close-button"
                    onClick={() => close()}
                />
            )}
            <div className="full-container padding-big-gap">
                {content(close)}
            </div>
        </div>
    </Portal>, (isClosable?: boolean) => setOpenMode(isClosable ? 'closable' : 'open'), close];
}
