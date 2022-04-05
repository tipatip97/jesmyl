import mylib from "../../../../complect/my-lib/MyLib";

export class Base<T> {
    top: T;
    self: any;

    constructor(top: T) {
        this.top = top;
        this.self = this;
    }

    getOrBase<K extends keyof T>(fieldn: K, typ?: T[K]): T[K] {
        if ((this.self[fieldn] === null || this.self[fieldn] === undefined)) {
            if (typ !== undefined) this.self[fieldn] = mylib.typ(typ, this.self.top[fieldn]);
            else return this.self.top[fieldn];
        }
        return this.self[fieldn] as T[K];
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