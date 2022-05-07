import { ReactNode } from "react";
import { ChordVisibleVariant } from "../../../Cm.model";
import { Com } from "../Com";
import { IComOrdHeaderProps, ITheOrderProps } from "../order/Order.model";


export interface IComOrdersProps {
    asOrdComponent?: (props: ITheOrderProps) => ReactNode;
    asHeaderComponent?: (props: IComOrdHeaderProps) => ReactNode;
    com: Com;
    isMiniAnchor?: boolean;
    fontSize?: number;
    chordVisibleVariant: ChordVisibleVariant;
    hideInvisibles?: boolean;
}

