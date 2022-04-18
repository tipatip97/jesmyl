import { AppName } from "../../app/App.model";

export interface BorderState extends BorderStateError {
    phase: BoardPhase;
    prevPhase: BoardPhase;
    specialPhase: BoardSpecialPhase;
    currentApp: BoardAppName;
    auth?: BorderAuthorization;
    apps: BoardApplication[];
}

export type BorderErrorScope = keyof BorderAuthorization | 'general';

export interface BorderStateError {
    errorMessage?: string;
    errorScope?: BorderErrorScope;
}

export interface BorderAuthorization {
    fio: string;
    login: string;
    passw?: string;
    rpassw?: string;
}

export interface IndexStorage {
    auth: BoardAuth;
    apps: BoardApplication[];
    currentApp: BoardAppName;
    rejectedComponents: string[];
    registeredApps: BoardAppName[];
    theme: 'light-theme';

    lastUpdate: number;
}

export interface BoardApplication<Variables = {}> {
    name: BoardAppName;
    title: string;
    disabled: boolean;
    hidden: boolean;
    variables: Variables;
}

export interface BoardAuth extends Partial<BorderAuthorization> {
    level: number;
    at?: string;
}

export type BoardPhase = 'apps' | 'settings' | 'login' | 'register';
export type BoardSpecialPhase = '';
export type BoardAppName = AppName | null;

export interface SetFieldState<K extends keyof BorderAuthorization> {
    fieldn: K;
    value: BorderAuthorization[K];
}





