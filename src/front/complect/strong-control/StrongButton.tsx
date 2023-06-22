import { ReactNode } from "react";
import SendButton from "../SendButton";
import { StrongControlProps } from "./Strong.model";
import { strongPrepareArgsAndSend, useStrongExerContext } from "./useStrongControl";
import useModal from "../modal/useModal";

export default function StrongButton({
    title,
    scope,
    fieldName,
    cud,
    mapExecArgs,
    confirm,
}: StrongControlProps<{
    title: string,
    confirm?: ReactNode,
}>) {
    const exer = useStrongExerContext();
    const { modalNode, toast } = useModal();

    return <>
        {modalNode}
        <SendButton
            title={title}
            confirm={confirm}
            onFailure={(errorMessage) => toast(errorMessage, { mood: 'ko' })}
            onSend={() => {
                return strongPrepareArgsAndSend(exer, scope, fieldName, cud ?? 'C', '', () => { }, mapExecArgs);
            }}
        />
    </>;
}
