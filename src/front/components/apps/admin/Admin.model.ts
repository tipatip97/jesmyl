
export interface AdminState extends AdminStoraged {
}

export interface AdminStorage extends AdminStoraged {
    lastUpdate: number;
}

export type UserVisits = { [login: string]: number };

export interface AdminStoraged {
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