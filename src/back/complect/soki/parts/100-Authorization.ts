import { tglogger } from '../../../sides/telegram-bot/log/log-bot';
import { filer } from '../../filer/Filer';
import { sokiAuther } from '../SokiAuther';
import { SokiServerDoAction, SokiServerDoActionProps } from '../soki.model';
import { SokiServerTelegram } from './90-Telegram';

export class SokiServerAuthorization extends SokiServerTelegram implements SokiServerDoAction<'Authorization'> {
  async doOnAuthorization({ appName, client, eventBody, requestId }: SokiServerDoActionProps) {
    if (eventBody.authorization === undefined) return false;
    const event = eventBody.authorization;

    sokiAuther
      .authenticate(event)
      .then(value => {
        filer.trigger(event.type);
        this.send(
          {
            requestId,
            authorization: { ok: true, type: event.type, value },
            appName,
          },
          client,
        );
        tglogger.authorizations(value.nick + ' ' + value.fio);
      })
      .catch((value: string) => {
        this.send(
          {
            requestId,
            authorization: { ok: false, type: event.type, value },
            appName,
          },
          client,
        );
      });

    return false;
  }
}
