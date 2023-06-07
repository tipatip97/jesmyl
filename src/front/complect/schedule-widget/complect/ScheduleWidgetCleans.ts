import mylib from "../../my-lib/MyLib";
import { IScheduleWidgetDayEvent, ScheduleWidgetDayListItemTypeBox } from "../ScheduleWidget.model";

export default class ScheduleWidgetCleans {

    static wupsReg = /(\d+)(\.(\d+))?/;

    static computeDayWakeUpTime = <ReturnAs extends 'number' | 'string'>(wup: number, returnAs: ReturnAs): ReturnAs extends 'number' ? number : string => {
        const [, beginHours, , beginMinutes] = ('' + wup).match(this.wupsReg) || [];
        const wakeUpMinutes = +(beginMinutes?.padEnd(2, '0') || 0);

        return (returnAs === 'number'
            ? +(beginHours || 0) * mylib.howMs.inHour + wakeUpMinutes * mylib.howMs.inMin
            : `${beginHours.padStart(2, '0')}:${('' + wakeUpMinutes).padStart(2, '0')}`) as never;
    };

    static takeEventTime = (event: IScheduleWidgetDayEvent, box: ScheduleWidgetDayListItemTypeBox) => {
        return event.tm ?? box.tm ?? 0;
    };
}
