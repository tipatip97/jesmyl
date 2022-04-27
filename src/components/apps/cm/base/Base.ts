import mylib from "../../../../complect/my-lib/MyLib";

export class Base<T> {
    top: T;
    self: any;

    constructor(top: T) {
        this.top = top;
        this.self = this;
    }

    getBasic<K extends keyof T>(fieldn: K): T[K] {
        if (this.self[fieldn] === undefined) {
            return this.self.top[fieldn];
        }
        return this.self[fieldn] as T[K];
    }

    getBasicOr<K extends keyof T>(fieldn: K, typ: T[K]): T[K] extends undefined ? never : T[K] {
        if (this.self[fieldn] === undefined) {
            if (typ !== undefined) this.self[fieldn] = mylib.typ(typ, this.self.top[fieldn]);
            else return this.self.top[fieldn];
        }
        return this.self[fieldn] as T[K] extends undefined ? never : T[K];
    }

    setExportable<K extends keyof T>(fieldn: K, val: T[K]) {
        this.self[fieldn] = val;
    }

    forcedArray<K extends keyof T>(fieldn: K): T[K] {
        const obj = this.self[fieldn] ?? this.self.top[fieldn];
        if (obj) {
            if (mylib.isArr(obj)) return obj;
            else {
                const list: T = [] as never;
                (Object.entries(obj) as [K, T][]).sort(([a], [b]) => +a - +b).forEach(([k, v]) => !isNaN(+k) && (list[k] = v as never));
                return this.self[fieldn] = list as never;
            }
        } else return this.self[fieldn] = [] as never;
    }
}

export interface BaseNamedExportables {
    n: string;
    w: number;
}

export class BaseNamed<T extends BaseNamedExportables> extends Base<T> {
    get name() { return this.getBasic('n'); }
    set name(value) { this.setExportable('n', value); }

    get wid() { return this.getBasic('w'); }
    set wid(value) { this.setExportable('w', value); }
}