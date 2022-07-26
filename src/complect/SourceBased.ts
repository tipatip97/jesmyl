import mylib from "./my-lib/MyLib";


type NonUndefined<T> = T extends undefined ? never | null : T | null;

export default class SourceBased<T> {
    top: T;
    basics: T;

    constructor(top: T) {
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

    setReals<Top extends Object>(top: Top, keys: (keyof this)[]) {
        keys.forEach((key) => {
            if (top[key as keyof Top] != null) this[key as keyof this] = (top[key as keyof Top] as never);
        });
    }

    toDict(): T {
        return {
            ...this.top,
            ...this.basics
        };
    }
}