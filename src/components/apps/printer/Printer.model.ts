import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";

export interface PrinterState extends PrinterStorage {
    route: FreeNavRoute;
}

export interface PrinterStorage {
    templates?: Templates;
}

export interface Templates {
    humans?: Human[];
}

export interface Human {
    name: string;
    isMan: boolean;
    notes: string;
    id: string;
    ufp?: number;
    isInactive?: boolean;
}

export interface PrinterNavData { }
