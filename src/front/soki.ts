import * as versionNum from '../back/+version.json';
import Eventer, { EventerListeners } from '../back/complect/Eventer';
import { Executer } from '../back/complect/executer/Executer';
import { SimpleKeyValue } from '../back/complect/filer/Filer.model';
import { makeRegExp } from '../back/complect/makeRegExp';
import {
  PullEventValue,
  SokiAppName,
  sokiAppNamesSet,
  SokiClientEvent,
  SokiClientEventBody,
  SokiClientUpdateCortage,
  SokiServerEvent,
  SokiSharedDataValuesBox,
  SokiSubscribtionName,
} from '../back/complect/soki/soki.model';
import environment from '../back/environments/environment';
import { AppName } from './app/App.model';
import { Molecule } from './complect/atoms';
import { JStorage } from './complect/JStorage';
import mylib from './complect/my-lib/MyLib';
import { onGetSharedScheduleWidgetData } from './complect/schedule-widget/on-shareds';
import { bibleMolecule } from './components/apps/bible/molecules';
import { cmEditorMolecule } from './components/apps/cm/editor/molecules';
import { cmMolecule } from './components/apps/cm/molecules';
import { takeDeviceId } from './components/index/complect/takeDeviceId';
import {
  getAuthValue,
  getUpdateRequisitesValue,
  indexMolecule,
  setAuthValue,
  setUpdateRequisitesValue,
} from './components/index/molecules';
import { appStorage } from './shared/jstorages';

const version = { ...versionNum };

export type ResponseWaiterCallback = (
  ok: ResponseWaiter['ok'],
  ko?: ResponseWaiter['ko'],
  final?: ResponseWaiter['final'],
) => void;
const info = console.info;

interface ResponseWaiter {
  requestId: string;
  isPing?: true;
  ok: (response: SokiServerEvent) => void;
  ko?: (errorMessage: string) => boolean | void;
  final?: () => void;
}

let pingTimeout: TimeOut;

export class SokiTrip {
  ws?: WebSocket;
  isConnected = false;
  authListeners: EventerListeners<boolean> = [];
  private responseWaiters: ResponseWaiter[] = [];
  private subscriptions: Partial<Record<SokiSubscribtionName, SokiClientEventBody>> = {};
  private onGetSharedData: SokiSharedDataValuesBox = {
    ...onGetSharedScheduleWidgetData,
  };

  private molecules: Partial<{ [Key in AppName]: Molecule<any, Key> }> = {
    index: indexMolecule,
    cm: cmMolecule.with(cmEditorMolecule),
    bible: bibleMolecule,
  };

  appName() {
    const parts = window.location.pathname.split('/', 2);
    const appName = (parts[0] || parts[1]) as SokiAppName | '';
    if (appName !== '' && sokiAppNamesSet.has(appName)) return appName;

    return 'index';
  }

  onClose = () => {
    Eventer.invoke(this.authListeners, false);
    this.isConnected = false;
    setTimeout(() => this.start(), 500);
  };

  onConnect = async () => {
    const date = new Date();

    this.sendForce(
      { connect: true },
      this.appName(),
      '',
      `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}\n${navigator.userAgent}`,
    );
  };

  start() {
    this.ws = new WebSocket(`wss://${environment.dns}/websocket/`);

    this.ws.onclose = this.onClose;
    this.ws.onopen = this.onConnect;

    this.ws.onmessage = async ({ data }: { data: string }) => {
      try {
        const event: SokiServerEvent = JSON.parse(data);
        info(event);
        let waiter: ResponseWaiter | null = null;

        for (let i = this.responseWaiters.length - 1; i > -1; i--) {
          waiter = this.responseWaiters[i];

          if (waiter.requestId === event.requestId || waiter.isPing === true) {
            if (event.errorMessage) waiter.ko?.(event.errorMessage);
            else waiter.ok(event);

            waiter.final?.();
            this.responseWaiters.splice(i, 1);
          }
        }

        if ((waiter === null || waiter.requestId !== event.requestId) && event.pull) this.updatedPulledData(event.pull);

        if (event) {
          if (event.unregister) {
            this.onUnregister();
            return;
          }

          if (event.liveData !== undefined) indexMolecule.set('liveData', event.liveData);

          if (event.authorized !== undefined) {
            this.isConnected = true;
            Eventer.invoke(this.authListeners, true);
            const appName = this.appName();
            if (appName === null) return;
            this.pullCurrentAppData(appName);
            mylib.values(this.subscriptions).forEach(body => body && this.sendForce(body, appName));
          }

          if (event.execs && event.appName) {
            const execs = event.execs;
            const appStore = appStorage[event.appName];
            const molecule = this.molecules[event.appName];
            const contents = mylib.clone({ ...appStore.properties, ...molecule?.values() });

            Executer.executeReals(contents, event.execs.list)
              .then(fixes => {
                if (molecule !== undefined) fixes.forEach(fix => molecule.set(fix, contents[fix]));
                else appStore.refreshAreas(fixes, contents);

                this.setLastUpdates(event.appName!, [null, null, execs.lastUpdate, null]);
              })
              .catch();
          }

          if (event.statistic) indexMolecule.set('statistic', event.statistic);

          if (event.sharedData !== undefined)
            this.onGetSharedData[event.sharedData.key]?.(event.sharedData.value as never);

          if (event.download) {
            const store = this.molecules[event.appName] ?? appStorage[event.appName];

            try {
              store.set(event.download.key, JSON.parse(event.download.value));
            } catch (error) {
              store.set(event.download.key, event.download.value);
            }
          }
        }
      } catch (e) {}
    };

    return this;
  }

  onConnected(callback: (is: boolean) => void) {
    return Eventer.listen(this.authListeners, event => {
      callback(event.value);
      event.mute();
    });
  }

  setLastUpdates(appName: SokiAppName, pullCortage: SokiClientUpdateCortage) {
    setUpdateRequisitesValue((prev = {}) => {
      const [indexLastUpdate, indexRulesMd5, appLastUpdate, appRulesMd5] = pullCortage;

      return {
        ...prev,
        index: [indexLastUpdate || prev?.index?.[0] || 0, indexRulesMd5 || prev?.index?.[1] || undefined],
        [appName]: [appLastUpdate || prev?.[appName]?.[0] || 0, appRulesMd5 || prev?.[appName]?.[1] || undefined],
      };
    });
  }

  onUnregister() {
    setAuthValue({ level: 0 });
    setUpdateRequisitesValue(null);
  }

  async pullCurrentAppData(appName: SokiAppName) {
    const {
      index: [indexLastUpdate = 0, indexRulesMd5 = ''] = [],
      [appName]: [appLastUpdate = 0, appRulesMd5 = ''] = [],
    } = (await getUpdateRequisitesValue()) || {};

    this.send(
      {
        pullData: [indexLastUpdate, indexRulesMd5, appLastUpdate, appRulesMd5],
      },
      appName,
    ).on(event => event.pull && this.updatedPulledData(event.pull));
  }

  updatedPulledData(pull: PullEventValue) {
    const update = (pullContents: SimpleKeyValue<string, unknown>[], store: Molecule<unknown> | JStorage<unknown>) => {
      if (!pullContents.length) return;

      const fixes: string[] = [];
      const contents: Record<string, unknown> = {};
      pullContents.forEach(({ key, value }) => {
        contents[key] = value;
        fixes.push(key);
      });

      if (store instanceof Molecule) fixes.forEach(fix => store.set(fix as never, contents[fix]));
      else store.refreshAreas(fixes as never, contents);
    };

    const {
      contents: [indexContents, appContents],
      updates,
    } = pull;
    const appStore = this.molecules[pull.appName] ?? appStorage[pull.appName];

    update(appContents, appStore);
    update(indexContents, this.molecules.index ?? appStorage.index);

    appContents.forEach(({ key, value }) => appStore.set(key, value));
    indexContents.forEach(({ key, value }) => indexMolecule.set(key as never, value as never));
    this.setLastUpdates(pull.appName, updates);
  }

  onAppChange(appName: SokiAppName) {
    this.pullCurrentAppData(appName);
  }

  getCurrentUrl() {
    return window.location.href.replace(makeRegExp('/^https?:/'), 'https:');
  }
  urls: string[] = [];

  addUrl() {
    this.urls.push(this.getCurrentUrl());
  }

  async sendForce(body: SokiClientEventBody, appName: SokiAppName | null, requestId?: string, browser?: string) {
    if (appName === null) return;
    let tries = 20;

    const trySend = async () => {
      if (tries-- < 0) return;
      try {
        const auth = await getAuthValue();

        if (this.ws && this.ws.readyState === this.ws.OPEN) {
          const sendEvent: SokiClientEvent = {
            requestId,
            body,
            auth: auth.level === 0 ? undefined : auth,
            appName,
            deviceId: await takeDeviceId(),
            version: version.num,
            browser,
            urls: this.urls.length ? this.urls : [this.getCurrentUrl()],
          };

          if (body.subscribe) this.subscriptions[body.subscribe] = body;
          if (body.unsubscribe) delete this.subscriptions[body.unsubscribe];

          this.ws.send(JSON.stringify(sendEvent));

          this.urls = [this.getCurrentUrl()];
        } else setTimeout(trySend, 100);
      } catch (error) {
        setTimeout(trySend, 100);
      }
    };

    trySend();
  }

  send = (body: SokiClientEventBody, appName: SokiAppName): { on: ResponseWaiterCallback } => {
    let requestId: string | und;

    Promise.resolve().then(() => {
      if (this.isConnected) this.sendForce(body, appName, requestId);
      else this.onConnected(() => this.sendForce(body, appName, requestId));
    });

    return {
      on: (ok, ko, final) => {
        requestId = '' + Date.now() + Math.random();
        this.responseWaiters.push({
          requestId,
          ok,
          ko,
          final,
          isPing: body.ping,
        });
      },
    };
  };

  ping: ResponseWaiterCallback = (ok, ko, final) => {
    clearTimeout(pingTimeout);
    pingTimeout = setTimeout(() => this.send({ ping: true }, 'index').on(ok, ko, final), 0);
  };
}

export const soki = new SokiTrip().start();
