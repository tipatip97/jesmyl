import { ReactNode } from "react";
import { StrongControlProps } from "./Strong.model";
import { strongPrepareArgsAndSend, useStrongExerContext } from "./useStrongControl";

const fakeCb = () => { };

export default function StrongDiv({
    scope,
    fieldName,
    cud,
    mapExecArgs,
    className,
    children,
    onClick,
    onSuccess,
    onFailure
}: StrongControlProps<{
    children?: ReactNode,
    className?: string,
    onClick?: () => void,
    onSuccess?: () => void,
    onFailure?: () => void,
}>) {
    const exer = useStrongExerContext();

    return <div
        className={className}
        onClick={scope
            ? () => {
                onClick?.();
                strongPrepareArgsAndSend(exer, scope, fieldName, cud ?? 'C', '', fakeCb, mapExecArgs)
                    ?.then(onSuccess)
                    .catch(onFailure);
            }
            : undefined}
        children={children}
    />
}
