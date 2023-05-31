import { exec } from 'child_process';
import WebSocket, { WebSocketServer } from 'ws';
import cmService from '../../apps/cm/service';
import { sequreMD5Passphrase } from '../../values';
import { ErrorCatcher } from '../ErrorCatcher';
import { Executer } from '../executer/Executer';
import { filer } from '../filer/Filer';
import { setPolyfills } from '../polyfills';
import smylib, { SMyLib } from './complect/SMyLib';
import { sokiAuther } from './complect/SokiAuther';
import { SokiCapsule, SokiClientEvent, SokiServerEvent, SokiServicePack, SokiStatistic, SokiSubscribtionName } from './soki.model';

setPolyfills();
ErrorCatcher.logAllErrors();



class SokiServer {
    subscriptions: Map<SokiSubscribtionName, Map<WebSocket, SokiCapsule>> = new Map();
    capsules = new Map<WebSocket, SokiCapsule>();

    statistic: SokiStatistic = {
        online: 0,
        authed: 0,
        usages: {},
    };

    constructor() {
        filer.load().then().catch(() => { });
        filer.setWatcher((appName, key, value, mtime) => {
            this.send({
                pull: appName === 'index'
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

    sendStatistic() {
        const subscribers = this.subscriptions.get('statistic');
        if (!subscribers?.size) return;

        this.statistic.authed = 0;
        this.statistic.online = 0;
        this.statistic.usages = {};

        sokiServer.capsules.forEach((capsule) => {
            this.statistic.online++;
            if (capsule.auth) this.statistic.authed++;
            if (capsule.appName) {
                if (this.statistic.usages[capsule.appName] === undefined) this.statistic.usages[capsule.appName] = [];
                this.statistic.usages[capsule.appName]!.push(capsule.auth?.fio || null);
            }
        });

        subscribers.forEach((_, client) => this.send({ statistic: this.statistic }, client));
    }

    onClientDisconnect(client: WebSocket) {
        const disconnecter = this.capsules.get(client);
        const isDeleted = this.capsules.delete(client);
        this.subscriptions.forEach((subs) => subs.delete(client));

        this.sendStatistic();

        if (isDeleted && disconnecter)
            console.info(`DISCONNECTED: ${disconnecter.auth?.fio || 'Unknown'}`);
        else console.info('Disconnected Unknown client');
    }

    send(data: SokiServerEvent, client?: WebSocket | null | ((capsule: SokiCapsule, client: WebSocket) => boolean), errorFor?: WebSocket | null) {
        const event = JSON.stringify(data);

        if (client instanceof WebSocket) client.send(event);
        else {
            if (errorFor) {
                const freeEvent = JSON.stringify({ ...data, errorMessage: null });
                if (client == null) this.capsules.forEach((_, cli) => cli.send(errorFor === cli ? event : freeEvent));
                else this.capsules.forEach((capsule, cli) => client(capsule, cli) && cli.send(errorFor === cli ? event : freeEvent));
            } else {
                if (client == null) this.capsules.forEach((_, cli) => cli.send(event));
                else this.capsules.forEach((capsule, cli) => client(capsule, cli) && cli.send(event));
            }
        }
    };

    private connect(client: WebSocket) {
        this.capsules.set(client, { auth: null });
        this.send({ connect: true }, client);
    }

    start() {
        new WebSocketServer({ port: 4446 })
            .on('connection', (client: WebSocket) => {
                this.connect(client);
                this.sendStatistic();

                client.on('message', async (data: WebSocket.RawData) => {
                    const eventData: SokiClientEvent = JSON.parse('' + data);
                    const requestId = eventData.requestId;
                    const eventBody = eventData.body;

                    if (eventBody.authorization) {
                        const event = eventBody.authorization;

                        sokiAuther
                            .authenticate(event)
                            .then((value) => {
                                filer.trigger(event.type);
                                this.send({
                                    requestId,
                                    authorization: { ok: true, type: event.type, value },
                                }, client);
                            })
                            .catch((value: string) => {
                                this.send({
                                    requestId,
                                    authorization: { ok: false, type: event.type, value },
                                }, client);
                            });
                        return;
                    }

                    const capsule = this.capsules.get(client);

                    if (eventBody.connect) {
                        if (eventData.auth) {
                            if (capsule) {
                                const eventLogin = eventData.auth.login;
                                const passw = eventData.auth.passw;
                                const secretPassw = passw && smylib.md5(passw);
                                const auth = eventLogin && secretPassw && sokiAuther.authList?.find(({ login, passw }) => eventLogin === login && secretPassw === passw);
                                if (auth) {
                                    capsule.auth = auth;
                                    console.info(`Client ${auth.fio ?? '???'} connected`);
                                    if (auth.level !== eventData.auth.level)
                                        this.send({
                                            pull: {
                                                appName: 'index',
                                                contents: [[{ key: 'auth', value: { ...auth, passw } }], []],
                                                updates: [null, null, null, null]
                                            }
                                        }, client);
                                } else this.send({
                                    requestId,
                                    connect: false,
                                    errorMessage: 'Некорректные данные авторизации'
                                }, client);
                            }
                        } else console.info('Unknown client connected');
                        return;
                    }

                    if (eventBody.system && smylib.md5(eventBody.system.passphrase) === sequreMD5Passphrase) {
                        if (eventBody.system.name === 'reloadFiles' && (capsule?.auth?.level || 0) >= 50) {
                            filer.load().then(() => this.send({
                                requestId,
                                system: { name: 'reloadFiles', ok: true },
                            })).catch(() => { });
                        }

                        if (eventBody.system.name === 'restartWS' && (capsule?.auth?.level || 0) >= 80) {
                            exec("systemctl restart jesmyl_soki", (error, stdout, stderr) => {
                                if (error) {
                                    this.send({
                                        requestId,
                                        system: { name: 'restartWS', ok: false, error: error.message }
                                    }, client);
                                    return;
                                }
                                if (stderr) {
                                    this.send({
                                        requestId,
                                        system: { name: 'restartWS', ok: false, error: stderr }
                                    }, client);
                                    return;
                                }
                                this.send({
                                    requestId,
                                    system: { name: 'restartWS', ok: true, message: stdout }
                                }, client);
                            });
                        }
                    }

                    if (eventBody.pullData) {
                        if (eventData.appName) {
                            if (capsule) capsule.appName = eventData.appName;

                            this.sendStatistic();

                            const pull = filer.getContents(eventData.appName, eventBody.pullData, capsule?.auth);
                            if (pull.contents[0].length || pull.contents[1].length)
                                this.send({ requestId, pull }, client);
                        }
                        return;
                    }

                    if (eventBody.service) {
                        const service = eventBody.service;

                        const services: SokiServicePack = {
                            cm: cmService,
                        };

                        services[eventData.appName]?.(eventBody.service.key, eventBody.service.value)
                            .then((value) => {
                                this.send({
                                    requestId,
                                    service: {
                                        key: service.key,
                                        value,
                                    }
                                }, client);
                            }).catch((error) => {
                                this.send({
                                    requestId,
                                    service: {
                                        key: service.key,
                                        errorMessage: error,
                                    }
                                }, client);
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

                    if (eventBody.execs) {
                        if (await sokiAuther.isCorrectData(eventData.auth) && capsule?.auth && capsule?.auth.login === eventData.auth?.login) {
                            const appConfig = filer.appConfigs[eventData.appName];

                            if (!appConfig) return;

                            const contents = filer.contents[eventData.appName];
                            const realParents: Record<string, unknown> = {};
                            SMyLib.entries(contents).forEach(([key, val]) => realParents[key] = val.data);

                            Executer
                                .execute(appConfig.actions.rules, realParents, eventBody.execs, capsule.auth)
                                .then(async ({ fixes, replacedExecs, errorMessage }) => {
                                    const lastUpdate = await filer.saveChanges(fixes, eventData.appName);
                                    this.send({
                                        requestId,
                                        execs: {
                                            appName: eventData.appName,
                                            list: replacedExecs,
                                            lastUpdate,
                                        },
                                        errorMessage,
                                    }, eventData.appName === 'index'
                                        ? () => true
                                        : (capsule) => capsule.appName === eventData.appName, client);
                                });
                            return;
                        } else this.send({
                            requestId,
                            execs: {
                                appName: eventData.appName,
                                list: [],
                                lastUpdate: null,
                            },
                            errorMessage: 'Не авторизован'
                        }, null, client);
                    }

                });

                client.on('close', () => this.onClientDisconnect(client));
            });

        console.info('SokiServer started');
    }
}

const sokiServer = new SokiServer();
sokiServer.start();

export default sokiServer;
