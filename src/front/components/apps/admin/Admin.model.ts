import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";

export interface AdminState extends AdminStoraged {
    route: FreeNavRoute;
}

export interface AdminStorage extends AdminStoraged {
    lastUpdate: number;
}

export type UserVisits = { [login: string]: number };

export interface AdminStoraged {
    route: FreeNavRoute;
    userList: IExportableUser[];
    currentUser?: string;
    userVisits: UserVisits;
    appProps?: Record<string, any>;
}

export interface IExportableUser {
    login: string;
    level: number;
    fio: string;
    passw: string;
    _passw: string;
}