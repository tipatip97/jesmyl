import { Executer } from '../back/complect/executer/Executer';
import { SimpleKeyValue } from '../back/complect/filer/Filer.model';
import { SokiAppName, SokiClientEvent, SokiServerEvent } from '../back/complect/soki/soki.model';
import environment from '../back/environments/environment';
import { JStorage } from './complect/JStorage';
import modalService from './complect/modal/Modal.service';
import mylib, { MyLib } from './complect/my-lib/MyLib';
import indexStorage from './components/index/indexStorage';
import { appStorage } from './shared/jstorages';

interface ResponseWaiter {
    requestId: number,
    ok: (response: SokiServerEvent) => void,
    ko?: (errorMessage: string) => boolean | void,
}

export class SokiTrip {
    appName: SokiAppName = 'cm';
    ws?: WebSocket;
    isConnected = false;
    onConnectWatchers: Record<string, (isConnected: boolean) => void> = {};
    private onConnectSends: (() => void)[] = [];
    private responseWaiters: ResponseWaiter[] = [];

    constructor() {
        this.appName = indexStorage.getOr('currentApp', 'cm');
    }

    start() {
        const ws = this.ws = new WebSocket(`wss://${environment.dns}/websocket/`);

        ws.addEventListener('close', () => {
            this.isConnected = false;
            this._onConnect(false);
            setTimeout(() => this.start(), 1000);
        });

        ws.addEventListener('message', ({ data }: { data: string }) => {
            try {
                const event: SokiServerEvent = JSON.parse(data);
                console.info(event);

                const waiter = event.requestId && this.responseWaiters.find(({ requestId }) => event.requestId === requestId);
                if (waiter) {
                    this.responseWaiters = this.responseWaiters.filter(w => w !== waiter);

                    if (event.errorMessage) waiter.ko?.(event.errorMessage);
                    else waiter.ok(event);
                }

                if (event) {
                    const appStore = appStorage[this.appName];

                    if (event.connect !== undefined) {
                        if (event.connect) {
                            this._onConnect(true);
                            this.send({ connect: true });
                            this.pullCurrentAppData();
                            this.onConnectSends.forEach(cb => cb());
                            this.onConnectSends = [];
                        } else this.onUnauthorize();
                    }

                    if (event.system) {
                        if (event.system.name === 'reloadFiles') this.pullCurrentAppData();
                        if (event.system.name === 'restartWS') {
                            const { ok, message, error } = event.system as never;
                            modalService.alert(
                                <>
                                    {ok
                                        ? <div style={{ color: 'green' }}>Ok</div>
                                        : <div style={{ color: 'red' }}>Error</div>
                                    }
                                    <div>{message || error}</div>
                                </>
                            );
                        }
                    }

                    if (event.execs) {
                        const contents = mylib.clone(appStore.properties);
                        Executer
                            .executeReals(contents, event.execs.list)
                            .then((fixes) => {
                                appStore.refreshAreas(fixes, contents);
                                this.setLastUpdates(this.appName, event.execs?.lastUpdate, null);
                            })
                            .catch();
                    }

                    if (event.statistic) indexStorage.refreshAreas(['statistic'], event as never);
                }
            } catch (e) { }
        });

        return this;
    }

    private _onConnect(isConnected: boolean) {
        if (isConnected === this.isConnected)
            MyLib.entries(this.onConnectWatchers).forEach(([, cb]) => cb(isConnected));
        this.isConnected = isConnected;
    }

    setLastUpdates(appName: SokiAppName, appLastUpdate?: number | null, inedxLastUpdate?: number | null) {
        indexStorage.set('lastUpdates', (prev) => {
            const next = { ...prev };

            if (appLastUpdate) next[appName] = appLastUpdate;
            if (inedxLastUpdate) next.index = inedxLastUpdate;

            return next;
        });
    }

    onConnect(watcherName: string) {
        return (callback: (isConnected: boolean) => void) => {
            this.onConnectWatchers[watcherName] = callback;
            return () => delete this.onConnectWatchers[watcherName];
        }
    }

    onUnauthorize() {
        indexStorage.rem('auth');
        indexStorage.rem('lastUpdates');
    }

    setAppName(appName: SokiAppName) {
        this.appName = appName;
    }

    pullCurrentAppData() {
        const { index: indexLastUpdate, [this.appName]: appLastUpdate } = indexStorage.get('lastUpdates') || {};

        this.send({
            pull: {
                lastUpdate: appLastUpdate || 0,
                indexLastUpdate: indexLastUpdate || 0
            }
        }).on(({ pull }) => {
            if (pull) {
                const { contents, lastUpdate, indexLastUpdate, indexContents } = pull;
                const appStore = appStorage[pull.appName];

                const update = (pullContents: SimpleKeyValue<string, unknown>[], store: JStorage<unknown>) => {
                    if (!pullContents.length) return;

                    const fixes: string[] = [];
                    const contents: Record<string, unknown> = {};
                    pullContents.forEach(({ key, value }) => {
                        contents[key] = value;
                        fixes.push(key);
                    });
                    store.refreshAreas(fixes as never, contents);
                };

                update(contents, appStore);
                update(indexContents, appStorage.index);

                contents.forEach(({ key, value }) => appStore.set(key, value));
                indexContents.forEach(({ key, value }) => indexStorage.set(key as never, value as never));
                this.setLastUpdates(pull.appName, lastUpdate, indexLastUpdate);
            }
        });
    }

    onAppChange(appName: SokiAppName) {
        this.setAppName(appName);
        this.pullCurrentAppData();
    }

    send(body: SokiClientEvent['body']) {
        let requestId: number | und;

        const send = () => {
            try {
                if (this.ws) {
                    const sendEvent: SokiClientEvent = {
                        requestId,
                        body,
                        auth: indexStorage.getOr('auth', null),
                        appName: this.appName,
                    };

                    this.ws.send(JSON.stringify(sendEvent));
                }
            } catch (e) {
            }
        };

        new Promise<void>((resolve) => resolve())
            .then(() => {
                if (this.isConnected) send();
                else this.onConnectSends.push(send);
            });

        return {
            on: (ok: ResponseWaiter['ok'], ko?: ResponseWaiter['ko']) => {
                requestId = +('' + (Date.now() + Math.random()));
                this.responseWaiters.push({ requestId, ok, ko });
            },
        };
    }
}

export const soki = new SokiTrip().start();
