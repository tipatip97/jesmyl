import { tglogger } from '../../../sides/telegram-bot/log/log-bot';
import { SokiServerExecs } from './50-Execs';

export class SokiServerVisits extends SokiServerExecs {
  lastVisit = new Date().toLocaleDateString();

  setVisit(visit: { version: number; fio?: string; nick: string; tgId?: number; deviceId?: string; browser?: string }) {
    const date = new Date();

    if (this.lastVisit !== date.toLocaleDateString()) {
      this.statistic.pastVisits[this.lastVisit] = this.statistic.visits.length;

      tglogger.log(
        `Посещения за ${this.lastVisit}` +
          ` (${this.statistic.visits.length})\n\n<blockquote expandable>` +
          this.statistic.visits
            .map(
              visit =>
                `<b>${visit.fio ?? '???'}</b>` +
                (visit.tgId ? ` @${visit.nick || '-'}` : '') +
                ` ${visit.version}` +
                ` ${visit.deviceId}` +
                ` ${visit.time}`,
            )
            .join('\n') +
          `</blockquote>`,
      );

      this.statistic.visits = [];
      this.lastVisit = date.toLocaleDateString();
    }

    this.statistic.visits.push({
      ...visit,
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`,
    });
  }
}
