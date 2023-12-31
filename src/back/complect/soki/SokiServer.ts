/* eslint-disable no-throw-literal */
import { exec } from 'child_process';
import { User } from 'node-telegram-bot-api';
import WebSocket, { WebSocketServer } from 'ws';
import cmService from '../../apps/cm/service';
import { indexService } from '../../apps/index/service';
import smylib, { SMyLib } from '../../shared/SMyLib';
import { startTgGamerListener } from '../../sides/telegram-bot/gamer/tg-gamer';
import { supportTelegramAuthorizations } from '../../sides/telegram-bot/prod/authorize';
import { supportTelegramBot } from '../../sides/telegram-bot/support/support-bot';
import { sequreMD5Passphrase, sokiWhenRejButTs } from '../../values';
import { ErrorCatcher } from '../ErrorCatcher';
import { Executer } from '../executer/Executer';
import { ExecutionDict } from '../executer/Executer.model';
import { filer } from '../filer/Filer';
import { setPolyfills } from '../polyfills';
import { SokiAuther, sokiAuther } from './SokiAuther';
import {
  LocalSokiAuth,
  SokiAppName,
  SokiCapsule,
  SokiClientEvent,
  SokiServerEvent,
  SokiServicePack,
  SokiStatistic,
  SokiSubscribtionName,
  TelegramNativeAuthUserData,
} from './soki.model';
import { tglogger } from '../../sides/telegram-bot/log/log-bot';

setPolyfills();
ErrorCatcher.logAllErrors();

export class SokiServer {
  subscriptions: Map<SokiSubscribtionName, Map<WebSocket, SokiCapsule>> = new Map();
  capsules = new Map<WebSocket, SokiCapsule>();
  lastVisit = new Date().toLocaleDateString();

  statistic: SokiStatistic = {
    online: 0,
    authed: 0,
    usages: {},
    visits: [],
    pastVisits: {},
  };

  constructor() {
    filer
      .load()
      .then()
      .catch(() => {});
    filer.setWatcher((appName, key, value, mtime) => {
      this.send({
        appName,
        pull:
          appName === 'index'
            ? {
                appName,
                contents: [[{ key, value }], []],
                updates: [mtime, null, null, null],
              }
            : {
                appName,
                contents: [[], [{ key, value }]],
                updates: [null, null, mtime, null],
              },
      });
    });
  }

  setVisit(visit: { version: number; fio?: string; nick: string; tgId?: number; deviceId?: string; browser?: string }) {
    const date = new Date();

    if (this.lastVisit !== date.toLocaleDateString()) {
      this.statistic.pastVisits[this.lastVisit] = this.statistic.visits.length;
      this.statistic.visits = [];
      this.lastVisit = date.toLocaleDateString();
    }

    this.statistic.visits.push({
      ...visit,
      time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`,
    });
  }

  sendStatistic() {
    const subscribers = this.subscriptions.get('statistic');
    if (!subscribers?.size) return;

    this.statistic.authed = 0;
    this.statistic.online = 0;
    this.statistic.usages = {};

    this.capsules.forEach(capsule => {
      this.statistic.online++;
      if (capsule.auth) this.statistic.authed++;
      else return;

      if (capsule.appName) {
        if (this.statistic.usages[capsule.appName] === undefined) this.statistic.usages[capsule.appName] = [];

        if (capsule.auth.nick)
          this.statistic.usages[capsule.appName]!.push({
            ...capsule.auth,
            nick: capsule.auth.nick,
            version: capsule.version,
            deviceId: capsule.deviceId,
            time: '',
          });
      }
    });

    subscribers.forEach((_, client) => this.send({ statistic: this.statistic, appName: 'index' }, client));
  }

  onClientDisconnect(client: WebSocket) {
    const disconnecter = this.capsules.get(client);
    const isDeleted = this.capsules.delete(client);
    this.subscriptions.forEach(subs => subs.delete(client));

    this.sendStatistic();

    if (isDeleted && disconnecter) console.info(`DISCONNECTED: ${disconnecter.auth?.fio || 'Unknown'}`);
    else console.info('Disconnected Unknown client');
  }

  send(
    data: SokiServerEvent,
    client?:
      | WebSocket
      | null
      | ((
          capsule: SokiCapsule,
          client: WebSocket,
          whenRejButTs: typeof sokiWhenRejButTs,
        ) => boolean | typeof sokiWhenRejButTs),
    errorFor?: WebSocket | null,
    rejEvent?: SokiServerEvent,
  ) {
    const event = JSON.stringify(data);

    if (client instanceof WebSocket) client.send(event);
    else {
      let rejEventStr: null | string = null;

      if (errorFor != null) {
        let freeRejEventStr: null | string = null;

        const freeEvent = JSON.stringify({ ...data, errorMessage: undefined });
        if (client == null) this.capsules.forEach((_, cli) => cli.send(errorFor === cli ? event : freeEvent));
        else
          this.capsules.forEach((capsule, cli) => {
            const res = client(capsule, cli, sokiWhenRejButTs);
            if (res === sokiWhenRejButTs) {
              if (errorFor === cli)
                cli.send(rejEventStr === null ? (rejEventStr = JSON.stringify(rejEvent)) : rejEventStr);
              else
                cli.send(
                  freeRejEventStr === null
                    ? (freeRejEventStr = JSON.stringify({
                        ...rejEvent,
                        errorMessage: undefined,
                      }))
                    : freeRejEventStr,
                );
            } else if (res) cli.send(errorFor === cli ? event : freeEvent);
          });
      } else {
        if (client == null) this.capsules.forEach((_, cli) => cli.send(event));
        else
          this.capsules.forEach((capsule, cli) => {
            const res = client(capsule, cli, sokiWhenRejButTs);
            if (res === sokiWhenRejButTs)
              cli.send(rejEventStr === null ? (rejEventStr = JSON.stringify(rejEvent)) : rejEventStr);
            else if (res) cli.send(event);
          });
      }
    }
  }

  private connect(client: WebSocket) {
    this.capsules.set(client, { auth: null, deviceId: '', version: -1 });
  }

  async reloadFiles() {
    await filer.load();
    this.send({
      system: { name: 'reloadFiles', ok: true },
      appName: 'index',
    });
  }

  start() {
    new WebSocketServer({ port: 4446 }).on('connection', (client: WebSocket) => {
      this.connect(client);
      this.sendStatistic();

      client.on('message', async (data: WebSocket.RawData) => {
        const eventData: SokiClientEvent = JSON.parse('' + data);
        const requestId = eventData.requestId;
        const eventBody = eventData.body;
        const appName = eventData.appName;

        if (eventBody.ping) {
          this.send({ requestId, pong: true, appName }, client);
          return;
        }

        if (eventBody.authorization) {
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
          return;
        }

        const capsule = this.capsules.get(client);

        if (eventBody.connect || eventBody.tgNativeAuthorization || eventBody.tgAuthorization) {
          const sendErrorMessage = (errorMessage: string) => {
            this.send(
              {
                requestId,
                unregister: true,
                errorMessage,
                appName,
              },
              client,
            );
          };

          if (eventBody.tgAuthorization || eventBody.tgNativeAuthorization) {
            let user: User | TelegramNativeAuthUserData;
            let tgAva: string | null = null;
            let authTypePrefix = 'TG: ';

            if (eventBody.tgNativeAuthorization !== undefined) {
              user = eventBody.tgNativeAuthorization;
              tgAva = user.photo_url;
              authTypePrefix = 'TGI: ';
            } else {
              const authId = eventBody.tgAuthorization!;

              if (supportTelegramAuthorizations[authId] === undefined) {
                sendErrorMessage('Не верный код');
                return;
              }
              user = supportTelegramAuthorizations[authId]().from;
            }

            tglogger.authorizations(
              authTypePrefix + user.first_name + ' ' + (user.last_name || '') + ' ' + (user.username || ''),
            );

            const auth = await SokiAuther.getTgAuth(user.id, tgAva, sendErrorMessage);

            if (auth == null) return;

            this.send(
              {
                requestId,
                tgAuthorization: {
                  ok: true,
                  value: auth,
                },
                appName,
              },
              client,
            );

            return;
          }

          if (eventBody.connect) {
            if (eventData.auth) {
              if (capsule) {
                let auth: LocalSokiAuth | null;
                const passw = eventData.auth.passw;

                if (eventData.auth.tgId) {
                  const passw = SokiAuther.makePassw(eventData.auth.tgId, eventData.auth.nick);
                  if (eventData.auth.passw !== passw) {
                    sendErrorMessage('Данные авторизации устарели');
                    return;
                  }

                  auth = await SokiAuther.getTgAuth(eventData.auth.tgId, null, sendErrorMessage);
                } else {
                  const eventLogin = eventData.auth.login;
                  const secretPassw = passw && smylib.md5(passw);
                  auth =
                    (eventLogin &&
                      secretPassw &&
                      sokiAuther.authList?.find(({ login, passw }) => eventLogin === login && secretPassw === passw)) ||
                    null;
                }

                if (auth) {
                  if (auth.level < 100 && auth.nick !== undefined)
                    this.setVisit({
                      version: eventData.version,
                      fio: auth.fio,
                      nick: auth.nick,
                      tgId: auth.tgId,
                      deviceId: eventData.deviceId,
                      browser: eventData.browser,
                    });
                  capsule.auth = auth;
                  capsule.deviceId = eventData.deviceId;
                  capsule.version = eventData.version;

                  this.send({ authorized: true, appName }, client);
                  console.info(
                    `Client ${
                      auth.fio !== undefined && auth.fio !== auth.nick
                        ? `${auth.fio} (${auth.nick})`
                        : auth.nick ?? '???'
                    } connected`,
                  );

                  if (
                    auth.level !== eventData.auth.level ||
                    auth.nick !== eventData.auth.nick ||
                    auth.fio !== eventData.auth.fio
                  )
                    this.send(
                      {
                        appName: 'index',
                        pull: {
                          appName: 'index',
                          contents: [[{ key: 'auth', value: { ...auth, passw } }], []],
                          updates: [null, null, null, null],
                        },
                      },
                      client,
                    );
                } else sendErrorMessage('Некорректные данные авторизации');
              }
            } else {
              this.setVisit({
                version: eventData.version,
                deviceId: eventData.deviceId,
                browser: eventData.browser,
                nick: '',
              });
              this.send({ authorized: false, appName: eventData.appName }, client);
              console.info('Unknown client connected');
            }
            return;
          }
        }

        if (eventBody.system && smylib.md5(eventBody.system.passphrase) === sequreMD5Passphrase) {
          if (eventBody.system.name === 'reloadFiles' && (capsule?.auth?.level || 0) >= 50) {
            filer
              .load()
              .then(() =>
                this.send({
                  requestId,
                  system: { name: 'reloadFiles', ok: true },
                  appName,
                }),
              )
              .catch(() => {});
          }

          if (eventBody.system.name === 'restartWS' && (capsule?.auth?.level || 0) >= 80) {
            exec('systemctl restart jesmyl_soki', (error, stdout, stderr) => {
              if (error) {
                this.send(
                  {
                    requestId,
                    system: {
                      name: 'restartWS',
                      ok: false,
                      error: error.message,
                    },
                    appName,
                  },
                  client,
                );
                return;
              }
              if (stderr) {
                this.send(
                  {
                    requestId,
                    system: { name: 'restartWS', ok: false, error: stderr },
                    appName,
                  },
                  client,
                );
                return;
              }
              this.send(
                {
                  requestId,
                  system: { name: 'restartWS', ok: true, message: stdout },
                  appName,
                },
                client,
              );
            });
          }
        }

        if (eventBody.pullData) {
          if (eventData.appName) {
            if (capsule) capsule.appName = eventData.appName;

            this.sendStatistic();

            const pull = filer.getContents(eventData.appName, eventBody.pullData, capsule?.auth);
            if (pull.contents[0].length || pull.contents[1].length) this.send({ requestId, pull, appName }, client);
            else this.send({ requestId, appName }, client);
          }
          return;
        }

        if (eventBody.service && eventData.appName) {
          const service = eventBody.service;

          const services: SokiServicePack = {
            cm: cmService,
            index: indexService,
          };

          if (services[eventData.appName] === undefined) {
            this.send(
              {
                requestId,
                service: {
                  key: service.key,
                  errorMessage: 'У данного приложения нет сервиса',
                },
                appName,
              },
              client,
            );
          } else
            services[eventData.appName]?.(eventBody.service.key, eventBody.service.value, eventData, capsule, client)
              .then(value => {
                this.send(
                  {
                    requestId,
                    service: {
                      key: service.key,
                      value,
                    },
                    appName,
                  },
                  client,
                );
              })
              .catch(error => {
                this.send(
                  {
                    requestId,
                    service: {
                      key: service.key,
                      errorMessage: error,
                    },
                    appName,
                  },
                  client,
                );
              });
        }

        if (capsule && eventBody.subscribe) {
          if (!this.subscriptions.has(eventBody.subscribe)) this.subscriptions.set(eventBody.subscribe, new Map());
          this.subscriptions.get(eventBody.subscribe)!.set(client, capsule);
          this.sendStatistic();
        }

        if (eventBody.unsubscribe) {
          this.subscriptions.get(eventBody.unsubscribe)?.delete(client);
        }

        if (eventBody.execs) this.execExecs(appName, eventBody.execs, eventData.auth, capsule?.auth, client, requestId);
      });

      client.on('close', () => this.onClientDisconnect(client));
    });

    console.info('SokiServer started');
  }

  async execExecs(
    appName: SokiAppName,
    execs: ExecutionDict[],
    eventAuth: LocalSokiAuth | nil,
    auth: LocalSokiAuth | nil,
    client?: WebSocket,
    requestId?: string,
  ) {
    if (
      auth &&
      auth.login === eventAuth?.login &&
      (eventAuth?.tgId
        ? eventAuth.passw === SokiAuther.makePassw(eventAuth.tgId, eventAuth.nick)
        : await sokiAuther.isCorrectData(eventAuth))
    ) {
      const appConfig = filer.appConfigs[appName];

      if (!appConfig) return;

      const contents = filer.contents[appName];
      const realParents: Record<string, unknown> = {};
      SMyLib.entries(contents).forEach(([key, val]) => (realParents[key] = val.data));
      const authLogin = eventAuth?.login ?? '';
      const bag: Record<string, unknown> = {};

      return Executer.execute(appConfig, realParents, execs, auth).then(
        async ({ fixes, replacedExecs, errorMessage, rules }) => {
          const lastUpdate = await filer.saveChanges(fixes, appName!);
          this.send(
            {
              requestId,
              execs: {
                appName,
                list: replacedExecs,
                lastUpdate,
              },
              errorMessage,
              appName,
            },
            fixes[0] === 'schedules'
              ? (capsule, _, whenRejButTs) => {
                  const res =
                    capsule.auth?.login === authLogin ||
                    appConfig.requirements['schedules']?.onCantRead?.(
                      true,
                      replacedExecs[0],
                      rules[0],
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
              errorMessage,
              appName,
            },
          );
        },
      );
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

      throw 'Не авторизован';
    }
  }
}

const sokiServer = new SokiServer();

supportTelegramBot.getAdmins().finally(() => sokiServer.start());

export default sokiServer;

startTgGamerListener();
