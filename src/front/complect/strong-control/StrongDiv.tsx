import { ReactNode } from "react";
import modalService from "../modal/Modal.service";
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
    onFailure,
    confirm,
}: StrongControlProps<{
    children?: ReactNode,
    className?: string,
    onClick?: () => void,
    onSuccess?: () => void,
    onFailure?: () => void,
    confirm?: ReactNode,
}>) {
    const exer = useStrongExerContext();

    return <div
        className={className}
        onClick={scope
            ? async () => {
                if (confirm != null && !(confirm && await modalService.confirm(confirm)))
                    return;

                onClick?.();
                strongPrepareArgsAndSend(exer, scope, fieldName, cud ?? 'C', '', fakeCb, mapExecArgs)
                    ?.then(onSuccess)
                    .catch(onFailure);
            }
            : undefined}
        children={children}
    />
}
