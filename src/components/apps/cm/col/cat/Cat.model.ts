import { BaseNamedExportables } from "../../base/Base";
import { Com } from "../com/Com";


export interface ICat {
    coms: Com[];
    topComs: Com[];
}

export interface IExportableCat extends BaseNamedExportables {
    s?: number[];
    t?: string[] | null;
}

export interface ComWrap<C = Com> {
    com: C;
    deep?: number;
    field?: string;
    rate?: number;
}



