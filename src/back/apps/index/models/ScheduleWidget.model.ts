import { SokiAppName } from "../../../complect/soki/soki.model";


export interface ScheduleStorage<EvaIconName> {
    list: IScheduleWidget<EvaIconName>[],
}

export interface IScheduleWidget<EvaIconName> {
    w: number,
    start: number,
    title?: string,
    topic?: string,
    dsc?: string,
    days?: IScheduleWidgetDay[],
    types?: ScheduleWidgetDayListItemTypeBox[],
    atts?: ScheduleWidgetAppAttCustomized<EvaIconName>[],
    app: SokiAppName,
    roles: IScheduleWidgetRoles<EvaIconName>,
}


export interface IScheduleWidgetDay {
    mi: number,
    wup: number, // wakeup
    topic?: string,
    dsc?: string,
    list: IScheduleWidgetDayEvent[],
}


export interface ScheduleWidgetDayListItemTypeBox {
    title: string,
    tm?: number,
    atts?: ScheduleWidgetDayEventAttValues,
}


export interface ScheduleWidgetAppAttCustomized<EvaIconName> extends ScheduleWidgetAppAttCustomizable<EvaIconName> {
    mi: number,
    isCustomize: true,
}

export interface ScheduleWidgetAppAttCustomizable<EvaIconName> extends ScheduleWidgetAppAttBasic<EvaIconName, ScheduleWidgetAppAttCustomizableValue> {
    titles?: string[],
}

export interface IScheduleWidgetRoles<EvaIconName> {
    cats: string[],
    list: IScheduleWidgetRole<EvaIconName>[],
    users: IScheduleWidgetRoleUser[],
}

export interface IScheduleWidgetDayEvent {
    mi: number,
    type: number,
    topic?: string,
    dsc?: string,
    tm?: number,
    atts?: ScheduleWidgetDayEventAttValues,
    secret?: 1 | 0,
    rate?: Record<number, [number, string]>,
}

export type ScheduleWidgetDayEventAttValues = Record<ScheduleWidgetAttKey, ScheduleWidgetDayEventAttValue>;

export interface ScheduleWidgetAppAttBasic<EvaIconName, AttValue extends any = any> {
    icon: EvaIconName,
    title: string,
    description: string,
    initVal: AttValue,
    isCustomize?: true;
}

export interface ScheduleWidgetAppAttCustomizableValue {
    values?: [string | number | boolean, string][],
}

export interface IScheduleWidgetRole<EvaIconName> {
    mi: number,
    title: string,
    user?: number,
    icon?: EvaIconName,
    cat?: number,
}

export interface IScheduleWidgetRoleUser {
    mi: number,
    login: string,
    fio: string,
    alias?: string,
    R?: number,
}


export type AttKey = SokiAppName | 'SCH';


export type ScheduleWidgetAttKey<AttAppName extends AttKey = AttKey> = `[${AttAppName}]:${string}`;


export type ScheduleWidgetDayEventAttValue = Record<string, unknown> | ScheduleWidgetAttRef;


export type ScheduleWidgetAttRef = [number, number];


export interface Back<EvaIconName, Param = unknown> {
    ScheduleStorage: ScheduleStorage<EvaIconName>,
    IScheduleWidget: IScheduleWidget<EvaIconName>,
    IScheduleWidgetDay: IScheduleWidgetDay,
    ScheduleWidgetDayListItemTypeBox: ScheduleWidgetDayListItemTypeBox,
    ScheduleWidgetAppAttCustomized: ScheduleWidgetAppAttCustomized<EvaIconName>,
    ScheduleWidgetAppAttCustomizable: ScheduleWidgetAppAttCustomizable<EvaIconName>,
    IScheduleWidgetRoles: IScheduleWidgetRoles<EvaIconName>,
    IScheduleWidgetDayEvent: IScheduleWidgetDayEvent,
    ScheduleWidgetDayEventAttValues: ScheduleWidgetDayEventAttValues,
    ScheduleWidgetAppAttBasic: ScheduleWidgetAppAttBasic<EvaIconName, Param>,
    ScheduleWidgetAppAttCustomizableValue: ScheduleWidgetAppAttCustomizableValue,
    IScheduleWidgetRole: IScheduleWidgetRole<EvaIconName>,
    IScheduleWidgetRoleUser: IScheduleWidgetRoleUser,
    AttKey: AttKey,
    ScheduleWidgetAttKey: ScheduleWidgetAttKey,
    ScheduleWidgetDayEventAttValue: ScheduleWidgetDayEventAttValue,
    ScheduleWidgetAttRef: ScheduleWidgetAttRef,
}
