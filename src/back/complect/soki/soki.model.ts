import { ExecutionDict, ExecutionReal } from "../executer/Executer.model";
import { SimpleKeyValue } from "../filer/Filer.model";

export const sokiAppNames = ['index', 'cm', 'tuner', 'admin', 'spy', 'lider'] as const;
export type SokiAppName = typeof sokiAppNames[number];


const dir = __dirname.split('/');
dir.length -= 2;
export const rootDirective = dir.join('/');

export interface SokiCapsule {
    auth: LocalSokiAuth | null;
}

export interface SokiServerEvent {
    connect?: true,
    pull?: PullEventValue,
    authorization?: { type: 'login' | 'register' } & ({ ok: false, value: string } | ({ ok: true, value: LocalSokiAuth })),
    execs?: {
        list: ExecutionReal[],
        lastUpdate: number | null,
    },
    errorMessage?: string | null,
    reloadFiles?: true,
}

export interface SokiClientEventBody {
    connect?: true,
    authorization?: ({ type: 'login', value: SokiAuthorizationData } | { type: 'register', value: SokiRegisterData }),
    pull?: { lastUpdate: number, indexLastUpdate: number },
    execs?: ExecutionDict[],
    reloadFiles?: true,
}

export type SokiEventName = keyof SokiClientEventBody & keyof SokiServerEvent;

export interface SokiClientEvent {
    body: SokiClientEventBody;
    auth: LocalSokiAuth | null;
    appName: SokiAppName;
}

export interface SokiAuthUnitRights { }

export interface PullEventValue {
    contents: SimpleKeyValue[],
    indexContents: SimpleKeyValue[],
    lastUpdate: number,
    indexLastUpdate: number,
    appName: SokiAppName,
}

export interface SokiAuth extends BaseSokiAuth {
    level: number,
    passw: string,
}

export interface BaseSokiAuth {
    fio: string,
    login: string,
}

export interface LocalSokiAuth extends Partial<BaseSokiAuth> {
    level: number,
    passw?: string,
}

export interface SokiAuthorizationData {
    login: string,
    passw: string,
}

export interface SokiRegisterData {
    login: string,
    passw: string,
    rpassw: string,
    fio: string,
}

export interface AuthorizeInSystem {
    register: SokiRegisterData,
    login: SokiAuthorizationData,
}
