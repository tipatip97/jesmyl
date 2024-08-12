import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { IconBookmark03StrokeRounded } from '../../../complect/the-icon/icons/bookmark-03';
import { IconFavouriteStrokeRounded } from '../../../complect/the-icon/icons/favourite';
import { IconFile02StrokeRounded } from '../../../complect/the-icon/icons/file-02';
import { IconViewStrokeRounded } from '../../../complect/the-icon/icons/view';
import { IconViewOffSlashStrokeRounded } from '../../../complect/the-icon/icons/view-off-slash';
import useFullContent from '../../fullscreen-content/useFullContent';
import mylib, { MyLib } from '../../my-lib/MyLib';
import StrongEditableField from '../../strong-control/field/StrongEditableField';
import IconButton from '../../the-icon/IconButton';
import useIsRedactArea from '../../useIsRedactArea';
import { IScheduleWidget, IScheduleWidgetDay } from '../ScheduleWidget.model';
import ScheduleAlarmDay from '../alarm/AlarmDay';
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from '../useScheduleWidget';
import { indexScheduleCheckIsDayIsPast, indexScheduleGetDayStartMs } from '../utils';
import ScheduleWidgetDayEditPanel from './DayEditPanel';
import ScheduleWidgetDayEventList from './events/DayEventList';

export interface ScheduleWidgetDayProps {
  day: IScheduleWidgetDay;
  dayi: number;
  schedule: IScheduleWidget;
  scope: string;
  isPrint?: boolean;
  isCanOpenFull?: boolean;
  isForceOpen?: boolean;
}

const isNIs = (is: unknown) => !is;

const defaultPrint = {
  title: true,
};

export const ScheduleWidgetDay = function Day({
  day,
  dayi,
  schedule,
  scope,
  isPrint,
  isCanOpenFull,
  isForceOpen,
}: ScheduleWidgetDayProps) {
  const date = new Date(indexScheduleGetDayStartMs(schedule, dayi));
  const isPastDay = indexScheduleCheckIsDayIsPast(schedule, dayi);
  const title = mylib.dayFullTitles[date.getDay()];
  const times: number[] = [];
  const selfScope = takeStrongScopeMaker(scope, ' dayi/', dayi);
  const [isShowDay, setIsShowDay] = useState(!isPastDay);
  const rights = useScheduleWidgetRightsContext();
  const { editIcon, isRedact } = useIsRedactArea(true, null, rights.isCanRedact, true);
  const [print, setPrint] = useState(defaultPrint);

  const dayRating = useMemo(() => {
    let rating = 0;
    day.list.forEach(event => {
      event.rate && MyLib.values(event.rate).forEach(rate => (rating += rate[0]));
    });
    return rating;
  }, [day.list]);

  day.list.forEach(item => {
    times.push((item.tm || schedule.types[item.type]?.tm || 0) + (times[times.length - 1] || 0));
  });

  const [fullDayNode, openFullDay] = useFullContent(() => (
    <ScheduleAlarmDay
      day={day}
      dayi={dayi}
      schedule={schedule}
    />
  ));

  return (
    <StyledScheduleWidgetDay
      className={'ScheduleWidgetDay relative' + (isPastDay ? ' past' : '') + (isPrint ? ' print' : '')}
    >
      {fullDayNode}
      <div
        className={'day-title flex flex-gap padding-gap-v sticky pos-top' + (print.title ? '' : ' not-printable')}
        onClick={isCanOpenFull ? () => openFullDay() : undefined}
      >
        {title}
        {schedule.withTech ? (
          dayi === 0 ? (
            <span className="color--ko"> подготовка</span>
          ) : (
            <>, {dayi} день</>
          )
        ) : (
          <>, {dayi + 1} день</>
        )}
        {isPrint && (
          <IconButton
            Icon={print.title ? IconViewStrokeRounded : IconViewOffSlashStrokeRounded}
            className="not-printable"
            onClick={event => {
              event.stopPropagation();
              setPrint(prev => ({ ...prev, title: !prev.title }));
            }}
          />
        )}
      </div>
      <div className="edit-day-panel absolute pos-top pos-right margin-gap-t flex flex-gap">
        {isPastDay ? (
          <>
            <IconButton
              Icon={isShowDay ? IconViewOffSlashStrokeRounded : IconViewStrokeRounded}
              onClick={() => setIsShowDay(isNIs)}
            />
            {isShowDay && editIcon}
          </>
        ) : (
          editIcon
        )}
      </div>
      {isShowDay && (
        <>
          {rights.isCanReadTitles && (
            <div className="day-info">
              {(isRedact || day.topic) && (
                <StrongEditableField
                  scope={selfScope}
                  fieldName="field"
                  value={day}
                  fieldKey="topic"
                  isRedact={isRedact}
                  Icon={IconBookmark03StrokeRounded}
                  title="Тема дня"
                />
              )}
              {(isRedact || day.dsc) && (
                <StrongEditableField
                  scope={selfScope}
                  fieldName="field"
                  value={day}
                  fieldKey="dsc"
                  isRedact={isRedact}
                  multiline
                  textClassName=" "
                  Icon={IconFile02StrokeRounded}
                  title="Описание дня"
                />
              )}
              {isRedact ? (
                <ScheduleWidgetDayEditPanel
                  day={day}
                  dayScope={selfScope}
                  dayi={dayi}
                  schedule={schedule}
                  scope={scope}
                />
              ) : (
                <IconButton
                  Icon={IconFavouriteStrokeRounded}
                  className={'flex-max ' + (dayRating < 0 ? 'color--ko' : dayRating > 0 ? 'color--ok' : 'color--3')}
                  postfix={'Рейтинг дня: ' + dayRating}
                />
              )}
            </div>
          )}
          <ScheduleWidgetDayEventList
            day={day}
            dayi={dayi}
            scope={selfScope}
            scheduleScope={scope}
            isPastDay={isPastDay}
            isForceExpand={isPrint || isForceOpen}
          />
        </>
      )}
    </StyledScheduleWidgetDay>
  );
};

export const StyledScheduleWidgetDay = styled.div`
  &:not(.past) {
    margin-top: 50px;
  }

  &.past {
    filter: grayscale(0.7);

    > .day-title {
      opacity: 0.5;
      font-size: 1.1rem;
    }
  }

  > .day-title {
    top: -10px;
    background-color: var(--color--5);
    color: var(--color--3);
    font-weight: bold;
    font-size: 1.5rem;
  }

  > .edit-day-panel {
    z-index: 2;
  }

  > .day-info {
    margin: 1rem 0;

    .day-topic {
      color: var(--color--7);
      font-size: 1.2rem;
    }

    .day-description {
      color: var(--color--3);
      font-size: 0.9rem;
    }
  }
`;
