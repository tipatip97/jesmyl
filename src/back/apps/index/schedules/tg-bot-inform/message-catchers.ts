import TelegramBot from 'node-telegram-bot-api';
import { ExecutionDict } from '../../../../complect/executer/Executer.model';
import { filer } from '../../../../complect/filer/Filer';
import { makeRegExp } from '../../../../complect/makeRegExp';
import { SokiAuther } from '../../../../complect/soki/SokiAuther';
import sokiServer from '../../../../complect/soki/SokiServer';
import { SMyLib } from '../../../../shared/SMyLib';
import { jesmylTgBot } from '../../../../sides/telegram-bot/bot';
import { IScheduleWidgetDayEvent, ScheduleStorage } from '../../models/ScheduleWidget.model';
import ScheduleWidgetCleans from '../utils/Cleans';

const timeRegStr = '\\d{1,2}:\\d{1,2}';
const timeSchLineReg = makeRegExp(`/${timeRegStr} [^\\n]+\\n*/g`);

const findAdminThis = {} as { from: TelegramBot.User };

function findAdmin(this: typeof findAdminThis, member: TelegramBot.ChatMember) {
  return member.user.id === this.from.id;
}

const extractTitle = ({ title }: { title: string }) => title;
const itNNull = (it: unknown) => it !== null;

const getSchedules = (): ScheduleStorage<string> => filer.contents.index?.schedules?.data;
const getScheduleByRequisit = (requisit: `${number}/` | `/${string}`) =>
  getSchedules().list.find(sch => sch.tgChatReqs?.includes(requisit));

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

  const lines = message.text.match(timeSchLineReg);

  if (lines == null || lines.length < 3) return;

  let lastTimeStr = '';
  let errors: string[] = [];

  const list = lines.map(line => {
    const [hoursStr, minsStr] = line.slice(0, line.search(' ')).split(':');

    const timeStr = `${hoursStr.padStart(2, '0')}:${minsStr.padStart(2, '0')}`;

    const titleStr = line.slice(line.search(' ') + 1);

    if (timeStr < lastTimeStr) errors.push(`Ошибка по времени <b>(${lastTimeStr} > ${timeStr})</b> ${titleStr}`);
    lastTimeStr = timeStr;

    if (errors.length !== 0) return '';

    return titleStr
      .split(makeRegExp('/\\s*\\/\\s*/'))
      .map(title => timeStr + ` ${ScheduleWidgetCleans.attachmentTypeTitleNormalize(title, true)}`);
  });

  let messageText = '';

  if (errors.length) {
    messageText = `В тексте расписания найдены ошибки:\n\n${errors.join('\n')}`;
  } else {
    messageText = `<code>${message.text.slice(0, message.text.search(lines[0])).trim()}\n\n${list
      .flat()
      .join('\n')}</code>`;
  }

  try {
    const fffffffffffffffffffffffrom = 0 ? message.from.id : message.chat.id;
    await bot.sendMessage(fffffffffffffffffffffffrom, messageText, {
      parse_mode: 'HTML',
      reply_markup: errors.length ? undefined : markup,
      disable_notification: true,
    });

    if (!errors.length) await bot.deleteMessage(message.chat.id, message.message_id);
  } catch (error) {
    console.error(error);
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

  if (query.message === undefined || query.message.text === undefined || query.data !== parseCbData_) return answer('');

  const ret = (text: string, num?: number) => answer({ text })!;

  try {
    findAdminThis.from = query.from;
    if (!(await bot.getChatAdministrators(query.message.chat.id)).some(findAdmin, findAdminThis))
      return ret('Обновлять расписание могут только админы этой группы');
  } catch (error) {
    return ret('Ошибка');
  }

  const lines = query.message.text.match(timeSchLineReg);

  if (lines == null || lines.length < 3) return ret('Ожидается минимум три пункта');

  const tattTimes: Record<string, number> = {};
  const eventTitles: Record<string, string> = {};
  const eventTopics: Record<string, string> = {};
  const eventTimes: Record<string, number> = {};

  const schedule = getScheduleByRequisit(`/${query.chat_instance}`);

  if (schedule == null) return ret('Мероприятие не найдено');

  const dayi = ScheduleWidgetCleans.getCurrentDayi(schedule);

  if (dayi < 0) return ret('Мероприятие не началось');
  if (dayi > schedule.days.length - 1) return ret('Мероприятие прошло');

  const titles = new Set(schedule.types.map(extractTitle));

  lines.forEach((line, linei, linea) => {
    const [, itileHeap, topic] = line.split(':');
    const title = itileHeap.slice(3).trim();

    const nextLine = linea[linei + 1] as string | und;
    let timeMins = 0;

    if (nextLine !== undefined) {
      const [lineHoursStr, lineMinsStr] = line.slice(0, 5).split(':');
      const [nextLineHoursStr, nextLineMinsStr] = nextLine.slice(0, 5).split(':');

      timeMins += (+nextLineHoursStr - +lineHoursStr) * 60 + (+nextLineMinsStr - +lineMinsStr);
    } else timeMins += 5;

    eventTimes[line] = timeMins;
    eventTitles[line] = title.trim();
    eventTopics[line] = topic?.trim();

    if (titles.has(title) || tattTimes[title] !== undefined) return;

    tattTimes[title] = timeMins || 5;
  });

  const addAttTypesExecs = [
    {
      action: 'addAttTypes',
      args: {
        schw: schedule.w,
        value: SMyLib.entries(tattTimes).map(([title, tm]) => ({ title, tm })),
      },
    },
  ] satisfies ExecutionDict[];

  const auth = await SokiAuther.getTgAuth(query.from.id);

  if (addAttTypesExecs[0]?.args.value.length) {
    try {
      const { errorMessage } = await sokiServer.execExecs('index', addAttTypesExecs, auth, auth);
      if (errorMessage) return ret(errorMessage, 1);
    } catch (error) {
      return ret('' + error, 2);
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
          value: lines
            .map(line => {
              const tattTitle = eventTitles[line];
              const type = schedule.types.findIndex(({ title }) => title === tattTitle);

              if (type < 0) return null;

              const dayEvent = {
                mi: 0 as never,
                type,
                topic: eventTopics[line],
                tm: eventTimes[line] !== tattTimes[tattTitle] ? eventTimes[line] : undefined,
              } satisfies IScheduleWidgetDayEvent;

              delete dayEvent.mi;

              return dayEvent;
            })
            .filter(itNNull),
        },
      },
      {
        action: 'setDayWup',
        args: {
          schw: schedule.w,
          dayi,
          value: ScheduleWidgetCleans.packDayWakeUpTime(lines[0].slice(0, 5)),
        },
      },
    ];

    try {
      const { errorMessage } = await sokiServer.execExecs('index', addEventsExecs, auth, auth);
      if (errorMessage) return ret(errorMessage, 3);
    } catch (error) {
      return ret('' + error, 4);
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
