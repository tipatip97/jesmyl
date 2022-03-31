import { Com } from "../com/Com";


export interface ICat {
    coms: Com[];
    topComs: Com[];
}

export interface IExportableCat {
    w: number;
    s?: number[];
    n?: string;
    t?: string[] | null;
}

export interface ComWrap {
    com: Com;
    errors?: string[];
}



