import { ReactNode } from "react";
import { StrongControlProps } from "./Strong.model";
import { strongPrepareArgsAndSend, useStrongExerContext } from "./useStrongControl";

export default function StrongDiv({
    scope,
    fieldName,
    cud,
    mapExecArgs,
    className,
    children,
    onClick,
}: StrongControlProps<{ children: ReactNode, className: string, onClick?: () => void }>) {
    const exer = useStrongExerContext();

    return <div
        className={className}
        onClick={scope
            ? () => {
                onClick?.();
                strongPrepareArgsAndSend(exer, scope, fieldName, cud ?? 'C', '', () => { }, mapExecArgs);
            }
            : undefined}
        children={children}
    />
}