import mylib from "../../my-lib/MyLib";

export default class ScheduleWidgetCleans {

    static computeDayWakeUpTime = <ReturnAs extends 'number' | 'string'>(wup: number, returnAs: ReturnAs): ReturnAs extends 'number' ? number : string => {
        const [, beginHours, , beginMinutes] = ('' + wup).match(/(\d+)(\.(\d+))?/) || [];
        const wakeUpMinutes = +(beginMinutes?.padEnd(2, '0') || 0);

        return (returnAs === 'number'
            ? +(beginHours || 0) * mylib.howMs.inHour + wakeUpMinutes * mylib.howMs.inMin
            : `${beginHours.padStart(2, '0')}:${('' + wakeUpMinutes).padStart(2, '0')}`) as never;
    }
}
