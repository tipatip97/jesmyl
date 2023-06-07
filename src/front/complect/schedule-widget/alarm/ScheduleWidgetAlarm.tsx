import { useEffect, useMemo, useState } from "react";
import EvaButton from "../../eva-icon/EvaButton";
import EvaIcon from "../../eva-icon/EvaIcon";
import mylib from "../../my-lib/MyLib";
import ScheduleWidgetCleans from "../complect/ScheduleWidgetCleans";
import { useSchedules } from "../useScheduleWidget";
import "./ScheduleWidgetAlarm.scss";

const msInDay = mylib.howMs.inDay;
const msInHour = mylib.howMs.inHour;
const msInMin = mylib.howMs.inMin;
const itNNull = (it: unknown) => it !== null;

export default function ScheduleWidgetAlarm() {
    const schedules = useSchedules();
    const now = Date.now();
    const [updates, setUpdates] = useState<null | number>(null);

    useEffect(() => {
        let time = msInMin;
        if (updates === null) {
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

    const node = useMemo(() => {
        let node = null;

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
                    const dayBeginMs = currSchWr.sch.start + currDayi * msInDay;
                    const dayStartMs = dayBeginMs + currSchWr.dayStartMsList[currDayi];
                    const events = currSchWr.days[currDayi].list;

                    let currEventMs = dayStartMs;
                    let lastCompEventMs = 0;
                    const currEventi = events.findIndex((event) => {
                        lastCompEventMs = (event.tm ?? currSchWr.types[event.type].tm ?? 0) * msInMin;
                        if (now > currEventMs && now < (currEventMs + lastCompEventMs))
                            return true;

                        currEventMs += lastCompEventMs;

                        return false;
                    });

                    const currEventType = events[currEventi] && currSchWr.types[events[currEventi].type];
                    const nextEventType = events[currEventi + 1] && currSchWr.types[events[currEventi + 1].type];
                    const minTo = Math.ceil(((currEventMs + lastCompEventMs) - now) / msInMin);

                    const nextDay = currSchWr.days[currDayi + 1];
                    const nextDayFirstEvent = nextDay?.list[0];

                    node = <div className="flex flex-gap">
                        {currEventType === undefined
                            ? nextDayFirstEvent
                                ? <>Конец дня. Завтра {currSchWr.types[nextDayFirstEvent.type].title} в {ScheduleWidgetCleans.computeDayWakeUpTime(nextDay.wup, 'string')}</>
                                : <>Это был последний день <EvaIcon name="smiling-face-outline" /></>
                            : <><span>{currEventType.title}</span>
                                <span>через {minTo}м.</span>
                                {nextEventType === undefined
                                    ? <div>конец дня</div>
                                    : <span>{nextEventType.title}</span>}
                            </>}
                    </div>;
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
                    {willSchWr.sch.title}{' '}
                    {daysTo === 0
                        ? (msTo / msInHour) < 1
                            ? <>скоро начало</>
                            : <>до начала {hoursTo} {mylib.declension(hoursTo, 'час', 'часа', 'часов')}</>
                        : daysTo === 1
                            ? <>начало завтра</>
                            : <>до начала {daysTo} {mylib.declension(daysTo, 'день', 'дня', 'дней')}
                            </>}
                </div>;
            }
        }

        return node;
    }, [now, scheduleList]);

    return <div className="ScheduleWidgetAlarm flex">
        <EvaButton name="calendar" className="margin-big-gap" />
        {node ?? <>Расписаний нет</>}
    </div>;
}
