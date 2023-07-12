import { useEffect, useState } from "react";
import { ThrowEvent } from "../../eventer/ThrowEvent";
import useModal from "../../modal/useModal";
import { EvaSendButtonBody } from "./Body";
import { EvaSendButtonProps } from "./EvaSendButton.model";

export function EvaSendButtonWithConfirm<Value>(props:
    EvaSendButtonProps<Value> &
    {
        onClick: (event: React.MouseEvent<unknown> | KeyboardEvent) => void,
        isLoading: boolean,
        sysClassName: string,
    }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalNode] = useModal(({ header, body, footer }, closeModal) => {
        return <>
            {header(<>Подтверди</>)}
            {body(<>{props.confirm}</>)}
            {footer(<span className="flex flex-gap">
                <span
                    className="pointer"
                    onClick={(event) => {
                        props.onClick(event);
                        closeModal();
                    }}
                >Да</span>
                <span
                    className="pointer"
                    onClick={() => closeModal()}
                >Нет</span>
            </span>)}
        </>;
    }, is => !is && setIsModalOpen(false), isModalOpen);

    useEffect(() => {
        if (isModalOpen)
            return ThrowEvent.listenKeyDown('Enter', (event) => {
                props.onClick(event);
                setIsModalOpen(false);
            });
    }, [isModalOpen, props]);

    return <>
        {modalNode}
        <EvaSendButtonBody<Value>
            {...props}
            onClick={() => setIsModalOpen(true)}
        />
    </>;
}
