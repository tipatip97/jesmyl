import { WebSocket } from 'ws';
import smylib, { SMyLib } from '../../../shared/SMyLib';
import { jesmylChangesBot } from '../../../sides/telegram-bot/jesmylChangesBot';
import { Executer } from '../../executer/Executer';
import { ExecuteFeedbacks, ExecutionDict } from '../../executer/Executer.model';
import { filer } from '../../filer/Filer';
import { SokiAuther, sokiAuther } from '../SokiAuther';
import { LocalSokiAuth, SokiAppName, SokiServerDoAction, SokiServerDoActionProps } from '../soki.model';
import { SokiServerFiles } from './40-Files';

export class SokiServerExecs extends SokiServerFiles implements SokiServerDoAction<'Execs'> {
  async execExecs(
    appName: SokiAppName,
    execs: ExecutionDict[],
    eventAuth: LocalSokiAuth | nil,
    auth: LocalSokiAuth | nil,
    client?: WebSocket,
    requestId?: string,
  ): Promise<ExecuteFeedbacks> {
    if (
      auth &&
      auth.login === eventAuth?.login &&
      (eventAuth?.tgId
        ? eventAuth.passw === SokiAuther.makePassw(eventAuth.tgId, eventAuth.nick)
        : await sokiAuther.isCorrectData(eventAuth))
    ) {
      const appConfig = filer.appConfigs[appName];

      if (!appConfig) return { errorMessage: 'Неизвестное приложение', fixes: [], replacedExecs: [], rules: [] };

      const contents = filer.contents[appName];
      const realParents: Record<string, unknown> = {};
      SMyLib.entries(contents).forEach(([key, val]) => (realParents[key] = val.data));
      const authLogin = eventAuth?.login ?? '';
      const bag: Record<string, unknown> = {};

      return await Executer.execute(appConfig, realParents, execs, auth).then(async props => {
        const lastUpdate = await filer.saveChanges(props.fixes, appName!);
        this.send(
          {
            requestId,
            execs: {
              appName,
              list: props.replacedExecs,
              lastUpdate,
            },
            errorMessage: props.errorMessage,
            appName,
          },
          props.fixes[0] === 'schedules'
            ? (capsule, _, whenRejButTs) => {
                const res =
                  capsule.auth?.login === authLogin ||
                  appConfig.requirements['schedules']?.onCantRead?.(
                    true,
                    props.replacedExecs[0],
                    props.rules[0],
                    capsule.auth,
                    bag,
                    realParents.schedules,
                    whenRejButTs,
                  );

                return res === whenRejButTs ? whenRejButTs : res === true || res == null;
              }
            : appName === 'index'
              ? () => true
              : capsule => capsule.appName === appName,
          client,
          {
            requestId,
            execs: {
              appName,
              list: [],
              lastUpdate,
            },
            errorMessage: props.errorMessage,
            appName,
          },
        );

        return props;
      });
    } else {
      if (client)
        this.send(
          {
            requestId,
            execs: {
              appName,
              list: [],
              lastUpdate: null,
            },
            errorMessage: 'Не авторизован',
            appName,
          },
          null,
          client,
        );

      throw Error('Не авторизован');
    }
  }

  async doOnExecs({ appName, capsule, client, eventBody, eventData, requestId }: SokiServerDoActionProps) {
    if (eventBody.execs === undefined) return false;

    this.execExecs(appName, eventBody.execs, eventData.auth, capsule?.auth, client, requestId).then(result => {
      if (result === undefined || appName !== 'cm') return;

      if (result.errorMessage !== undefined) jesmylChangesBot.postMessage(result.errorMessage);
      else {
        jesmylChangesBot.postMessage(
          `<b>${eventData.auth?.fio ?? 'Нет имени'}` +
            (eventData.auth?.nick ? ` @${eventData.auth.nick}` : '') +
            `</b>:\n\n${appName}:\n${result.replacedExecs.map(this.extractTitle).join('\n\n')}` +
            `\n\n\nJSON изменений:\n<blockquote expandable>` +
            JSON.stringify(result.replacedExecs, null, ' ') +
            `</blockquote>\n\nАвтор:\n<blockquote expandable>` +
            (eventData.auth ? JSON.stringify(eventData.auth, null, ' ') : 'Не авторизоан') +
            `</blockquote>`,
          { disable_notification: true },
        );
      }
    });

    return false;
  }

  private extractTitle = (exec: {
    title?: string | ((exec: Record<string, unknown>) => string);
    shortTitle?: string;
    args?: Record<string, unknown>;
  }) => (smylib.execIfFunc(exec.title, exec.args) || exec.shortTitle) ?? '';
}
