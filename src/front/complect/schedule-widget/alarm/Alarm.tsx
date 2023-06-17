import { ReactNode, useEffect, useMemo, useState } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import useFullContent, { FullContentValue } from "../../fullscreen-content/useFullContent";
import mylib from "../../my-lib/MyLib";
import ScheduleWidgetCleans from "../complect/Cleans";
import ScheduleWidgetTopicTitle from "../complect/TopicTitle";
import { useSchedules } from "../useScheduleWidget";
import ScheduleAlarmDay from "./AlarmDay";
import "./Alarm.scss";

const msInDay = mylib.howMs.inDay;
const msInHour = mylib.howMs.inHour;
const msInMin = mylib.howMs.inMin;
const itNNull = (it: unknown) => it !== null;

export default function ScheduleWidgetAlarm() {
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
                    day.list.reduce((sum, event) => sum + (event.tm ?? types[event.type].tm ?? 0), 0) * msInMin);

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
                        lastCompEventMs = (event.tm ?? currSchWr.types[event.type].tm ?? 0) * msInMin;
                        if (now > currEventMs && now < (currEventMs + lastCompEventMs))
                            return true;

                        currEventMs += lastCompEventMs;

                        return false;
                    });

                    const minTo = Math.ceil(((currEventMs + lastCompEventMs) - now) / msInMin);

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
                        } else if (now > dayFinishMs) {
                            const nextDay = currSchWr.days[currDayi + 1];
                            const nextDayFirstEvent = nextDay?.list[0];

                            if (nextDayFirstEvent)
                                content = <>Завтра {
                                    currSchWr.types[nextDayFirstEvent.type].title
                                } в {
                                        ScheduleWidgetCleans.computeDayWakeUpTime(nextDay.wup, 'string')
                                    }</>;
                        }

                        if (content === null) {
                            content = <>Это был последний день <EvaIcon name="smiling-face-outline" /></>;
                        }

                        node = <div className="flex flex-gap">{content}</div>;
                    } else {
                        const currEventType = events[currEventi] && currSchWr.types[events[currEventi].type];
                        const nextEventType = events[currEventi + 1] && currSchWr.types[events[currEventi + 1].type];

                        node = <div>
                            <div className="flex flex-big-gap">
                                <span>Сейчас</span>
                                <ScheduleWidgetTopicTitle
                                    titleBox={currEventType}
                                    topicBox={events[currEventi]}
                                />
                            </div>
                            <div className="flex flex-big-gap">
                                <span>Через {minTo}м.</span>
                                {nextEventType === undefined
                                    ? <div>конец дня</div>
                                    : <ScheduleWidgetTopicTitle
                                        titleBox={nextEventType}
                                        topicBox={events[currEventi + 1]}
                                    />}
                            </div>
                        </div>;
                    }
                }
            }
        }

        if (node === null) {
            const willSchWr = scheduleList.find((box) => box.startMs > now);
            if (willSchWr) {
                const msTo = willSchWr.startMs - now;
                const daysTo = Math.floor(msTo / msInDay);
                const hoursTo = Math.floor(msTo / msInHour);

                node = <div>
                    <ScheduleWidgetTopicTitle
                        titleBox={willSchWr.sch!}
                        altTitle="Расписание"
                        topicBox={willSchWr.sch}
                    />
                    {' '}
                    {daysTo === 0
                        ? (msTo / msInHour) < 1
                            ? <>скоро начало</>
                            : <>до начала {ScheduleWidgetCleans.hoursToText(hoursTo)}</>
                        : daysTo === 1
                            ? <>начало завтра</>
                            : <>до начала {ScheduleWidgetCleans.daysToText(daysTo)}
                            </>}
                </div>;
            }
        }

        if (!fullValue) setIsFullOpen(false);

        return [node, fullValue, isCanOpenFull];
    }, [now, scheduleList]);

    const [fullNode] = useFullContent(fullValue, isFullOpen ? 'open' : null, setIsFullOpen);

    return <div
        className={'ScheduleWidgetAlarm flex' + (isCanOpenFull ? ' pointer' : '')}
        onClick={isCanOpenFull && (() => setIsFullOpen(true))}
    >
        {fullNode}
        <EvaButton name="calendar" className="margin-big-gap" />
        {node ?? <>Расписаний нет</>}
    </div>;
}
