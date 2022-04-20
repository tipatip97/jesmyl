import { CmSpecialPhase } from "../../../Cm.model";
import { Com } from "../Com";


export interface ComFaceProps {
    com: Com;
    errors?: string[];
    specialPhase?: CmSpecialPhase;
    importantOnClick?: () => void;
    groupClass?: string;
}