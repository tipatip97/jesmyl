import { JStorageName } from "../app/App.model";

export type JStorageListener<Val> = (val: Val) => void;

export interface JStorageTechFields {
    lastUpdate: number;
}

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

    constructor(appName: JStorageName) {
        this.prefix = `[${appName}]:`;
        this.appName = appName;
        Object.entries(localStorage).forEach(([name, val]: string[]) => {
            if (name.startsWith(this.prefix)) {
                const key = name.replace(this.prefix, '') as keyof Scope;
                this.setString(key, val);
                this.initialized.push(key);
            }
        });
    }

    listen<Key extends keyof Scope>(key: Key, name: string, listener: JStorageListener<Scope[Key]>, isRejectOnInit?: boolean): JStorageListener<Scope[Key]> {
        if (this.listeners[key] == null) this.listeners[key] = {};
        if (!isRejectOnInit && this.initialized.indexOf(key) > -1 && this.updatetOnInit.indexOf(key) < 0) {
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

    parse(val: string) {
        try {
            return val == null ? null : JSON.parse(val);
        } catch (error) {
            return null;
        }
    }

    stringify(val: any) {
        try {
            return val == null ? null : JSON.stringify(val);
        } catch (error) {
            return null;
        }
    }

    lsName(key: keyof Scope) {
        return `${this.prefix}${key}`;
    }

    has(key: keyof Scope) {
        return this.keys.indexOf(key) >= 0;
    }

    get<Key extends keyof Scope>(key: Key): Scope[Key] | undefined {
        return this.properties[key];
    }

    getOr<Key extends keyof Scope>(key: Key, def: Scope[Key]): Scope[Key] {
        return this.properties[key] ?? def;
    }

    getString<Key extends keyof Scope>(key: Key, def: string | null = null): string | null {
        return this.strings[key] ?? def;
    }

    set<Key extends keyof Scope>(key: Key, val: Scope[Key]): string | null {
        try {
            if (val === null) { this.rem(key); return null; }
            const string = this.stringify(val);
            return string && (localStorage[this.lsName(key)] = this.setValue(key, val, string));
        } catch (error) {
            return null;
        }
    }

    setString<Key extends keyof Scope>(key: Key, string: string): string | null {
        try {
            return localStorage[this.lsName(key)] = this.setValue(key, this.parse(string), string);
        } catch (error) {
            return null;
        }
    }

    setValue<Key extends keyof Scope>(key: keyof Scope, val: Scope[Key], string: string) {
        this.store[this.lsName(key)] = val;
        this.properties[key] = val;
        this.strings[key] = string as string;
        this.keys.push(key);

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

