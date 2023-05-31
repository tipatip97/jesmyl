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
}: StrongControlProps<{
    name: EvaIconName,
    confirm?: string,
    className?: string,
}>) {
    const exer = useStrongExerContext();

    return <EvaSendButton
        name={name}
        confirm={confirm}
        className={className}
        onSend={() => {
            strongPrepareArgsAndSend(exer, scope, fieldName, cud ?? 'C', undefined, () => { }, mapExecArgs);
        }}
    />;
}
