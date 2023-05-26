import { ReactNode } from "react";
import EvaButton from "./eva-icon/EvaButton";
import useModal from "./modal/useModal";

export default function CopyTextButton({
    text,
    disabled,
    description,
    className,
    message,
}: {
    text: string | (() => string | nil),
    disabled?: boolean,
    description?: ReactNode,
    className?: string,
    message?: ReactNode,
}) {
    const { toast, modalNode } = useModal();

    return <>
        {modalNode}
        <span
            className={(className || '') + ' flex flex-gap pointer'}
            onClick={event => {
                event.stopPropagation();
                const textToWrite = typeof text === 'string' ? text : text();
                if (textToWrite == null) return;
                navigator.clipboard.writeText(textToWrite);
                toast(message ?? 'Текст скопирован');
            }}>
            {description}
            <EvaButton
                name="copy-outline"
                disabled={disabled}
            />
        </span>
    </>;
}
