import { tglogger } from '../../../sides/telegram-bot/log/log-bot';
import { filer } from '../../filer/Filer';
import { SokiVisitor } from 'shared/api';
import { SokiServerExecs } from './50-Execs';

const getVersion = (): number | und => filer.contents.index['appVersion']?.data;

export class SokiServerVisits extends SokiServerExecs {
  lastVisit = new Date().toLocaleDateString();

  setVisit(visit: SokiVisitor) {
    const date = new Date();

    if (this.lastVisit !== date.toLocaleDateString()) {
      this.statistic.pastVisits[this.lastVisit] = this.statistic.visits.length;

      tglogger.visit(`Известных посещений за ${this.lastVisit} (${this.statistic.visits.length})`);

      this.statistic.visits = [];
      this.lastVisit = date.toLocaleDateString();
    }

    const version = `${visit.version}/${getVersion()}`;

    const visitInfo = {
      deviceId: visit.deviceId,
      fio: visit.fio,
      ...visit,
      version,
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`,
    };

    visitInfo.version = version;

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
