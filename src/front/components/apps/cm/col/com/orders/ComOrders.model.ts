import { ReactNode } from "react";
import { ChordVisibleVariant } from "../../../Cm.model";
import { Com } from "../Com";
import { IComOrdHeaderProps } from "../order/Order.model";


export interface IComOrdersProps {
    asHeaderComponent?: (props: IComOrdHeaderProps) => ReactNode;
    com: Com;
    isMiniAnchor?: boolean;
    fontSize?: number;
    chordVisibleVariant: ChordVisibleVariant;
    showInvisibles?: boolean;
}

