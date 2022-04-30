import { AppName } from "../../app/App.model";
import { EvaIconName } from "../../complect/eva-icon/EvaIcon";
import { NavRoute } from "../../complect/nav-configurer/Navigation.model";

export interface IndexState extends IndexStateError {
    route: NavRoute;
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

export interface IndexStorage extends IndexState {
    auth: Auth;
    apps: IndexApplication[];
    currentApp: AppName;
    specialPhase: AppName;
    rejectedComponents: string[];
    registeredApps: AppName[];
    theme: 'light-theme';
    actions: [];

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
