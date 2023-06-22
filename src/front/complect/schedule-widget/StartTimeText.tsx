import mylib from "../my-lib/MyLib";
import { IScheduleWidget } from "./ScheduleWidget.model";
import './ScheduleWidget.scss';
import ScheduleWidgetCleans from "./complect/Cleans";
import { ScheduleWidgetRights, useScheduleWidgetRights } from "./useScheduleWidget";

export default function ScheduleWidgetStartTimeText({
    schedule,
    date: topDate,
    rights: topRights,
}: {
    schedule?: IScheduleWidget,
    date?: Date,
    rights?: ScheduleWidgetRights,
}) {
    const rights = useScheduleWidgetRights(schedule, topRights);

    if (!schedule) return null;
    const date = topDate ?? new Date(schedule.start);

    const firstDay = schedule.days?.[0];
    let firstWup = schedule.start + (firstDay ? ScheduleWidgetCleans.computeDayWakeUpTime(firstDay.wup, 'number') : 0);
    const types = schedule.types || [];
    if (!rights.isCanReadSpecials) firstDay?.list.some((event) => {
        if (event.secret) {
            firstWup += (event.tm ?? types[event.type]?.tm ?? 0) * mylib.howMs.inMin;
            return false;
        }

        return true;
    });
    const timeDate = new Date(firstWup);

    return <>
        {!schedule.start
            || <div>
                Начало: {date.getDate()} {mylib.monthFullTitles[date.getMonth()]} {date.getFullYear()}
                {!firstWup || ', ' + timeDate.getHours().toString().padStart(2, '0') + ':' + timeDate.getMinutes().toString().padStart(2, '0')}
            </div>}
    </>
}
