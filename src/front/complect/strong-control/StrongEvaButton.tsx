import EvaSendButton, { EvaSendButtonProps } from "../eva-icon/EvaSendButton";
import useModal from "../modal/useModal";
import { StrongControlProps } from "./Strong.model";
import { strongPrepareArgsAndSend, useStrongExerContext } from "./useStrongControl";

const simpleFunc = () => { };

export default function StrongEvaButton({
    scope,
    fieldName,
    fieldValue,
    fieldKey,
    cud,
    mapExecArgs,
    ...props
}: StrongControlProps<EvaSendButtonProps<boolean>> & {
    fieldValue?: unknown,
    fieldKey?: unknown,
}) {
    const exer = useStrongExerContext();
    const { modalNode, toast } = useModal();

    return <>
        {modalNode}
        <EvaSendButton<boolean>
            {...props}
            onFailure={(errorMessage) => toast(errorMessage, { mood: 'ko' })}
            onSend={() => {
                if (props.isCanSend === false) return;
                return strongPrepareArgsAndSend(
                    exer,
                    scope,
                    fieldName,
                    cud ?? 'C',
                    undefined,
                    simpleFunc,
                    mapExecArgs,
                    fieldKey,
                    fieldValue,
                );
            }}
        />
    </>;
}
