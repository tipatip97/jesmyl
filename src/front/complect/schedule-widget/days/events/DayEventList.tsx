import { useEffect, useMemo, useState } from "react";
import EvaButton from "../../../eva-icon/EvaButton";
import EvaIcon from "../../../eva-icon/EvaIcon";
import StrongDiv from "../../../strong-control/StrongDiv";
import StrongEvaButton from "../../../strong-control/StrongEvaButton";
import useIsRedactArea from "../../../useIsRedactArea";
import { IScheduleWidget, IScheduleWidgetDay } from "../../ScheduleWidget.model";
import ScheduleWidgetCleans from "../../complect/Cleans";
import ScheduleWidgetTopicTitle from "../../complect/TopicTitle";
import ScheduleWidgetEventList from "../../events/EventList";
import { useIsSchWidgetExpand, useScheduleWidgetRolesContext } from "../../useScheduleWidget";
import ScheduleWidgetDayEvent from "./DayEvent";

export default function ScheduleWidgetDayEventList({
    day, schedule, scope, scheduleScope, isPastDay, dayi,
}: {
    day: IScheduleWidgetDay,
    schedule: IScheduleWidget,
    scope: string,
    scheduleScope: string,
    isPastDay: boolean,
    dayi: number,
}) {
    const [isExpand, switchIsExpand] = useIsSchWidgetExpand(scope);
    const [isShowPeriodsNotTs, setIsShowTsNotPeriods] = useState(false);
    const [isReplacementInProcess, setIsReplacementInProcess] = useState(false);
    const userRights = useScheduleWidgetRolesContext();
    const [isIndividualReplacement, setIsIndividualReplacement] = useState(false);
    const { editIcon, isRedact } = useIsRedactArea(true, isIndividualReplacement, userRights.isCanRedact, true);
    const usedCounts = useMemo(() => {
        const usedCounts: Record<number, number> = {};
        day.list.forEach(({ type }) => {
            if (type != null) usedCounts[type] = (usedCounts[type] || 0) + 1;
        });
        return usedCounts;
    }, [day.list]);
    const [moveEventMi, setMoveEventMi] = useState<number | null>(null);
    const movementEvent = moveEventMi !== null ? day.list.find(event => event.mi === moveEventMi) : undefined;
    const movementBox = movementEvent && schedule.types?.[movementEvent.type];

    let secretTime = 0;
    const times: number[] = [];
    day.list.forEach((event) => {
        times.push((event.tm || schedule.types?.[event.type]?.tm || 0) + (times[times.length - 1] || 0));
    });

    useEffect(() => {
        if (isRedact) switchIsExpand(true);
        else setMoveEventMi(null);
    }, [isRedact, switchIsExpand]);

    return <div className={'schedule-widget-day-event-list' + (isRedact ? ' redact' : '') + (moveEventMi === null ? '' : ' event-movement')}>
        <div className="flex flex-gap pointer margin-gap-v between hide-on-print">
            <span className="flex flex-gap" onClick={() => switchIsExpand()}>
                <EvaIcon name="list" className="color--7" />
                Распорядок
                <EvaButton name={isExpand ? 'chevron-up' : 'chevron-down'} />
            </span>
            {editIcon}
        </div>
        {isExpand && <>
            {day.list.map((event, eventi, eventa) => {
                if (!userRights.isCanReadSpecials) {
                    if (eventa[eventi + 1]?.secret) secretTime += event.tm ?? schedule.types?.[event.type].tm ?? 0;
                    if (event.secret) return null;
                }

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
                                setIsReplacementInProcess(true);
                                return { ...args, value: beforei, eventMi: movementEvent?.mi };
                            }}
                            onSuccess={() => {
                                setIsReplacementInProcess(false);
                                setIsIndividualReplacement(false);
                                setTimeout(() => setMoveEventMi(null), 300);
                            }}
                        >
                            {movementBox && <span className="fade-05">{movementBox.title} будет здесь</span>}
                            <EvaIcon name="arrowhead-left-outline" />
                        </StrongDiv>
                    </div>;

                const node = <div
                    key={event.mi}
                    className={
                        'day-event-wrapper flex flex-gap'
                        + (moveEventMi === event.mi ? ' move-me' : '')
                        + (isNeighbour ? ' neighbour' : '')
                        + (eventi === 0 ? ' first' : '')
                    }
                    onClick={moveEventMi === event.mi
                        ? () => {
                            setIsIndividualReplacement(false);
                            setMoveEventMi(null);
                        }
                        : undefined}
                >
                    {eventi === 0 && insertControl(0)}
                    <ScheduleWidgetDayEvent
                        scope={scope}
                        scheduleScope={scheduleScope}
                        schedule={schedule}
                        isPastDay={isPastDay}
                        day={day}
                        event={event}
                        eventi={eventi}
                        isLastEvent={eventa.length - 1 === eventi}
                        dayi={dayi}
                        redact={isRedact}
                        prevTime={times[eventi]}
                        secretTime={secretTime}
                        wakeupMs={ScheduleWidgetCleans.computeDayWakeUpTime(day.wup, 'number')}
                        isShowPeriodsNotTs={isShowPeriodsNotTs}
                        onClickOnTs={() => setIsShowTsNotPeriods(is => !is)}
                        bottomContent={(isRedact) => isRedact && <>
                            {isReplacementInProcess && moveEventMi === event.mi
                                ? <EvaIcon name="loader-outline" className="rotate" />
                                : <EvaButton
                                    name="crop"
                                    postfix="Вырезать событие"
                                    className="margin-gap-v"
                                    onClick={() => {
                                        setIsIndividualReplacement(true);
                                        setMoveEventMi(event.mi);
                                    }}
                                />}
                            {schedule.types && <StrongEvaButton
                                scope={scope}
                                fieldName="list"
                                cud="D"
                                name="trash-2-outline"
                                postfix="Удалить событие"
                                confirm={<ScheduleWidgetTopicTitle
                                    prefix="Удалить событие "
                                    titleBox={schedule.types[event.type]}
                                    topicBox={event}
                                />}
                                className="color--ko margin-gap-v"
                                disabled={moveEventMi !== null}
                                mapExecArgs={(args) => {
                                    return { ...args, eventMi: event.mi };
                                }}
                            />}
                        </>}
                    />
                    {!isIndividualReplacement && isRedact && <>
                        {isReplacementInProcess && moveEventMi === event.mi
                            ? <EvaIcon name="loader-outline" className="rotate" />
                            : <EvaButton
                                name="crop"
                                onClick={() => setMoveEventMi(event.mi)}
                            />}
                        {schedule.types && <StrongEvaButton
                            scope={scope}
                            fieldName="list"
                            cud="D"
                            name="trash-2-outline"
                            confirm={<ScheduleWidgetTopicTitle
                                prefix="Удалить событие "
                                titleBox={schedule.types[event.type]}
                                topicBox={event}
                            />}
                            className="color--ko"
                            disabled={moveEventMi !== null}
                            mapExecArgs={(args) => {
                                return { ...args, eventMi: event.mi };
                            }}
                        />}
                    </>}
                    {insertControl(eventi + 1)}
                </div>;

                secretTime = 0;

                return node;
            })}
            {isRedact && moveEventMi === null && <ScheduleWidgetEventList
                scope={scheduleScope}
                selectScope={scope}
                scheduleScope={scheduleScope}
                selectFieldName="list"
                postfix="Добавить событие"
                icon="plus-outline"
                schedule={schedule}
                usedCounts={usedCounts}
            />}
        </>}
    </div>;
}