import { CmSpecialPhase } from "../../../Cm.model";
import { Com } from "../Com";


export interface ComFaceProps {
    com: Com;
    specialPhase?: CmSpecialPhase;
    importantOnClick?: () => void;
    groupClass?: string;
}