import { ReactNode, useEffect, useMemo, useState } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useFullContent, { FullContentValue } from "../../fullscreen-content/useFullContent";
import mylib from "../../my-lib/MyLib";
import { IScheduleWidgetDay, IScheduleWidgetDayEvent, ScheduleWidgetDayListItemTypeBox } from "../ScheduleWidget.model";
import ScheduleWidgetCleans from "../complect/Cleans";
import ScheduleWidgetTopicTitle from "../complect/TopicTitle";
import { useSchedules } from "../useScheduleWidget";
import "./Alarm.scss";
import ScheduleAlarmDay from "./AlarmDay";
import { ScheduleWidgetAlarmInfoContent } from "./InfoContent";

const msInDay = mylib.howMs.inDay;
const msInHour = mylib.howMs.inHour;
const msInMin = mylib.howMs.inMin;
const itNNull = (it: unknown) => it !== null;


const makeNextDayFirstEventNode = (scheduleTitle: string | und, nextDay: IScheduleWidgetDay | und, types: ScheduleWidgetDayListItemTypeBox[], now: number, dayFinishMs: number) => {
    if (now > dayFinishMs) {
        if (nextDay !== undefined && nextDay.list[0] !== undefined)
            return <>
                {'Завтра '}
                {types[nextDay.list[0].type].title}
                {' в '}
                {ScheduleWidgetCleans.computeDayWakeUpTime(nextDay.wup, 'string')}
            </>;
    } else return <div>
        {scheduleTitle && <div className="color--7">{scheduleTitle}</div>}
        <div className="flex flex-gap">
            Это был последний день
            <EvaIcon name="smiling-face-outline" />
        </div>
    </div>;

    return null;
};

export default function ScheduleWidgetAlarmContent({ onGoTo }: { onGoTo: () => void }) {
    const schedules = useSchedules();
    const now = Date.now();
    const [isFullOpen, setIsFullOpen] = useState(false);

    const [updates, setUpdates] = useState<null | number>(null);
    useEffect(() => {
        let time = msInMin;
        if (updates === null) {
            const now = Date.now();
            time = time - Math.floor((now / time - Math.floor(now / time)) * time);
        }
        const to = setTimeout(setUpdates, time, updates! + 1);
        return () => clearTimeout(to);
    }, [updates]);

    const scheduleList = useMemo(() => {
        return [...schedules.list]
            .sort((a, b) => a.start - b.start)
            .map(sch => {
                if (!sch.days?.length) return null!;
                const lastFullDayIndex = mylib.findLastIndex(sch.days, (day) => day.list.length);
                if (lastFullDayIndex === null) return null!;
                const days = sch.days.slice(0, lastFullDayIndex + 1) ?? [];
                const types = sch.types ?? [];
                const dayStartMsList = days.map((day) => {
                    return ScheduleWidgetCleans.computeDayWakeUpTime(day.wup, 'number');
                });
                const dayMsList = days.map(day =>
                    day.list.reduce((sum, event) => sum + (event.tm ?? types[event.type]?.tm ?? 0), 0) * msInMin);

                return {
                    sch,
                    days,
                    startMs: sch.start + dayStartMsList[0],
                    dayStartMsList,
                    dayMsList,
                    types,
                    lastDayTm: lastFullDayIndex == null
                        ? 0
                        : dayMsList[lastFullDayIndex]
                };
            })
            .filter(itNNull);
    }, [schedules.list]);

    const [node, fullValue, isCanOpenFull]: [ReactNode, FullContentValue | null, true | und] = useMemo(() => {
        let node = null;
        let fullValue: FullContentValue | null = null;
        let isCanOpenFull: true | und = undefined;

        if (node === null) {
            const currSchWr = scheduleList.find((box) => {
                if (box.days.length === 0) return false;
                const endMs = box.startMs + box.days.length * msInDay + box.lastDayTm;
                return endMs > now && box.startMs < now;
            });

            if (currSchWr) {
                const currDayi = currSchWr.days.findIndex((_, dayi) => {
                    return (currSchWr.sch.start + dayi * msInDay) < now && (currSchWr.sch.start + (dayi + 1) * msInDay) > now;
                });

                if (currDayi > -1 && currDayi < currSchWr.days.length) {
                    const currDay = currSchWr.days[currDayi];
                    const dayBeginMs = currSchWr.sch.start + currDayi * msInDay;
                    const dayStartMs = dayBeginMs + currSchWr.dayStartMsList[currDayi];
                    const dayFinishMs = dayStartMs + currSchWr.dayMsList[currDayi];
                    const events = currDay.list;

                    let currEventMs = dayStartMs;
                    let lastCompEventMs = 0;
                    const currEventi = events.findIndex((event) => {
                        lastCompEventMs = (event.tm ?? currSchWr.types[event.type]?.tm ?? 0) * msInMin;
                        if (now > currEventMs && now < (currEventMs + lastCompEventMs))
                            return true;

                        currEventMs += lastCompEventMs;

                        return false;
                    });


                    isCanOpenFull = true;

                    fullValue = () => {
                        return <ScheduleAlarmDay
                            day={currDay}
                            dayi={currDayi}
                            schedule={currSchWr.sch}
                        />
                    };

                    if (currEventi < 0) {
                        let content = null;

                        if (now < dayStartMs) {
                            let timeMessage = '';

                            if (dayStartMs - now < msInHour) {
                                const minutesTo = Math.ceil((dayStartMs - now) / msInMin);
                                timeMessage = `через ${ScheduleWidgetCleans.minutesToText(minutesTo)}`
                            } else
                                timeMessage = `в ${ScheduleWidgetCleans.computeDayWakeUpTime(currDay.wup, 'string')}`;

                            content = events[0] && <>{currSchWr.types[events[0].type].title} {timeMessage}</>;
                        }

                        if (content === null) {
                            content = makeNextDayFirstEventNode(currSchWr.sch.title, currSchWr.days[currDayi + 1], currSchWr.types, now, dayFinishMs);
                        }

                        node = <div className="flex flex-gap">{content}</div>;
                    } else {
                        node = <ScheduleWidgetAlarmInfoContent
                            schedule={currSchWr.sch}
                            content={rights => {
                                let event: IScheduleWidgetDayEvent | null = events[currEventi];
                                let nextEvent: IScheduleWidgetDayEvent | null = events[currEventi + 1];
                                let minTo = Math.ceil(((currEventMs + lastCompEventMs) - now) / msInMin);

                                if (!rights.isCanReadSpecials) {
                                    if (event.secret) {
                                        let isUnsecretNotFound = true;

                                        for (let i = currEventi - 1; i > -1; i--)
                                            if (!events[i].secret) {
                                                event = events[i];
                                                isUnsecretNotFound = false;
                                                break;
                                            }

                                        if (isUnsecretNotFound) event = null;
                                    }

                                    if (nextEvent?.secret) {
                                        let isUnsecretNotFound = true;
                                        let minutesPlus = 0;

                                        for (let i = currEventi + 1; i < events.length; i++) {
                                            if (!events[i].secret) {
                                                nextEvent = events[i];
                                                isUnsecretNotFound = false;
                                                break;
                                            }

                                            minutesPlus += ScheduleWidgetCleans.takeEventTm(events[i], currSchWr.types[events[i].type]);
                                        }

                                        if (isUnsecretNotFound) nextEvent = null;
                                        else minTo += minutesPlus;
                                    }
                                }

                                const nextEventType = nextEvent && currSchWr.types[nextEvent.type];

                                if (event !== events[currEventi] && nextEvent == null) {
                                    return makeNextDayFirstEventNode(currSchWr.sch.title, currSchWr.days[currDayi + 1], currSchWr.types, now, dayFinishMs)
                                        ?? <div>Больше событий нет</div>;
                                }

                                return <div>
                                    <div className="flex flex-big-gap">
                                        <span>Сейчас</span>
                                        {event === null
                                            ? <span className="color--3 text-italic">Тех. перерыв</span>
                                            : <ScheduleWidgetTopicTitle
                                                titleBox={currSchWr.types[event.type]}
                                                topicBox={event}
                                            />}
                                    </div>
                                    {nextEvent === null
                                        || nextEventType === null
                                        || <div className="flex flex-big-gap">
                                            <span>Через {minTo}м.</span>
                                            {nextEventType === undefined
                                                ? <div>конец дня</div>
                                                : <ScheduleWidgetTopicTitle
                                                    titleBox={nextEventType}
                                                    topicBox={nextEvent}
                                                />}
                                        </div>}
                                </div>;
                            }}
                        />;
                    }
                }
            }
        }

        if (node === null) {
            const willSchWr = scheduleList.find((box) => box.startMs > now);
            if (willSchWr) {
                const nowDate = new Date();
                const startDate = new Date(willSchWr.startMs);
                const msTo = willSchWr.startMs - now;

                node = <div>
                    <ScheduleWidgetTopicTitle
                        titleBox={willSchWr.sch!}
                        altTitle="Расписание"
                        topicBox={willSchWr.sch}
                    />
                    {' '}
                    {startDate.getDate() === nowDate.getDate()
                        ? (msTo / msInHour) < 1
                            ? <>скоро начало</>
                            : <>до начала {ScheduleWidgetCleans.hoursToText(Math.floor(msTo / msInHour))}</>
                        : startDate.getDate() === nowDate.getDate() - 1
                            ? <>начало завтра</>
                            : <>до начала {ScheduleWidgetCleans.daysToText(Math.floor(msTo / msInDay) + 1)}
                            </>}
                </div>;
            }
        }

        if (!fullValue) setIsFullOpen(false);

        return [node, fullValue, isCanOpenFull];
    }, [now, scheduleList]);

    const [fullNode] = useFullContent(fullValue, isFullOpen ? 'open' : null, setIsFullOpen);

    return <>
        {fullNode}
        <div
            className={'ScheduleWidgetAlarm flex flex-gap between' + (isCanOpenFull ? ' pointer' : '')}
            onClick={isCanOpenFull && (() => setIsFullOpen(true))}
        >
            <div className="flex">
                <EvaIcon name="calendar" className="margin-big-gap" />
                {node ?? <>Мероприятий нет</>}
            </div>
            <EvaButton name="list" onClick={() => onGoTo()} />
        </div>
    </>;
}
