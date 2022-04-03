import { CSSProperties, LegacyRef, ReactNode } from "react";
import { Com } from "../Com";


export interface IComOrdersProps {
    key: string;
    style: CSSProperties;
    onClick: () => void;
    ref: LegacyRef<HTMLDivElement>;
    asOrdComponent: () => ReactNode;
    setClassName: () => string;
    ccom: Com;
    fontSize: number;
}

