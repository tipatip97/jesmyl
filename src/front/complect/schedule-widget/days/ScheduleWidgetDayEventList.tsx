import { useEffect, useMemo, useState } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import { takeStrongScopeMaker } from "../../strong-control/useStrongControl";
import useIsRedactArea from "../../useIsRedactArea";
import { IScheduleWidget, ScheduleWidgetDay } from "../ScheduleWidget.model";
import ScheduleWidgetCleans from "../complect/ScheduleWidgetCleans";
import ScheduleWidgetEvent from "../events/ScheduleWidgetEvent";
import ScheduleWidgetEventList from "../events/ScheduleWidgetEventList";

export default function ScheduleWidgetDayEventList({
    day, schedule, scope,
}: {
    day: ScheduleWidgetDay,
    schedule: IScheduleWidget,
    scope: string,
}) {
    const [isExpand, setIsExpand] = useState(false);
    const [isShowPeriodsNotTs, setIsShowTsNotPeriods] = useState(false);
    const times: number[] = [];
    const { editIcon, isRedact } = useIsRedactArea(true, null, null, true);
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

    useEffect(() => {
        if (isRedact) setIsExpand(true);
    }, [isRedact]);

    return <div className="schedule-widget-day">
        <div className="flex flex-gap pointer margin-gap-v between">
            <span className="flex flex-gap" onClick={() => setIsExpand(is => !is)}>
                <EvaIcon name="list" className="color--7" />
                Распорядок
                <EvaButton name={isExpand ? 'chevron-up' : 'chevron-down'} />
            </span>
            {editIcon}
        </div>
        {isExpand && <>
            {day.list.map((event, eventi) => {
                return <ScheduleWidgetEvent
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
            {isRedact && <ScheduleWidgetEventList
                scope={scope}
                selectScope={selfScope}
                selectFieldName="list"
                buttonTitle="Добавить событие"
                icon="plus-circle-outline"
                schedule={schedule}
                usedCounts={usedCounts}
            />}
        </>}
    </div>;
}