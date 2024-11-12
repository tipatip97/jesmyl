import { IScheduleWidget, ScheduleStorage } from 'shared/api';
import { smylib } from 'shared/utils';
import { filer } from '../../../../complect/filer/Filer';

const getSchedules = () => filer.contents.index.schedules.data as ScheduleStorage;

const schwSelf = { schw: 0 };
function findSchedule(this: typeof schwSelf, schedule: IScheduleWidget) {
  return schedule.w === this.schw;
}

export class ScheduleWidgetActionBoxCleans {
  static getSchedule = (schw: unknown) => {
    if (!smylib.isNum(schw)) return undefined;

    schwSelf.schw = schw;

    return getSchedules().list.find(findSchedule, schwSelf);
  };

  static getScheduleTitle = (schw: unknown) => {
    const schedule = this.getSchedule(schw);

    if (schedule === undefined) return '[Расписание не найдено]';

    return schedule.title;
  };
}
