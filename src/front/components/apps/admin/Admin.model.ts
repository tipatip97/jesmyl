import { Auth } from "../../index/Index.model";

export type UserAuth = Auth;

export interface AdminNavData {
    cuser: string,
}

export interface AdminStorage {
    userList?: UserAuth[],
}
