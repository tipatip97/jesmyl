import EvaSendButton, { EvaSendButtonProps } from "../eva-icon/EvaSendButton";
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

    return <EvaSendButton<boolean>
        {...props}
        onSend={() => {
            return strongPrepareArgsAndSend(exer, scope, fieldName, cud ?? 'C', undefined, () => { }, mapExecArgs);
        }}
    />;
}
