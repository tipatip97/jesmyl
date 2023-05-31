import { useMemo, useState } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import mylib from "../../my-lib/MyLib";
import StrongControlDateTimeExtracter from "../../strong-control/StrongDateTimeExtracter";
import StrongEditableField from "../../strong-control/StrongEditableField";
import { takeStrongScopeMaker } from "../../strong-control/useStrongControl";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidgetDayProps } from "../ScheduleWidget.model";
import ScheduleWidgetCleans from "../complect/ScheduleWidgetCleans";
import ScheduleWidgetDayEvent from "../events/ScheduleWidgetDayEvent";
import ScheduleWidgetDayEventList from "../events/ScheduleWidgetDayEventList";

const dayFullTitles = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

export default function ScheduleWidgetDay({
    day, dayi, schedule, redact, scope,
}: IScheduleWidgetDayProps) {
    const [isExpand, setIsExpand] = useState(false);
    const [isShowPeriodsNotTs, setIsShowTsNotPeriods] = useState(false);
    const date = new Date(schedule.start + mylib.howMs.inDay * dayi);
    const title = dayFullTitles[date.getDay()];
    const times: number[] = [];
    const { editIcon, isRedact } = useIsRedactArea(true, redact || null, null, true);
    const selfScope = takeStrongScopeMaker(scope, ' dayw:', day.w);
    const usedCounts = useMemo(() => {
        const usedCounts: Record<number, number> = {};
        day.list.forEach(({ type }) => {
            if (type != null) usedCounts[type] = (usedCounts[type] || 0) + 1;
        });
        return usedCounts;
    }, [day.list]);

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
        </div>
        <div className="flex flex-gap pointer margin-gap-v" onClick={() => setIsExpand(is => !is)}>
            <EvaIcon name="list" className="color--7" />
            Распорядок
            <EvaButton name={isExpand ? 'chevron-up' : 'chevron-down'} />
        </div>
        {
            isExpand && <>
                {isRedact && <>
                    Начало дня: <StrongControlDateTimeExtracter
                        scope={selfScope}
                        fieldName="field"
                        value={day.wup?.toFixed?.(2).replace(/\./, ' ') || ''}
                        takeDate="NO"
                        takeTime="hour-min"
                        mapExecArgs={(args, value) => {
                            return {
                                ...args,
                                key: 'wup',
                                value: +value.replace(/:/, '.'),
                            };
                        }}
                    /></>}
                {day.list.map((event, eventi) => {
                    return <ScheduleWidgetDayEvent
                        key={eventi}
                        scope={selfScope}
                        schedule={schedule}
                        day={day}
                        event={event}
                        eventi={eventi}
                        redact={isRedact}
                        prevTime={times[eventi]}
                        wakeupMs={ScheduleWidgetCleans.computeDayWakeUpTime(day.wup, 'number')}
                        isShowPeriodsNotTs={isShowPeriodsNotTs}
                        onClickOnTs={() => setIsShowTsNotPeriods(is => !is)}
                    />;
                })}
                {isRedact && <ScheduleWidgetDayEventList
                    scope={scope}
                    selectScope={selfScope}
                    selectFieldName="list"
                    buttonTitle="Добавить событие"
                    icon="plus-circle-outline"
                    schedule={schedule}
                    usedCounts={usedCounts}
                />}
            </>
        }
    </div>;
}