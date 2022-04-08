import { BoardAppName } from "../../components/board/Board.model";
import { appStorage, indexStorage } from "../../store/jstorages";
import { CheckRefreshResponse, RefreshResponse, RefreshResponseValue, RefreshState } from "./Refresh.model";

const host = 'https://jesmyl.space/debug/';
const isAndroid = navigator.userAgent && /android/i.test(navigator.userAgent);

export class Refresh {
    static host = host;
    isFirstRequest = true;
    controller?: AbortController;
    onStsteChangeListener?: (state: RefreshState) => void;

    get appName() {
        return indexStorage.getOr('currentApp', null);
    }

    path(isCheck: boolean, includeRejected = false, isLive = false, isForceIndex = false, isForceApp = false) {
        const url = new URL(host);
        url.pathname += 'updates';
        const params = url.searchParams;
        const list = [
            this.appName || '',
            isCheck ? 1 : '',
            isAndroid ? 1 : '',
            (includeRejected ? (indexStorage.getOr('rejectedComponents', [])).filter(p => p) : ''),
            (indexStorage.getOr('registeredApps', [])).filter(p => p),
            isForceIndex
                ? 0
                : this.appLastMod('index') || '',
            isForceApp
                ? 0
                : this.appLastMod(this.appName) || '',
            `refreshes.updates`,
            this.appLiveTm('index') || '',
            this.appLiveTm(this.appName) || '',
            '', //this.appParams(appName).list,
            isLive ? 1 : '',
            this.isFirstRequest ? 1 : '',
            1
        ];

        params.set('auth', indexStorage.getString('auth') || '');
        // params.set('params', list.join(';'));
        params.set('json', JSON.stringify(list));

        return url.toString();
    }


    lsTmVal<Value>(appName: BoardAppName, paramName: string, setVal?: Value) {
        if (appName == null || setVal === null) return null;
        const storage = appStorage[appName];

        if (storage == null) return null;

        if (setVal != null) storage.set(paramName, setVal);
        return storage.getOr(paramName, 0);
    }

    appLastMod<Value>(appName: BoardAppName, setVal?: Value) {
        return this.lsTmVal(appName, 'lastUpdate', setVal);
    }

    appLiveTm<Value>(appName: BoardAppName, setVal?: Value) {
        return this.lsTmVal(appName, 'liveTm', setVal);
    }

    setRefreshedTimes(refreshes: RefreshResponse) {
        this.appLastMod('index', refreshes.indexLm);
        this.appLastMod(refreshes.appName, refreshes.appLm);

        this.appLiveTm('index', refreshes.indexLive);
        this.appLiveTm(refreshes.appName, refreshes.appLive);
    }

    setComponents(list: RefreshResponseValue[]) {
        let code = 0;

        list.forEach((value) => {
            const storage = appStorage[value.app];
            if (storage.setString(value.name, value.content) == null) code++;
        });

        return code;
    }

    setSignal() {
        const controller = new AbortController();
        const { signal } = controller;

        this.controller?.abort();
        this.controller = controller;

        return signal;
    }

    pull(isSetLoading = true) {
        if (isSetLoading) this.stateChange('loading');

        fetch(this.path(false), { signal: this.setSignal() })
            .then(response => response.json())
            .then((res: RefreshResponse) => {
                if (!res.ok) return;

                this.setRefreshedTimes(res);
                if (this.setComponents(res.val))
                    indexStorage.set('rejectedComponents', res.val.map(rfr => rfr.name));
                else {
                    this.stateChange('inactive');
                    this.check();
                }
            });
    }

    check() {
        if (!indexStorage.get('lastUpdate') || (this.appName && !appStorage[this.appName].get('lastUpdate'))) {
            this.pull(false);
            return;
        }
        fetch(this.path(true), { signal: this.setSignal() })
            .then(response => response.json())
            .then((res: CheckRefreshResponse) => {
                if (!res.ok) return;

                if (res.isReady) this.stateChange('ready');
                else this.check();
            });
    }

    stateChange(state: RefreshState) {
        this.onStsteChangeListener && this.onStsteChangeListener(state);
    }

    onStateChange(listener: (state: RefreshState) => void) {
        this.onStsteChangeListener = listener;
    }
}


