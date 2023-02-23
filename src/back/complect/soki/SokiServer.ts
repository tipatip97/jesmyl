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

filer.load().then().catch(() => { });

const subscriptions: Map<SokiSubscribtionName, Map<WebSocket, SokiCapsule>> = new Map();

export const statistic: SokiStatistic = {
    online: 0,
    authed: 0,
    usages: {},
};

const capsules = new Map<WebSocket, SokiCapsule>();
const send = (data: SokiServerEvent, client?: WebSocket | null | ((capsule: SokiCapsule, client: WebSocket) => boolean), errorFor?: WebSocket | null) => {
    const event = JSON.stringify(data);

    if (client instanceof WebSocket) client.send(event);
    else {
        if (errorFor) {
            const freeEvent = JSON.stringify({ ...data, errorMessage: null });
            if (client == null) capsules.forEach((_, cli) => cli.send(errorFor === cli ? event : freeEvent));
            else capsules.forEach((capsule, cli) => client(capsule, cli) && cli.send(errorFor === cli ? event : freeEvent));
        } else {
            if (client == null) capsules.forEach((_, cli) => cli.send(event));
            else capsules.forEach((capsule, cli) => client(capsule, cli) && cli.send(event));
        }
    }
};

const sendStatistic = () => {
    const subscribers = subscriptions.get('statistic');
    if (!subscribers?.size) return;

    statistic.authed = 0;
    statistic.online = 0;
    statistic.usages = {};

    capsules.forEach((capsule) => {
        statistic.online++;
        if (capsule.auth) statistic.authed++;
        if (capsule.appName) {
            if (statistic.usages[capsule.appName] === undefined) statistic.usages[capsule.appName] = [];
            statistic.usages[capsule.appName]!.push(capsule.auth?.fio || null);
        }
    });

    subscribers.forEach((_, client) => send({ statistic, requestId: 0, }, client));
};

const connect = (client: WebSocket) => {
    capsules.set(client, { auth: null });
    send({ connect: true, requestId: 0, }, client);
};

const disconnect = (client: WebSocket) => {
    const disconnecter = capsules.get(client);
    const isDeleted = capsules.delete(client);
    subscriptions.forEach((subs) => subs.delete(client));

    sendStatistic();

    if (isDeleted && disconnecter)
        console.info(`DISCONNECTED: ${disconnecter.auth?.fio || 'Unknown'}`);
    else console.info('Disconnected Unknown client');
};


filer.setWatcher((appName, name, data) => {
    send({
        pull: {
            appName,
            contents: appName === 'index' ? [] : [{ key: name, value: data }],
            indexContents: appName !== 'index' ? [] : [{ key: name, value: data }],
            lastUpdate: 0,
            indexLastUpdate: 0,
        },
        requestId: 0,
    });
});

new WebSocketServer({
    port: 4446,
})
    .on('connection', (client: WebSocket) => {
        connect(client);
        sendStatistic();

        client.on('message', async (data: WebSocket.RawData) => {
            const eventData: SokiClientEvent = JSON.parse('' + data);
            const requestId = eventData.requestId || 0;
            const eventBody = eventData.body;

            if (eventBody.authorization) {
                const event = eventBody.authorization;

                sokiAuther
                    .authenticate(event)
                    .then((value) => {
                        send({
                            requestId,
                            authorization: { ok: true, type: event.type, value },
                        }, client);
                    })
                    .catch((value: string) => {
                        send({
                            requestId,
                            authorization: { ok: false, type: event.type, value },
                        }, client);
                    });
                return;
            }

            const capsule = capsules.get(client);

            if (eventBody.connect) {
                if (eventData.auth) {
                    if (capsule) {
                        sokiAuther.onReady((auths) => {
                            const eventLogin = eventData.auth?.login;
                            const eventPassw = eventData.auth?.passw ? smylib.md5(eventData.auth.passw) : NaN;
                            const auth = eventLogin && auths.find(({ login, passw }) => eventLogin === login && eventPassw === passw);
                            if (auth) {
                                capsule.auth = auth;
                                console.info(`Client ${auth.fio ?? '???'} connected`);
                            } else send({
                                requestId,
                                connect: false,
                                errorMessage: 'Некорректные данные авторизации'
                            }, client);
                        });
                    }
                } else console.info('Unknown client connected');
                return;
            }

            if (eventBody.system && smylib.md5(eventBody.system.passphrase) === sequreMD5Passphrase) {
                if (eventBody.system.name === 'reloadFiles' && (capsule?.auth?.level || 0) >= 50) {
                    filer.load().then(() => send({
                        requestId,
                        system: { name: 'reloadFiles', ok: true },
                    })).catch(() => { });
                }

                if (eventBody.system.name === 'restartWS' && (capsule?.auth?.level || 0) >= 80) {
                    exec("systemctl restart jesmyl_soki", (error, stdout, stderr) => {
                        if (error) {
                            send({
                                requestId,
                                system: { name: 'restartWS', ok: false, error: error.message }
                            }, client);
                            return;
                        }
                        if (stderr) {
                            send({
                                requestId,
                                system: { name: 'restartWS', ok: false, error: stderr }
                            }, client);
                            return;
                        }
                        send({
                            requestId,
                            system: { name: 'restartWS', ok: true, message: stdout }
                        }, client);
                    });
                }
            }

            if (eventBody.pull) {
                if (eventData.appName) {
                    if (capsule) capsule.appName = eventData.appName;

                    sendStatistic();

                    const pull = filer.getContents(eventData.appName, eventBody.pull.lastUpdate, eventBody.pull.indexLastUpdate, capsule?.auth);
                    if (pull.contents.length || pull.indexContents.length)
                        send({ requestId, pull }, client);
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
                        send({
                            requestId,
                            service: {
                                key: service.key,
                                value,
                            }
                        }, client);
                    }).catch((error) => {
                        send({
                            requestId,
                            service: {
                                key: service.key,
                                errorMessage: error,
                            }
                        }, client);
                    });
            }

            if (capsule && eventBody.subscribe) {
                if (!subscriptions.has(eventBody.subscribe)) subscriptions.set(eventBody.subscribe, new Map());
                subscriptions.get(eventBody.subscribe)!.set(client, capsule);
                sendStatistic();
            }

            if (eventBody.unsubscribe) {
                subscriptions.get(eventBody.unsubscribe)?.delete(client);
            }

            if (eventBody.execs) {
                if (await sokiAuther.isCorrectData(eventData.auth) && capsule?.auth && capsule?.auth.login === eventData.auth?.login) {
                    const contents = filer.contents[eventData.appName];
                    const realParents: Record<string, unknown> = {};
                    SMyLib.entries(contents).forEach(([key, val]) => realParents[key] = val.data);

                    Executer
                        .execute(contents.actions?.data || [], realParents, eventBody.execs, capsule.auth)
                        .then(async ({ fixes, replacedExecs, errorMessage }) => {
                            const lastUpdate = await filer.saveChanges(fixes, eventData.appName);
                            return { replacedExecs, lastUpdate, errorMessage };
                        })
                        .then(({ replacedExecs: list, lastUpdate, errorMessage }) => {
                            send({
                                requestId,
                                execs: { list, lastUpdate },
                                errorMessage,
                            }, (capsule) => capsule.appName === eventData.appName, client);
                        });
                    return;
                } else send({
                    requestId,
                    execs: { list: [], lastUpdate: null },
                    errorMessage: 'Не авторизован'
                }, null, client);
            }

        });

        client.on('close', () => disconnect(client));
    });

console.info('SokiServer started');
