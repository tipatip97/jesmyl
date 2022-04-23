import { EvaIconName } from "../../../../../complect/eva-icon/EvaIcon";
import { BaseNamedExportables } from "../../base/Base";
import { IExportableOrder } from "./order/Order.model";


export interface ICom {
    name: string;
    wid: number;
    audio: string;
    nameCorrects: (name: string) => string;
    texts: string[];
}


export interface IExportableCom extends BaseNamedExportables {
    k?: number;
    p?: number;
    l?: number;
    b?: num;
    a?: string;
    t?: string[];
    c?: string[];
    r?: Record<string, number>;
    o?: IExportableOrder[];

    ton?: number;
    // tonc?: string[];
}

export type SettingsItemName = 'ton' | 'font-size' | 'open-anchors';

export interface SettingsItem {
    title: string;
    name: SettingsItemName;
    icon: EvaIconName;
}
