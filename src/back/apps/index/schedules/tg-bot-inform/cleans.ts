/* eslint-disable no-throw-literal */
import { makeRegExp } from '../../../../complect/makeRegExp';
import { SMyLib } from '../../../../shared/SMyLib';
import { IScheduleWidget, IScheduleWidgetDayEvent } from '../../models/ScheduleWidget.model';
import ScheduleWidgetCleans from '../utils/Cleans';

const timeRegStr = '\\d{1,2}:\\d{1,2}';
const timeSchLineReg = makeRegExp(`/(${timeRegStr}) (.+)(\\n(?!${timeRegStr}).+)*/g`);

const repEInText = (text: string) => text.replace(makeRegExp('/ё/gi'), 'е');
const extractTitle = ({ title }: { title: string }) => repEInText(title);

type TgTag = '' | 'b' | 'i' | 'u' | 's' | 'tg-spoiler' | 'code' | 'pre';

export class ScheduleWidgetTgInformCleans {
  static text2PreparedText = (text: string) => {
    const lines = text.match(timeSchLineReg);

    if (lines == null || lines.length < 3) throw `Текст должен содержать минимум три строки расписания`;

    let lastTimeStr = '';
    let errors: string[] = [];

    const list = lines.map(line => {
      const lineLines = line.split('\n');

      const [hoursStr, minsStr] = line.slice(0, line.indexOf(' ')).split(':');

      const timeStr = `${hoursStr.padStart(2, '0')}:${minsStr.padStart(2, '0')}`;

      const titleStr = lineLines[0].slice(line.indexOf(' ') + 1);

      if (timeStr < lastTimeStr) errors.push(`Ошибка по времени <b>(${lastTimeStr} > ${timeStr})</b> ${titleStr}`);
      lastTimeStr = timeStr;

      if (errors.length !== 0) return '';

      const description = lineLines.slice(1).join('\n');

      return (
        titleStr
          .split(makeRegExp('/\\s*\\/\\s*/'))
          .map(title => timeStr + ` ${ScheduleWidgetCleans.attachmentTypeTitleNormalize(title, true)}`)
          .join('') + (description ? `\n${description}` : '')
      );
    });

    if (errors.length) {
      throw `В тексте расписания найдены ошибки:\n\n${errors.join('\n')}`;
    } else {
      return {
        head: text.slice(0, text.indexOf(lines[0])).trim(),
        text: list.flat().join('\n'),
      };
    }
  };

  static preparedText2DayList = (text: string, schedule: IScheduleWidget<string>) => {
    const lines = text.match(timeSchLineReg);

    if (lines == null || lines.length < 3) throw 'Ожидается минимум три пункта';

    const titles = new Set(schedule.types.map(extractTitle));

    const tattTimes: Record<string, number> = {};
    const eventTitles: Record<string, string> = {};
    const eventTopics: Record<string, string> = {};
    const eventTimes: Record<string, number> = {};
    const eventDescription: Record<string, string> = {};

    lines.forEach((line, linei, linea) => {
      const lineLines = line.split('\n');
      const firstLine = lineLines[0];

      const [, itileHeap, topic] = firstLine.split(':');

      const nextLine = linea[linei + 1] as string | und;
      let timeMins = 0;

      if (nextLine !== undefined) {
        const [lineHoursStr, lineMinsStr] = firstLine.slice(0, 5).split(':');
        const [nextLineHoursStr, nextLineMinsStr] = nextLine.slice(0, 5).split(':');

        timeMins += (+nextLineHoursStr - +lineHoursStr) * 60 + (+nextLineMinsStr - +lineMinsStr);
      } else timeMins += 5;

      const title = itileHeap.slice(3).trim();
      const eTitle = repEInText(title);

      eventTimes[line] = timeMins;
      eventTitles[line] = title.trim();
      eventTopics[line] = topic?.trim();
      eventDescription[line] = lineLines.slice(1).join('\n');

      if (titles.has(eTitle) || tattTimes[title] !== undefined) return;

      tattTimes[title] = timeMins || 5;
    });

    return {
      newTatts: SMyLib.entries(tattTimes).map(([title, tm]) => ({ title, tm })),
      dayWup: ScheduleWidgetCleans.packDayWakeUpTime(lines[0].slice(0, 5)),
      list: lines.map(line => {
        const tattTitle = eventTitles[line];
        const type = schedule.types.findIndex(({ title }) => repEInText(title) === repEInText(tattTitle));

        if (type < 0) return null;

        const dayEvent = {
          mi: 0 as never,
          type,
          topic: eventTopics[line],
          tm: eventTimes[line] !== tattTimes[tattTitle] ? eventTimes[line] : undefined,
          dsc: eventDescription[line],
        } satisfies IScheduleWidgetDayEvent;

        delete dayEvent.mi;

        return dayEvent;
      }),
    };
  };

  static putInTgTag = (tag: TgTag, text: string) => (tag === '' ? text : `<${tag}>${text}</${tag}>`);
}
