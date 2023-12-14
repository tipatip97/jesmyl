import { ReactNode } from "react";
import { EvaIconName } from "../EvaIcon";

export interface EvaSendButtonProps<Value> {
    name: EvaIconName,
    confirm?: ReactNode,
    disabled?: boolean,
    onSend?: () => Promise<Value> | void | nil,
    onSuccess?: ((val: Value) => void) | nil,
    onFailure?: (errorMessage: string) => string | void,
    className?: string,
    prefix?: null | ReactNode,
    postfix?: null | ReactNode,
}
