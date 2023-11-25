import WebSocket from 'ws';
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
    deviceId: string,
    version: number,
}

export interface SokiServerEvent {
    appName: SokiAppName,
    requestId?: string,
    unregister?: true,
    pong?: true,
    authorized?: boolean,
    pull?: PullEventValue,
    tgAuthorization?: ({ ok: false, value: string } | { ok: true, value: LocalSokiAuth }),
    authorization?: { type: 'login' | 'register' } & ({ ok: false, value: string } | ({ ok: true, value: LocalSokiAuth })),
    execs?: {
        appName: SokiAppName,
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

export type SokiClientUpdateCortage = [
    number | nil, // index last update
    string | nil, // index short rules JSON md5
    number | nil, // app last update
    string | nil, // app short rules JSON md5
];

export interface SokiClientEventBody {
    connect?: true,
    ping?: true,
    tgAuthorization?: number,
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

export interface SokiVisitor {
    fio?: string,
    username?: string,
    version: number,
    deviceId?: string,
    browser?: string,
    time: string,
}

export interface SokiStatistic {
    online: number,
    authed: number,
    usages: Partial<Record<SokiAppName, { fio?: string, username?: string, version: number, deviceId: string }[]>>,
    visits: SokiVisitor[],
    pastVisits: Record<string, number>,
}

export interface SokiClientEvent {
    requestId?: string,
    body: SokiClientEventBody,
    auth?: LocalSokiAuth,
    appName: SokiAppName,
    deviceId: string,
    version: number,
    browser?: string,
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
    tgId?: number,
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

export type SokiServiceCallback = (key: string, value: any, eventData: SokiClientEvent, capsule: SokiCapsule | undefined, client: WebSocket) => Promise<any>;
export type SokiServicePack = Partial<Record<SokiAppName, SokiServiceCallback>>;
