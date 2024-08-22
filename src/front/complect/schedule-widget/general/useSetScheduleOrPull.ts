import { useEffect } from 'react';
import { useIndexSchedules } from '../../../components/index/molecules';
import { IScheduleWidgetWid } from '../../../models';
import mylib from '../../my-lib/MyLib';
import serviceMaster from '../../service/serviceMaster';
import { IScheduleWidget } from '../ScheduleWidget.model';

export const useSetScheduleOrPull = (
  setSchedule: (schedule: IScheduleWidget) => void,
  scheduleInstance: string | IScheduleWidgetWid,
  setIsLoading?: (is: boolean) => void,
) => {
  const schedules = useIndexSchedules();

  useEffect(() => {
    if (!mylib.isStr(scheduleInstance) && isNaN(scheduleInstance)) return;

    const find = mylib.isStr(scheduleInstance)
      ? (sch: IScheduleWidget) => sch.tgChatReqs?.endsWith(scheduleInstance)
      : (sch: IScheduleWidget) => sch.w === scheduleInstance;

    const schedule = schedules.list.find(find);

    if (schedule !== undefined) {
      setSchedule(schedule);
      return;
    }

    setIsLoading?.(true);
    return hookEffectLine()
      .setTimeout(async () => {
        try {
          setSchedule(await serviceMaster('index')('takeDaySchedule', scheduleInstance));
        } catch (error) {}

        setIsLoading?.(false);
      }, 200)
      .effect();
  }, [scheduleInstance, schedules.list, setIsLoading, setSchedule]);
};
