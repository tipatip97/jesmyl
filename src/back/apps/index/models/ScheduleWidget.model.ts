import { SokiAppName } from "../../../complect/soki/soki.model";
import { ScheduleWidgetRegType, ScheduleWidgetUserRoleRight } from "../rights";


export interface ScheduleStorage<EvaIconName> {
    list: IScheduleWidget<EvaIconName>[],
}

export interface IScheduleWidgetLists<EvaIconName> {
    cats: IScheduleWidgetListCat<EvaIconName>[],
    units: IScheduleWidgetListUnit[],
}

export interface IScheduleWidgetListUnit {
    mi: number,
    cat: number,
    title: string,
    dsc: string,
}

export interface IScheduleWidgetListCat<EvaIconName> {
    title: string,
    icon: EvaIconName,
    titles: [string, string],
}

export interface IScheduleWidget<EvaIconName> {
    w: number,
    start: number,
    title: string,
    topic: string,
    dsc: string,
    days: IScheduleWidgetDay[],
    withTech?: num,
    types: ScheduleWidgetDayListItemTypeBox[],
    tatts: ScheduleWidgetAppAttCustomized<EvaIconName>[],
    app: SokiAppName,
    ctrl: IScheduleWidgetCtrl<EvaIconName>,
    lists: IScheduleWidgetLists<EvaIconName>,
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
    use?: number,
    titles?: string[],
    roles?: number,
    list?: number,
}

export interface IScheduleWidgetCtrl<EvaIconName> {
    cats: string[],
    roles: IScheduleWidgetRole<EvaIconName>[],
    users: IScheduleWidgetUser[],
    type: ScheduleWidgetRegType,
    defu: ScheduleWidgetUserRoleRight,
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
    isCustomize?: true,
    R: number,
    U: number,
}

export type ScheduleWidgetAppAttCustomizableValueItem = [string | number | boolean, null | string | number | (string | number)[], number];

export interface ScheduleWidgetAppAttCustomizableValue {
    values?: ScheduleWidgetAppAttCustomizableValueItem[],
}

export interface IScheduleWidgetRole<EvaIconName> {
    mi: number,
    title: string,
    user?: number,
    icon?: EvaIconName,
    cat?: number,
}

type Cati = number;
type UnitMi = number;


export interface IScheduleWidgetUser {
    mi: number,
    login?: string,
    fio?: string,
    alias?: string,
    R?: number,
    li?: Record<Cati, UnitMi>,
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
    IScheduleWidgetCtrl: IScheduleWidgetCtrl<EvaIconName>,
    IScheduleWidgetDayEvent: IScheduleWidgetDayEvent,
    ScheduleWidgetDayEventAttValues: ScheduleWidgetDayEventAttValues,
    ScheduleWidgetAppAttBasic: ScheduleWidgetAppAttBasic<EvaIconName, Param>,
    ScheduleWidgetAppAttCustomizableValue: ScheduleWidgetAppAttCustomizableValue,
    IScheduleWidgetRole: IScheduleWidgetRole<EvaIconName>,
    IScheduleWidgetUser: IScheduleWidgetUser,
    AttKey: AttKey,
    ScheduleWidgetAttKey: ScheduleWidgetAttKey,
    ScheduleWidgetDayEventAttValue: ScheduleWidgetDayEventAttValue,
    ScheduleWidgetAttRef: ScheduleWidgetAttRef,
    IScheduleWidgetLists: IScheduleWidgetLists<EvaIconName>,
    IScheduleWidgetListUnit: IScheduleWidgetListUnit,
    IScheduleWidgetListCat: IScheduleWidgetListCat<EvaIconName>,
}
