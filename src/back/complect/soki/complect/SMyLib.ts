/* eslint-disable eqeqeq */
import md5 from 'md5';


export type StringTemplaterArgs<Adds = {}> = {
    ink: (num: number, post: string, pre: string) => string,
    switch: () => string;
} & Adds;

export class SMyLib {
    isObj(obj: any): obj is Record<string, any> { return obj instanceof Object && !(obj instanceof Array) }
    isobj(obj: any): obj is Record<string | number, any> | any[] { return typeof obj === 'object' && obj != null }
    isArr<Item = any>(obj: any): obj is Item[] { return obj instanceof Array }
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

    overlap<T extends {}>(...args: any[]): T {
        if (args.length === 0) return null as never;
        const zero = args[0] ?? {};

        args.forEach(arg => arg == null ? null : this.keys(arg).forEach(arn => arg[arn] !== undefined && (zero[arn] = arg[arn])));
        return zero;
    }

    keys<T extends {}>(o: T): (keyof T)[] {
        return Object.keys(o) as never;
    }

    declension(num: number, one?: string, two?: string, five?: string) {
        if (num % 1) return two;
        let absNum = Math.abs(num) % 100;

        if (absNum > 10 && absNum < 20)
            return five ?? two;

        absNum %= 10;

        return (absNum > 1 && absNum < 5)
            ? two
            : (absNum === 1)
                ? one
                : five ?? two;
    }

    stringTemplaterFunctions = {
        ink: (num: number, post = '', pre = '') => num == null ? null : `${pre}${num - -1}${post}`,
        switch: (...args: any[]) => {
            let val: any, found: any;

            const ret = args.find((arg, argi) => {
                if (!argi) {
                    val = arg;
                    return false;
                }

                if (found) return true;
                if ((argi % 2) && (arg == val)) found = true;
                return false;
            });

            return ret == null ? args[args.length - 1] : ret;
        },
        declension: (num: number, one: string, two: string, five: string) => this.declension(num, one, two, five),
        isEq: (...args: any[]) => {
            let val: any;

            return !args.some((arg, argi) => {
                if (argi) return !this.isEq(arg, val);
                val = arg;
                return false;
            });
        },
        isGt: (first: any, second: any) => first > second,
        isGte: (first: any, second: any) => first >= second,
        isLt: (first: any, second: any) => first < second,
        isLte: (first: any, second: any) => first <= second,
        or: (...args: any[]) => args.some((arg) => arg),
        and: (...args: any[]) => !args.some((arg) => !arg),
        if: (condition: any, ifTrue: any, ifFalse: any) => condition ? ifTrue : ifFalse,
    };

    stringTemplater<Args>(str: string, topArgs: Args) {
        const dob = '{{';
        const ocb = '}{';
        const dcb = '}}';
        const noObj = {};
        const norm = (val: any, op?: string) => op === '?' ? val ? val : noObj : op === '!' ? val ? noObj : val : op === '!!' ? val == null ? '' : noObj : val == null ? noObj : val;
        let lim = 1000;

        const inline = (parts: string[]) => {
            lim--;
            if (lim < 0) return;
            let line: any[] = [];

            const addNorm = (val: any, op?: string) => {
                const value = norm(val, op);
                line = line.concat(value == noObj || value == null ? '' : value);
            };

            const getDiapason = (diapason: string[], district: number | null, structItems = false) => {
                let ballance: number = null as never;
                let distBallance = 0;
                let struct: any[] = [];
                const dists: any[] = [];

                const diap = (diapason[0] === dob ? diapason : []).filter(txt => {
                    if (ballance === 0) return false;

                    if (structItems) {
                        if ((txt === ocb || txt === dcb) && ballance === 1) {
                            dists.push(inline(struct));
                            struct = [];
                        } else if (ballance) struct.push(txt);

                    } else if (district != null) {
                        if (distBallance === district) dists.push(txt);
                        if (ballance === 1 && txt === ocb) distBallance++;
                    }

                    if (txt === dob) ballance++;
                    else if (txt === dcb) ballance--;

                    return true;
                });

                return {
                    list: structItems || district != null ? dists : diap,
                    len: diap.length,
                    diap, dists
                };
            };

            let escLim = 0;

            parts.forEach((part, parti, parta) => {
                if (parti && parti <= escLim) return;

                const invokeFunc = (func: (...val: any) => void) => {
                    const diapason = getDiapason(parta.slice(parti + 1), null, true);
                    escLim += diapason.len;

                    const nrm = inline(diapason.list) as any[];
                    addNorm(func.apply(this, nrm));
                };

                if (part === dob) {
                } else if (part === dcb || part === ocb) escLim++;
                else if (this.isStr(part)) {
                    const match = part.match(/^\$(\w+)(!{1,2}|\?{1,2})?(;?)/);
                    const [, topArgName, op, semicolon] = (match || []) as [any, keyof StringTemplaterArgs, string, string];

                    if (topArgName != null) {
                        let val = topArgs[topArgName as keyof Args] as any;
                        if (val === undefined) val = this.stringTemplaterFunctions[topArgName];

                        if (semicolon) {
                            if (this.isFunc(val)) invokeFunc(val);
                            else {
                                escLim++;
                                addNorm(val, op);
                            }
                        } else if (parta[parti + 1] === dob) {
                            if (!op && this.isFunc(val)) invokeFunc(val);
                            else {
                                const value = norm(val, op);
                                const diapason = getDiapason(parta.slice(parti + 1), value != noObj ? 0 : 1);
                                escLim += diapason.len;

                                addNorm(inline(diapason.list));
                            }
                        } else if (this.isFunc(val)) invokeFunc(val);
                        else {
                            parti && escLim++;
                            addNorm(val, op);
                        }
                    } else {
                        parti && escLim++;
                        addNorm(part.replace(/^\\/, ''), op);
                    }
                } else addNorm(part);
            });

            return line;
        };

        return inline((str || '')
            .split(/(\\?\$\w+!{0,2}\?{0,2};?|\\?{{|\\?}{|\\?}})/)
            .filter(s => s))?.join('') || '';
    }
}


const smylib = new SMyLib();
export default smylib;
