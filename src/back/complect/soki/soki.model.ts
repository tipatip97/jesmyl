import { ExecutionDict, ExecutionReal } from "../executer/Executer.model";
import { SimpleKeyValue } from "../filer/Filer.model";

export const sokiAppNames = ['index', 'cm', 'tuner', 'admin', 'gamer', 'leader'] as const;
export type SokiAppName = typeof sokiAppNames[number];


const dir = __dirname.split('/');
dir.length -= 2;
export const rootDirective = dir.join('/');

export interface SokiCapsule {
    auth: LocalSokiAuth | null,
    appName?: SokiAppName,
}

export interface SokiServerEvent {
    requestId?: number,
    connect?: boolean,
    pull?: PullEventValue,
    authorization?: { type: 'login' | 'register' } & ({ ok: false, value: string } | ({ ok: true, value: LocalSokiAuth })),
    execs?: {
        list: ExecutionReal[],
        lastUpdate: number | null,
    },
    errorMessage?: string | null,
    system?: { name: 'reloadFiles' | 'restartWS' } & ({ ok: true, message?: string | null } | { ok: false, error?: string | null }),
    service?: {
        key: string,
        value?: any,
        errorMessage?: string
    },
    statistic?: SokiStatistic,
}

type nil = undefined | null;

export type SokiClientUpdateCortage = [
    number | nil, // index last update
    string | nil, // index short rules JSON md5
    number | nil, // app last update
    string | nil, // app short rules JSON md5
];

export interface SokiClientEventBody {
    connect?: true,
    authorization?: ({ type: 'login', value: SokiAuthorizationData } | { type: 'register', value: SokiRegisterData }),
    pullData?: SokiClientUpdateCortage,
    execs?: ExecutionDict[],
    system?: { name: 'reloadFiles' | 'restartWS', passphrase: string },
    service?: SimpleKeyValue,
    subscribe?: SokiSubscribtionName,
    unsubscribe?: SokiSubscribtionName,
}

export type SokiSubscribtionName = 'statistic';

export type SokiEventName = keyof SokiClientEventBody & keyof SokiServerEvent;

export interface SokiStatistic {
    online: number,
    authed: number,
    usages: Partial<Record<SokiAppName, (string | null)[]>>,
}

export interface SokiClientEvent {
    requestId?: number,
    body: SokiClientEventBody,
    auth: LocalSokiAuth | null,
    appName: SokiAppName,
}

export interface SokiAuthUnitRights { }

export interface PullEventValue {
    appName: SokiAppName,
    updates: SokiClientUpdateCortage,
    contents: [
        SimpleKeyValue[], // index contents
        SimpleKeyValue[], // app contents
    ],
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

export type SokiServicePack = Partial<Record<SokiAppName, (key: string, value: any) => Promise<any>>>;
