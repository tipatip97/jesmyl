import { Executer } from '../back/complect/executer/Executer';
import { SimpleKeyValue } from '../back/complect/filer/Filer.model';
import { PullEventValue, SokiAppName, SokiClientEvent, SokiClientUpdateCortage, SokiServerEvent } from '../back/complect/soki/soki.model';
import environment from '../back/environments/environment';
import { JStorage } from './complect/JStorage';
import Eventer from './complect/eventer/Eventer';
import modalService from './complect/modal/Modal.service';
import mylib from './complect/my-lib/MyLib';
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
    onConnectWatchers: Record<'is', ((isConnected: boolean) => void)[]> = { is: [] };
    private onConnectSends: (() => void)[] = [];
    private responseWaiters: ResponseWaiter[] = [];

    constructor() {
        this.appName = indexStorage.getOr('currentApp', 'cm');
    }

    onClose = () => {
        Eventer.invoke(this.onConnectWatchers, 'is', false);
        this.isConnected = false;
        setTimeout(() => this.start(), 1000);
    };

    start() {
        const ws = this.ws = new WebSocket(`wss://${environment.dns}/websocket/`);

        ws.addEventListener('close', this.onClose);

        ws.addEventListener('message', ({ data }: { data: string }) => {
            try {
                const event: SokiServerEvent = JSON.parse(data);
                console.info(event);

                const waiter = event.requestId && this.responseWaiters.find(({ requestId }) => event.requestId === requestId);
                if (waiter) {
                    this.responseWaiters = this.responseWaiters.filter(w => w !== waiter);

                    if (event.errorMessage) waiter.ko?.(event.errorMessage);
                    else waiter.ok(event);
                } else if (event.pull) this.updatedPulledData(event.pull);

                if (event) {
                    if (event.connect !== undefined) {
                        if (event.connect) {
                            Eventer.invoke(this.onConnectWatchers, 'is', true);
                            this.isConnected = true;
                            this.send({ connect: true }, this.appName,);
                            this.pullCurrentAppData();
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
                        const execs = event.execs;
                        const appStore = appStorage[execs.appName];
                        const contents = mylib.clone(appStore.properties);
                        Executer
                            .executeReals(contents, event.execs.list)
                            .then((fixes) => {
                                appStore.refreshAreas(fixes, contents);
                                this.setLastUpdates(execs.appName, [null, null, execs.lastUpdate, null]);
                            })
                            .catch();
                    }

                    if (event.statistic) indexStorage.refreshAreas(['statistic'], event as never);
                }
            } catch (e) { }
        });

        return this;
    }

    onConnect(callback: (isConnected: boolean) => void) {
        callback(this.isConnected);
        return Eventer.listen(this.onConnectWatchers, 'is', callback);
    }

    setLastUpdates(appName: SokiAppName, pullCortage: SokiClientUpdateCortage) {
        indexStorage.set('updateRequisites', (prev = {}) => {
            const [indexLastUpdate, indexRulesMd5, appLastUpdate, appRulesMd5] = pullCortage;

            return {
                ...prev,
                index: [indexLastUpdate || prev.index?.[0] || 0, indexRulesMd5 || prev.index?.[1] || undefined],
                [appName]: [appLastUpdate || prev[appName]?.[0] || 0, appRulesMd5 || prev[appName]?.[1] || undefined],
            };
        });
    }

    onUnauthorize() {
        indexStorage.rem('auth');
        indexStorage.rem('updateRequisites');
    }

    setAppName(appName: SokiAppName) {
        this.appName = appName;
    }

    pullCurrentAppData() {
        const { index: [indexLastUpdate, indexRulesMd5] = [], [this.appName]: [appLastUpdate, appRulesMd5] = [] } = indexStorage.get('updateRequisites') || {};

        this.send({ pullData: [indexLastUpdate, indexRulesMd5, appLastUpdate, appRulesMd5] }, this.appName)
            .on((event) => event.pull && this.updatedPulledData(event.pull));
    }

    updatedPulledData(pull: PullEventValue) {
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
        const { contents: [indexContents, appContents], updates } = pull;
        const appStore = appStorage[pull.appName];

        update(appContents, appStore);
        update(indexContents, appStorage.index);

        appContents.forEach(({ key, value }) => appStore.set(key, value));
        indexContents.forEach(({ key, value }) => indexStorage.set(key as never, value as never));
        this.setLastUpdates(pull.appName, updates);
    }

    onAppChange(appName: SokiAppName) {
        this.setAppName(appName);
        this.pullCurrentAppData();
    }

    send(body: SokiClientEvent['body'], appName?: SokiAppName) {
        let requestId: number | und;

        const send = () => {
            try {
                if (this.ws) {
                    const sendEvent: SokiClientEvent = {
                        requestId,
                        body,
                        auth: indexStorage.getOr('auth', null),
                        appName: appName ?? this.appName,
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
