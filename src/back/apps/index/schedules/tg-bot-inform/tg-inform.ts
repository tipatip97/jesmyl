import nodeSchedule from 'node-schedule';
import { filer } from '../../../../complect/filer/Filer';
import { SokiAuther } from '../../../../complect/soki/SokiAuther';
import sokiServer from '../../../../complect/soki/SokiServer';
import { LocalSokiAuth } from '../../../../complect/soki/soki.model';
import smylib from '../../../../shared/SMyLib';
import { jesmylTgBot } from '../../../../sides/telegram-bot/bot';
import { tglogger } from '../../../../sides/telegram-bot/log/log-bot';
import { IScheduleWidget, IScheduleWidgetUser } from '../../models/ScheduleWidget.model';
import { ScheduleWidgetUserRoleRight, scheduleWidgetUserRights } from '../../rights';
import ScheduleWidgetCleans from '../utils/Cleans';
import {
  indexScheduleCheckIsDayIsPast,
  indexScheduleGetDayEventTimes,
  indexScheduleGetDayStartMs,
  indexScheduleGetEventFinishMs,
} from '../utils/utils';

let schedules: IScheduleWidget<string>[];
const getSchedule = (scheduleScalar: number | IScheduleWidget<string>) =>
  smylib.isNum(scheduleScalar)
    ? (schedules ??= filer.contents.index['schedules'].data.list).find(sch => sch.w === scheduleScalar)
    : scheduleScalar;

const jobs: Record<number, nodeSchedule.Job> = {};
const findUserAdminFunc = (user: IScheduleWidgetUser) =>
  scheduleWidgetUserRights.checkIsHasRights(user.R, ScheduleWidgetUserRoleRight.TotalRedact);
const unsubscribeQueryDataNamePrefix = 'sch-wdgt-unsub:';
const subscribeQueryDataNamePrefix = 'sch-wdgt-sub:';

export const indexScheduleSetMessageAlert = (
  scheduleScalar: number | IScheduleWidget<string>,
  invokerAuth?: LocalSokiAuth | null,
  invokeDayi?: number,
) => {
  const schedule = getSchedule(scheduleScalar);

  if (schedule === undefined) return;

  if (invokeDayi === undefined || !indexScheduleCheckIsDayIsPast(schedule, invokeDayi)) jobs[schedule.w]?.cancel();

  if (
    schedule.tgInform === 0 ||
    schedule.days.length === 0 ||
    indexScheduleCheckIsDayIsPast(schedule, schedule.days.length - 1) ||
    (invokeDayi !== undefined && indexScheduleCheckIsDayIsPast(schedule, invokeDayi))
  )
    return;

  const now = Date.now();
  const daysLen = schedule.days.length;
  const alertBeforeTime = schedule.tgInformTime;

  dayLoop: for (let dayi = 0; dayi < daysLen; dayi++) {
    const day = schedule.days[dayi];

    if (day.list.length === 0 || indexScheduleCheckIsDayIsPast(schedule, dayi)) continue;
    const times = indexScheduleGetDayEventTimes(schedule, day);
    const wakeupMs = ScheduleWidgetCleans.computeDayWakeUpTime(day.wup, 'number');
    const dayStartMs = indexScheduleGetDayStartMs(schedule, dayi);

    for (let eventi = 0; eventi < day.list.length; eventi++) {
      const event = day.list[eventi];
      const eventTimeMs = ScheduleWidgetCleans.takeEventTm(event, schedule.types[event.type]) * smylib.howMs.inMin;

      if (now > indexScheduleGetEventFinishMs(schedule, wakeupMs, dayi, times[eventi]) - eventTimeMs) continue;

      const eventStartMs = dayStartMs + wakeupMs + times[eventi] * smylib.howMs.inMin - eventTimeMs;

      const minutesRemaning = (eventStartMs - now) / smylib.howMs.inMin;
      const time =
        event.tgInform !== 0 && alertBeforeTime > 0
          ? minutesRemaning > alertBeforeTime
            ? now + (minutesRemaning - alertBeforeTime) * smylib.howMs.inMin + 100
            : minutesRemaning > 0.3
              ? now + 100
              : eventStartMs
          : eventStartMs;

      jobs[schedule.w] = nodeSchedule.scheduleJob(time, () => {
        for (const user of schedule.ctrl.users) {
          if (user.tgId === undefined || user.tgInform === 0) continue;
          const isAlertNow = event.tgInform !== 0;
          const eventTitle = schedule.types[event.type].title;
          const text =
            (isAlertNow ? 'Через ' + Math.ceil((eventStartMs - Date.now()) / smylib.howMs.inMin) + ' м. ' : '') +
            '<b>' +
            eventTitle +
            '</b>' +
            (event.topic ? ': ' + event.topic : '') +
            (!isAlertNow && event.dsc ? '\n\n' + event.dsc : '') +
            ('\n\n<i>' + schedule.title + '</i>');

          jesmylTgBot.sendMessage(user.tgId, text, tglogger, {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: 'Отписаться от ' + schedule.title,
                    callback_data: unsubscribeQueryDataNamePrefix + schedule.w,
                  },
                ],
              ],
            },
          });
        }

        if (event.tgInform !== 0) {
          let auth = invokerAuth;
          if (auth == null) {
            const user = schedule.ctrl.users.find(findUserAdminFunc);
            if (user === undefined || user.tgId === undefined) return;

            auth = {
              ...user,
              level: 3,
              passw: SokiAuther.makePassw(user.tgId, user.nick),
            };
          }

          sokiServer
            .execExecs(
              'index',
              [
                {
                  action: 'setEventIsNeedTgInform',
                  args: {
                    schw: schedule.w,
                    value: 0,
                    dayi,
                    eventMi: event.mi,
                  },
                },
              ],
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

jesmylTgBot.listenPersonalQueries(async event => {
  if (
    event.value.data !== undefined &&
    (event.value.data.startsWith(unsubscribeQueryDataNamePrefix) ||
      event.value.data.startsWith(subscribeQueryDataNamePrefix))
  ) {
    const schw = +event.value.data.split(':')[1];

    const schedule = getSchedule(schw);
    if (schedule === undefined) return;

    const user = schedule.ctrl.users.find(findUserAdminFunc);
    if (user === undefined || user.tgId === undefined) return;

    const userTgId = user.tgId;
    const isSubscribe = event.value.data.startsWith(subscribeQueryDataNamePrefix);

    const auth = {
      ...user,
      level: 3,
      passw: SokiAuther.makePassw(userTgId, user.nick),
    };

    const text =
      (isSubscribe ? 'Вы подписались на TG-информирование' : 'Вы отписались от TG-информирования') +
      ' о событиях мероприятия "' +
      schedule.title +
      '"';

    sokiServer
      .execExecs(
        'index',
        [
          {
            action: 'setUserTgInform',
            args: {
              schw,
              userMi: user.mi,
              value: isSubscribe ? 1 : 0,
            },
          },
        ],
        auth,
        auth,
      )
      .then(() => {
        jesmylTgBot.sendMessage(userTgId, text, tglogger, {
          reply_markup: {
            inline_keyboard: [
              [
                isSubscribe
                  ? {
                      text: 'Отписаться',
                      callback_data: unsubscribeQueryDataNamePrefix + schedule.w,
                    }
                  : {
                      text: 'Подписаться',
                      callback_data: subscribeQueryDataNamePrefix + schedule.w,
                    },
              ],
            ],
          },
        });
      });

    event.stopPropagation({ text });
    return;
  }
});
