import { Dispatch } from "@reduxjs/toolkit";
import { JStorageName } from "../app/App.model";
import mylib from "./my-lib/MyLib";

export type JStorageListener<Val> = (val: Val) => void;

export class JStorage<Scope> {
    prefix: string;
    appName: JStorageName;
    store: { [key: string]: any } = {};
    properties: Record<keyof Scope, any> = {} as never;
    strings: Record<keyof Scope, string> = {} as never;
    keys: (keyof Scope)[] = [];
    listeners: Record<keyof Scope, Record<string, JStorageListener<Scope[keyof Scope]>>> = {} as never;
    initialized: (keyof Scope)[] = [] as never;
    updatetOnInit: (keyof Scope)[] = [] as never;
    nonCachable: (keyof Scope)[] = [] as never;

    private dispatchers: Record<keyof Scope, (val: NonUndefined<Scope[any]>) => void> = {} as never;

    constructor(appName: JStorageName, config?: { nonCachable?: (keyof Scope)[] }) {
        this.prefix = `[${appName}]:`;
        this.appName = appName;
        if (config?.nonCachable) this.nonCachable = config.nonCachable;
        Object.entries(localStorage).forEach(([name, val]: string[]) => {
            if (name.startsWith(this.prefix)) {
                const key = name.replace(this.prefix, '') as keyof Scope;
                this.setString(key, val);
                this.initialized.push(key);
            }
        });
    }

    dispatch(dispatch: Dispatch<any>) {
        const dispatcher = {
            it: <Key extends keyof Scope>(key: Key, action: (val: NonUndefined<Scope[Key]>) => void) => {
                this.dispatchers[key] = (val) => {
                    val !== undefined && dispatch(action(val));
                };
                return dispatcher;
            },
        };
        return dispatcher;
    }

    listen<Key extends keyof Scope>(key: Key, name: string, listener: JStorageListener<Scope[Key]>, isRejectOnInit?: boolean): JStorageListener<Scope[Key]> {
        if (this.listeners[key] == null) this.listeners[key] = {};
        if (!isRejectOnInit && this.initialized.includes(key) && !this.updatetOnInit.includes(key)) {
            this.update(key, listener);
            this.updatetOnInit.push(key);
        }
        return (this.listeners[key] as Record<string, JStorageListener<Scope[Key]>>)[name] = listener;
    }

    mute(key: keyof Scope, name: string) {
        delete this.listeners[key][name];
    }

    update<Key extends keyof Scope>(key: Key, listener: JStorageListener<Scope[Key]>) {
        listener(this.properties[key]);
    }

    private next<Key extends keyof Scope>(key: keyof Scope, val: Scope[Key]) {
        if (this.listeners[key]) {
            Object.values(this.listeners[key]).forEach((listener) => listener(val));
        }
    }

    refreshAreas<Key extends keyof Scope>(areas: Key[], contents: Record<Key, unknown>) {
        areas.forEach((key) => {
            const val = contents[key] as NonUndefined<Scope[Key]>;
            this.set(key, val);
            if (val !== undefined) {
                this.dispatchers[key]?.(val);
                this.next(key, val);
            }
        });
    }

    private parse(val: string) {
        try {
            return val == null ? null : JSON.parse(val);
        } catch (error) {
            return null;
        }
    }

    private stringify(val: any) {
        try {
            return val == null ? null : JSON.stringify(val);
        } catch (error) {
            return null;
        }
    }

    private lsName(key: keyof Scope) {
        return `${this.prefix}${key as string}`;
    }

    has(key: keyof Scope) {
        return this.keys.indexOf(key) >= 0;
    }

    get<Key extends keyof Scope>(key: Key): Scope[Key] | undefined {
        return this.properties[key];
    }

    getOr<Key extends keyof Scope>(key: Key, def: Scope[Key]): NonUndefined<Scope[Key]> {
        return this.properties[key] ?? def as never;
    }

    set<Key extends keyof Scope>(key: Key, val: Scope[Key] | ((prevValue: Scope[Key]) => Scope[Key]), isRejectPropagation?: boolean): string | null {
        try {
            if (val === null) { this.rem(key); return null; }
            const value = mylib.invokeOrGet(val)(this.properties[key]);
            const string = this.stringify(value);
            return string && this.setValue(key, value, string, isRejectPropagation);
        } catch (error) {
            return null;
        }
    }

    setString<Key extends keyof Scope>(key: Key, string: string): string | null {
        try {
            return this.setValue(key, this.parse(string), string);
        } catch (error) {
            return null;
        }
    }

    private setValue<Key extends keyof Scope>(key: keyof Scope, val: Scope[Key], string: string, isRejectPropagation?: boolean) {
        this.store[this.lsName(key)] = val;
        this.properties[key] = val;
        this.strings[key] = string as string;
        this.keys.push(key);

        if (!this.nonCachable.includes(key)) localStorage[this.lsName(key)] = string;

        if (!isRejectPropagation)
            try {
                this.next(key, val);
            } catch (error) {
                console.error(error);
            }

        return string;
    }

    rem(key: keyof Scope) {
        delete this.store[this.lsName(key)];
        delete this.properties[key];
        delete this.strings[key];
        this.keys.splice(this.keys.indexOf(key), 1);

        this.next(key, null as never);
        return localStorage.removeItem(this.lsName(key));
    }
}

