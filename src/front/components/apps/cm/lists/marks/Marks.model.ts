import { Com } from "../../col/com/Com";


export type MarksOnEmptyCallback = (isEmpty: boolean) => void;

export interface MarksProps {
    setIsActive?: (comw: number, com: Com, ccomw?: number) => boolean,
    isHideSysButtons?: boolean;
    onClick?: (comw: number) => void;
}
