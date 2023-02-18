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
import { SokiCapsule, SokiClientEvent, SokiServerEvent, SokiServicePack } from './soki.model';

setPolyfills();
ErrorCatcher.logAllErrors();

filer.load().then().catch(() => { });

const capsules = new Map<WebSocket, SokiCapsule>();
const send = (data: SokiServerEvent, client?: WebSocket | null | ((capsule: SokiCapsule, client: WebSocket) => boolean), errorFor?: WebSocket | null) => {
    const event = JSON.stringify(data);

    if (client instanceof WebSocket) client.send(event);
    else {
        const freeEvent = errorFor ? JSON.stringify({ ...data, errorMessage: null }) : '';
        if (errorFor) {
            if (client == null) capsules.forEach((_, cli) => cli.send(errorFor === cli ? event : freeEvent));
            else capsules.forEach((capsule, cli) => client(capsule, cli) && cli.send(errorFor === cli ? event : freeEvent));
        } else {
            if (client == null) capsules.forEach((_, cli) => cli.send(event));
            else capsules.forEach((capsule, cli) => client(capsule, cli) && cli.send(event));
        }
    }
};

const connect = (client: WebSocket) => {
    capsules.set(client, { auth: null });
    send({ connect: true }, client);
};

const disconnect = (client: WebSocket) => {
    const disconnecter = capsules.get(client);
    const isDeleted = capsules.delete(client);

    if (isDeleted && disconnecter)
        console.info(`DISCONNECTED: ${disconnecter.auth?.fio || 'Unknown'}`);
    else console.info('Disconnected Unknown client');
};


new WebSocketServer({
    port: 4446,
})
    .on('connection', (client: WebSocket) => {
        connect(client);
        filer.setWatcher((appName, name, data) => {
            send({
                pull: {
                    appName,
                    contents: appName === 'index' ? [] : [{ key: name, value: data }],
                    indexContents: appName !== 'index' ? [] : [{ key: name, value: data }],
                    lastUpdate: 0,
                    indexLastUpdate: 0,
                    isNeedRefresh: true,
                }
            });
        });

        client.on('message', async (data: WebSocket.RawData) => {
            const eventData: SokiClientEvent = JSON.parse('' + data);
            const eventBody = eventData.body;

            if (eventBody.authorization) {
                const event = eventBody.authorization;

                sokiAuther
                    .authenticate(event)
                    .then((value) => {
                        send({
                            authorization: { ok: true, type: event.type, value },
                        }, client);
                    })
                    .catch((value: string) => {
                        send({
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
                            } else send({ connect: false, errorMessage: 'Некорректные данные авторизации' }, client);
                        });
                    }
                } else console.info('Unknown client connected');
                return;
            }

            if (eventBody.system && smylib.md5(eventBody.system.passphrase) === sequreMD5Passphrase) {
                if (eventBody.system.name === 'reloadFiles' && (capsule?.auth?.level || 0) >= 50) {
                    filer.load().then(() => send({ system: { name: 'reloadFiles', ok: true } })).catch(() => { });
                }

                if (eventBody.system.name === 'restartWS' && (capsule?.auth?.level || 0) >= 80) {
                    exec("systemctl restart jesmyl_soki", (error, stdout, stderr) => {
                        if (error) {
                            send({ system: { name: 'restartWS', ok: false, error: error.message } }, client);
                            return;
                        }
                        if (stderr) {
                            send({ system: { name: 'restartWS', ok: false, error: stderr } }, client);
                            return;
                        }
                        send({ system: { name: 'restartWS', ok: true, message: stdout } }, client);
                    });
                }
            }

            if (eventBody.pull) {
                if (eventData.appName) {
                    if (capsule) capsule.appName = eventData.appName;

                    const pull = filer.getContents(eventData.appName, eventBody.pull.lastUpdate, eventBody.pull.indexLastUpdate, capsule?.auth);
                    if (pull.contents.length || pull.indexContents.length)
                        send({ pull }, client);
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
                            service: {
                                requestId: service.requestId,
                                key: service.key,
                                value,
                            }
                        }, client);
                    }).catch((error) => {
                        send({
                            service: {
                                requestId: service.requestId,
                                key: service.key,
                                errorMessage: error,
                            }
                        }, client);
                    });
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
                                execs: { list, lastUpdate },
                                errorMessage,
                            }, (capsule) => capsule.appName === eventData.appName, client);
                        });
                    return;
                } else send({
                    execs: { list: [], lastUpdate: null },
                    errorMessage: 'Не авторизован'
                }, null, client);
            }

        });

        client.on('close', () => disconnect(client));
    });

console.info('SokiServer started');
