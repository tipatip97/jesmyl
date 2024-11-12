import { FilerAppRequirement } from '../../../complect/filer/Filer.model';
import { ScheduleStorage } from 'shared/api';
import { indexScheduleSetMessageInform } from './tg-bot-inform/tg-inform';

export const indexSchedulesConfigOnInit: FilerAppRequirement<ScheduleStorage> = {
  onInit: schedules => {
    schedules.list.forEach(sch => indexScheduleSetMessageInform(sch));
  },
};
