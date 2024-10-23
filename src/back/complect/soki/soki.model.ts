import { User } from 'node-telegram-bot-api';
import WebSocket from 'ws';
import { ExecutionDict, ExecutionReal } from '../executer/Executer.model';
import { SimpleKeyValue } from '../filer/Filer.model';
import { ServerStoreContent } from './parts/120-ServerStore';
import { SokiSharedKey, SokiSharedValueType } from './values';

export const sokiAppNames = ['index', 'cm', 'tuner', 'admin', 'gamer', 'leader', 'bible', 'wed'] as const;
export const sokiAppNamesSet = new Set(sokiAppNames);
export type SokiAppName = (typeof sokiAppNames)[number];

const dir = __dirname.split('/').slice(0, -2);
export const rootDirective = dir.join('/');

export interface SokiCapsule {
  auth: LocalSokiAuth | null;
  appName?: SokiAppName;
  deviceId: string;
  urls: string[];
  version: number;
  subscribeData?: SokiClientSubData;
}

export interface SokiServerEvent {
  appName: SokiAppName;
  requestId?: string;
  unregister?: true;
  pong?: true;
  authorized?: boolean;
  pull?: PullEventValue;
  tgAuthorization?: { ok: false; value: string } | { ok: true; value: LocalSokiAuth };
  authorization?: { type: 'login' | 'register' } & ({ ok: false; value: string } | { ok: true; value: LocalSokiAuth });
  execs?: {
    appName: SokiAppName;
    list: ExecutionReal[];
    lastUpdate: number | null;
  };
  errorMessage?: string | null;
  system?: { name: 'reloadFiles' | 'restartWS' } & (
    | { ok: true; message?: string | null }
    | { ok: false; error?: string | null }
  );
  service?: {
    key: string;
    value?: any;
    errorMessage?: string;
  };
  statistic?: SokiStatistic;
  liveData?: Record<SokiClientSubData, unknown>;
  download?: {
    key: string;
    value: string;
  };
  sharedData?: SokiSharedData;
  freshUserContents?: ServerStoreContent[];
}

export type SokiSharedData = {
  key: SokiSharedKey;
  value: Record<string, unknown>;
};

export type SokiSharedDataValuesBox = Partial<{
  [Key in SokiSharedKey]: (data: SokiSharedValueType[Key]) => void;
}>;

export type SokiClientUpdateCortage = [
  number | nil, // index last update
  string | nil, // index short rules JSON md5
  number | nil, // app last update
  string | nil, // app short rules JSON md5
];

export interface TelegramNativeAuthUserData extends Omit<User, 'language_code' | 'is_bot'> {
  auth_date?: number;
  photo_url?: string | null;
  hash?: string;
}

export interface SokiClientEventBody {
  connect?: true;
  ping?: true;
  tgAuthorization?: number;
  tgNativeAuthorization?: TelegramNativeAuthUserData;
  authorization?: { type: 'login'; value: ServerAuthorizationData } | { type: 'register'; value: ServerRegisterData };
  pullData?: SokiClientUpdateCortage;
  execs?: ExecutionDict[];
  system?: { name: 'reloadFiles' | 'restartWS'; passphrase: string };
  service?: SimpleKeyValue;
  subscribe?: SokiSubscribtionName;
  subscribeData?: SokiClientSubData;
  unsubscribe?: SokiSubscribtionName;
  liveData?: null | Record<SokiClientSubData, unknown>;
  download?: string;
  shareData?: {
    key: SokiSharedKey;
    value: Record<string, unknown>;
  };
  getShared?: {
    prefix?: string;
    key: SokiSharedKey;
  };
  userContents?: ServerStoreContent[];
}

export type SokiClientSubData<
  Spec extends string = string,
  AppName extends SokiAppName = SokiAppName,
  Id extends number | string = string,
> = `${AppName}-${Spec}-${Id}${`:${string | ''}` | ''}`;

export type SokiSubscribtionName = 'statistic' | 'liveData';

export type SokiEventName = keyof SokiClientEventBody & keyof SokiServerEvent;

export interface SokiVisitor {
  fio?: string;
  nick: string;
  version: string | number;
  deviceId?: string;
  browser?: string;
  time?: string;
  tgId?: number;
  urls: string[];
}

export interface SokiStatistic {
  online: number;
  authed: number;
  usages: Partial<Record<SokiAppName, SokiVisitor[]>>;
  visits: SokiVisitor[];
  pastVisits: Record<string, number>;
}

export interface SokiClientEvent {
  requestId?: string;
  body: SokiClientEventBody;
  auth?: LocalSokiAuth;
  appName: SokiAppName;
  deviceId: string;
  urls: string[];
  version: number;
  browser?: string;
  isUseLS?: boolean;
}

export interface SokiAuthUnitRights {}

export interface PullEventValue {
  appName: SokiAppName;
  updates: SokiClientUpdateCortage;
  contents: [
    SimpleKeyValue[], // index contents
    SimpleKeyValue[], // app contents
  ];
}

export interface SokiAuth extends BaseSokiAuth {
  level: number;
  passw: string;
}

export interface BaseSokiAuth {
  fio: string;
  nick: string;
  login: string;
  tgId?: number;
  tgAva?: string;
}

export interface LocalSokiAuth extends Partial<BaseSokiAuth> {
  level: number;
  passw?: string;
}

export interface ServerAuthorizationData {
  login: string;
  passw: string;
}

export interface ServerRegisterData {
  login: string;
  passw: string;
  rpassw: string;
  fio: string;
  nick: string;
}

export interface AuthorizeInSystem {
  register: ServerRegisterData;
  login: ServerAuthorizationData;
}

export type SokiServiceCallback = (
  key: string,
  value: any,
  getCapsule: () => SokiCapsule | undefined,
  props: SokiServerDoActionProps,
) => Promise<any>;
export type SokiServicePack = Partial<Record<SokiAppName, SokiServiceCallback>>;

export interface SokiServerDoActionProps {
  appName: SokiAppName;
  eventData: SokiClientEvent;
  eventBody: SokiClientEventBody;
  client: WebSocket;
  requestId: string | und;
}

export type SokiServerDoAction<Name extends string> = Record<
  `doOn${Name}`,
  (props: SokiServerDoActionProps) => Promise<boolean> // вернуть (boolean) отвечающий на вопрос "прервать ли дальнейшие операции?"
>;
