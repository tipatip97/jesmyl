import mylib from "../../../../complect/my-lib/MyLib";
import Simplifyed from "../../../../complect/Simplifyed";

type NonUndefined<T> = T extends undefined ? never | null : T | null;

export class Base<T> extends Simplifyed {
    top: T;
    basics: T;

    constructor(top: T) {
        super();
        this.top = top;
        this.basics = {} as never;
    }

    getBasic<K extends keyof T>(fieldn: K): T[K] {
        if (this.basics[fieldn] === undefined) {
            return this.top[fieldn];
        }
        return this.basics[fieldn] as T[K];
    }

    getBasicOr<K extends keyof T>(fieldn: K, typ: NonNullable<T[K]>): NonNullable<T[K]> {
        if (this.basics[fieldn] === undefined) {
            if (typ !== undefined) this.basics[fieldn] = mylib.typ(typ, this.top[fieldn] as never) as never;
            else return this.top[fieldn] as NonNullable<T[K]>;
        }
        return this.basics[fieldn] as NonNullable<T[K]>;
    }

    getBasicOrNull<K extends keyof T>(fieldn: K, typ: NonUndefined<T[K]>): NonUndefined<T[K]> {
        if (this.basics[fieldn] === undefined) {
            if (typ !== undefined) this.basics[fieldn] = mylib.typ(typ, this.top[fieldn] as never) as never;
            else return this.top[fieldn] as NonUndefined<T[K]>;
        }
        return this.basics[fieldn] as NonUndefined<T[K]>;
    }

    setExportable<K extends keyof T>(fieldn: K, val: T[K]) {
        this.basics[fieldn] = val;
    }

    forcedArray<K extends keyof T>(fieldn: K): T[K] {
        const obj = this.basics[fieldn] ?? this.top[fieldn];
        if (obj) {
            if (mylib.isArr(obj)) return obj;
            else {
                const list: T = [] as never;
                (Object.entries(obj) as [K, T][]).sort(([a], [b]) => +a - +b).forEach(([k, v]) => !isNaN(+k) && (list[k] = v as never));
                return this.basics[fieldn] = list as never;
            }
        } else return this.basics[fieldn] = [] as never;
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