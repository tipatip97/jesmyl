import { AnyAction, CaseReducer, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { JStorageName } from "../app/App.model";

export type JStorageListener<Val> = (val: Val) => void;

export class JStorage<Scope, State = Scope> {
    appName: JStorageName;
    // store: { [key: string]: any } = {};
    properties: Record<keyof Scope, any> = {} as never;
    // strings: Record<keyof Scope, string> = {} as never;
    // keys: (keyof Scope)[] = [];
    // listeners: Record<keyof Scope, Record<string, JStorageListener<Scope[keyof Scope]>>> = {} as never;
    // initialized: (keyof Scope)[] = [] as never;
    // updatetOnInit: (keyof Scope)[] = [] as never;
    nonCachable: (keyof Scope)[] = [] as never;
    dbOpen: IDBOpenDBRequest;
    isContentInitialized = false;
    dispatch?: Dispatch;
    actions?: Record<keyof Scope, (val: any) => AnyAction>;

    // private dispatchers: Record<keyof Scope, (val: NonUndefined<Scope[any]>) => void> = {} as never;

    constructor(appName: JStorageName, config?: { nonCachable?: (keyof Scope)[] }) {
        // this.prefix = `[${appName}]:`;
        this.appName = appName;
        if (config?.nonCachable) this.nonCachable = config.nonCachable;
        // Object.entries(localStorage).forEach(([name, val]: string[]) => {
        //     if (name.startsWith(this.prefix)) {
        //         const key = name.replace(this.prefix, '') as keyof Scope;
        //         this.setString(key, val);
        //         this.initialized.push(key);
        //     }
        // });
        this.dbOpen = indexedDB.open(appName);
        this.initDB(this.dbOpen);
    }

    private initDB(dbOpen: IDBOpenDBRequest) {
        let isInit = false;
        dbOpen.onupgradeneeded = () => {
            const db = dbOpen.result;
            if (!db.objectStoreNames.contains('data')) {
                db.createObjectStore('data');
                isInit = true;
            }
        };
        dbOpen.onsuccess = () => {
            const prefix = `[${this.appName}]:`;
            const db = dbOpen.result;
            const transaction = db.transaction('data', 'readwrite');
            const data = transaction.objectStore('data');
            const rooms = data.get('rooms');
            rooms.addEventListener('change', () => { });

            if (isInit)
                Object.entries(localStorage).forEach(([name, val]: string[]) => {
                    if (name.startsWith(prefix)) {
                        const key = name.replace(prefix, '');// as keyof Scope;

                        data.put(JSON.parse(val), key);
                        // console.log(key, set);

                        // set.onsuccess = () => this.initialized.push(key as keyof Scope);
                        // this.setString(key, val);
                        // this.initialized.push(key);
                    }
                });
        };
    }

    // dispatch(dispatch: Dispatch<any>) {
    //     const dispatcher = {
    //         it: <Key extends keyof Scope>(key: Key, action: (val: NonUndefined<Scope[Key]>) => void) => {
    //             this.dispatchers[key] = (val) => {
    //                 val !== undefined && dispatch(action(val));
    //             };
    //             return dispatcher;
    //         },
    //     };
    //     return dispatcher;
    // }

    // listen<Key extends keyof Scope>(key: Key, name: string, listener: JStorageListener<Scope[Key]>, isRejectOnInit?: boolean): JStorageListener<Scope[Key]> {
    //     if (this.listeners[key] == null) this.listeners[key] = {};
    //     if (!isRejectOnInit && this.initialized.includes(key) && !this.updatetOnInit.includes(key)) {
    //         this.update(key, listener);
    //         this.updatetOnInit.push(key);
    //     }
    //     return (this.listeners[key] as Record<string, JStorageListener<Scope[Key]>>)[name] = listener;
    // }

    // mute(key: keyof Scope, name: string) {
    //     delete this.listeners[key][name];
    // }

    // private update<Key extends keyof Scope>(key: Key, listener: JStorageListener<Scope[Key]>) {
    //     listener(this.properties[key]);
    // }

    // private next<Key extends keyof Scope>(key: keyof Scope, val: Scope[Key]) {
    //     if (this.listeners[key]) {
    //         Object.values(this.listeners[key]).forEach((listener) => listener(val));
    //     }
    // }

    refreshAreas<Key extends keyof Scope>(areas: Key[], contents: Record<Key, unknown>) {
        areas.forEach((key) => {
            const val = contents[key] as NonUndefined<Scope[Key]>;
            if (val !== undefined) {
                this.set(key, val);
                if (this.actions?.[key]) this.dispatch?.(this.actions[key](val));
                // this.next(key, val);
            }
        });
    }

    // private parse(val: string) {
    //     try {
    //         return val == null ? null : JSON.parse(val);
    //     } catch (error) {
    //         return null;
    //     }
    // }

    // private stringify(val: any) {
    //     try {
    //         return val == null ? null : JSON.stringify(val);
    //     } catch (error) {
    //         return null;
    //     }
    // }

    // private lsName(key: keyof Scope) {
    //     return `${this.prefix}${key as string}`;
    // }

    // get<Key extends keyof Scope>(key: Key): Scope[Key] | undefined {
    //     return this.properties[key];
    // }

    // getOr<Key extends keyof Scope>(key: Key, def: Scope[Key]): NonUndefined<Scope[Key]> {
    //     return this.properties[key] ?? def as never;
    // }

    getAsync<Key extends keyof Scope>(key: Key): Promise<Scope[Key] | undefined> {
        return new Promise((resolve) => {
            const read = () => {
                if (this.dbOpen.readyState !== 'done') {
                    resolve(undefined);
                    return;
                }
                const data = this.dbOpen.result
                    .transaction('data', 'readonly')
                    .objectStore('data')
                    .get(key as string);
                data.onsuccess = () => resolve(data.result);
            };

            if (this.dbOpen.readyState === 'done') read();
            else setTimeout(read, 100);
        });
    }

    async getOrAsync<Key extends keyof Scope>(key: Key, def: Scope[Key]): Promise<NonUndefined<Scope[Key]>> {
        return (await this.getAsync(key) ?? def) as never;
    }

    initializators<Key extends keyof Scope | keyof State>(keys: Key[]): Record<Key, CaseReducer<State, { payload: any; type: string; }>> {
        const actions: Record<string, (state: Record<Key, unknown>, action: PayloadAction<unknown>) => void> = {};

        keys.forEach(key => actions[key as string] = (state, action) => {
            state[key] = action.payload;
            this.set(key as never, action.payload as never);
        });

        return actions as never;
    }

    initDispatches(dispatch: Dispatch, actions: Record<keyof Scope, (val: any) => AnyAction>) {
        this.actions = actions;
        this.dispatch = dispatch;

        if (this.isContentInitialized) return;
        this.isContentInitialized = true;

        setTimeout(() => {
            if (this.dbOpen.readyState !== 'done') {
                setTimeout(() => this.initDispatches(dispatch, actions), 10);
                return;
            }
            const data = this.dbOpen.result
                .transaction('data', 'readonly')
                .objectStore('data');

            const keys = data.getAllKeys();
            keys.onsuccess = () => {
                keys.result.forEach(key => {
                    if (actions[key as keyof Scope] !== undefined) {
                        const value = data.get(key);
                        value.onsuccess = () => {
                            if (value.result !== undefined) {
                                this.properties[key as never] = value.result as never;
                                dispatch(actions[key as keyof Scope](value.result));
                            }
                        };
                    }
                });
            };
        }, 90);
    }

    set<Key extends keyof Scope>(key: Key, val: Scope[Key] | ((prevValue: Scope[Key]) => Scope[Key]), isRejectPropagation?: boolean): void {
        try {
            if (val === null) { this.rem(key); return; }
            this.properties[key] = (typeof val === 'function') ? (val as <V>(v: V) => V)(this.properties[key]) : val;

            if (this.nonCachable.includes(key)) return;

            if (this.dbOpen.readyState !== 'done') {
                setTimeout(() => this.set(key, val), 10);
                return;
            }

            this.dbOpen.result
                .transaction('data', 'readwrite')
                .objectStore('data')
                .put(this.properties[key], key as string);
        } catch (error) {
            return;
        }
    }

    // setString<Key extends keyof Scope>(key: Key, string: string): string | null {
    //     try {
    //         return this.setValue(key, this.parse(string), string);
    //     } catch (error) {
    //         return null;
    //     }
    // }

    // private setValue<Key extends keyof Scope>(key: keyof Scope, val: Scope[Key], string: string, isRejectPropagation?: boolean) {
    //     this.store[this.lsName(key)] = val;
    //     this.properties[key] = val;
    //     this.strings[key] = string as string;
    //     this.keys.push(key);

    //     if (!this.nonCachable.includes(key)) localStorage[this.lsName(key)] = string;

    //     if (!isRejectPropagation)
    //         try {
    //             this.next(key, val);
    //         } catch (error) {
    //             console.error(error);
    //         }

    //     return string;
    // }

    rem(key: keyof Scope) {
        // delete this.store[this.lsName(key)];
        // delete this.properties[key];
        // delete this.strings[key];
        // this.keys.splice(this.keys.indexOf(key), 1);

        // this.next(key, null as never);
        // return localStorage.removeItem(this.lsName(key));


        if (this.dbOpen.readyState !== 'done') {
            setTimeout(() => this.rem(key), 10);
            return;
        }
        this.dbOpen.result
            .transaction('data', 'readwrite')
            .objectStore('data')
            .delete(key as string);
    }
}

