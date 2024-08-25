import { useIndexSchedules } from '../../../components/index/molecules';
import mylib from '../../my-lib/MyLib';
import { useActualSchw } from '../useSch';
import ScheduleWidgetAlarmContent from './AlarmContent';

export default function ScheduleWidgetAlarm({ isForceShow }: { isForceShow?: boolean }) {
  const schedules = useIndexSchedules();
  const schw = useActualSchw();

  return (
    <>
      {!mylib.isNaN(schw) && (isForceShow || schedules.list.some(schedule => schedule.start)) && (
        <ScheduleWidgetAlarmContent observeSchw={schw} />
      )}
    </>
  );
}
