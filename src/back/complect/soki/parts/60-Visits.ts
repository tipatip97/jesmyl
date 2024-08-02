import { tglogger } from '../../../sides/telegram-bot/log/log-bot';
import { SokiServerExecs } from './50-Execs';

export class SokiServerVisits extends SokiServerExecs {
  lastVisit = new Date().toLocaleDateString();

  setVisit(visit: {
    version: number;
    fio?: string;
    nick: string;
    tgId?: number;
    deviceId?: string;
    browser?: string;
    urls: string[];
  }) {
    const date = new Date();

    if (this.lastVisit !== date.toLocaleDateString()) {
      this.statistic.pastVisits[this.lastVisit] = this.statistic.visits.length;

      tglogger.visit(`Известных посещений за ${this.lastVisit} (${this.statistic.visits.length})`);

      this.statistic.visits = [];
      this.lastVisit = date.toLocaleDateString();
    }

    const visitInfo = {
      ...visit,
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`,
    };

    this.statistic.visits.push(visitInfo);
    const getText = (sep?: string, altJson?: string) =>
      (visitInfo.fio ? `${visitInfo.fio} ` : '') +
      (visitInfo.nick && visitInfo.tgId ? `t.me/${visitInfo.nick} ` : '') +
      `\n\n${visitInfo.urls?.length ? visitInfo.urls[0] : '<s>no urls</s>'}\n\n` +
      (altJson === undefined ? `<blockquote expandable>${JSON.stringify(visitInfo, null, sep)}</blockquote>` : altJson);

    try {
      tglogger.visit(getText(' '));
    } catch (error) {
      try {
        tglogger.visit(getText());
      } catch (error) {
        tglogger.visit(getText(undefined, 'LARGE JSON'));
      }
    }
  }
}
