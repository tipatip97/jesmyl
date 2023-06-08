import mylib from "../../my-lib/MyLib";
import StrongControlDateTimeExtracter from "../../strong-control/StrongDateTimeExtracter";
import StrongEditableField from "../../strong-control/field/StrongEditableField";
import { takeStrongScopeMaker } from "../../strong-control/useStrongControl";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetDay } from "../ScheduleWidget.model";
import "./ScheduleWidgetDay.scss";
import ScheduleWidgetDayEventList from "./events/ScheduleWidgetDayEventList";

const dayFullTitles = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
export interface ScheduleWidgetDayProps {
    day: IScheduleWidgetDay,
    dayi: number,
    schedule: IScheduleWidget,
    scope: string,
}


export default function ScheduleWidgetDay({
    day, dayi, schedule, scope,
}: ScheduleWidgetDayProps) {
    const dayStartMs = schedule.start + mylib.howMs.inDay * dayi;
    const date = new Date(dayStartMs);
    const isPastDay = Date.now() > dayStartMs + mylib.howMs.inDay;
    const title = dayFullTitles[date.getDay()];
    const times: number[] = [];
    const { editIcon, isRedact } = useIsRedactArea(true, null, null, true);
    const selfScope = takeStrongScopeMaker(scope, ' dayMi/', day.mi);

    day.list.forEach((item) => {
        times.push((item.tm || schedule.types?.[item.type]?.tm || 0) + (times[times.length - 1] || 0));
    });

    return <div className={'ScheduleWidgetDay' + (isPastDay ? ' past' : '')}>
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
            dayi={dayi}
            schedule={schedule}
            scope={selfScope}
            scheduleScope={scope}
            isPastDay={isPastDay}
        />
    </div>;
}