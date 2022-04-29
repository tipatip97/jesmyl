import { ReactNode } from "react";
import { EvaIconName } from "../../../../../../complect/eva-icon/EvaIcon";
import { editCompositionNavs } from "./EditComposition.complect";


export type EditCompositionNav = typeof editCompositionNavs[number]['place'];

export interface EditCompositionNavItem {
    place: string;
    icon: EvaIconName,
    node: ReactNode;
}