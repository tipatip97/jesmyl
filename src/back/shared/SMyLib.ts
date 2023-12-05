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
    isNil(obj: any): obj is null | undefined { return obj === null || obj === undefined }
    isNan(obj: any): obj is typeof NaN { return isNaN(obj) }

    static entries<T>(obj: T): [keyof T, T[keyof T]][] {
        return (obj == null ? [] : Object.entries(obj)) as never;
    }

    static keys<T>(obj: T): T extends Record<infer Key, any> ? Key[] : string[] {
        return Object.keys(obj || {}) as never;
    }

    func(...funcs: any[]) {
        const self = this;
        const call = (...args: any[]) => {
            const func = funcs.find(this.isFunc);
            return func && func.apply(this, ...args);
        };

        return {
            call(...args: any[]) { return call(args); },
            invoke(func: Function) { return call([].concat(self.isFunc(func) ? func() : [])); }
        };
    }

    mapFilter = <Item, Val>(items: Item[], cb: (item: Item, index: number, items: Item[]) => Val | undefined): Exclude<Val, undefined>[] => {
        const result: Exclude<Val, undefined>[] = [];

        for (let i = 0; i < items.length; i++) {
            const val = cb(items[i], i, items);
            if (val !== undefined) result.push(val as never);
        }

        return result;
    }

    randomOf = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
    randomIndex = (arr: unknown[] | string) => this.randomOf(0, arr.length - 1);
    randomItem = <Item extends any[] | string, RetItem extends Item extends (infer It)[] ? It : string>
        (arr: Item): RetItem => arr[this.randomIndex(arr)];

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

            if (bEntries?.length !== Object.values(source).filter((val) => val !== undefined).length
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

    values<T extends {}>(o: T): (T[keyof T])[] {
        return Object.values(o) as never;
    }

    declension(num: number, one?: string, two?: string, five?: string) {
        if (num % 1) return two!;
        let absNum = Math.abs(num) % 100;

        if (absNum > 10 && absNum < 20)
            return five ?? two!;

        absNum %= 10;

        return (absNum > 1 && absNum < 5)
            ? two!
            : (absNum === 1)
                ? one!
                : five ?? two!;
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

    stringTemplater<Args>(str: string, topArgs: Args, onUnknownArg?: (argName: string) => any) {
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
                        if (val === undefined) {
                            val = this.stringTemplaterFunctions[topArgName];
                            if (val === undefined && onUnknownArg) val = onUnknownArg(topArgName);
                        }

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

    newInstance<T>(val: T): T {
        if (this.isArr(val)) return [] as never;
        else if (this.isObj(val)) return {} as never;

        return val;
    }

    checkIsCorrectArgs(action: string, realArgs: Record<string, any>, typeArgs: Record<string, any>,) {
        const args = { ...realArgs };
        const ruleEntries = SMyLib.entries(typeArgs);

        if (!ruleEntries.length) return null;
        const errors: string[] = [];

        const add = (message: string) => {
            errors.push(message);
            if (message) console.error(message);
            return errors;
        }

        const argsEntries = SMyLib.entries(args);
        if (!argsEntries.length) {
            return add('Нет необходимых аргументов для данного исполнения');;
        }

        for (const [key, type] of ruleEntries) {
            if (key === '$$vars') continue;
            const argEntry = argsEntries.find(([argn]) => argn === key);
            if (!argEntry) {
                if (this.isRequiredType(type))
                    add(`Не указан параметр "${key}" для исполнения "${action}"`);;
                continue;
            }
            const [, value] = argEntry;
            if (!this.isCorrectType(value, type)) add(`Неверный тип параметра "${key}" (${value}) в исполнении "${action}". Ожидалось "${this.isArr(type) ? type.join(' | ') : type}"`);
        }

        return errors;
    }

    isRequiredType(typer: string | any[]) {
        const check = (type: string | any) => {
            if (typeof type === 'string') return type !== type.toLowerCase();
            else if (type == null) return false;
            else if (Array.isArray(type))
                return !type.some((type): boolean => !check(type));
            else return true;
        };
        return check(typer);
    }

    isCorrectType(value: any, typer: string | any[]): boolean {
        if (this.isStr(typer)) {

            if (typer[0] === '#') {
                const explodes = this.explode(':', typer as string, 2);
                const type = explodes[0].slice(1);
                const lower = type.toLowerCase();

                if (lower === type && value == null) return true;

                let isCorrect = false;

                if (lower === 'list') isCorrect = this.isArr(value);
                else if (lower === 'dict') isCorrect = this.isObj(value);
                else if (lower === 'object') isCorrect = this.isobj(value);
                else if (lower === 'string') isCorrect = this.isStr(value);
                else if (lower === 'numeric') isCorrect = this.isnum(value);
                else if (lower === 'number') isCorrect = this.isNum(value);
                else if (lower === 'num') isCorrect = value === 0 || value === 1;
                else if (lower === 'boolean') isCorrect = this.isBool(value);
                else if (lower === 'simple') isCorrect = this.isStr(value) || this.isNum(value);
                else if (lower === 'primitive') isCorrect = this.isBool(value) || this.isStr(value) || this.isNum(value);
                else if (lower === 'any') isCorrect = true;

                return isCorrect;

            } else return value === typer;
        } else if (this.isArr(typer)) {
            return (typer as any[]).some(tup => this.isCorrectType(value, tup));
        }

        return value === typer;
    }
}


const smylib = new SMyLib();
export default smylib;