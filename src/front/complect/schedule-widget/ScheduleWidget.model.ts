import { ReactNode } from "react";
import { AppName } from "../../app/App.model";
import { EvaIconName } from "../eva-icon/EvaIcon";

export interface ScheduleStorage {
    list: IScheduleWidget[];
}

export interface IScheduleWidget {
    w: number,
    start: number,
    title?: string,
    days?: ScheduleWidgetDay[],
    types?: ScheduleWidgetDayListItemTypeBox[],
}

export interface ScheduleWidgetDay {
    w: number,
    wup: number, // wakeup
    topic?: string,
    dsc?: string,
    list: IScheduleWidgetDayListItem[],
}

export interface IScheduleWidgetDayListItem {
    mi: number,
    type: number,
    topic?: string,
    dsc?: string,
    tm?: number,
    atts?: unknown,
}

export type ScheduleWidgetAttKey<AttAppName extends AppName = AppName> = `[${AttAppName}]:${string}`;

export type ScheduleWidgetAppAtts<AttAppName extends AppName = AppName> = Record<ScheduleWidgetAttKey<AttAppName>, ScheduleWidgetAppAtt>;

export interface ScheduleWidgetAppAtt {
    icon: EvaIconName,
    title: string,
    result: (item: IScheduleWidgetDayListItem, day: ScheduleWidgetDay) => ReactNode,
    description: string,
}

export interface ScheduleWidgetDayListItemTypeBox {
    title: string,
    tm?: number,
    atts?: ScheduleWidgetAttKey[],
}


export interface ScheduleWidgetDayListItemProps {
    scope: string,
    event: IScheduleWidgetDayListItem,
    eventi: number,
    schedule: IScheduleWidget,
    day: ScheduleWidgetDay,
    prevTime: number,
    isShowPeriodsNotTs: boolean,
    onClickOnTs: () => void,
    redact: boolean | nil,
    wakeupMs: number,
}

export interface IScheduleWidgetDayProps {
    day: ScheduleWidgetDay,
    dayi: number,
    schedule: IScheduleWidget,
    redact: boolean,
    scope: string,
}

export type PossibleScheduleScopeNames = 'schw'| 'dayw';

export type ScheduleWidgetWidScopeLine = WidScopeLine<PossibleScheduleScopeNames>;

export type WidScope<Names extends string> = ` ${Names}:${number}` | '';
export type WidScopeLine<Names extends string> = `${WidScope<Names>}` | '';

