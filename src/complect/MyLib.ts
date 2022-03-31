var md5 = require('md5');

const constants = {
    REMOVE: ['REMOVE'],
    POSITION: ['POSITION'],
    INDEX: ['INDEX'],
}

type Trace = string | typeof constants[keyof typeof constants];
type Ferry = { [objName: string]: object | number, deep: number, rate: number };

export class MyLib {
    c = constants;

    isObj(obj: any) { return obj instanceof Object && !(obj instanceof Array) }
    isobj(obj: any) { return typeof obj === 'object' && obj != null }
    isArr(obj: any) { return obj instanceof Array }
    isNum(obj: any) { return typeof obj === 'number' && !isNaN(obj) }
    isnum(obj: any | string) { return parseFloat(obj) == obj }
    isStr(obj: any) { return typeof obj === 'string' }
    isFunc(obj: any) { return typeof obj === 'function' }
    isAFunc(obj: any) { return this.isFunc(obj) && obj[Symbol.toStringTag] === 'AsyncFunction' }
    isUnd(obj: any) { return obj === undefined }
    isBool(obj: any) { return typeof obj === 'boolean' }
    isNull(obj: any) { return obj === null }
    isNan(obj: any) { return isNaN(obj) }

    func(...funcs: any[]) {
        const self = this;
        const call = (...args: any[]) => {
            const func = funcs.find(this.isFunc);
            return func && func.apply(this, args);
        };

        return {
            call(...args: any[]) { return call(args); },
            invoke(func: Function) { return call([].concat(self.isFunc(func) ? func() : [])); }
        };
    }

    overlap<T>(...args: any[]): T {
        if (args.length === 0) return null as never;
        const zero = this.def(args[0], {});

        args.forEach(arg => arg == null ? null : Object.keys(arg).forEach(arn => zero[arn] = arg[arn]));
        return zero;
    }

    def<T>(...args: T[]) {
        const res = args.find(some => some != null);
        return res == null ? args[args.length - 1] : res;
    }

    typ<T>(...args: T[]) {
        if (args[0] == null || args.length < 2) return args[0];

        const type = this.typeOf(args[0]);
        const arg = args.find((arg, argi) => argi && this.typeOf(arg) === type);
        return arg == null ? args[0] : arg;
    }

    md5(content: string) {
        return md5(content);
    }


    isEq(base: any, source: any) {
        if (base == null && base == source) return true;
        if (base == null || source == null) return false;

        const baseType = this.typeOf(base);
        const srcType = this.typeOf(source);

        if (baseType !== srcType) return false;
        if (typeof base === 'object') {
            const bKeys = Object.keys(base);

            if (bKeys.length !== Object.keys(source).length
                || bKeys.some(bKey => !this.isEq(source[bKey], base[bKey]))
            ) return false;
        } else if (base !== source) return false;

        return true;
    }

    typeOf(obj: any): string | null { return (['isStr', 'isNum', 'isBool', 'isArr', 'isNull', 'isUnd', 'isFunc', 'isObj', 'isNan'] as (keyof MyLib)[]).find((type: keyof MyLib) => (this[type] as Function)(obj)) || null; }

    findLastIndex(arr: [], cb: Function) {
        if (!this.isArr(arr)) return null;
        if (!this.isFunc(cb)) return arr.length - 1;

        for (let i = arr.length - 1; i >= 0; i--)
            if (cb(arr[i], i, arr))
                return i;

        return -1;
    }

    internationalWordReg(word: string, flags = '') {
        const reps = [
            ['ыіi', 'ыії'],
            ["ъ'ʼ", "ъ'ʼ"],
            ['эє'],
            ['гґ'],
            ['её']
        ];

        return RegExp(reps.reduce((acc, [from, to]) => acc.replace(RegExp(`[${from}]`), `[${to || from}]`), word).toLowerCase(), flags);
    }

    searchRate(objects = [{ n: 'name' }], searchWord = 'string for search', places: Trace[] = [this.c.POSITION], objName = 'ferry') {
        const normalWords = searchWord.split(/[^а-яё0-9ґії'ʼє]+/i).filter(word => word);
        const words = normalWords.map(word => word.toLowerCase());
        const wordRegs = normalWords.map(word => this.internationalWordReg(word));

        return objects.reduce((ferries: Ferry[], object, objecti) => {
            let rate = 0;
            let deep = 0;
            const ferry = (): Ferry => ({ [objName]: object, deep, rate });

            if (places.some((place, placei) => {
                deep = placei;
                const num = ([this.c.INDEX, this.c.POSITION] as Trace[]).indexOf(place);
                if (num > -1) {
                    if (words.some(word => word && (objecti + num).toString().startsWith(word))) {
                        rate = 1;
                        return true;
                    }
                    return false;
                }

                const searchInPlace = (str: string, level: number) => {
                    str = str.toLowerCase();
                    let noWord = false;

                    const currRate = words.reduce((accRate: number | null, _word, wordi) => {
                        if (noWord) return null;
                        const index = str.search(wordRegs[wordi]);
                        if (index < 0) {
                            noWord = true;
                            return null;
                        }
                        return accRate as number + index + level;
                    }, null);

                    if (noWord || currRate == null) return false;

                    rate = currRate;
                    return true;
                };

                const search = (track: Trace[] | Trace, target: any, level: number) => {
                    let searched;
                    ([] as Trace[]).concat(track).reduce((target, trace, tracei, tracea) => {
                        if (!target) return null;
                        if (trace === this.c.INDEX) {
                            searched = target.some((o: any) => search(track.slice(tracei + 1), o, (level + tracei) * 10));
                            return null;
                        }
                        if (tracei >= tracea.length - 1) searched = searchInPlace(target[trace as string], level);
                        return target[trace as string];
                    }, target);
                    return searched;
                };

                return search(place, object, placei);

            })) return ferries.concat(ferry());
            else return ferries;
        }, []).sort((a, b) => a.rate - b.rate);
    }

    correctRegExp(str: string, flags = '', transformer?: (str: string, reps: number) => string) {
        let reps = 0;
        const string = str.replace(/[[\]\\$^*()+|?.<>{}]/g, all => { reps++; return `\\${all}` });
        return RegExp(this.isFunc(transformer) ? (transformer as Function)(string, reps) : string, flags);
    }

    isExpected(target: any, inspector: any, bag: any) {
        if (inspector == null) return null;

        if (this.isArr(inspector)) {
            if (inspector.length === 1) {
                return !!target;
            } else if (inspector.length === 2) {
                return (inspector[0] === '!' && !this.getAttribute(target, inspector[1])) || this.isCorrectType(target[inspector[0]], inspector[1]) || this.getAttribute(target, inspector[0]) === inspector[1];
            } else if (inspector.length) {
                const step = 3;
                let happensCount = 0;
                let wholeCount = 0;

                for (let i = 0; i < inspector.length; i += step) {
                    wholeCount += 1;
                    const field: never = this.getAttribute(target, inspector[i], bag) as never;
                    const operator = inspector[i + 1];
                    const sign: never = this.getAttribute(target, inspector[i + 2], bag) as never;
                    let result = false;


                    if (operator === "==") result = field == sign;
                    else if (operator === "===") result = field === sign;
                    else if (operator === "!==") result = field !== sign;
                    else if (operator === ">=") result = field >= sign;
                    else if (operator === "<=") result = field <= sign;
                    else if (operator === "!=") result = field != sign;
                    else if (operator === "<") result = field < sign;
                    else if (operator === ">") result = field > sign;
                    else if (operator === 'in' || operator === '!in') {
                        result = this.isArr(sign) && ((sign as []).indexOf(field) < 0 ? operator === '!in' : operator === 'in');
                    } else if (operator === 'key' || operator === '!key') {
                        result = this.isobj(sign) && (Object.keys(sign).indexOf('' + field) < 0 ? operator === '!key' : operator === 'key');
                    }

                    //this.dconsl(target, bag, inspector, field, operator, sign, result);

                    if (result) happensCount++;
                }

                return wholeCount && (happensCount === wholeCount);
            }
        } else return inspector;
    }

    getAttribute(target: any, topField: any, bag?: any) {
        let last = null;
        [].concat(topField).find((field: string) => {
            if (this.isStr(field)) {
                last = target[field];
                const name = field.slice(1);

                if (field[0] === '$') {
                    last = target[name];
                } else if (field[0] === '>') {
                    last = bag && bag[name];
                }

                return last;
            } else return last = field;
        });
        return last;
    }

    isCorrectType(value: any, typer: string | any[]): boolean {
        if (this.isStr(typer)) {

            if (typer[0] === '#') {
                const explodes = this.explode(':', typer as string, 2);
                const type = explodes[0].substr(1);
                const lower = type.toLowerCase();

                if (lower === type && value == null) return true;

                let isCorrect = false;

                if (lower === 'list') isCorrect = this.isArr(value); // && this.isCorrectInArray(explodes[1], value);
                else if (lower === 'dict') isCorrect = this.isObj(value); // && this.isCorrectInArray(explodes[1], value);
                else if (lower === 'object') isCorrect = this.isobj(value); // && this.isCorrectInArray(explodes[1], value);
                else if (lower === 'string') isCorrect = this.isStr(value);
                else if (lower === 'numeric') isCorrect = this.isnum(value);
                else if (lower === 'number') isCorrect = this.isNum(value);
                else if (lower === 'boolean') isCorrect = this.isBool(value);
                else if (lower === 'simple') isCorrect = this.isStr(value) || this.isNum(value);
                else if (lower === 'primitive') isCorrect = this.isBool(value) || this.isStr(value) || this.isNum(value);
                else if (lower === 'any') isCorrect = true;

                return isCorrect;

            } else return value === typer;
        } else if (this.isArr(typer)) {
            return (typer as any[]).some(tup => this.isCorrectType(value, tup));
        }

        return false;
    }

    explode(separator: string, string: string, lim: number) {
        const limit = Math.abs(lim);
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
}


const mylib = new MyLib();
export default mylib;




