import { exec } from 'child_process';
import WebSocket, { WebSocketServer } from 'ws';
import { ErrorCatcher } from '../ErrorCatcher';
import { Executer } from '../executer/Executer';
import { filer } from '../filer/Filer';
import { setPolyfills } from '../polyfills';
import { SMyLib } from './complect/SMyLib';
import { sokiAuther } from './complect/SokiAuther';
import { SokiCapsule, SokiClientEvent, SokiServerEvent } from './Soki.model';

setPolyfills();
ErrorCatcher.logAllErrors();

filer.load().then().catch(() => { });

const capsules = new Map<WebSocket, SokiCapsule>();
const send = (data: SokiServerEvent, client?: WebSocket | null, errorFor?: WebSocket | null) => {
    const event = JSON.stringify(data);

    if (client) client.send(event);
    else {
        const freeEvent = errorFor ? JSON.stringify({ ...data, errorMessage: null }) : '';
        if (errorFor)
            capsules.forEach((_, client) => client.send(errorFor === client ? event : freeEvent));
        else capsules.forEach((_, client) => client.send(event));
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

        client.on('message', (data: WebSocket.RawData) => {
            const eventData: SokiClientEvent = JSON.parse('' + data);
            const eventBody = eventData.body;

            if (eventBody.authorization) {
                const event = eventBody.authorization;

                sokiAuther
                    .authenticate(event)
                    .then((auth) => {
                        send({
                            authorization: { ok: true, type: event.type, value: auth },
                        }, client);
                    })
                    .catch((error: string) => {
                        send({
                            authorization: { ok: false, type: event.type, value: error },
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
                            const eventPassw = eventData.auth?.passw;
                            const auth = eventLogin && auths.find(({ login, passw }) => eventLogin === login && eventPassw === passw);
                            if (auth) {
                                capsule.auth = auth;
                                console.info(`Client ${auth.fio ?? '???'} connected`);
                            }
                        });
                    }
                } else console.info('Unknown client connected');
                return;
            }

            if (eventBody.systemTrigger === 'reloadFiles' && (capsule?.auth?.level || 0) >= 50) {
                filer.load().then(() => send({ systemTrigger: { name: 'reloadFiles', ok: true } })).catch(() => { });
            }

            if (eventBody.systemTrigger === 'restartWS' && (capsule?.auth?.level || 0) >= 80) {
                exec("systemctl restart jesmyl_soki", (error, stdout, stderr) => {
                    if (error) {
                        send({ systemTrigger: { name: 'restartWS', ok: false, error: error.message } }, client);
                        return;
                    }
                    if (stderr) {
                        send({ systemTrigger: { name: 'restartWS', ok: false, error: stderr } }, client);
                        return;
                    }
                    send({ systemTrigger: { name: 'restartWS', ok: true, message: stdout } }, client);
                });
            }

            if (eventBody.pull) {
                if (eventData.appName) {
                    const pull = filer.getContents(eventData.appName, eventBody.pull.lastUpdate, eventBody.pull.indexLastUpdate, capsule?.auth);
                    if (pull.contents.length || pull.indexContents.length)
                        send({ pull }, client);
                }
                return;
            }

            const isCapsuleAuth = eventData.auth && capsule?.auth && (eventData.auth.login === capsule.auth.login)

            if (isCapsuleAuth && eventBody.execs && capsule?.auth) {
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
                            errorMessage
                        }, null, client);
                    });
                return;
            }

        });

        client.on('close', () => disconnect(client));
    });

console.info('SokiServer started');
