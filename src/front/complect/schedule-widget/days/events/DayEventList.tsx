import { useEffect, useMemo, useState } from 'react';
import EvaButton from '../../../eva-icon/EvaButton';
import EvaIcon from '../../../eva-icon/EvaIcon';
import { useIsRememberExpand } from '../../../expand/useIsRememberExpand';
import StrongDiv from '../../../strong-control/StrongDiv';
import StrongEvaButton from '../../../strong-control/StrongEvaButton';
import useIsRedactArea from '../../../useIsRedactArea';
import { IScheduleWidgetDay } from '../../ScheduleWidget.model';
import ScheduleWidgetCleans from '../../complect/Cleans';
import ScheduleWidgetTopicTitle from '../../complect/TopicTitle';
import ScheduleWidgetEventList from '../../events/EventList';
import { useScheduleWidgetRightsContext } from '../../useScheduleWidget';
import ScheduleWidgetDayEvent from './DayEvent';
import { ScheduleWidgetDayEventEventActions } from './EventActions';

export default function ScheduleWidgetDayEventList({
  day,
  scope,
  scheduleScope,
  isPastDay,
  dayi,
  isForceExpand,
}: {
  day: IScheduleWidgetDay;
  scope: string;
  scheduleScope: string;
  isPastDay: boolean;
  isForceExpand?: boolean;
  dayi: number;
}) {
  const [isShowPeriodsNotTs, setIsShowTsNotPeriods] = useState(false);
  const [isReplacementInProcess, setIsReplacementInProcess] = useState(false);
  const rights = useScheduleWidgetRightsContext();
  const [isIndividualReplacement, setIsIndividualReplacement] = useState(false);
  const { editIcon, isRedact } = useIsRedactArea(true, isIndividualReplacement || null, rights.isCanRedact, true);
  const [listTitle, isExpand, switchIsExpand] = useIsRememberExpand(
    scope,
    <>
      <EvaIcon
        name="list"
        className="color--7"
      />{' '}
      Распорядок
    </>,
    isExpand => isExpand && editIcon,
  );

  const usedCounts = useMemo(() => {
    const usedCounts: Record<number, number> = {};
    day.list.forEach(({ type }) => {
      if (type != null) usedCounts[type] = (usedCounts[type] || 0) + 1;
    });
    return usedCounts;
  }, [day.list]);
  const [moveEventMi, setMoveEventMi] = useState<number | null>(null);
  const movementEvent = moveEventMi !== null ? day.list.find(event => event.mi === moveEventMi) : undefined;
  const movementBox = movementEvent && rights.schedule.types[movementEvent.type];

  let secretTime = 0;
  let isFirstSecrets = true;
  const times: number[] = [];
  day.list.forEach(event => {
    times.push((event.tm || rights.schedule.types[event.type]?.tm || 0) + (times[times.length - 1] || 0));
  });

  useEffect(() => {
    if (isRedact) switchIsExpand(true);
    else setMoveEventMi(null);
  }, [isRedact, switchIsExpand]);

  return (
    <div
      className={
        'schedule-widget-day-event-list' +
        (isRedact ? ' redact' : '') +
        (moveEventMi === null ? '' : ' event-movement') +
        (isIndividualReplacement ? ' individual-replacement' : '')
      }
    >
      <div className="max-width hide-on-print">{listTitle}</div>
      {(isExpand || isForceExpand) && (
        <>
          {day.list.map((event, eventi, eventa) => {
            if (!rights.isCanReadSpecials) {
              if (!isFirstSecrets && eventa[eventi + 1]?.secret)
                secretTime += event.tm ?? rights.schedule.types[event.type].tm ?? 0;
              if (event.secret) return null;
              isFirstSecrets = false;
            }

            const isNeighbour = moveEventMi === event.mi || moveEventMi === eventa[eventi + 1]?.mi;
            const insertControl = (beforei: number) =>
              isRedact && (
                <div className={'insert-panel flex flex-gap' + (beforei === 0 ? ' first' : '')}>
                  <StrongDiv
                    scope={scope}
                    fieldName="list"
                    cud="U"
                    className="flex flex-gap pointer"
                    mapExecArgs={args => {
                      setIsReplacementInProcess(true);
                      return {
                        ...args,
                        value: beforei,
                        eventMi: movementEvent?.mi,
                      };
                    }}
                    onSuccess={() => {
                      setIsReplacementInProcess(false);
                      setIsIndividualReplacement(false);
                      setTimeout(() => setMoveEventMi(null), 300);
                    }}
                  >
                    {movementBox && (
                      <div className="flex flex-gap fade-05">
                        <div className="movement-here-title ellipsis nowrap">{movementBox.title}</div>
                        <div className="nowrap">будет здесь</div>
                      </div>
                    )}
                    <EvaIcon name="arrowhead-left-outline" />
                  </StrongDiv>
                </div>
              );

            const node = (
              <div
                key={event.mi}
                className={
                  'day-event-wrapper flex flex-gap' +
                  (moveEventMi === event.mi ? ' move-me' : '') +
                  (isNeighbour ? ' neighbour' : '') +
                  (eventi === 0 ? ' first' : '')
                }
                onClick={
                  moveEventMi === event.mi
                    ? () => {
                        setIsIndividualReplacement(false);
                        setMoveEventMi(null);
                      }
                    : undefined
                }
              >
                {eventi === 0 && insertControl(0)}
                <ScheduleWidgetDayEvent
                  scope={scope}
                  scheduleScope={scheduleScope}
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
                  bottomContent={isRedact =>
                    isRedact && (
                      <>
                        {isReplacementInProcess && moveEventMi === event.mi ? (
                          <EvaIcon
                            name="loader-outline"
                            className="rotate"
                          />
                        ) : (
                          <ScheduleWidgetDayEventEventActions
                            scope={scope}
                            event={event}
                            schedule={rights.schedule}
                            scheduleScope={scheduleScope}
                            onEventCut={() => {
                              setIsIndividualReplacement(true);
                              setMoveEventMi(event.mi);
                            }}
                          />
                        )}
                      </>
                    )
                  }
                />
                {!isIndividualReplacement && isRedact && (
                  <>
                    {isReplacementInProcess && moveEventMi === event.mi ? (
                      <EvaIcon
                        name="loader-outline"
                        className="rotate"
                      />
                    ) : (
                      <EvaButton
                        name="crop"
                        onClick={() => setMoveEventMi(event.mi)}
                      />
                    )}
                    {rights.schedule.types && (
                      <StrongEvaButton
                        scope={scope}
                        fieldName="list"
                        cud="D"
                        name="trash-2-outline"
                        confirm={
                          <ScheduleWidgetTopicTitle
                            prefix="Удалить событие "
                            titleBox={rights.schedule.types[event.type]}
                            topicBox={event}
                          />
                        }
                        className="color--ko"
                        disabled={moveEventMi !== null}
                        mapExecArgs={args => {
                          return { ...args, eventMi: event.mi };
                        }}
                      />
                    )}
                  </>
                )}
                {insertControl(eventi + 1)}
              </div>
            );

            secretTime = 0;

            return node;
          })}
          {isRedact && moveEventMi === null && (
            <ScheduleWidgetEventList
              selectScope={scope}
              scheduleScope={scheduleScope}
              selectFieldName="list"
              postfix="Добавить событие"
              icon="plus-outline"
              schedule={rights.schedule}
              usedCounts={usedCounts}
            />
          )}
        </>
      )}
    </div>
  );
}
