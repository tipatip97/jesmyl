import { ReactNode } from 'react';
import ScheduleWidgetCleans from '../../../../../back/apps/index/schedules/utils/Cleans';
import { IconArrowDown01StrokeRounded } from '../../../../complect/the-icon/icons/arrow-down-01';
import { IconArrowUp01StrokeRounded } from '../../../../complect/the-icon/icons/arrow-up-01';
import { IconBookmark03StrokeRounded } from '../../../../complect/the-icon/icons/bookmark-03';
import { IconCheckmarkSquare02StrokeRounded } from '../../../../complect/the-icon/icons/checkmark-square-02';
import { IconClock01StrokeRounded } from '../../../../complect/the-icon/icons/clock-01';
import { IconFile02StrokeRounded } from '../../../../complect/the-icon/icons/file-02';
import { IconNotification01StrokeRounded } from '../../../../complect/the-icon/icons/notification-01';
import { IconNotificationOff01StrokeRounded } from '../../../../complect/the-icon/icons/notification-off-01';
import { IconSquareStrokeRounded } from '../../../../complect/the-icon/icons/square';
import { IconViewOffSlashStrokeRounded } from '../../../../complect/the-icon/icons/view-off-slash';
import { useIsRememberExpand } from '../../../expand/useIsRememberExpand';
import mylib, { MyLib } from '../../../my-lib/MyLib';
import StrongEvaButton from '../../../strong-control/StrongEvaButton';
import StrongEditableField from '../../../strong-control/field/StrongEditableField';
import IconButton from '../../../the-icon/IconButton';
import useIsRedactArea from '../../../useIsRedactArea';
import { IScheduleWidgetDay, IScheduleWidgetDayEvent } from '../../ScheduleWidget.model';
import ScheduleWidgetBindAtts from '../../atts/BindAtts';
import ScheduleWidgetTopicTitle from '../../complect/TopicTitle';
import ScheduleWidgetDayEventAtts from '../../events/atts/DayEventAtts';
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from '../../useScheduleWidget';
import { indexScheduleGetEventFinishMs } from '../../utils';
import ScheduleWidgetDayEventRating from './DayEventRating';

const msInMin = mylib.howMs.inMin;

const mapExecTmArgs = (args: {}) => ({ ...args, techKey: 'tm' });
const mapExecTgInformArgs = (args: {}) => ({ ...args, techKey: 'tgInform' });

export default function ScheduleWidgetDayEvent(props: {
  scope: string;
  scheduleScope: string;
  event: IScheduleWidgetDayEvent;
  eventi: number;
  dayi: number;
  day: IScheduleWidgetDay;
  eventTimes: number[];
  secretTime: number;
  isShowPeriodsNotTs: boolean;
  onClickOnTs: () => void;
  redact: boolean | nil;
  isPastDay: boolean;
  isLastEvent: boolean;
  bottomContent: (isRedact: boolean) => ReactNode;
}) {
  let timeMark = '';
  let timerClassNamePlus = '';
  const rights = useScheduleWidgetRightsContext();
  const box = rights.schedule.types[props.event.type];
  const { editIcon, isRedact, isSelfRedact, setIsSelfRedact } = useIsRedactArea(true, null, rights.isCanRedact, true);
  const selfScope = takeStrongScopeMaker(props.scope, ' eventMi/', props.event.mi);

  const now = Date.now();
  const eventTm = ScheduleWidgetCleans.takeEventTm(props.event, box);
  const wakeupMs = ScheduleWidgetCleans.computeDayWakeUpTime(props.day.wup, 'number');
  const eventFinishMs = indexScheduleGetEventFinishMs(
    rights.schedule,
    wakeupMs,
    props.dayi,
    props.eventTimes[props.eventi],
  );
  const eventStartMs = eventFinishMs - eventTm * msInMin;
  let isPastEvent = now > eventFinishMs;

  if (eventTm === 0) {
    if (isPastEvent && !props.isPastDay) {
      let eventTmMs = eventFinishMs;
      let eventiPlus = 1;

      while (true) {
        const nextEvent = props.day.list[props.eventi + eventiPlus++];
        const nextBox = rights.schedule.types[nextEvent.type];

        if (nextEvent == null) break;

        const nextEventTm = ScheduleWidgetCleans.takeEventTm(nextEvent, nextBox);

        if (nextEventTm !== 0) {
          eventTmMs += nextEventTm * mylib.howMs.inMin;
          break;
        }
      }

      isPastEvent = now > eventTmMs;
    }
  }

  const [, isExpand, switchIsExpand] = useIsRememberExpand(selfScope);

  const isCanExpandEvent =
    ((rights.myUser && rights.isCanReadTitles) ||
      (props.event.atts && MyLib.entries(props.event.atts).some(item => item[0] === '[cm]:coms'))) &&
    !props.redact;

  const isExpandEvent = (isSelfRedact || isExpand) && isCanExpandEvent;

  if (!box) return <>Неизвестный шаблон события</>;

  if (props.isShowPeriodsNotTs) {
    timeMark = eventTm + props.secretTime + 'м';
    timerClassNamePlus =
      props.event.tm == null || props.event.tm === box.tm || (props.event.tm === 0 && box.tm == null)
        ? ''
        : ' color--7';
  } else {
    const date = new Date(eventStartMs);
    timeMark = `${('' + date.getHours()).padStart(2, '0')}:${('' + date.getMinutes()).padStart(2, '0')}`;
    timerClassNamePlus = eventTm === 0 ? ' fade-03' : '';
  }

  const isCurrentEvent = now > eventStartMs && now < eventFinishMs;

  const timeToTitle = rights.isCanReadSpecials && !props.redact && isCurrentEvent && (
    <div className="absolute pos-left pos-bottom margin-big-gap-l font-size:0.7em">
      {props.isLastEvent
        ? ScheduleWidgetCleans.minutesToTextTemplate(eventFinishMs - now, 'остал$onNum{{ась}{ось}} $num $txt')
        : 'через ' + ScheduleWidgetCleans.minutesToText(eventFinishMs - now, true)}
    </div>
  );

  return (
    <>
      <div
        className={
          'day-event relative' +
          (props.isPastDay ? '' : isPastEvent ? ' past' : '') +
          (timeToTitle ? ' margin-big-gap-b' : '')
        }
      >
        <div
          className={'event-header flex flex-gap between' + (props.redact || !isCanExpandEvent ? '' : ' pointer')}
          onClick={
            isCanExpandEvent
              ? () => {
                  !props.redact && switchIsExpand();
                  setIsSelfRedact(false);
                }
              : undefined
          }
        >
          <div className="left-part flex flex-gap">
            <span
              className={'time-mark' + timerClassNamePlus}
              onClick={
                rights.isCanReadSpecials && rights.myUser && !props.redact
                  ? event => {
                      event.stopPropagation();
                      props.onClickOnTs();
                    }
                  : undefined
              }
            >
              {timeMark}
            </span>
            {!isExpandEvent && !!props.event.secret && <IconViewOffSlashStrokeRounded className="color--ko" />}
            <ScheduleWidgetTopicTitle
              titleBox={box}
              topicBox={props.event}
            />
          </div>
          {rights.isCanRedact ? (
            (isExpand || isRedact) && editIcon
          ) : isCanExpandEvent ? (
            isExpand ? (
              <IconArrowUp01StrokeRounded />
            ) : (
              <IconArrowDown01StrokeRounded />
            )
          ) : null}
        </div>
        {isExpandEvent && (
          <div className="day-event-content no-scrollbar">
            <div className="sign-line" />
            {isRedact ? (
              <>
                <StrongEvaButton
                  scope={selfScope}
                  fieldName="secret"
                  fieldValue={props.event.secret ? 0 : 1}
                  cud="U"
                  Icon={props.event.secret ? IconCheckmarkSquare02StrokeRounded : IconSquareStrokeRounded}
                  confirm={`Событие ${box.title} ${props.event.secret ? 'больше не секретное' : 'будет секретным'}?`}
                  postfix="Секретное событие"
                />
                {props.event.tgInform === 0 || isPastEvent || isCurrentEvent ? (
                  <StrongEvaButton
                    scope={selfScope}
                    fieldName="techField"
                    fieldValue={1}
                    cud="U"
                    disabled={isPastEvent || isCurrentEvent}
                    Icon={IconNotificationOff01StrokeRounded}
                    postfix="TG-Напоминания не будет"
                    mapExecArgs={mapExecTgInformArgs}
                  />
                ) : (
                  <StrongEvaButton
                    scope={selfScope}
                    fieldName="techField"
                    fieldValue={0}
                    cud="U"
                    disabled={isPastEvent || isCurrentEvent}
                    Icon={IconNotification01StrokeRounded}
                    postfix="TG-Напоминание будет"
                    mapExecArgs={mapExecTgInformArgs}
                  />
                )}
                <StrongEditableField
                  isRedact
                  scope={selfScope}
                  fieldName="techField"
                  type="number"
                  value={'' + eventTm}
                  postfix=" мин"
                  title="Продолжительность, мин"
                  Icon={IconClock01StrokeRounded}
                  mapExecArgs={mapExecTmArgs}
                />
                <StrongEditableField
                  isRedact
                  scope={selfScope}
                  fieldName="field"
                  value={props.event}
                  fieldKey="topic"
                  title="Тема"
                  Icon={IconBookmark03StrokeRounded}
                />
              </>
            ) : (
              !!props.event.secret && (
                <IconButton
                  Icon={IconViewOffSlashStrokeRounded}
                  className="color--ko margin-gap-v"
                  postfix="Это секретное событие"
                />
              )
            )}
            {(isRedact || props.event.dsc) && (
              <StrongEditableField
                isRedact={isRedact}
                scope={selfScope}
                fieldName="field"
                multiline
                value={props.event}
                fieldKey="dsc"
                title="Содержание"
                textClassName=" "
                Icon={IconFile02StrokeRounded}
              />
            )}
            {isRedact ? (
              <ScheduleWidgetBindAtts
                atts={props.event.atts}
                scope={selfScope}
                schedule={rights.schedule}
                scheduleScope={props.scheduleScope}
                forTitle={<span className="color--7">{box.title}</span>}
              />
            ) : (
              <>
                <ScheduleWidgetDayEventAtts
                  scope={selfScope}
                  typeBox={box}
                  event={props.event}
                  day={props.day}
                  dayi={props.dayi}
                  schedule={rights.schedule}
                  isPast={isPastEvent || props.isPastDay}
                />
                {rights.isCanReadTitles && rights.myUser && (
                  <ScheduleWidgetDayEventRating
                    scope={selfScope}
                    event={props.event}
                  />
                )}
              </>
            )}
            {props.bottomContent(isRedact)}
            <div className="sign-line" />
          </div>
        )}
      </div>
      {timeToTitle}
    </>
  );
}
