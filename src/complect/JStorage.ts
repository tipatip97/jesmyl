

export class JStorage<T> {
    prefix: string = '';
    store: { [key: string]: any } = {};
    properties: Record<keyof T, any> = {} as never;
    strings: Record<keyof T, string> = {} as never;
    keys: (keyof T)[] = [];

    constructor(scope: string) {
        this.prefix = `[${scope}]:`;
        Object.entries(localStorage).forEach(([key, val]: string[]) => {
            if (key.startsWith(this.prefix)) {
                const name = key.replace(this.prefix, '') as keyof T;
                const parsed = this.parse(val);

                this.keys.push(name);
                this.store[key] = parsed;
                this.strings[name] = val;
                this.properties[name] = parsed;
            }
        });
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

    lsName(key: keyof T) {
        return `${this.prefix}${key}`;
    }

    has(key: keyof T) {
        return this.keys.indexOf(key) >= 0;
    }

    get<Key extends keyof T>(key: Key): T[Key] | null {
        return this.properties[key];
    }
    
    set<Key extends keyof T>(key: keyof T, val: T[Key]): string {
        const string = this.stringify(val);

        this.store[this.lsName(key)] = val;
        this.properties[key] = val;
        this.strings[key] = string as string;
        this.keys.push(key);
        return localStorage[this.lsName(key)] = string as string;
    }

    rem(key: keyof T) {
        delete this.store[this.lsName(key)];
        delete this.properties[key];
        delete this.strings[key];
        this.keys.splice(this.keys.indexOf(key), 1);

        return localStorage.removeItem(this.lsName(key));
    }
}

