import { AppName } from "../../app/App.model";
import { EvaIconName } from "../../complect/eva-icon";

export interface IndexState extends IndexStateError {
    phase: IndexPhase;
    prevPhase: IndexPhase;
    specialPhase: IndexSpecialPhase;
    currentApp: IndexAppName;
    auth?: IndexAuthorization;
    apps: IndexApplication[];
}

export type IndexErrorScope = keyof IndexAuthorization | 'general';

export interface IndexStateError {
    errorMessage?: string;
    errorScope?: IndexErrorScope;
}

export interface IndexAuthorization {
    fio: string;
    login: string;
    passw?: string;
    rpassw?: string;
}

export interface IndexStorage {
    auth: IndexAuth;
    apps: IndexApplication[];
    currentApp: AppName;
    specialPhase: AppName;
    prevPhase: IndexPhase;
    phase: IndexPhase;
    rejectedComponents: string[];
    registeredApps: AppName[];
    theme: 'light-theme';

    lastUpdate: number;
}

export interface IndexApplication<Variables = {}> {
    name: AppName;
    title: string;
    icon: EvaIconName;
    disabled: boolean;
    hidden: boolean;
    variables: Variables;
}

export interface IndexAuth extends Partial<IndexAuthorization> {
    level: number;
    at?: string;
}

export type IndexPhase = 'main' | 'apps' | 'settings' | 'login' | 'register';
export type IndexSpecialPhase = AppName;
export type IndexAppName = AppName | null;

export interface SetFieldState<K extends keyof IndexAuthorization> {
    fieldn: K;
    value: IndexAuthorization[K];
}
