import ScheduleWidgetCleans from '../../../../../../../back/apps/index/schedules/utils/Cleans';
import {
  IScheduleWidget,
  IScheduleWidgetDayEvent,
} from '../../../../../../complect/schedule-widget/ScheduleWidget.model';
import { CmTranslationComListContext } from '../../../base/translations/context';
import { Com } from '../../../col/com/Com';
import { useCols } from '../../../cols/useCols';
import { CmComBindAttach } from '../../../external/cmExternalAttach';
import { useMeetings } from '../../../lists/meetings/useMeetings';

interface Props {
  schedule?: IScheduleWidget | nil;
  children?: React.ReactNode;
}

const itNUnd = (it: unknown) => it !== undefined;
const findEventWithComs = (event: IScheduleWidgetDayEvent) => event.atts?.['[cm]:coms'] != null;

export const ScheduleWidgetCurrentCmTranslationList = ({ schedule, children }: Props) => {
  const cols = useCols();
  const meetings = useMeetings().meetings;

  if (meetings == null || cols == null || schedule == null || schedule.days.length === 0) return children;

  let coms: Com[] | null = null;

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
        coms = coms.concat(comws.map(comw => cols.coms.find(com => com.wid === comw)!).filter(itNUnd));
      }

      return coms;
    }

    return [];
  };

  if (dayi < 0) {
    coms = getValue(schedule.days.find(day => day.list.some(findEventWithComs))?.list.find(findEventWithComs));
  } else {
    const today = schedule.days[dayi];

    if (today != null) {
      const event = ScheduleWidgetCleans.getCurrentEventInDay(schedule, dayi);

      if (event?.atts?.['[cm]:coms'] == null) {
        coms = Array.from(
          new Set(
            today?.list
              .filter(findEventWithComs)
              .map(event => getValue(event))
              .flat(),
          ),
        );
      } else coms = getValue(event);
    } else
      coms = getValue(
        [...schedule.days]
          .reverse()
          .find(day => day.list.some(findEventWithComs))
          ?.list.find(findEventWithComs),
      );
  }

  return <CmTranslationComListContext.Provider value={[coms, '']}>{children}</CmTranslationComListContext.Provider>;
};
