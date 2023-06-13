import React, { ReactNode, useContext } from "react";
import { indexExer } from "../../components/index/Index.store";
import { Exer } from "../exer/Exer";
import { ExerStorage } from "../exer/Exer.model";
import { CUD, StrongComponentProps } from "./Strong.model";

export const StrongExerContext = React.createContext<Exer<any>>(indexExer);
export const useStrongExerContext = () => useContext(StrongExerContext);

export const useStrongExerContent = <Storage extends ExerStorage>(exer: Exer<Storage>) => {
    return (content: ReactNode) =>
        <StrongExerContext.Provider value={exer}>{
            content
        }</StrongExerContext.Provider>;
};

export const makeStrongScopeMaker = <Phase extends string = string>() => (parentScope: string, scopeName: ` ${Phase}${typeof strongScopeKeyValueSeparator}`, value: number | string) => {
    return `${parentScope}${scopeName}${value}`;
};

export const strongScopeKeyValueSeparator = '/';

export const strongPrepareArgsAndSend = <Storage extends ExerStorage, ValType extends string | number>(
    exer: Exer<Storage>,
    scope: string | undefined,
    fieldName: string,
    cud: CUD,
    value: ValType | undefined,
    onBeforeSend: () => void,
    mapExecArgs?: StrongComponentProps<Storage, ValType>['mapExecArgs'],
): Promise<boolean> | void => {
    let args: Record<string, unknown> = value === undefined ? {} : { value };
    let action = '';

    scope?.split(' ').forEach((scopeItem) => {
        const beats = scopeItem.split(strongScopeKeyValueSeparator);
        if (beats.length > 1) {
            args[beats[0]] = isNaN(+beats[1]) ? beats[1] : +beats[1];
            action += ` ${beats[0]}`;
        } else action += ` ${scopeItem}`;
    });

    if (mapExecArgs) {
        const mappedArgs = mapExecArgs(args, (value ?? '') as never);
        if (mappedArgs == null) return;
        args = mappedArgs;
    }

    onBeforeSend();

    return exer.send({
        args,
        action: action.trim() + (fieldName ? ` ${fieldName}` : '') + ` [${cud}]`,
    });
}
