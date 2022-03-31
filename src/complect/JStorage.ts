
export type JStorageListener<Scope> = <Key extends keyof Scope>(key: Key, val: Scope[Key] | null) => void;

export class JStorage<Scope = any> {
    prefix: string = '';
    scope: string = '';
    store: { [key: string]: any } = {};
    properties: Record<keyof Scope, any> = {} as never;
    strings: Record<keyof Scope, string> = {} as never;
    keys: (keyof Scope)[] = [];
    listeners: Record<string, JStorageListener<Scope>> = {};

    constructor(scope: string) {
        this.prefix = `[${scope}]:`;
        Object.entries(localStorage).forEach(([key, val]: string[]) => {
            if (key.startsWith(this.prefix)) {
                const name = key.replace(this.prefix, '') as keyof Scope;
                this.setString(name, val);
            }
        });
    }

    registerTop(top: { [key: string]: JStorage }) {
        top[this.scope] = this;
    }

    listen(name: string, listener: JStorageListener<Scope>): JStorageListener<Scope> {
        return this.listeners[name] = listener;
    }

    mute(name: string) {
        delete this.listeners[name];
    }

    update(listener: JStorageListener<Scope>, keys?: (keyof Scope)[]) {
        Object.entries(this.properties).forEach(
            keys
                ? ([key, val]) => keys.indexOf(key as never) > -1 && listener(key as keyof Scope, val as Scope[keyof Scope] | null)
                : ([key, val]) => listener(key as keyof Scope, val as Scope[keyof Scope] | null)
        );
    }

    private next<Key extends keyof Scope>(key: keyof Scope, val: Scope[Key] | null) {
        Object.values(this.listeners).forEach((listener) => listener(key, val));
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

        this.next(key, val);

        return string;
    }

    rem(key: keyof Scope) {
        delete this.store[this.lsName(key)];
        delete this.properties[key];
        delete this.strings[key];
        this.keys.splice(this.keys.indexOf(key), 1);

        this.next(key, null);
        return localStorage.removeItem(this.lsName(key));
    }
}

