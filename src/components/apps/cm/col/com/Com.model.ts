import { IExportableOrder } from "../../complect/order/Order.model";


export interface ICom {
    name: string;
    wid: number;
    audio: string;
    nameCorrects: (name: string) => string;
    texts: string[];
}


export interface IExportableCom {
    w: number;
    k: number;
    p?: number;
    l: number;
    b: num;
    n: string;
    a: string;
    t: string[];
    c: string[];
    r: Record<string, number>;
    o: IExportableOrder[];

    ton?: number;
    // tonc?: string[];
}



