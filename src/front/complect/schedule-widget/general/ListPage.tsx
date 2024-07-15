import useIndexNav from '../../../components/index/complect/useIndexNav';
import { useAuth, useIndexSchedules } from '../../../components/index/molecules';
import useConnectionState from '../../../components/index/useConnectionState';
import PhaseContainerConfigurer from '../../phase-container/PhaseContainerConfigurer';
import IconButton from '../../the-icon/IconButton';
import { IconCalendar03StrokeRounded } from '../../the-icon/icons/calendar-03';
import ScheduleCreateWidgetButton from './CreateButton';

export default function ScheduleWidgetListPage() {
  const schedules = useIndexSchedules();
  const connectionNode = useConnectionState();
  const auth = useAuth();
  const { goTo, goBack } = useIndexNav();

  return (
    <PhaseContainerConfigurer
      goBack={goBack}
      className="ScheduleWidgetPage ScheduleWidgetListPage"
      headTitle="Мероприятия"
      head={<span className="flex flex-gap margin-gap">{connectionNode}</span>}
      content={
        <>
          {schedules.list.map(schedule => {
            if (!schedule.start) return null;
            return (
              <IconButton
                key={schedule.w}
                Icon={IconCalendar03StrokeRounded}
                className="margin-gap-v"
                postfix={
                  <>
                    {schedule.title}
                    {schedule.topic ? `: ${schedule.topic}` : ''}
                  </>
                }
                onClick={() => goTo({ place: 'schedule', data: { schw: schedule.w } })}
              />
            );
          })}
          {auth && auth.level > 29 && <ScheduleCreateWidgetButton appName="index" />}
        </>
      }
    />
  );
}
