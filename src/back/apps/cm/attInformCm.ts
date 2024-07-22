import { filer } from '../../complect/filer/Filer';
import { makeSharedLink } from '../../complect/link-coder/linkMaker';
import environment from '../../environments/environment';
import { AttTgInformStorage } from '../index/schedules/tg-bot-inform/attInformStorage';
import { CmComWid, CmMeetingEventWid } from './Cm.enums';
import { CmComBindAttach, IExportableCols, IExportableCom } from './CmBackend.model';
import { IExportableMeetings, IExportableMeetingsEvent } from './Meetings.model';

const crossApplicationLinkCoder = makeSharedLink(environment.host);
const getMeetings = () => filer.contents.cm.meetings?.data as IExportableMeetings | nil;
const getCols = () => filer.contents.cm.cols?.data as IExportableCols | nil;

const eventwSelf = { eventw: CmMeetingEventWid.def };
function findEvent(this: typeof eventwSelf, event: IExportableMeetingsEvent) {
  return event.w === this.eventw;
}

const sortComs = (a: IExportableCom, b: IExportableCom) => a.w - b.w;
const comwsComs = {} as Record<CmComWid, { com: IExportableCom; number: number }>;
const setComNumbers = (com: IExportableCom, comi: number) => (comwsComs[com.w] ??= { com, number: comi + 1 });
const makeComName = (comw: CmComWid) => `${comwsComs[comw].number}. ${comwsComs[comw].com.n}`;

export const cmTgAttInform: AttTgInformStorage = {
  '[cm]:coms': (value: CmComBindAttach) => {
    if (value.comws === undefined && value.eventw === undefined) return null;
    let comws: CmComWid[] = value.comws === undefined ? [] : [...value.comws];

    if (value.eventw !== undefined) {
      eventwSelf.eventw = value.eventw;
      const event = getMeetings()?.events?.find(findEvent, eventwSelf);

      if (event !== undefined) comws = comws.concat(event.s);
    }

    let titles = '';

    if (comws.length) {
      getCols()?.coms.sort(sortComs).forEach(setComNumbers);

      titles = comws.map(makeComName).join('\n');
    }

    return `Песни:\n${titles}\n\n${crossApplicationLinkCoder.encode({
      appName: 'cm',
      key: 'selectedComws',
      value: comws,
    })}\n\n`;
  },
};