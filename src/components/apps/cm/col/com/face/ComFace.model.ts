import { ReactNode } from "react";
import { Com } from "../Com";


export interface ComFaceProps {
    com: Com;
    importantOnClick?: () => void;
    groupClass?: string;
    selectable?: boolean;
    description?: ReactNode;
    isRejectScrollToView?: boolean;
}