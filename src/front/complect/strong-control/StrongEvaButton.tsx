import EvaSendButton, { EvaSendButtonProps } from "../eva-icon/EvaSendButton";
import useModal from "../modal/useModal";
import { StrongControlProps } from "./Strong.model";
import { strongPrepareArgsAndSend, useStrongExerContext } from "./useStrongControl";

export default function StrongEvaButton({
    scope,
    fieldName,
    cud,
    mapExecArgs,
    ...props
}: StrongControlProps<EvaSendButtonProps<boolean>>) {
    const exer = useStrongExerContext();
    const { modalNode, toast } = useModal();

    return <>
        {modalNode}
        <EvaSendButton<boolean>
            {...props}
            onFailure={(errorMessage) => toast(errorMessage, { mood: 'ko' })}
            onSend={() => {
                return strongPrepareArgsAndSend(exer, scope, fieldName, cud ?? 'C', undefined, () => { }, mapExecArgs);
            }}
        />
    </>;
}
