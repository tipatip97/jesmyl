import { filer } from '../../complect/filer/Filer';
import environment from '../../environments/environment';
import { AttTgInformStorage } from '../index/schedules/tg-bot-inform/attInformStorage';
import { CmComWid } from './Cm.enums';
import { CmComBindAttach, IExportableCols, IExportableCom } from './CmBackend.model';
import { IExportableMeetings, IExportableMeetingsEvent } from './Meetings.model';

const getMeetings = () => filer.contents.cm.meetings?.data as IExportableMeetings | nil;
const getCols = () => filer.contents.cm.cols?.data as IExportableCols | nil;

function findEvent(this: CmComBindAttach, event: IExportableMeetingsEvent) {
  return event.w === this.eventw;
}

const sortComs = (a: IExportableCom, b: IExportableCom) => a.w - b.w;
const comwsComs = {} as Record<CmComWid, { com: IExportableCom; number: number }>;
const setComNumbers = (com: IExportableCom, comi: number) => (comwsComs[com.w] ??= { com, number: comi + 1 });
const makeComName = (comw: CmComWid) => (comwsComs[comw] ? `${comwsComs[comw].number}. ${comwsComs[comw].com.n}` : '');

export const cmTgAttInform: AttTgInformStorage = {
  '[cm]:coms': (value: CmComBindAttach) => {
    if (value.comws === undefined && value.eventw === undefined) return null;
    let comws: CmComWid[] = value.comws === undefined ? [] : [...value.comws];

    if (value.eventw !== undefined) {
      const event = getMeetings()?.events?.find(findEvent, value);

      if (event !== undefined) comws = comws.concat(event.s);
    }

    let titles = '';

    if (comws.length) {
      getCols()?.coms.sort(sortComs).forEach(setComNumbers);

      titles = comws.map(makeComName).join('\n');
    }

    return titles === '' ? null : `Песни:\n${titles}\n\n${environment.host}/cm/li/ext/[${comws}]\n\n`;
  },
};
