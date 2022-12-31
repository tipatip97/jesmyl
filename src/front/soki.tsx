import { Executer } from '../back/complect/executer/Executer';
import { SMyLib } from '../back/complect/soki/complect/SMyLib';
import { SokiAppName, SokiClientEvent, SokiEventName, SokiServerEvent } from '../back/complect/soki/Soki.model';
import environment from '../back/environments/environment';
import modalService from './complect/modal/Modal.service';
import mylib, { MyLib } from './complect/my-lib/MyLib';
import { appStorage, indexStorage } from './shared/jstorages';

export class SokiTrip {
    appName: SokiAppName = 'cm';
    ws?: WebSocket;
    isClosed = false;
    watches: ({ name: SokiEventName, cb: <Name extends SokiEventName>(event: SokiServerEvent[Name], name: Name) => void, err?: (event: any) => void })[] = [];
    onConnectWatchers: Record<string, (isConnected: boolean) => void> = {};

    constructor() {
        this.appName = indexStorage.getOr('currentApp', 'cm');
    }

    start() {
        this.isClosed = false;
        const ws = this.ws = new WebSocket(`wss://${environment.dns}/websocket/`);

        ws.addEventListener('close', () => {
            this.isClosed = true;
            this._onConnect(false);
            setTimeout(() => this.start(), 1000);
        });

        ws.addEventListener('message', ({ data }: { data: string }) => {
            try {
                const event: SokiServerEvent = JSON.parse(data);
                console.info(event);

                if (event.errorMessage) {
                    modalService.open({
                        title: 'Ошибка',
                        description: <pre>{event.errorMessage}</pre>
                    });
                }

                if (event) {
                    SMyLib.entries(event as Record<string, SokiServerEvent['authorization']>)
                        .forEach(([eventName, event]) => {
                            this.watches.forEach(({ name, cb, err }) => name === eventName && event && (event.ok !== false ? cb(event, name) : err?.(event)));
                        });
                    const appStore = appStorage[this.appName];

                    if (event.connect) {
                        this._onConnect(true);
                        this.send({ connect: true });
                        this.pullCurrentAppData();
                    }

                    if (event.systemTrigger?.name === 'reloadFiles') this.pullCurrentAppData();
                    if (event.systemTrigger?.name === 'restartWS') {
                        const { ok, message, error } = event.systemTrigger as any;
                        modalService.alert(
                            <>
                                <div style={{ color: ok ? 'green' : 'red' }}>{ok ? 'Ok' : 'Error'}</div>
                                <div>{message || error}</div>
                            </>
                        );
                    }

                    if (event.execs) {
                        const contents = mylib.clone(appStore.properties);
                        Executer
                            .executeReals(contents, event.execs.list)
                            .then((fixes) => {
                                appStore.refreshAreas(fixes, contents);
                                if (event.execs?.lastUpdate) appStore.set('lastUpdate', event.execs.lastUpdate);
                            })
                            .catch();
                    }
                }
            } catch (e) { }
        });

        return this;
    }

    private _onConnect(isConnected: boolean) {
        if (isConnected !== this.isClosed)
            MyLib.entries(this.onConnectWatchers).forEach(([, cb]) => cb(isConnected));
    }

    onConnect(watcherName: string) {
        return (callback: (isConnected: boolean) => void) => {
            this.onConnectWatchers[watcherName] = callback;
            return () => delete this.onConnectWatchers[watcherName];
        }
    }

    watch<Name extends SokiEventName>(topName: Name) {
        return (callback: (resp: SokiServerEvent[Name]) => void, err?: (event: SokiServerEvent[Name]) => void) => {
            this.watches.push({
                name: topName,
                cb: callback as never,
                err
            });

            return () => {
                this.watches = this.watches.filter(({ name, cb }) => topName === name || cb !== callback);
            };
        };
    }

    setAppName(appName: SokiAppName) {
        this.appName = appName;
    }

    pullCurrentAppData() {
        const currentAppName = this.appName;
        const appStore = appStorage[currentAppName];

        this.send({
            pull: {
                lastUpdate: appStore?.get('lastUpdate') || 0,
                indexLastUpdate: indexStorage.get('lastUpdate') || 0
            }
        });
        this.watch('pull')((pull) => {
            if (pull) {
                if (pull.appName !== currentAppName) return;
                const { contents, lastUpdate, indexLastUpdate, indexContents } = pull;

                contents.forEach(({ key, value }) => appStore.set(key, value));
                indexContents.forEach(({ key, value }) => indexStorage.set(key as never, value as never));
                if (lastUpdate) appStore.set('lastUpdate', lastUpdate);
                if (indexLastUpdate) indexStorage.set('lastUpdate', indexLastUpdate);
            }
        });
    }

    onAppChange(appName: SokiAppName) {
        this.setAppName(appName);
        this.pullCurrentAppData();
    }

    send(body: SokiClientEvent['body']) {
        return new Promise<void>((res, rej) => {
            if (this.isClosed) {
                setTimeout(() => this.send(body), 1000);
            } else {
                try {
                    if (this.ws) {
                        const sendEvent = {
                            body,
                            auth: indexStorage.getOr('auth', null),
                            appName: this.appName,
                        };

                        this.ws.send(JSON.stringify(sendEvent));
                    }
                    res();
                } catch (e) {
                    rej('ERROR');
                }
            }
        }).catch((error) => {
            console.info(error);
            return error;
        });
    }
}

export const soki = new SokiTrip().start();