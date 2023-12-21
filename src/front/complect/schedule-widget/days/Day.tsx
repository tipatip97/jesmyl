import { useMemo, useState } from 'react';
import { renderComponentInNewWindow } from '../../../..';
import EvaButton from '../../eva-icon/EvaButton';
import useFullContent from '../../fullscreen-content/useFullContent';
import mylib, { MyLib } from '../../my-lib/MyLib';
import StrongControlDateTimeExtracter from '../../strong-control/StrongDateTimeExtracter';
import StrongEditableField from '../../strong-control/field/StrongEditableField';
import useIsRedactArea from '../../useIsRedactArea';
import { IScheduleWidget, IScheduleWidgetDay } from '../ScheduleWidget.model';
import ScheduleAlarmDay from '../alarm/AlarmDay';
import { takeStrongScopeMaker, useScheduleWidgetRightsContext } from '../useScheduleWidget';
import './Day.scss';
import ScheduleWidgetPrintableDay from './PrintableDay';
import ScheduleWidgetDayEventList from './events/DayEventList';

const dotReg = /\./;

export interface ScheduleWidgetDayProps {
  day: IScheduleWidgetDay;
  dayi: number;
  schedule: IScheduleWidget;
  scope: string;
  isPrint?: boolean;
  isCanOpenFull?: boolean;
}

const isNIs = (is: unknown) => !is;

const defaultPrint = {
  title: true,
};

export default function ScheduleWidgetDay({
  day,
  dayi,
  schedule,
  scope,
  isPrint,
  isCanOpenFull,
}: ScheduleWidgetDayProps) {
  const dayStartMs = schedule.start + mylib.howMs.inDay * dayi - (schedule.withTech ? mylib.howMs.inDay : 0);
  const date = new Date(dayStartMs);
  const isPastDay = Date.now() > dayStartMs + mylib.howMs.inDay;
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
    <div className={'ScheduleWidgetDay relative' + (isPastDay ? ' past' : '') + (isPrint ? ' print' : '')}>
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
          <EvaButton
            name={print.title ? 'eye-outline' : 'eye-off-outline'}
            className="not-printable"
            onClick={event => {
              event.stopPropagation();
              setPrint(prev => ({ ...prev, title: !prev.title }));
            }}
          />
        )}
      </div>
      <div className="edit-day-panel absolute pos-top pos-right margin-gap-t">
        {isPastDay ? (
          <>
            <EvaButton
              name={isShowDay ? 'eye-off-outline' : 'eye-outline'}
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
                  icon="bookmark-outline"
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
                  icon="file-text-outline"
                  title="Описание дня"
                />
              )}
              {isRedact && (
                <>
                  <StrongControlDateTimeExtracter
                    scope={selfScope}
                    fieldName="field"
                    value={day.wup?.toFixed?.(2).replace(dotReg, ' ') || ''}
                    icon="clock-outline"
                    title="Начало дня"
                    takeDate="NO"
                    takeTime="hour-min"
                    mapExecArgs={(args, value) => {
                      return {
                        ...args,
                        key: 'wup',
                        value: +value.replace(/:/, '.'),
                      };
                    }}
                  />
                  <EvaButton
                    name="printer-outline"
                    className="flex-max margin-gap-v"
                    onClick={() =>
                      renderComponentInNewWindow(win => (
                        <ScheduleWidgetPrintableDay
                          day={day}
                          dayi={dayi}
                          schedule={schedule}
                          scope={scope}
                          win={win}
                        />
                      ))
                    }
                    postfix="Распечатать распорядок дня"
                  />
                </>
              )}
              {!isRedact && (
                <EvaButton
                  name="heart-outline"
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
            isForceExpand={isPrint}
          />
        </>
      )}
    </div>
  );
}
