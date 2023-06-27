import { ReactNode } from "react";
import SendButton from "../SendButton";
import { StrongControlProps } from "./Strong.model";
import { strongPrepareArgsAndSend, useStrongExerContext } from "./useStrongControl";
import useModal from "../modal/useModal";

const simpleFunc = () => { };

export default function StrongButton(props: StrongControlProps<{
    title: string,
    confirm?: ReactNode,
}>) {
    const exer = useStrongExerContext();
    const { modalNode, toast } = useModal();

    return <>
        {modalNode}
        <SendButton
            title={props.title}
            confirm={props.confirm}
            onFailure={(errorMessage) => toast(errorMessage, { mood: 'ko' })}
            onSend={() => {
                return strongPrepareArgsAndSend(
                    exer,
                    props.scope,
                    props.fieldName,
                    props.cud ?? 'C',
                    '',
                    simpleFunc,
                    props.mapExecArgs,
                    props.fieldKey,
                    props.fieldValue,
                );
            }}
        />
    </>;
}
