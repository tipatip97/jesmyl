import nodeSchedule from 'node-schedule';
import { filer } from '../../../../complect/filer/Filer';
import { SokiAuther } from '../../../../complect/soki/SokiAuther';
import sokiServer from '../../../../complect/soki/SokiServer';
import { LocalSokiAuth } from '../../../../complect/soki/soki.model';
import smylib from '../../../../shared/SMyLib';
import { prodTelegramBot } from '../../../../sides/telegram-bot/prod/prod-bot';
import { IScheduleWidget, IScheduleWidgetUser } from '../../models/ScheduleWidget.model';
import { ScheduleWidgetUserRoleRight, scheduleWidgetUserRights } from '../../rights';
import ScheduleWidgetCleans from '../utils/Cleans';
import {
  indexScheduleCheckIsDayIsPast,
  indexScheduleGetDayEventTimes,
  indexScheduleGetEventFinishMs,
} from '../utils/utils';

const userWithTgIdCheckFunc = (user: IScheduleWidgetUser) => user.tgId !== undefined;

let schedules: IScheduleWidget<string>[];
const jobs: Record<number, nodeSchedule.Job> = {};
const findUserAdminFunc = (user: IScheduleWidgetUser) =>
  scheduleWidgetUserRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.TotalRedact);

export const indexScheduleSetMessageAlert = (
  scheduleScalar: number | IScheduleWidget<string>,
  invokerAuth?: LocalSokiAuth | null,
  invokeDayi?: number,
) => {
  const schedule = smylib.isNum(scheduleScalar)
    ? (schedules ??= filer.contents.index['schedules'].data.list).find(sch => sch.w === scheduleScalar)
    : scheduleScalar;

  if (schedule === undefined) return;

  jobs[schedule.w]?.cancel();

  if (schedule.tgAlerts === 0) return;
  if (!schedule.ctrl.users.some(userWithTgIdCheckFunc)) return;
  if (schedule.days.length === 0 || indexScheduleCheckIsDayIsPast(schedule, schedule.days.length - 1)) return;

  const now = Date.now();
  const daysLen = schedule.days.length;
  const alertBeforeTime = schedule.tgAlertsTime;

  dayLoop: for (let dayi = 0; dayi < daysLen; dayi++) {
    const day = schedule.days[dayi];

    if (day.list.length === 0 || indexScheduleCheckIsDayIsPast(schedule, dayi)) continue;
    const times = indexScheduleGetDayEventTimes(schedule, day);
    const wakeupMs = ScheduleWidgetCleans.computeDayWakeUpTime(day.wup, 'number');

    for (let eventi = 0; eventi < day.list.length; eventi++) {
      const event = day.list[eventi];
      const eventTimeMs = ScheduleWidgetCleans.takeEventTm(event, schedule.types[event.type]) * smylib.howMs.inMin;

      if (now > indexScheduleGetEventFinishMs(schedule, wakeupMs, dayi, times[eventi]) - eventTimeMs) continue;

      const eventStartMs = schedule.start + wakeupMs + times[eventi] * smylib.howMs.inMin - eventTimeMs;

      const minutesRemaning = (eventStartMs - now) / smylib.howMs.inMin;
      const time =
        event.tgAlert !== 0 && alertBeforeTime > 0
          ? minutesRemaning > alertBeforeTime
            ? now + (minutesRemaning - alertBeforeTime) * smylib.howMs.inMin + 100
            : minutesRemaning > 0.3
              ? now + 100
              : eventStartMs
          : eventStartMs;

      jobs[schedule.w] = nodeSchedule.scheduleJob(time, () => {
        const isAlertNow = event.tgAlert !== 0;
        const eventTitle = schedule.types[event.type].title;
        const text =
          (isAlertNow ? 'Через ' + Math.ceil((eventStartMs - Date.now()) / smylib.howMs.inMin) + ' м. ' : '') +
          '<b>' +
          eventTitle +
          '</b>' +
          (event.topic ? ': ' + event.topic : '') +
          (!isAlertNow && event.dsc ? '\n\n' + event.dsc : '') +
          ('\n\n<i>' + schedule.title + '</i>');

        for (const user of schedule.ctrl.users) {
          if (user.tgId === undefined || user.tgAlerts === 0) continue;
          prodTelegramBot.sendMessage(user.tgId, text);
        }

        if (event.tgAlert !== 0) {
          let auth = invokerAuth;
          if (auth == null) {
            const user = schedule.ctrl.users.find(findUserAdminFunc);
            if (user === undefined) return;

            auth = {
              ...user,
              level: 3,
              passw: SokiAuther.makePassw(user.tgId, user.nick),
            };
          }

          sokiServer
            .execExecs(
              'index',
              [{ action: 'setEventIsNeedTgAlert', args: { schw: schedule.w, value: 0, dayi, eventMi: event.mi } }],
              auth,
              auth,
            )
            .then(() => setTimeout(() => indexScheduleSetMessageAlert(schedule.w, invokerAuth, invokeDayi)));
        } else setTimeout(() => indexScheduleSetMessageAlert(schedule.w, invokerAuth, invokeDayi));
      });

      break dayLoop;
    }
  }
};
