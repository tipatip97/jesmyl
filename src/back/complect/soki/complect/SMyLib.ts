import md5 from 'md5';

export class SMyLib {
    isObj(obj: any): obj is Record<string, any> { return obj instanceof Object && !(obj instanceof Array) }
    isobj(obj: any): obj is Record<string | number, any> | any[] { return typeof obj === 'object' && obj != null }
    isArr(obj: any): obj is any[] { return obj instanceof Array }
    isNum(obj: any): obj is number { return typeof obj === 'number' && !isNaN(obj) }
    isnum(obj: any): obj is number { return parseFloat(obj) == obj }
    isStr(obj: any): obj is string { return typeof obj === 'string' }
    isFunc(obj: any): obj is Function { return typeof obj === 'function' }
    isAFunc(obj: any): obj is Function { return this.isFunc(obj) && obj[Symbol.toStringTag] === 'AsyncFunction' }
    isUnd(obj: any): obj is undefined { return obj === undefined }
    isBool(obj: any): obj is boolean { return typeof obj === 'boolean' }
    isNull(obj: any): obj is null { return obj === null }
    isNan(obj: any): obj is typeof NaN { return isNaN(obj) }

    static entries<T>(obj: T): T extends Record<infer Key, infer V> ? [Key, V][] : [string, unknown][] {
        return Object.entries(obj || []) as never;
    }

    explode(separator: string, string: string, lim?: number) {
        const limit = lim && Math.abs(lim);
        const splitted = string.split(separator);
        if (!this.isNum(limit)) return splitted;

        return splitted.reduce((res: string[], curr: string, curri: number) => {
            if (limit > curri)
                return res.concat([curr]);
            else
                res[res.length - 1] += separator + curr;
            return res;
        }, []);
    }

    clone<Val extends any>(what: Val): Val {
        if (what === null || what === undefined) return what;
        else if ((what as Array<unknown>).constructor === Array || (what as Object).constructor === Object) {
            const newObj: any = this.isArr(what) ? [] : {};
            for (const whatn in what) newObj[whatn] = this.clone(what[whatn as never]);
            return newObj;
        }
        return what;
    }

    isEq(base: any, source: any) {
        if (base == null && base == source) return true;
        if (base == null || source == null) return false;
        if (base === source) return true;

        const baseType = this.typeOf(base);
        const srcType = this.typeOf(source);

        if (baseType !== srcType) return false;
        if (typeof base === 'object') {
            const bEntries = Object.entries(base).filter(([, val]) => val !== undefined);

            if (bEntries.length !== Object.values(source).filter((val) => val !== undefined).length
                || bEntries.some(([bKey, bVal]) => !this.isEq(source[bKey], bVal))
            ) return false;
        } else if (base !== source) return false;

        return true;
    }

    typeOf(obj: any): string | null { return (['isStr', 'isNum', 'isBool', 'isArr', 'isNull', 'isUnd', 'isFunc', 'isObj', 'isNan'] as (keyof SMyLib)[]).find((type: keyof SMyLib) => (this[type] as Function)(obj)) || null; }

    md5(content: string) {
        return md5(content);
    }
}


const smylib = new SMyLib();
export default smylib;
