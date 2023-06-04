import mylib from "../../my-lib/MyLib";
import StrongControlDateTimeExtracter from "../../strong-control/StrongDateTimeExtracter";
import StrongEditableField from "../../strong-control/StrongEditableField";
import { takeStrongScopeMaker } from "../../strong-control/useStrongControl";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetDay } from "../ScheduleWidget.model";
import ScheduleWidgetDayEventList from "./events/ScheduleWidgetDayEventList";

const dayFullTitles = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

export default function ScheduleWidgetDay({
    day, dayi, schedule, scope,
}: {
    day: IScheduleWidgetDay,
    dayi: number,
    schedule: IScheduleWidget,
    scope: string,
}) {
    const date = new Date(schedule.start + mylib.howMs.inDay * dayi);
    const title = dayFullTitles[date.getDay()];
    const times: number[] = [];
    const { editIcon, isRedact } = useIsRedactArea(true, null, null, true);
    const selfScope = takeStrongScopeMaker(scope, ' dayw/', day.w);

    day.list.forEach((item) => {
        times.push((item.tm || schedule.types?.[item.type]?.tm || 0) + (times[times.length - 1] || 0));
    });

    return <div className="schedule-widget-day">
        <div className="day-title flex flex-gap">
            {dayi + 1} день, {title}
            {editIcon}
        </div>
        <div className="day-info">
            <StrongEditableField
                scope={selfScope}
                fieldName="field"
                value={day.topic}
                isRedact={isRedact}
                icon="bookmark-outline"
                title="Тема дня"
                mapExecArgs={(args) => ({ ...args, key: 'topic' })}
            />
            <StrongEditableField
                scope={selfScope}
                fieldName="field"
                value={day.dsc}
                isRedact={isRedact}
                multiline
                textClassName=" "
                icon="file-text-outline"
                title="Описание дня"
                mapExecArgs={(args) => ({ ...args, key: 'dsc' })}
            />
            {isRedact && <StrongControlDateTimeExtracter
                scope={selfScope}
                fieldName="field"
                value={day.wup?.toFixed?.(2).replace(/\./, ' ') || ''}
                icon="clock-outline"
                title="Начало дня"
                takeDate="NO"
                takeTime="hour-min"
                mapExecArgs={(args, value) => {
                    return {
                        ...args,
                        key: 'wup',
                        value: +value.replace(/:/, '.'),
                    };
                }}
            />}
        </div>
        <ScheduleWidgetDayEventList
            day={day}
            schedule={schedule}
            scope={selfScope}
            scheduleScope={scope}
        />
    </div>;
}