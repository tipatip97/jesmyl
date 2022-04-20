import { ReactNode } from "react";
import { ChordVisibleVariant } from "../../../Cm.model";
import { Com } from "../Com";


export interface IComOrdersProps {
    asOrdComponent?: () => ReactNode;
    com: Com;
    isHideAnchor?: boolean;
    fontSize?: number;
    chordVisibleVariant: ChordVisibleVariant;
}

