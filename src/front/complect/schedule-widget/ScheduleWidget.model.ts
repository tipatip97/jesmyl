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
    list: IScheduleWidgetDayEvent[],
}

export interface IScheduleWidgetDayEvent {
    mi: number,
    type: number,
    topic?: string,
    dsc?: string,
    tm?: number,
    atts?: Record<ScheduleWidgetAttKey, unknown>,
}

export type ScheduleWidgetAttKey<AttAppName extends AppName = AppName> = `[${AttAppName}]:${string}`;

export type ScheduleWidgetAppAtts<AttAppName extends AppName = AppName, AttValue extends any = any> = Record<ScheduleWidgetAttKey<AttAppName>, ScheduleWidgetAppAtt<AttValue>>;

export type ScheduleWidgetAppAttResultItem<AttValue extends any> = (mpValue: () => AttValue, content: ReactNode) => JSX.Element;

export interface ScheduleWidgetAppAtt<AttValue extends any = any> {
    icon: EvaIconName,
    title: string,
    result: (value: AttValue, attItem: ScheduleWidgetAppAttResultItem<AttValue>) => ReactNode,
    description: string,
}

export interface ScheduleWidgetDayListItemTypeBox {
    title: string,
    tm?: number,
    atts?: ScheduleWidgetAttKey[],
}
