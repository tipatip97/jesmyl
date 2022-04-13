import { CmPhase } from "../../../Cm.model";
import { Com } from "../Com";


export interface ComFaceProps {
    com: Com;
    errors?: string[];
    forPhase?: CmPhase;
  }