import useIndexNav from '../../../components/index/complect/useIndexNav';
import { useIndexSchedules } from '../../../components/index/molecules';
import ScheduleWidgetAlarmContent from './AlarmContent';

export default function ScheduleWidgetAlarm({ isForceShow }: { isForceShow?: boolean }) {
  const schedules = useIndexSchedules();
  const nav = useIndexNav();

  return (
    <>
      {(isForceShow || schedules.list.some(schedule => schedule.start)) && (
        <ScheduleWidgetAlarmContent observeSchw={nav.appRouteData.schw} />
      )}
    </>
  );
}
