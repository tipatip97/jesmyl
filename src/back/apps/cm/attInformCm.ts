import environment from '../../environments/environment';
import { AttTgInformStorage } from '../index/schedules/tg-bot-inform/attInformStorage';
import { CmComBindAttach } from './CmBackend.model';

export const makeCmScheduleWidgetComListUrl = (
  schw: number | string,
  dayi: number | string,
  eventMi: number | string,
) => `${environment.host}/cm/!other/schs/${schw}/${dayi}/${eventMi}/com-list`;

export const cmTgAttInform: AttTgInformStorage = {
  '[cm]:coms': (_value: CmComBindAttach, eventTitle, schedule, dayi, event) => {
    return `Список песен${eventTitle}:\n${makeCmScheduleWidgetComListUrl(schedule.w, dayi, event.mi)}\n\n`;
  },
};
