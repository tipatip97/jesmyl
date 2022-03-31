import mylib from "../../../../complect/MyLib";

export class Base<T> {
    top: T;
    self: any;

    constructor(top: T) {
        this.top = top;
        this.self = this;
    }

    getOrBase<K extends keyof T>(fieldn: K, typ?: T[K]) {
        if (typ !== undefined && (this.self[fieldn] === null || this.self[fieldn] === undefined)) this.self[fieldn] = mylib.typ(typ, this.self.top[fieldn]);
        return this.self[fieldn];
    }

    setExportable<K extends keyof T>(fieldn: K, val: T[K]) {
        this.self[fieldn] = val;
    }

    forcedArray<K extends keyof T>(fieldn: K, message = 'expected #Array, but got #other') {
        const obj = this.self[fieldn];
        if (obj) {
            if (mylib.isArr(obj)) return obj;
            else {
                const list: T[] = [];
                // mylib.dcconsl(message, JSON.parse(JSON.stringify(obj)), obj);
                Object.entries(obj).sort(([a], [b]) => +a - +b).forEach(([k, v]) => !isNaN(+k) && (list[k as never] = v));
                return this.self[fieldn] = list;
            }
        } else return this.self[fieldn] = [];
    }
}