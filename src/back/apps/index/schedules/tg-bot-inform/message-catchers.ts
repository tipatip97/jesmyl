/* eslint-disable no-throw-literal */
import TelegramBot from 'node-telegram-bot-api';
import { ExecutionDict } from '../../../../complect/executer/Executer.model';
import { filer } from '../../../../complect/filer/Filer';
import { makeRegExp } from '../../../../complect/makeRegExp';
import { SokiAuther } from '../../../../complect/soki/SokiAuther';
import sokiServer from '../../../../complect/soki/SokiServer';
import { jesmylTgBot } from '../../../../sides/telegram-bot/bot';
import { IScheduleWidget, IScheduleWidgetDay, ScheduleStorage } from '../../models/ScheduleWidget.model';
import ScheduleWidgetCleans from '../utils/Cleans';
import { ScheduleWidgetTgInformCleans } from './cleans';

type TgTag = '' | 'b' | 'i' | 'u' | 's' | 'tg-spoiler' | 'code' | 'pre';
export const putInTgTag = (tag: TgTag, text: string) => (tag === '' ? text : `<${tag}>${text}</${tag}>`);

export const makeScheduleWidgetJoinTitle = (
  schedule: IScheduleWidget<string>,
  day: IScheduleWidgetDay,
  eventi: number,
  isSimpleText: boolean = false,
  prefix: string = '',
): string => {
  const event = day.list[eventi];

  if (event == null) return '';

  const eventTimeMin = ScheduleWidgetCleans.takeEventTm(event, schedule.types[event.type]);
  const titleInner = schedule.types[event.type].title + (event.topic ? ': ' + event.topic : '');
  const title = isSimpleText ? titleInner : putInTgTag('b', titleInner);

  return (
    prefix +
    (event.secret ? (isSimpleText ? title : putInTgTag('tg-spoiler', title)) : title) +
    (eventTimeMin === 0 ? makeScheduleWidgetJoinTitle(schedule, day, eventi + 1, isSimpleText, ' / ') : '')
  );
};
const itNNull = (it: unknown) => it !== null;
const findAdminThis = {} as { from: TelegramBot.User };

function findAdmin(this: typeof findAdminThis, member: TelegramBot.ChatMember) {
  return member.user.id === this.from.id;
}

const getSchedules = (): ScheduleStorage<string> => filer.contents.index?.schedules?.data;
const getScheduleByRequisit = (requisit: `${number}/` | `/${string}`) =>
  getSchedules().list.find(sch => sch.tgChatReqs?.includes(requisit));

const getScheduleAndTodayiByRequisit = (requisit: `${number}/` | `/${string}`) => {
  const schedule = getScheduleByRequisit(requisit);

  if (schedule == null) throw 'Мероприятие не найдено';

  const dayi = ScheduleWidgetCleans.getCurrentDayi(schedule);

  if (dayi < 0) throw 'Мероприятие не началось';
  if (dayi > schedule.days.length - 1) throw 'Мероприятие прошло';

  return [schedule, dayi] as const;
};

export const scheduleWidgetEventRaitingTgButtonQueryPrefix = 'schWgtEventDayUserRating';

const parseCbData_ = 'parseScheduleWidgetDayText';
const deleteButtonsCbData_ = 'deleteButtons';
const markup = {
  inline_keyboard: [
    [{ text: 'Преобразовать на сегодня', callback_data: parseCbData_ }],
    [{ text: 'Удалить эти кнопки', callback_data: deleteButtonsCbData_ }],
  ],
};

export const scheduleWidgetMessageCatcher = jesmylTgBot.catchMessages(async (message, bot) => {
  if (
    message.from === undefined ||
    message.text === undefined ||
    message.text.search(makeRegExp('/расписание/i')) < 0 ||
    getScheduleByRequisit(`${message.chat.id}/`) === undefined
  )
    return;

  findAdminThis.from = message.from;
  if (!(await bot.getChatAdministrators(message.chat.id)).some(findAdmin, findAdminThis)) return;

  try {
    const { head, text } = ScheduleWidgetTgInformCleans.text2PreparedText(message.text);

    try {
      await bot.sendMessage(message.chat.id, `<code>${head}\n\n${text}</code>`, {
        parse_mode: 'HTML',
        reply_markup: markup,
        disable_notification: true,
      });

      await bot.deleteMessage(message.chat.id, message.message_id);
    } catch (error) {
      console.error(error);
    }
  } catch (errorText) {
    await bot.sendMessage(message.chat.id, '' + errorText, { parse_mode: 'HTML' });
  }
});

jesmylTgBot.catchCallbackQuery(async (query, bot, answer) => {
  if (query.data === deleteButtonsCbData_) {
    if (query.message?.text !== undefined)
      bot.editMessageText(`<code>${query.message.text}</code>`, {
        chat_id: query.message.chat.id,
        message_id: query.message.message_id,
        parse_mode: 'HTML',
      });

    return answer('');
  }

  const ret = (text: string) => answer({ text });

  if (0) {
    // if (query.data !== undefined && query.data.startsWith(scheduleWidgetEventRaitingTgButtonQueryPrefix)) {
    //   let schedule,
    //     dayi = -1;
    //   try {
    //     [schedule, dayi] = getScheduleAndTodayiByRequisit(`/${query.chat_instance}`);
    //   } catch (errorMessage) {
    //     return ret('' + errorMessage);
    //   }
    //   const [, rateStr, eventMiStr] = query.data.split(':');
    //   const eventMi = +eventMiStr;
    //   const eventi = schedule.days[dayi].list.findIndex(event => event.mi === eventMi);
    //   if (eventi < 0) return ret('Событие не найдено');
    //   const auth = await SokiAuther.getTgAuth(query.from.id);
    //   if (auth == null) return ret('Не удалось авторизоваться');
    //   if (schedule.ctrl.users.find(user => user.tgId === auth?.tgId) === undefined) {
    //     await sokiServer.execExecs(
    //       'index',
    //       [
    //         {
    //           action: 'addNewUser',
    //           args: {
    //             value: {
    //               ...auth,
    //             },
    //           },
    //         },
    //       ],
    //       auth,
    //       auth,
    //     );
    //     schedule = getScheduleByRequisit(`/${query.chat_instance}`);
    //     if (schedule === undefined) return ret('Не вышло зарегистрироваться');
    //   }
    //   const user = schedule.ctrl.users.find(user => user.tgId === auth.tgId);
    //   if (user === undefined) return ret('Не удалось зарегистрироваться');
    //   const rate = +rateStr;
    //   sokiServer.execExecs(
    //     'index',
    //     [
    //       {
    //         action: 'setDayEventRate',
    //         args: {
    //           schw: schedule.w,
    //           dayi,
    //           eventMi,
    //           value: rate,
    //           userMi: user.mi,
    //         },
    //       },
    //     ],
    //     auth,
    //     auth,
    //   );
    //   return ret(
    //     `Твоя оценка события ${makeScheduleWidgetJoinTitle(schedule, schedule.days[dayi], eventi, true)}\n` +
    //       ((rate < 0 ? '💔' : '❤️').repeat(Math.abs(rate)) || '❓'),
    //   );
    // }
  }

  if (query.message === undefined || query.message.text === undefined || query.data !== parseCbData_) return ret('');

  try {
    findAdminThis.from = query.from;
    if (!(await bot.getChatAdministrators(query.message.chat.id)).some(findAdmin, findAdminThis))
      return ret('Обновлять расписание могут только админы этой группы');
  } catch (error) {
    return ret('Ошибка');
  }

  let schedule,
    dayi = -1;

  try {
    [schedule, dayi] = getScheduleAndTodayiByRequisit(`/${query.chat_instance}`);
  } catch (errorMessage) {
    return ret('' + errorMessage);
  }

  if (!schedule.days[dayi]?.list.length) return ret('Для обновления расписания список событий должен быть пустым');

  const { dayWup, list, newTatts } = ScheduleWidgetTgInformCleans.preparedText2DayList(query.message.text, schedule);

  const addAttTypesExecs = [
    {
      action: 'addAttTypes',
      args: {
        schw: schedule.w,
        value: newTatts,
      },
    },
  ] satisfies ExecutionDict[];

  const auth = await SokiAuther.getTgAuth(query.from.id);

  if (addAttTypesExecs[0]?.args.value.length) {
    try {
      const { errorMessage } = await sokiServer.execExecs('index', addAttTypesExecs, auth, auth);
      if (errorMessage) return ret(errorMessage);
    } catch (error) {
      return ret('' + error);
    }
  }

  if (true) {
    const schedule = getScheduleByRequisit(`/${query.chat_instance}`);

    if (schedule === undefined) return ret('Расписание не найдено');

    const addEventsExecs = [
      {
        action: 'putDayEventList',
        args: {
          schw: schedule.w,
          dayi,
          value: list.filter(itNNull),
        },
      },
      {
        action: 'setDayWup',
        args: {
          schw: schedule.w,
          dayi,
          value: dayWup,
        },
      },
    ];

    try {
      const { errorMessage } = await sokiServer.execExecs('index', addEventsExecs, auth, auth);
      if (errorMessage) return ret(errorMessage);
    } catch (error) {
      return ret('' + error);
    }
  }

  if (query.message?.text !== undefined)
    await bot.editMessageText(`<code>${query.message.text}</code>`, {
      chat_id: query.message.chat.id,
      message_id: query.message.message_id,
      parse_mode: 'HTML',
    });

  return ret('Расписание дня обновлено');
});
