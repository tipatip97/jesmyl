import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";

export interface PrinterState extends PrinterStorage {
    route: FreeNavRoute;
}

export interface PrinterStorage {
    templates: Templates;
}

export interface Templates {
    text?: string;
    humans?: Human[];
}

export interface Human {
    name: string;
    isMan: boolean;
}

export interface PrinterNavData {}
