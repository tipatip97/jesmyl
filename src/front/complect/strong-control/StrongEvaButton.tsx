import { EvaIconName } from "../eva-icon/EvaIcon";
import EvaSendButton from "../eva-icon/EvaSendButton";
import { StrongControlProps } from "./Strong.model";
import { strongPrepareArgsAndSend, useStrongExerContext } from "./useStrongControl";

export default function StrongEvaButton({
    name,
    scope,
    fieldName,
    cud,
    mapExecArgs,
    confirm,
    className,
    disabled,
}: StrongControlProps<{
    name: EvaIconName,
    confirm?: string,
    className?: string,
    disabled?: boolean,
}>) {
    const exer = useStrongExerContext();

    return <EvaSendButton
        name={name}
        confirm={confirm}
        className={className}
        disabled={disabled}
        onSend={() => {
            strongPrepareArgsAndSend(exer, scope, fieldName, cud ?? 'C', undefined, () => { }, mapExecArgs);
        }}
    />;
}
