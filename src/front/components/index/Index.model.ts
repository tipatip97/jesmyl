import { AppName } from '../../app/App.model';
import { ExecRule } from '../../complect/exer/Exer.model';
import { ScheduleStorage } from '../../complect/schedule-widget/ScheduleWidget.model';
import {
  IScheduleWidgetWid,
  LocalSokiAuth,
  NounPronsType,
  ServerAuthorizationData,
  ServerRegisterData,
  SokiClientSubData,
  SokiStatistic,
} from '../../models';
import { BibleTranslationScreenConfig } from '../apps/bible/translations/model';
import { CmTranslationScreenConfig } from '../apps/cm/translation/complect/controlled/model';
import { FileAssociations } from './parts/actions/files/complect/MyFilesTypeBox';

export interface IndexState {
  currentApp: AppName;
  appVersion: number;
  auth: Auth;
  schedules: ScheduleStorage;
  statistic: SokiStatistic | null;
  liveData: Record<SokiClientSubData, unknown>;
  nounPronsWords: NounPronsType;
  fileAssociations?: FileAssociations;
  rules: ExecRule[];
  appFontFamily: string | null;

  updateRequisites?: Partial<
    Record<
      AppName,
      [
        number, // last content updated ts
        string | undefined, // short rules JSON md5
      ]
    >
  > | null;
}

export type IndexErrorScope = keyof ClientRegisterData;

export type IndexSchWTranslationLiveDataValue = {
  fio: string;
  cm?: {
    texti: number;
    comw: number;
    config: CmTranslationScreenConfig;
  };
  bible?: {
    text: string;
    addressText: string;
    config: BibleTranslationScreenConfig;
  };
  markdown?: string;
};

export type ScheduleWidgetTranslationLiveDataKey = SokiClientSubData<'sch', 'index', IScheduleWidgetWid>;

export type IndexStateSchLiveData = Record<ScheduleWidgetTranslationLiveDataKey, IndexSchWTranslationLiveDataValue>;

export interface IndexStateError {
  message?: string | nil;
  scope?: IndexErrorScope;
}

export interface IndexStorage extends IndexState {
  rules: [];
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
  schTranslationComws: number[];
  schTranslationEventw: number;
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
