import { SokiAppName } from '../../../complect/soki/soki.model';
import { ScheduleWidgetRegType, ScheduleWidgetUserRoleRight } from '../rights';

export enum IScheduleWidgetWid {
  def = 1,
}
export enum IScheduleWidgetUserMi {
  def = 1,
}
export enum IScheduleWidgetUserLogin {
  def = 'string',
}
export enum IScheduleWidgetTeamMi {
  def = 1,
}
export enum IScheduleWidgetTeamGameMi {
  def = 1,
}
export enum IScheduleWidgetDayEventMi {
  def = 1,
}

export enum IScheduleWidgetUserCati {
  def = 0,
}
export enum IScheduleWidgetUserUnitMi {
  def = 1,
}

export enum IScheduleWidgetUserTgId {
  def = 1,
}

export type ScheduleWidgetPhotoKey =
  | `${IScheduleWidgetWid}/mi:${IScheduleWidgetUserMi}`
  | `tg.${IScheduleWidgetUserTgId}`
  | `login.${IScheduleWidgetUserLogin}`;

export interface ScheduleStorage<TheIconName> {
  list: IScheduleWidget<TheIconName>[];
}

export interface IScheduleWidgetLists<TheIconName> {
  cats: IScheduleWidgetListCat<TheIconName>[];
  units: IScheduleWidgetListUnit[];
}

export interface IScheduleWidgetListUnit {
  mi: number;
  cat: IScheduleWidgetUserCati;
  title: string;
  dsc: string;
}

export interface IScheduleWidgetListCat<TheIconName> {
  title: string;
  icon: TheIconName;
  titles: [string, string];
}

export interface IScheduleWidget<TheIconName> {
  w: IScheduleWidgetWid;
  start: number;
  title: string;
  topic: string;
  dsc: string;
  days: IScheduleWidgetDay[];
  withTech?: num;
  types: ScheduleWidgetDayListItemTypeBox[];
  tatts: ScheduleWidgetAppAttCustomized<TheIconName>[];
  app: SokiAppName;
  ctrl: IScheduleWidgetCtrl<TheIconName>;
  games?: IScheduleWidgetTeamGames;
  lists: IScheduleWidgetLists<TheIconName>;
  tgInform?: num;
  tgChatReqs?: `${number}`;
  tgInformTime: number;
}

export interface IScheduleWidgetDay {
  mi: number;
  wup: number; // wakeup
  topic?: string;
  dsc?: string;
  list: IScheduleWidgetDayEvent[];
}

export interface ScheduleWidgetDayListItemTypeBox {
  title: string;
  tm?: number;
  atts?: ScheduleWidgetDayEventAttValues;
}

export interface ScheduleWidgetAppAttCustomized<TheIconName> extends ScheduleWidgetAppAttCustomizable<TheIconName> {
  mi: number;
  isCustomize: true;
}

export interface ScheduleWidgetAppAttCustomizable<TheIconName>
  extends ScheduleWidgetAppAttBasic<TheIconName, ScheduleWidgetAppAttCustomizableValue> {
  use?: number;
  titles?: string[];
  roles?: number;
  list?: number;
}

export interface IScheduleWidgetCtrl<TheIconName> {
  cats: string[];
  roles: IScheduleWidgetRole<TheIconName>[];
  users: IScheduleWidgetUser[];
  type: ScheduleWidgetRegType;
  defu: ScheduleWidgetUserRoleRight;
}

export interface IScheduleWidgetDayEvent {
  mi: IScheduleWidgetDayEventMi;
  type: number;
  topic?: string;
  dsc?: string;
  tm?: number;
  atts?: ScheduleWidgetDayEventAttValues;
  secret?: 1 | 0;
  rate?: Record<number, [number, string]>;
  tgInform?: 1 | 0;
}

export type ScheduleWidgetDayEventAttValues = Record<ScheduleWidgetAttKey, ScheduleWidgetDayEventAttValue>;

export interface ScheduleWidgetAppAttBasic<TheIconName, AttValue extends any = any> {
  icon: TheIconName;
  title: string;
  description: string;
  initVal: AttValue;
  isCustomize?: true;
  R: number;
  U: number;
}

export type ScheduleWidgetAppAttCustomizableValueItem = [
  string | number | boolean,
  null | string | number | (string | number)[],
  number,
];

export interface ScheduleWidgetAppAttCustomizableValue {
  values?: ScheduleWidgetAppAttCustomizableValueItem[];
}

export interface IScheduleWidgetTeamCriteria {
  title: string;
  sorts: Record<IScheduleWidgetUserMi, number>;
}

export interface IScheduleWidgetTeamMember {
  mi: IScheduleWidgetUserMi;
}

export interface IScheduleWidgetExportableTeam {
  users: IScheduleWidgetTeamMember[];
}

export interface IScheduleWidgetTeam extends IScheduleWidgetExportableTeam {
  title: string;
  mi: IScheduleWidgetTeamMi;
}

export enum IScheduleWidgetTeamGameStrikedMemberState {
  Removed = 1,
  Exists,
}

export interface IScheduleWidgetTeamGame {
  title: string;
  teams: IScheduleWidgetTeam[];
  mi: IScheduleWidgetTeamGameMi;
}

export interface IScheduleWidgetTeamGames {
  list: IScheduleWidgetTeamGame[];
  criterias: IScheduleWidgetTeamCriteria[];
  strikedUsers?: IScheduleWidgetUserMi[];
}

export interface IScheduleWidgetRole<TheIconName> {
  mi: number;
  title: string;
  user?: number;
  icon?: TheIconName;
  cat?: number;
}

export interface IScheduleWidgetUser {
  mi: IScheduleWidgetUserMi;
  login?: IScheduleWidgetUserLogin;
  fio?: string;
  nick?: string;
  R?: number;
  li?: Record<number, IScheduleWidgetUserUnitMi>;
  tgId?: IScheduleWidgetUserTgId;
  tgInform?: num;
}

export type AttKey = SokiAppName | 'SCH';

export type ScheduleWidgetAttKey<AttAppName extends AttKey = AttKey> = `[${AttAppName}]:${string}`;

export type ScheduleWidgetDayEventAttValue = Record<string, unknown> | ScheduleWidgetAttRef;

export type ScheduleWidgetAttRef = [number, number];

export interface Back<TheIconName, Param = unknown> {
  ScheduleStorage: ScheduleStorage<TheIconName>;
  IScheduleWidget: IScheduleWidget<TheIconName>;
  IScheduleWidgetDay: IScheduleWidgetDay;
  ScheduleWidgetDayListItemTypeBox: ScheduleWidgetDayListItemTypeBox;
  ScheduleWidgetAppAttCustomized: ScheduleWidgetAppAttCustomized<TheIconName>;
  ScheduleWidgetAppAttCustomizable: ScheduleWidgetAppAttCustomizable<TheIconName>;
  IScheduleWidgetCtrl: IScheduleWidgetCtrl<TheIconName>;
  IScheduleWidgetDayEvent: IScheduleWidgetDayEvent;
  ScheduleWidgetDayEventAttValues: ScheduleWidgetDayEventAttValues;
  ScheduleWidgetAppAttBasic: ScheduleWidgetAppAttBasic<TheIconName, Param>;
  ScheduleWidgetAppAttCustomizableValue: ScheduleWidgetAppAttCustomizableValue;
  IScheduleWidgetRole: IScheduleWidgetRole<TheIconName>;
  IScheduleWidgetUser: IScheduleWidgetUser;
  AttKey: AttKey;
  ScheduleWidgetAttKey: ScheduleWidgetAttKey;
  ScheduleWidgetDayEventAttValue: ScheduleWidgetDayEventAttValue;
  ScheduleWidgetAttRef: ScheduleWidgetAttRef;
  IScheduleWidgetLists: IScheduleWidgetLists<TheIconName>;
  IScheduleWidgetListUnit: IScheduleWidgetListUnit;
  IScheduleWidgetListCat: IScheduleWidgetListCat<TheIconName>;
}
