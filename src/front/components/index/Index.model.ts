import { LocalSokiAuth, NounPronsType, ServerAuthorizationData, ServerRegisterData, SokiStatistic } from '../../models';
import { AppName } from '../../app/App.model';
import { ScheduleStorage } from '../../complect/schedule-widget/ScheduleWidget.model';
import { FileAssociations } from './parts/actions/files/complect/MyFilesTypeBox';

export interface IndexState {
  currentApp: AppName;
  appVersion?: number;
  auth: Auth;
  schedules: ScheduleStorage;
  errors: Partial<Record<IndexErrorScope, string>>;
  statistic: SokiStatistic | null;
  deviceId: string;
  nounPronsWords?: NounPronsType;
  fileAssociations?: FileAssociations;
  appFontFamily?: string;

  updateRequisites?: Partial<
    Record<
      AppName,
      [
        number, // last content updated ts
        string | undefined, // short rules JSON md5
      ]
    >
  >;
  numModalUpdates: number;
  isUseNativeKeyboard?: boolean;
}

export type IndexErrorScope = keyof ClientRegisterData;

export interface IndexStateError {
  message?: string | nil;
  scope?: IndexErrorScope;
}

export interface IndexStorage extends IndexState {
  currentApp: AppName;
  rejectedComponents: string[];
  registeredApps: AppName[];
  theme: 'light-theme';
  rules: [];

  updateOnRefresher: boolean;
}

export interface JesmylPassport {
  login: string;
  nick: string;
  fio?: string;
  tgId?: number;
}

export interface IndexNavData {
  passport: JesmylPassport;
  swInvite: string;
  schw: number;
}

export interface UserMessage {
  at: string;
  fio: string;
  nick: string;
  login: string;
  message: string;
  read?: boolean;
  w: number;
}

export type Auth = LocalSokiAuth;

export interface ClientAuthorizationData {
  nick: string;
  passw: string;
}

export interface ClientRegisterData {
  login: string;
  passw: string;
  rpassw: string;
  fio: string;
  nick: string;
}

export interface AuthResponse extends Auth {
  ok: boolean;
  mode: AuthMode;
  errors: string[];
  errorId: IndexErrorScope;
}

export type AuthMode = 'check' | 'login' | 'register' | 'auth';

export type IndexPhase = 'main' | 'apps' | 'settings' | 'login' | 'register';
export type IndexSpecialPhase = AppName;
export type IndexAppName = AppName | null;

export interface ServerAuthorizeInSystem {
  register: ServerRegisterData;
  login: ServerAuthorizationData;
}
