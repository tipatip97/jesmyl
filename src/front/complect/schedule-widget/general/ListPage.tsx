import { Link, Route, Routes } from 'react-router-dom';
import { useAuth, useIndexSchedules } from '../../../components/index/molecules';
import useConnectionState from '../../../components/index/useConnectionState';
import PhaseContainerConfigurer from '../../phase-container/PhaseContainerConfigurer';
import IconButton from '../../the-icon/IconButton';
import { IconCalendar03StrokeRounded } from '../../the-icon/icons/calendar-03';
import ScheduleCreateWidgetButton from './CreateButton';
import ScheduleWidgetPage from './Page';

export default function ScheduleWidgetListPage() {
  const schedules = useIndexSchedules();
  const connectionNode = useConnectionState();
  const auth = useAuth();

  return (
    <Routes>
      <Route
        index
        element={
          <PhaseContainerConfigurer
            className="ScheduleWidgetPage ScheduleWidgetListPage"
            headTitle="Мероприятия"
            head={<span className="flex flex-gap margin-gap">{connectionNode}</span>}
            content={
              <>
                {schedules.list.map(schedule => {
                  if (!schedule.start) return null;
                  return (
                    <Link
                      key={schedule.w}
                      to={'' + schedule.w}
                    >
                      <IconButton
                        Icon={IconCalendar03StrokeRounded}
                        className="margin-gap-v"
                        postfix={
                          <>
                            {schedule.title}
                            {schedule.topic ? `: ${schedule.topic}` : ''}
                          </>
                        }
                      />
                    </Link>
                  );
                })}
                {auth && auth.level > 29 && <ScheduleCreateWidgetButton appName="index" />}
              </>
            }
          />
        }
      />

      <Route
        path=":schw"
        element={<ScheduleWidgetPage />}
      />
    </Routes>
  );
}
