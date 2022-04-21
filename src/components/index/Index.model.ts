import { AppName } from "../../app/App.model";
import { EvaIconName } from "../../complect/eva-icon";

export interface IndexState extends IndexStateError {
    phase: IndexPhase;
    prevPhase: IndexPhase;
    specialPhase: IndexSpecialPhase;
    currentApp: AppName;
    auth?: Auth;
    apps: IndexApplication[];

    lastUpdate?: number;
}

export type IndexErrorScope = keyof RegisterData | 'general';

export interface IndexStateError {
    errorMessage?: string;
    errorScope?: IndexErrorScope;
}

export interface IndexStorage {
    auth: Auth;
    apps: IndexApplication[];
    currentApp: AppName;
    specialPhase: AppName;
    prevPhase: IndexPhase;
    phase: IndexPhase;
    rejectedComponents: string[];
    registeredApps: AppName[];
    theme: 'light-theme';

    lastUpdate: number;
    updateOnRefresher: boolean;
}

export interface IndexApplication<Variables = {}> {
    name: AppName;
    title: string;
    icon: EvaIconName;
    disabled: boolean;
    hidden: boolean;
    variables: Variables;
}

export interface Auth {
    level: number;
    login?: string;
    fio?: string;
    at?: string;
}

export interface AuthorizationData {
    login: string;
    passw: string;
}

export interface RegisterData {
    fio: string;
    login: string;
    passw: string;
    rpassw: string;
}

export interface AuthResponse {
    ok: boolean;
    mode: AuthMode;
    auth: Auth;
    errorMessage: string;
    errorId: IndexErrorScope;
}

export type AuthMode = 'check' | 'login' | 'register';

export type IndexPhase = 'main' | 'apps' | 'settings' | 'login' | 'register';
export type IndexSpecialPhase = AppName;
export type IndexAppName = AppName | null;
