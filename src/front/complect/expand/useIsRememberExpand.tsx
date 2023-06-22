import { ReactNode, useCallback, useState } from "react";
import { complectStorage } from "../Complect.store";
import EvaIcon from "../eva-icon/EvaIcon";

const isNIs = (is: boolean) => !is;
const expandes: string[] = complectStorage.getOr('rememberExpandes', []);
const clear = (scope: string) => {
    const scopeIndex = expandes.indexOf(scope);
    expandes.splice(scopeIndex, 1);
    complectStorage.set('rememberExpandes', expandes);
};

export const useIsRememberExpand = (scope: string, prefix?: ReactNode, postfix?: ReactNode, isSelfExpandOnly?: boolean): [
    ReactNode,
    boolean,
    (isExpand?: boolean) => void,
] => {
    const [isExpand, setIsExpand] = useState(isSelfExpandOnly ? false : expandes.includes(scope));

    if (isSelfExpandOnly && expandes.includes(scope)) clear(scope);
    const switchExpand: (isExpand?: boolean) => void = useCallback((isExpand) => {
        if (isSelfExpandOnly) setIsExpand(isExpand ?? isNIs);

        if (expandes.includes(scope)) {
            if (isExpand === undefined || isExpand === false) {
                clear(scope);
                if (!isSelfExpandOnly) setIsExpand(isNIs);
            }
        } else if (!isSelfExpandOnly) {
            if (isExpand === undefined || isExpand === true) {
                expandes.push(scope);
                setIsExpand(isNIs);
                complectStorage.set('rememberExpandes', expandes);
            }
        }
    }, [isSelfExpandOnly, scope]);

    return [
        <span className="flex flex-gap flex-max pointer" onClick={() => switchExpand()}>
            <span className="flex flex-gap flex-max">
                {prefix}
                <EvaIcon name={isExpand ? 'chevron-up' : 'chevron-down'} />
            </span>
            {postfix}
        </span>,
        isExpand,
        switchExpand,
    ];
};
