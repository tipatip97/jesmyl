import { useEffect, useMemo, useState } from "react";
import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import StrongDiv from "../../../strong-control/StrongDiv";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import useIsRedactArea from "../../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetDay } from "../../ScheduleWidget.model";
import ScheduleWidgetCleans from "../../complect/ScheduleWidgetCleans";
import ScheduleWidgetEventList from "../../events/ScheduleWidgetEventList";
import ScheduleWidgetDayEvent from "./ScheduleWidgetDayEvent";

export default function ScheduleWidgetDayEventList({
    day, schedule, scope,
}: {
    day: IScheduleWidgetDay,
    schedule: IScheduleWidget,
    scope: string,
}) {
    const [isExpand, setIsExpand] = useState(false);
    const [isShowPeriodsNotTs, setIsShowTsNotPeriods] = useState(false);
    const times: number[] = [];
    const { editIcon, isRedact } = useIsRedactArea(true, null, null, true);
    const usedCounts = useMemo(() => {
        const usedCounts: Record<number, number> = {};
        day.list.forEach(({ type }) => {
            if (type != null) usedCounts[type] = (usedCounts[type] || 0) + 1;
        });
        return usedCounts;
    }, [day.list]);
    const [moveEventMi, setMoveEventMi] = useState<number | null>(null);
    const movementEvent = moveEventMi ? day.list.find(event => event.mi === moveEventMi) : undefined;
    const movementBox = movementEvent && schedule.types?.[movementEvent.type];

    day.list.forEach((item) => {
        times.push((item.tm || schedule.types?.[item.type]?.tm || 0) + (times[times.length - 1] || 0));
    });

    useEffect(() => {
        if (isRedact) setIsExpand(true);
        else setMoveEventMi(null);
    }, [isRedact]);

    return <div className={'schedule-widget-day-event-list' + (isRedact ? ' redact' : '') + (moveEventMi === null ? '' : ' event-movement')}>
        <div className="flex flex-gap pointer margin-gap-v between">
            <span className="flex flex-gap" onClick={() => setIsExpand(is => !is)}>
                <EvaIcon name="list" className="color--7" />
                Распорядок
                <EvaButton name={isExpand ? 'chevron-up' : 'chevron-down'} />
            </span>
            {editIcon}
        </div>
        {isExpand && <>
            {day.list.map((event, eventi, eventa) => {
                const isNeighbour = moveEventMi === event.mi || moveEventMi === eventa[eventi + 1]?.mi;
                const insertControl = (beforei: number) => isRedact &&
                    <div className={'insert-panel flex flex-gap'
                        + (beforei === 0 ? ' first' : '')
                    }>
                        <StrongDiv
                            scope={scope}
                            fieldName="list"
                            cud="U"
                            className="flex flex-gap pointer"
                            mapExecArgs={(args) => {
                                setMoveEventMi(null);
                                return { ...args, value: beforei, eventmi: movementEvent?.mi };
                            }}
                        >
                            {movementBox && <span className="fade-05">{movementBox.title} будет здесь</span>}
                            <EvaIcon name="arrowhead-left-outline" />
                        </StrongDiv>
                    </div>;

                return <div
                    key={eventi}
                    className={
                        'day-event-wrapper flex flex-gap'
                        + (moveEventMi === event.mi ? ' move-me' : '')
                        + (isNeighbour ? ' neighbour' : '')
                        + (eventi === 0 ? ' first' : '')
                    }
                    onClick={moveEventMi === event.mi ? () => setMoveEventMi(null) : undefined}
                >
                    {eventi === 0 && insertControl(0)}
                    <ScheduleWidgetDayEvent
                        scope={scope}
                        schedule={schedule}
                        day={day}
                        event={event}
                        eventi={eventi}
                        redact={isRedact}
                        prevTime={times[eventi]}
                        wakeupMs={ScheduleWidgetCleans.computeDayWakeUpTime(day.wup, 'number')}
                        isShowPeriodsNotTs={isShowPeriodsNotTs}
                        onClickOnTs={() => setIsShowTsNotPeriods(is => !is)}
                    />
                    {isRedact && <>
                        <EvaButton
                            name="crop"
                            onClick={() => setMoveEventMi(event.mi)}
                        />
                        <StrongEvaButton
                            scope={scope}
                            fieldName="list"
                            cud="D"
                            name="trash-2-outline"
                            confirm={`Удалить событие ${schedule.types?.[event.type].title}: ${event.topic}?`}
                            className="color--ko"
                            disabled={moveEventMi !== null}
                        />
                    </>}
                    {insertControl(eventi + 1)}
                </div>;
            })}
            {isRedact && moveEventMi === null && <ScheduleWidgetEventList
                scope={scope}
                selectScope={scope}
                selectFieldName="list"
                buttonTitle="Добавить событие"
                icon="plus-circle-outline"
                schedule={schedule}
                usedCounts={usedCounts}
            />}
        </>}
    </div>;
}