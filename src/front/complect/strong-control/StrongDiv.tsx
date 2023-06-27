import { ReactNode } from "react";
import modalService from "../modal/Modal.service";
import { StrongControlProps } from "./Strong.model";
import { strongPrepareArgsAndSend, useStrongExerContext } from "./useStrongControl";

const simpleFunc = () => { };

export default function StrongDiv(props: StrongControlProps<{
    children?: ReactNode,
    className?: string,
    onClick?: () => void,
    onSuccess?: () => void,
    onFailure?: () => void,
    confirm?: ReactNode,
}>) {
    const exer = useStrongExerContext();

    return <div
        className={props.className}
        onClick={props.scope
            ? async () => {
                if (props.isCanSend === false) return;
                if (props.confirm != null && !(props.confirm && await modalService.confirm(props.confirm)))
                    return;

                    props.onClick?.();
                strongPrepareArgsAndSend(
                    exer,
                    props.scope,
                    props.fieldName,
                    props.cud ?? 'C',
                    '',
                    simpleFunc,
                    props.mapExecArgs,
                    props.fieldKey,
                    props.fieldValue,
                )
                    ?.then(props.onSuccess)
                    .catch(props.onFailure);
            }
            : undefined}
        children={props.children}
    />
}
