import { Executer } from '../back/complect/executer/Executer';
import { SimpleKeyValue } from '../back/complect/filer/Filer.model';
import { PullEventValue, SokiAppName, SokiClientEvent, SokiClientEventBody, SokiClientUpdateCortage, SokiServerEvent } from '../back/complect/soki/soki.model';
import environment from '../back/environments/environment';
import { JStorage } from './complect/JStorage';
import Eventer, { EventerCallback, EventerListeners, eventerAlt } from './complect/eventer/Eventer';
import mylib from './complect/my-lib/MyLib';
import indexStorage from './components/index/indexStorage';
import { appStorage } from './shared/jstorages';

export type ResponseWaiterCallback = (ok: ResponseWaiter['ok'], ko?: ResponseWaiter['ko']) => void;

interface ResponseWaiter {
    requestId: string,
    ok: (response: SokiServerEvent) => void,
    ko?: (errorMessage: string) => boolean | void,
}

type Waiters = EventerListeners<'auth', boolean>;

let pingTimeout: TimeOut;
const invokeOnceResult = [eventerAlt.invokeOnce, eventerAlt.passPropagation];

export class SokiTrip {
    appName: SokiAppName = 'cm';
    ws?: WebSocket;
    isAuthorized = false;
    waiters: Waiters = { auth: [] };
    private responseWaiters: ResponseWaiter[] = [];

    constructor() {
        this.appName = indexStorage.getOr('currentApp', 'cm');
    }

    onClose = () => {
        Eventer.invoke(this.waiters, 'auth', false);
        this.isAuthorized = false;
        setTimeout(() => this.start(), 1000);
    };

    onConnect = () => this.sendForce({ connect: true }, this.appName);

    start() {
        this.ws = new WebSocket(`wss://${environment.dns}/websocket/`);

        this.ws.onclose = this.onClose;
        this.ws.onopen = this.onConnect;

        this.ws.onmessage = ({ data }: { data: string }) => {
            try {
                const event: SokiServerEvent = JSON.parse(data);
                console.info(event);

                const waiter = event.requestId && this.responseWaiters.find((waiter) => event.requestId === waiter.requestId);
                if (waiter) {
                    this.responseWaiters = this.responseWaiters.filter((w) => w.requestId !== waiter.requestId);

                    if (event.errorMessage) waiter.ko?.(event.errorMessage);
                    else waiter.ok(event);
                } else if (event.pull) this.updatedPulledData(event.pull);

                if (event) {
                    if (event.unregister) {
                        this.onUnregister();
                        return;
                    }

                    if (event.authorized !== undefined) {
                        this.isAuthorized = true;
                        Eventer.invoke(this.waiters, 'auth', true);
                        this.pullCurrentAppData();
                    }

                    if (event.system) {
                        if (event.system.name === 'reloadFiles') this.pullCurrentAppData();
                        if (event.system.name === 'restartWS') { }
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
        };

        return this;
    }

    onAuthorize(callback: EventerCallback<boolean>, isRejectInitInvoke?: boolean) {
        return Eventer.listen(
            this.waiters,
            'auth',
            (is, alt) => {
                callback(is, alt);
                return invokeOnceResult;
            },
            isRejectInitInvoke !== true ? this.isAuthorized : undefined
        );
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

    onUnregister() {
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

    sendForce(body: SokiClientEventBody, appName?: SokiAppName, requestId?: string) {
        try {
            if (this.ws && this.ws.readyState === this.ws.OPEN) {
                const sendEvent: SokiClientEvent = {
                    requestId,
                    body,
                    auth: indexStorage.getOr('auth', null),
                    appName: appName ?? this.appName,
                };

                this.ws.send(JSON.stringify(sendEvent));
            }
        } catch (event) { }
    }

    send = (body: SokiClientEventBody, appName?: SokiAppName): { on: ResponseWaiterCallback } => {
        let requestId: string | und;

        Promise.resolve()
            .then(() => {
                if (this.isAuthorized) this.sendForce(body, appName, requestId);
                else this.onAuthorize(() => this.sendForce(body, appName, requestId), true);
            });

        return {
            on: (ok, ko) => {
                requestId = '' + Date.now() + Math.random();
                this.responseWaiters.push({ requestId, ok, ko });
            },
        };
    };

    ping: ResponseWaiterCallback = (on, ko) => {
        clearTimeout(pingTimeout);
        pingTimeout = setTimeout(() => this.send({ ping: true }).on(on, ko), 0);
    };
}

export const soki = new SokiTrip().start();
