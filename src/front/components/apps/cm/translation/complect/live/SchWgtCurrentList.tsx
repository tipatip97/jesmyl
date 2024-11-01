import { useMemo } from 'react';
import ScheduleWidgetCleans from '../../../../../../../back/apps/index/schedules/utils/Cleans';
import { itNUnd } from '../../../../../../../back/complect/utils';
import {
  IScheduleWidget,
  IScheduleWidgetDayEvent,
} from '../../../../../../complect/schedule-widget/ScheduleWidget.model';
import { CmComBindAttach, IScheduleWidgetDay } from '../../../../../../models';
import { CmTranslationComListContext, CmTranslationComListContextValue } from '../../../base/translations/context';
import { Com } from '../../../col/com/Com';
import { Cols } from '../../../cols/Cols';
import { useCols } from '../../../cols/useCols';
import { Meetings } from '../../../lists/meetings/Meetings';
import { useMeetings } from '../../../lists/meetings/useMeetings';

interface Props {
  schedule?: IScheduleWidget | nil;
  children?: React.ReactNode;
}

const findEventWithComs = (event: IScheduleWidgetDayEvent) => event.atts?.['[cm]:coms'] != null;
const findDayWithComs = (day: IScheduleWidgetDay) => day.list.some(findEventWithComs);

export const ScheduleWidgetCurrentCmTranslationList = ({ schedule, children }: Props) => {
  const cols = useCols();
  const meetings = useMeetings().meetings;

  if (meetings == null || cols == null || schedule == null || schedule.days.length === 0) return children;

  return <Component {...{ cols, meetings, schedule, children }} />;
};

const Component = ({
  schedule,
  meetings,
  cols,
  children,
}: {
  schedule: IScheduleWidget;
  meetings: Meetings;
  cols: Cols;
  children: React.ReactNode;
}) => {
  const value = useMemo((): CmTranslationComListContextValue => {
    let coms: Com[] | null = null;
    const titles: Record<number, string> = {};

    const dayi = ScheduleWidgetCleans.getCurrentDayi(schedule);
    const getValue = (event: IScheduleWidgetDayEvent | und): Com[] => {
      if (event?.atts?.['[cm]:coms'] != null) {
        const { comws, eventw } = event.atts['[cm]:coms'] as Partial<CmComBindAttach>;
        let coms: Com[] = [];

        if (eventw !== undefined) {
          const meeting = meetings.events?.find(event => event.wid === eventw);
          coms = coms.concat(meeting?.coms ?? []);
        }

        if (comws !== undefined) {
          coms = coms.concat(comws.map(comw => cols.coms.find(com => com.wid === comw)).filter(itNUnd));
        }

        return coms;
      }

      return [];
    };

    if (dayi < 0) {
      coms = getValue(schedule.days.find(findDayWithComs)?.list.find(findEventWithComs));
    } else {
      const today = schedule.days[dayi];

      if (today != null) {
        const event = ScheduleWidgetCleans.getCurrentEventInDay(schedule, dayi);

        if (event?.atts?.['[cm]:coms'] == null) {
          coms = [];

          today.list.filter(findEventWithComs).forEach(event => {
            if (coms === null) return;

            titles[coms.length] =
              (schedule.types[event.type]?.title ?? 'Событие') + (event.topic ? `: ${event.topic}` : '');

            coms = coms.concat(getValue(event));
          });
        } else coms = getValue(event);
      } else coms = getValue(schedule.days.findLast(findDayWithComs)?.list.find(findEventWithComs));
    }

    return {
      list: coms,
      titles,
    };
  }, [cols.coms, meetings.events, schedule]);

  return <CmTranslationComListContext.Provider value={value}>{children}</CmTranslationComListContext.Provider>;
};
