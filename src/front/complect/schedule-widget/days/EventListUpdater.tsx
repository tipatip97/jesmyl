import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ScheduleWidgetTgInformCleans } from '../../../../back/apps/index/schedules/tg-bot-inform/cleans';
import ScheduleWidgetCleans from '../../../../back/apps/index/schedules/utils/Cleans';
import KeyboardInput from '../../keyboard/KeyboardInput';
import StrongButton from '../../strong-control/StrongButton';
import { IScheduleWidget, IScheduleWidgetDay } from '../ScheduleWidget.model';
import { indexScheduleGetDayEventTimes } from '../utils';
import ScheduleWidgetDayEvent from './events/DayEvent';

interface Props {
  day: IScheduleWidgetDay;
  dayi: number;
  schedule: IScheduleWidget;
  dayScope: string;
  scope: string;
  onClose: (isOpen: false) => void;
}

const itNNull = (it: unknown) => it !== null;
const func = () => null;

export const ScheduleWidgetEventListUpdater = ({ day, dayScope, dayi, schedule, scope, onClose }: Props) => {
  const [value, setValue] = useState('');
  const [node, setNode] = useState<React.ReactNode>(null);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    setErrorText('');

    return hookEffectLine()
      .setTimeout(() => {
        let text;

        try {
          text = ScheduleWidgetTgInformCleans.text2PreparedText(value).text;
        } catch (errorText) {
          setErrorText('' + errorText);
          return;
        }

        const { dayWup, list, newTatts } = ScheduleWidgetTgInformCleans.preparedText2DayList(text, schedule);

        const theDay = {
          ...day,
          list: list.map((event, eventi) => ({ ...event, mi: event?.mi ?? -eventi, type: event?.type ?? -1 })),
        };

        const days = [...schedule.days];
        const theSchedule = { ...schedule, days };
        const times = indexScheduleGetDayEventTimes(theSchedule, theDay);

        days[dayi] = theDay;
        const isShowPeriodsNotTs = list.includes(null);

        setNode(
          <div className="margin-gap-t">
            {!newTatts.length || (
              <>
                <h2>Новые события</h2>
                {newTatts.map(({ title, tm }) => {
                  return (
                    <div key={title}>
                      {title} {tm}м.
                    </div>
                  );
                })}

                <StrongButton
                  fieldName="types"
                  cud="U"
                  scope={scope}
                  title="Отправить только новые события"
                  fieldValue={newTatts}
                />
              </>
            )}

            {day.wup !== dayWup && (
              <StrongButton
                fieldName="wup"
                cud="U"
                scope={dayScope}
                title={`Установить время начала дня: ${ScheduleWidgetCleans.computeDayWakeUpTime(dayWup, 'string')}`}
                fieldValue={dayWup}
              />
            )}

            {list.map((event, eventi) => {
              if (event === null)
                return (
                  <div
                    key={eventi}
                    className="color--ko"
                  >
                    Новое событие
                  </div>
                );

              return (
                <StyledEvent
                  key={eventi}
                  schedule={theSchedule}
                  bottomContent={func}
                  day={theDay}
                  dayi={dayi}
                  scope=""
                  scheduleScope=""
                  isPastDay={false}
                  event={event}
                  eventTimes={times}
                  eventi={eventi}
                  isLastEvent
                  isShowPeriodsNotTs={isShowPeriodsNotTs}
                  onClickOnTs={func}
                  redact={false}
                  isForceCanRedact={false}
                  secretTime={0}
                  isForceExpand={!!event.dsc}
                  isForceHideRating
                />
              );
            })}

            <StrongButton
              scope={dayScope}
              cud="U"
              fieldName="updateDayEventList"
              fieldValue={list.filter(itNNull)}
              disabled={isShowPeriodsNotTs}
              title="Отправить расписание"
              onSuccess={() => onClose(false)}
            />
          </div>,
        );
      }, 300)
      .effect();
  }, [day, dayScope, dayi, onClose, schedule, scope, value]);

  return (
    <div className="margin-giant-gap-t">
      <KeyboardInput
        value={value}
        onChange={setValue}
        multiline
      />
      {errorText ? <div className="color--ko margin-gap-v flex center">{errorText}</div> : node}
    </div>
  );
};

const StyledEvent = styled(ScheduleWidgetDayEvent)`
  margin-top: 5px;
`;
