import { ReactNode, useState } from "react";
import EvaIcon from "./eva-icon/EvaIcon";

const isNIs = (is: boolean) => !is;

export default function useIsExpand(initIsExpand: boolean, prefix?: ReactNode, postfix?: ReactNode): [ReactNode, boolean, (isExpand?: boolean) => void] {
    const [isExpand, setIsExpand] = useState(initIsExpand);
    return [
        <span className="flex flex-gap pointer" onClick={() => setIsExpand(!isExpand)}>
            {prefix}
            <EvaIcon name={isExpand ? 'chevron-up' : 'chevron-down'} />
            {postfix}
        </span>,
        isExpand,
        (isExpand) => setIsExpand(isExpand ?? isNIs),
    ];
}
