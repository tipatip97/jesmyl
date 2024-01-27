import { FilerAppRequirement } from '../../../complect/filer/Filer.model';
import { ScheduleStorage } from '../models/ScheduleWidget.model';
import { indexScheduleSetMessageAlert } from './tg-bot-alerts/tg-alerts';

export const indexSchedulesConfigOnInit: FilerAppRequirement<ScheduleStorage<string>> = {
  onInit: schedules => {
    schedules.list.forEach(sch => indexScheduleSetMessageAlert(sch));
  },
};
