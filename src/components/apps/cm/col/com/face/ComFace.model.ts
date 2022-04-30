import { Com } from "../Com";


export interface ComFaceProps {
    com: Com;
    importantOnClick?: () => void;
    groupClass?: string;
}