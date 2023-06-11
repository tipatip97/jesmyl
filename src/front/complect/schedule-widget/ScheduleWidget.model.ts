import { ReactNode } from "react";
import { AppName } from "../../app/App.model";
import { EvaIconName } from "../eva-icon/EvaIcon";


export enum AccessRuleType {
    Free,
    CRUDAccess
}

export interface AccessRule {
    type: AccessRuleType,
}

export interface ScheduleStorage {
    list: IScheduleWidget[];
    rules?: AccessRule,
}

export interface IScheduleWidget {
    w: number,
    start: number,
    title?: string,
    topic?: string,
    dsc?: string,
    days?: IScheduleWidgetDay[],
    types?: ScheduleWidgetDayListItemTypeBox[],
    atts?: ScheduleWidgetAppAttCustomized[],
    app: AppName,
}

export interface IScheduleWidgetDay {
    mi: number,
    wup: number, // wakeup
    topic?: string,
    dsc?: string,
    list: IScheduleWidgetDayEvent[],
}

export type ScheduleWidgetDayEventAttValue = Record<string, unknown> | ScheduleWidgetAttRef;
export type ScheduleWidgetDayEventAttValues = Record<ScheduleWidgetAttKey, ScheduleWidgetDayEventAttValue>;

export interface IScheduleWidgetDayEvent {
    mi: number,
    type: number,
    topic?: string,
    dsc?: string,
    tm?: number,
    atts?: ScheduleWidgetDayEventAttValues,
}

export type AttKey = AppName | 'SCH';

export type ScheduleWidgetAttRef = [number, number];
export type ScheduleWidgetAttRefs = Record<ScheduleWidgetAttKey<AttKey>, ScheduleWidgetAttRef[]>;

export type ScheduleWidgetAttKey<AttAppName extends AttKey = AttKey> = `[${AttAppName}]:${string}`;

export type ScheduleWidgetAppAtts<AttAppName extends AttKey = AttKey, AttValue extends any = any> =
    Record<ScheduleWidgetAttKey<AttAppName>, ScheduleWidgetAppAtt<AttValue>>;

export type ScheduleWidgetAppAttResultItem<AttValue extends any> = (mpValue: () => AttValue, content: ReactNode) => JSX.Element;

export enum ScheduleWidgetAppAttCustomizableType {
    KeyValue = 0,
}

export interface ScheduleWidgetAppAttCustomizableValue {
    values?: [string, string][],
}

export interface ScheduleWidgetAppAttCustomizable extends ScheduleWidgetAppAttBasic<ScheduleWidgetAppAttCustomizableValue> {
    type: ScheduleWidgetAppAttCustomizableType,
    titles?: string[],
}

export interface ScheduleWidgetAppAttCustomized extends ScheduleWidgetAppAttCustomizable {
    mi: number,
    isCustomize: true,
}

export interface ScheduleWidgetAppAttBasic<AttValue extends any = any> {
    icon: EvaIconName,
    title: string,
    description: string,
    initVal: AttValue,
    isCustomize?: true;
}

export interface ScheduleWidgetAppAtt<AttValue extends any = any> extends ScheduleWidgetAppAttBasic<AttValue> {
    result: (
        value: AttValue,
        scope: string,
        isRedact: boolean,
        switchIsRedact: (isRedact?: boolean) => void,
    ) => ReactNode,
}

export interface ScheduleWidgetDayListItemTypeBox {
    title: string,
    tm?: number,
    atts?: ScheduleWidgetDayEventAttValues,
}
