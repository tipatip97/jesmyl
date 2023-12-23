import { ReactNode, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import EvaButton from '../../eva-icon/EvaButton';
import EvaIcon from '../../eva-icon/EvaIcon';
import useFullContent, { FullContentValue } from '../../fullscreen-content/useFullContent';
import mylib from '../../my-lib/MyLib';
import { IScheduleWidgetDay, IScheduleWidgetDayEvent, ScheduleWidgetDayListItemTypeBox } from '../ScheduleWidget.model';
import ScheduleWidgetCleans from '../complect/Cleans';
import ScheduleWidgetTopicTitle from '../complect/TopicTitle';
import { useSchedules } from '../useScheduleWidget';
import ScheduleAlarmDay from './AlarmDay';
import { ScheduleWidgetAlarmInfoContent } from './InfoContent';

const msInDay = mylib.howMs.inDay;
const msInHour = mylib.howMs.inHour;
const msInMin = mylib.howMs.inMin;
const itNNull = (it: unknown) => it !== null;

const makeNextDayFirstEventNode = (
  scheduleTitle: string | und,
  nextDay: IScheduleWidgetDay | und,
  types: ScheduleWidgetDayListItemTypeBox[],
  now: number,
  dayFinishMs: number,
) => {
  if (now > dayFinishMs && nextDay !== undefined && nextDay.list[0] !== undefined)
    return (
      <>
        {'Завтра '}
        {types[nextDay.list[0].type].title}
        {' в '}
        {ScheduleWidgetCleans.computeDayWakeUpTime(nextDay.wup, 'string')}
      </>
    );

  return (
    <div>
      {scheduleTitle && <div className="color--7">{scheduleTitle}</div>}
      <div className="flex flex-gap">
        Это был последний день
        <EvaIcon name="smiling-face-outline" />
      </div>
    </div>
  );
};

export default function ScheduleWidgetAlarmContent({
  onGoTo,
  observeSchw,
}: {
  onGoTo: () => void;
  observeSchw?: number;
}) {
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
        const lastFullDayIndex = mylib.findLastIndex(sch.days, day => day.list.length) ?? -1;
        const days = sch.days.slice(0, lastFullDayIndex + 1) ?? [];
        const dayStartMsList = days.map(day => {
          return ScheduleWidgetCleans.computeDayWakeUpTime(day.wup, 'number');
        });
        const dayMsList = days.map(
          day => day.list.reduce((sum, event) => sum + (event.tm ?? sch.types[event.type]?.tm ?? 0), 0) * msInMin,
        );

        return {
          sch,
          days,
          startMs: sch.start + ((sch.withTech ? dayStartMsList[1] : dayStartMsList[0]) || 0),
          dayStartMsList,
          dayMsList,
          types: sch.types,
          lastDayTm: lastFullDayIndex == null ? 0 : dayMsList[lastFullDayIndex],
        };
      })
      .filter(itNNull);
  }, [schedules.list]);

  const [node, fullValue, observeSchedule]: [ReactNode, FullContentValue | und, (typeof scheduleList)[number] | und] =
    useMemo(() => {
      let node = null;
      let fullValue: FullContentValue | und;
      let schWr;

      if (observeSchw !== undefined) {
        schWr = scheduleList.find(wr => wr.sch.w === observeSchw);
        if (schWr === undefined) node = <span className="color--ko">Расписание не найдено</span>;
        else if (schWr.days.length === 0)
          node = (
            <div>
              <ScheduleWidgetTopicTitle
                titleBox={schWr.sch!}
                altTitle="Расписание"
                topicBox={schWr.sch}
              />
              <div className="text-italic">Составляется</div>
            </div>
          );
      }

      if (node === null) {
        const filter: (box: (typeof scheduleList)[number]) => boolean = box => {
          if (box.days.length === 0) return false;
          const endMs = box.startMs + box.days.length * msInDay + box.lastDayTm;
          return endMs > now && box.startMs < now;
        };
        const currSchWr = schWr === undefined ? scheduleList.find(filter) : filter(schWr) ? schWr : undefined;

        if (currSchWr) {
          const start = currSchWr.sch.start - (currSchWr.sch.withTech ? msInDay : 0);
          const currDayi = currSchWr.days.findIndex((_, dayi) => {
            return start + dayi * msInDay < now && start + (dayi + 1) * msInDay > now;
          });

          if (currDayi > -1 && currDayi < currSchWr.days.length) {
            const currDay = currSchWr.days[currDayi];
            const dayBeginMs = start + currDayi * msInDay;
            const dayStartMs = dayBeginMs + currSchWr.dayStartMsList[currDayi];
            const dayFinishMs = dayStartMs + currSchWr.dayMsList[currDayi];
            const events = currDay.list;

            let currEventMs = dayStartMs;
            let lastCompEventMs = 0;
            const currEventi = events.findIndex(event => {
              lastCompEventMs = (event.tm ?? currSchWr.types[event.type]?.tm ?? 0) * msInMin;
              if (now > currEventMs && now < currEventMs + lastCompEventMs) return true;

              currEventMs += lastCompEventMs;

              return false;
            });

            fullValue = () => {
              return (
                <ScheduleAlarmDay
                  day={currDay}
                  dayi={currDayi}
                  schedule={currSchWr.sch}
                />
              );
            };

            if (currEventi < 0) {
              let content = null;

              if (now < dayStartMs) {
                let timeMessage = '';

                if (dayStartMs - now < msInHour) {
                  const minutesTo = Math.ceil((dayStartMs - now) / msInMin);
                  timeMessage = `через ${ScheduleWidgetCleans.minutesToText(minutesTo)}`;
                } else timeMessage = `в ${ScheduleWidgetCleans.computeDayWakeUpTime(currDay.wup, 'string')}`;

                content = events[0] && (
                  <>
                    {currSchWr.types[events[0].type].title} {timeMessage}
                  </>
                );
              }

              if (content === null) {
                content = makeNextDayFirstEventNode(
                  currSchWr.sch.title,
                  currSchWr.days[currDayi + 1],
                  currSchWr.types,
                  now,
                  dayFinishMs,
                );
              }

              node = <div className="flex flex-gap">{content}</div>;
            } else {
              node = (
                <ScheduleWidgetAlarmInfoContent
                  schedule={currSchWr.sch}
                  content={rights => {
                    let event: IScheduleWidgetDayEvent | null = events[currEventi];
                    let nextEvent: IScheduleWidgetDayEvent | null = events[currEventi + 1];
                    let minTo = Math.ceil((currEventMs + lastCompEventMs - now) / msInMin);

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
                      return makeNextDayFirstEventNode(
                        currSchWr.sch.title,
                        currSchWr.days[currDayi + 1],
                        currSchWr.types,
                        now,
                        dayFinishMs,
                      );
                    }

                    return (
                      <div>
                        <div className="flex flex-big-gap">
                          <span>Сейчас</span>
                          {event === null ? (
                            <span className="color--3 text-italic">Тех. перерыв</span>
                          ) : (
                            <ScheduleWidgetTopicTitle
                              titleBox={currSchWr.types[event.type]}
                              topicBox={event}
                            />
                          )}
                        </div>
                        {nextEvent === null || nextEventType === null || (
                          <div className="flex flex-big-gap">
                            <span>Через {minTo}м.</span>
                            {nextEventType === undefined ? (
                              <div>конец дня</div>
                            ) : (
                              <ScheduleWidgetTopicTitle
                                titleBox={nextEventType}
                                topicBox={nextEvent}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    );
                  }}
                />
              );
            }
          }
        }
      }

      if (node === null) {
        const willSchWr =
          schWr === undefined ? scheduleList.find(box => box.startMs > now) : schWr.startMs > now ? schWr : undefined;

        if (willSchWr) {
          const nowDate = new Date();
          const startDate = new Date(willSchWr.startMs);
          const msTo = willSchWr.startMs - now;

          if (startDate.getDate() === nowDate.getDate()) {
            if (willSchWr.sch.withTech)
              if (willSchWr.days[1])
                fullValue = () => {
                  return (
                    <ScheduleAlarmDay
                      day={willSchWr.days[1]}
                      dayi={1}
                      schedule={willSchWr.sch}
                    />
                  );
                };
              else if (willSchWr.days[0])
                fullValue = () => {
                  return (
                    <ScheduleAlarmDay
                      day={willSchWr.days[0]}
                      dayi={0}
                      schedule={willSchWr.sch}
                    />
                  );
                };
          }

          node = (
            <div>
              <ScheduleWidgetTopicTitle
                titleBox={willSchWr.sch!}
                altTitle="Расписание"
                topicBox={willSchWr.sch}
              />
              {startDate.getDate() === nowDate.getDate() ? (
                msTo / msInHour < 1 ? (
                  <>до начала меньше часа</>
                ) : (
                  <>до начала {ScheduleWidgetCleans.hoursToText(Math.floor(msTo / msInHour))}</>
                )
              ) : startDate.getDate() === nowDate.getDate() + 1 && startDate.getFullYear() === nowDate.getFullYear() ? (
                <>начало завтра</>
              ) : (
                <>до начала {ScheduleWidgetCleans.daysToText(Math.floor(msTo / msInDay))}</>
              )}
            </div>
          );
        }
      }

      if (!fullValue) setIsFullOpen(false);

      return [node, fullValue, schWr];
    }, [now, scheduleList, observeSchw]);

  const [fullNode] = useFullContent(fullValue, isFullOpen ? 'open' : null, setIsFullOpen);

  return (
    <>
      {fullNode}
      <Alarm
        className={'flex flex-gap between' + (fullValue ? ' pointer' : '')}
        onClick={fullValue && (() => setIsFullOpen(true))}
      >
        <div className="flex">
          <EvaIcon
            name="calendar"
            className="margin-big-gap"
          />
          {node ??
            (observeSchedule !== undefined ? (
              <div>
                <ScheduleWidgetTopicTitle
                  titleBox={observeSchedule.sch!}
                  altTitle="Расписание"
                  topicBox={observeSchedule.sch}
                />
                <span className="text-italic">Мероприятие прошло</span>
              </div>
            ) : (
              <>Мероприятий нет</>
            ))}
        </div>
        <EvaButton
          name={observeSchw !== undefined ? 'arrow-forward' : 'list'}
          className="margin-gap"
          onClick={() => onGoTo()}
        />
      </Alarm>
    </>
  );
}

const Alarm = styled.div`
  --icon-color: var(--color--3);

  margin-top: calc(0px - var(--main-gap) + 5px);
  background-color: var(--color--1);
  padding: var(--main-big-gap) var(--main-gap);

  width: calc(100% + var(--main-gap) * 2);
  height: 4em;
  color: var(--color--4);
`;
