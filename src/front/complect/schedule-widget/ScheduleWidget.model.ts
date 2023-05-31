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
    days?: IScheduleWidgetDay[],
    types?: ScheduleWidgetDayListItemTypeBox[],
}

export interface IScheduleWidgetDay {
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
    result: (item: IScheduleWidgetDayListItem, day: IScheduleWidgetDay) => ReactNode,
    description: string,
}

export interface ScheduleWidgetDayListItemTypeBox {
    title: string,
    tm?: number,
    atts?: ScheduleWidgetAttKey[],
}
