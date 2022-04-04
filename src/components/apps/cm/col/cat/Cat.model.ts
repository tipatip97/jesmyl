import { IExportedCol } from "../Col.model";
import { Com } from "../com/Com";


export interface ICat {
    coms: Com[];
    topComs: Com[];
}

export interface IExportableCat extends IExportedCol {
    s?: number[];
    t?: string[] | null;
}

export interface ComWrap {
    com: Com;
    errors?: string[];
    deep?: number;
    field?: string;
    rate?: number;
}



