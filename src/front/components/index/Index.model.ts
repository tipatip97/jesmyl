import { LocalSokiAuth, SokiStatistic } from "../../../back/complect/soki/soki.model";
import { AppName } from "../../app/App.model";
import { EvaIconName } from "../../complect/eva-icon/EvaIcon";
import { ScheduleStorage } from "../../complect/schedule-widget/ScheduleWidget.model";

export interface IndexState {
    currentApp: AppName,
    appVersion?: number,
    auth: Auth | nil,
    apps: IndexApplication[],
    schedules: ScheduleStorage,
    errors: Partial<Record<IndexErrorScope, string>>,
    userMessages: UserMessage[],
    statistic: SokiStatistic | null,

    updateRequisites?: Partial<Record<AppName, [
        number, // last content updated ts
        string | undefined, // short rules JSON md5
    ]>>,
    numModalUpdates: number,
    isUseNativeKeyboard?: boolean,
}

export type IndexErrorScope = keyof RegisterData;

export interface IndexStateError {
    message?: string | nil,
    scope?: IndexErrorScope,
}

export interface IndexStorage extends IndexState {
    auth: Auth | nil,
    apps: IndexApplication[],
    currentApp: AppName,
    rejectedComponents: string[],
    registeredApps: AppName[],
    theme: 'light-theme',
    rules: [],

    updateOnRefresher: boolean,
}

export interface UserMessage {
    at: string,
    fio: string,
    login: string,
    message: string,
    read?: boolean,
    w: number,
}

export interface IndexApplication {
    name: AppName,
    title: string,
    icon: EvaIconName,
    disabled: boolean,
    hidden: boolean,
    variables: { mutedExecs: boolean; },
    params?: string[],
}

export type Auth = LocalSokiAuth;

export interface AuthorizationData {
    login: string,
    passw: string,
}

export interface RegisterData {
    login: string,
    passw: string,
    rpassw: string,
    fio?: string,
}

export interface AuthResponse extends Auth {
    ok: boolean,
    mode: AuthMode,
    errors: string[],
    errorId: IndexErrorScope,
}

export type AuthMode = 'check' | 'login' | 'register';

export type IndexPhase = 'main' | 'apps' | 'settings' | 'login' | 'register';
export type IndexSpecialPhase = AppName;
export type IndexAppName = AppName | null;

export interface AuthorizeInSystem {
    register: RegisterData,
    login: AuthorizationData,
}
