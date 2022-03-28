
export interface BorderState extends BorderStateError {
    phase: BoardPhase;
    auth?: BorderAuthorization;
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

export interface BoardStorage {
    auth: BoardAuth;
}

export interface BoardAuth extends BorderAuthorization {
    level: number;
    at: string;
}

export type BoardPhase = 'apps' | 'settings' | 'login' | 'register';

export interface SetFieldState<K extends keyof BorderAuthorization> {
    fieldn: K;
    value: BorderAuthorization[K];
}





