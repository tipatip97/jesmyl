import { makeRegExp } from '../../../../complect/makeRegExp';
import smylib, { SMyLib } from '../../../../shared/SMyLib';
import {
  IScheduleWidget,
  IScheduleWidgetDayEvent,
  ScheduleWidgetDayListItemTypeBox,
} from '../../models/ScheduleWidget.model';
import { CustomAttUseTaleId } from '../../rights';

const singleTitleSymbols = '- ().,/';
const incorrectsTitleReg = makeRegExp(`/[^${singleTitleSymbols}\\dа-яё]/gi`);
const singlesTitleReg = makeRegExp(`/([${singleTitleSymbols}])(\\1+)/g`);
const titleLettersNormalizer = (_: string, __: string, letters: string) => letters[0];

const likeLetters: Record<string, string> = {
  e: 'е',
  y: 'у',
  u: 'и',
  o: 'о',
  p: 'р',
  a: 'а',
  h: 'н',
  k: 'к',
  x: 'х',
  c: 'с',
  b: 'ь',
  n: 'п',
  m: 'т',

  E: 'Е',
  Y: 'У',
  U: 'И',
  O: 'О',
  P: 'Р',
  A: 'А',
  H: 'Н',
  K: 'К',
  X: 'Х',
  C: 'С',
  B: 'В',
  M: 'М',
  T: 'Т',
};

const likeLettersReg = makeRegExp(`/[${SMyLib.keys(likeLetters).join('')}]/g`);
const repLikeLetters = (letter: string) => likeLetters[letter];

export default class ScheduleWidgetCleans {
  static checkIsTaleIdUnit = (num: number, taleId: CustomAttUseTaleId) => Math.trunc(num) + taleId === num;

  static computeDayWakeUpTime = <ReturnAs extends 'number' | 'string'>(
    wup: number,
    returnAs: ReturnAs,
  ): ReturnAs extends 'number' ? number : string => {
    const [, beginHours, , beginMinutes] = ('' + wup).match(makeRegExp('/(\\d+)(\\.(\\d+))?/')) || [];
    const wakeUpMinutes = +(beginMinutes?.padEnd(2, '0') || 0);

    return (
      returnAs === 'number'
        ? +(beginHours || 0) * smylib.howMs.inHour + wakeUpMinutes * smylib.howMs.inMin
        : `${beginHours.padStart(2, '0')}:${('' + wakeUpMinutes).padStart(2, '0')}`
    ) as never;
  };

  static packDayWakeUpTime = (wupTime: string) => +wupTime.replace(makeRegExp('/\\D+/'), '.');

  static takeEventTm = (event?: IScheduleWidgetDayEvent, box?: ScheduleWidgetDayListItemTypeBox) => {
    return event?.tm ?? box?.tm ?? 0;
  };

  static daysToText = (days: number, isNeedCalculate?: boolean) => {
    const daysTo = isNeedCalculate ? Math.ceil(days / smylib.howMs.inDay) : days;
    return daysTo + ' ' + smylib.declension(daysTo, 'день', 'дня', 'дней');
  };
  static hoursToText = (hoursTo: number) => hoursTo + ' ' + smylib.declension(hoursTo, 'час', 'часа', 'часов');
  static minutesToText = (minutes: number, isNeedCalculate?: boolean) => {
    const minutesTo = isNeedCalculate ? Math.ceil(minutes / smylib.howMs.inMin) : minutes;
    return minutesTo + ' ' + smylib.declension(minutesTo, 'минуту', 'минуты', 'минут');
  };

  static minutesToTextTemplate = (minutes: number, text: string) => {
    const minutesTo = Math.ceil(minutes / smylib.howMs.inMin);

    return smylib.stringTemplater(text, {
      num: minutesTo,
      onNum: (one: string, more: string) => (minutesTo === 1 ? one : more),
      txt: smylib.declension(minutesTo, minutesTo % 10 === 1 ? 'минута' : 'минуту', 'минуты', 'минут'),
    });
  };

  static termsToText = (termsTo: number) => termsTo + ' ' + smylib.declension(termsTo, 'раз', 'раза', 'раз');

  static attachmentTypeTitleNormalize = (text: string, isWithTopic?: boolean) => {
    if (isWithTopic) {
      const notSymboli = text.search(makeRegExp(`/[^- .,\\wа-яё]/gi`));
      const topic = notSymboli < 0 ? '' : text.slice(notSymboli).trim();

      return (
        (notSymboli < 0 ? text : text.slice(0, notSymboli)).trim().replace(likeLettersReg, repLikeLetters) +
        (topic && `: ${topic.replace(makeRegExp('/^\\(([^)]+)\\)$/'), '$1').replace(makeRegExp(`/^: /`), '')}`)
      );
    }
    return text.replace(incorrectsTitleReg, '').replace(singlesTitleReg, titleLettersNormalizer).trim();
  };

  static getCurrentDayi(schedule: IScheduleWidget<string>) {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return (date.getTime() - schedule.start + (schedule.withTech ? smylib.howMs.inDay : 0)) / smylib.howMs.inDay;
  }

  static getCurrentEventInDay(schedule: IScheduleWidget<string>, dayi: number) {
    const day = schedule.days[dayi];
    if (day == null) return undefined;

    const date = new Date();
    const dateStart = new Date();
    dateStart.setHours(0, 0, 0, 0);
    date.setSeconds(0, 0);

    const [hoursStr, minsStr = 0] = ('' + day.wup).split('.');

    let prevMins = +hoursStr * 60 + +minsStr;
    const nowMins = (date.getTime() - dateStart.getTime()) / smylib.howMs.inMin;

    for (let eventi = 0; eventi < day.list.length; eventi++) {
      const event = day.list[eventi];

      const tm = this.takeEventTm(event, schedule.types[event.type]);

      prevMins += tm;

      if (nowMins > prevMins && nowMins < prevMins + tm) {
        return event;
      }
    }
  }

  static getCurrentDayiAndEventi(schedule: IScheduleWidget<string>): [number, IScheduleWidgetDayEvent | und] {
    const dayi = this.getCurrentDayi(schedule);

    return [dayi, this.getCurrentEventInDay(schedule, dayi)];
  }
}
