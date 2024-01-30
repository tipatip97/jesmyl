import { FilerAppRequirement } from '../../../complect/filer/Filer.model';
import { ScheduleStorage } from '../models/ScheduleWidget.model';
import { indexScheduleSetMessageAlert } from './tg-bot-inform/tg-inform';

export const indexSchedulesConfigOnInit: FilerAppRequirement<ScheduleStorage<string>> = {
  onInit: schedules => {
    schedules.list.forEach(sch => indexScheduleSetMessageAlert(sch));
  },
};
