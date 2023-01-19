/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
import { ReactNode } from "react";
import { SMyLib } from "../../../back/complect/soki/complect/SMyLib";
import { StringTemplaterArgs } from "./MyLib.model";

const constants = {
    REMOVE: ['REMOVE'],
    POSITION: ['POSITION'],
    INDEX: ['INDEX'],
}

type Trace = string | typeof constants[keyof typeof constants];
type Ferry<FerryType, ObjName extends keyof FerryType> =
    Record<ObjName, FerryType[ObjName]> & {
        deep: number;
        rate: number
    };

export type AddRestMode = 'strong' | 'weak' | 'random';

export class MyLib extends SMyLib {
    c = constants;

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

    overlap<T>(...args: any[]): T {
        if (args.length === 0) return null as never;
        const zero = this.def(args[0], {});

        args.forEach(arg => arg == null ? null : Object.keys(arg).forEach(arn => zero[arn] = arg[arn]));
        return zero;
    }

    def(...args: any[]): any {
        const res = args.find(some => some != null);
        return res == null ? args[args.length - 1] : res;
    }

    typ<T>(...args: (T | null | undefined)[]): T {
        if (args[0] == null || args.length < 2) return args[0] as T;

        const type = this.typeOf(args[0]);
        const arg = args.find((arg, argi) => argi && this.typeOf(arg) === type);
        return arg == null ? args[0] : arg;
    }

    randomOf(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    findLastIndex<Value>(arr?: Value[], cb: ((val: Value, index: number, array: Value[]) => any) = () => false) {
        if (!Array.isArray(arr)) return null;
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

    searchRate<FerryType, ObjName extends keyof FerryType = keyof FerryType>(
        objects: FerryType[ObjName][],
        searchWord: string,
        places: (Trace[] | Trace)[],
        objName: ObjName
    ): Ferry<FerryType, ObjName>[] {
        const normalWords = searchWord.split(/[^а-яё0-9ґії'ʼє]+/i).filter(word => word);
        const words = normalWords.map(word => word.toLowerCase());
        const wordRegs = normalWords.map(word => this.internationalWordReg(word));

        return objects.reduce((ferries: Ferry<FerryType, ObjName>[], object, objecti) => {
            let rate = 0;
            let deep = 0;
            const ferry = (): Ferry<FerryType, ObjName> => ({ [objName]: object, deep, rate }) as never;

            if (places.some((place, placei) => {
                deep = placei;
                const num = ([this.c.INDEX, this.c.POSITION] as Trace[]).indexOf(place as never);
                if (num > -1) {
                    if (
                        words.some(word =>
                            word && words.length > 1
                                ? (objecti + num).toString() === word
                                : (objecti + num).toString().startsWith(word)
                        )
                    ) {
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
        }, []).sort((a, b) => a.rate - b.rate) as never;
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

        return false;
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
        declension: (num: number, one: string, two: string, five: string) => mylib.declension(num, one, two, five),
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

    stringTemplater<Args>(str: string, topArgs: Args): ReactNode {
        topArgs = Object.assign({}, this.stringTemplaterFunctions, topArgs);

        const dob = '{{';
        const ocb = '}{';
        const dcb = '}}';
        const noObj = {};
        const norm = (val: any, op?: string) => op === '?' ? val ? val : noObj : op === '!' ? val ? noObj : val : op === '!!' ? val == null ? '' : noObj : val == null ? noObj : val;
        let lim = 1000;

        const inline = (parts: string[]) => {
            lim--;
            if (lim < 0) {
                return;
            }
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

                const diap = diapason.filter(txt => {
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
                        const val = topArgs[topArgName as keyof Args] as any;
                        if (semicolon) {
                            escLim++;
                            if (this.isFunc(val)) invokeFunc(val);
                            else addNorm(val, op);
                        } else if (parta[parti + 1] === dob) {
                            if (!op && this.isFunc(val)) invokeFunc(val);
                            else {
                                const value = norm(val, op);
                                const diapason = getDiapason(parta.slice(parti + 1), value != noObj ? 0 : 1);
                                escLim += diapason.len;

                                const nrm = inline(diapason.list);
                                addNorm(nrm);
                            }
                        } else if (this.isFunc(val)) invokeFunc(val);
                        else {
                            escLim++;
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

    intervalToString(begin: number, end: number) {
        const diff = end - begin;
        const ms = this.getMilliseconds();

        if (diff > ms.inYear) return 'Больше года';
        if (diff > ms.inMonth) return 'Больше месяца';
        if (diff >= ms.inDay) {
            const days = Math.trunc(diff % ms.inDay) + 2;
            return `${days} ${this.declension(days, 'день', 'дня')}`;
        }

        return '';
    }

    getMilliseconds(monthDays = 30, yearDays = 365) {
        const inSec = 1000;
        const inMin = inSec * 60;
        const inHour = inMin * 60;
        const inDay = inHour * 24;
        const inMonth = inDay * monthDays;
        const inYear = inDay * yearDays;

        return { inSec, inMin, inHour, inDay, inMonth, inYear };
    }

    declension(num: number, one?: string, two?: string, five?: string) {
        if (num % 1) return two;
        let absNum = Math.abs(num) % 100;

        if (absNum > 10 && absNum < 20)
            return this.def(five, two);

        absNum %= 10;

        return (absNum > 1 && absNum < 5)
            ? two
            : (absNum === 1)
                ? one
                : this.def(five, two);
    }
    

    getAllProperties(obj: any) {
        const allProps: string[] = [];
        let curr = obj;
        do {
            Object.getOwnPropertyNames(curr).forEach((prop) => {
                if (allProps.indexOf(prop) === -1)
                    allProps.push(prop);
            })
        } while (curr = Object.getPrototypeOf(curr));
        return allProps;
    }

    insertAfter(elem: HTMLElement, refElem: HTMLElement) {
        return refElem.parentNode?.insertBefore(elem, refElem.nextSibling);
    }

    scrollToView(element: Element | null, position = 'center', props: { parent?: HTMLElement; force?: boolean; animationTime?: number; top?: number; } = {} as never) {
        if (!element) return;
        const {
            parent = element.parentElement,
            force = true,
            animationTime = 0,
            top = 0,
        } = props;

        if (!parent) return;

        const attrName = 'animation.ts';
        const attrVal = (Date.now() + Math.random()).toString();
        const is = (pos: RegExp) => ~(position || 'center').search(pos);
        const isStatic = getComputedStyle(parent).position === 'static';
        const prevPosition = parent.style.position;

        if (isStatic) {
            parent.style.position = 'relative';
        }

        parent.setAttribute(attrName, attrVal);

        const scroll = (posMode = 's' || 'c' || 'e', dir = 'v' || 'h') => {
            const [pos, vol]: ['Top' | 'Left', 'Height' | 'Width'] = dir === 'v'
                ? ['Top', 'Height']
                : ['Left', 'Width'];

            const parentScroll = parent[`scroll${pos}`];
            const parentVol = parent[`client${vol}`];
            const elemVol = element[`client${vol}`];
            const elemPos = (element as never)[`offset${pos}`];

            const end = elemPos - parentVol + elemVol;
            const center = elemPos - parentVol / 2 + elemVol / 2;

            const cleanPos = posMode === 's'
                ? elemPos
                : posMode === 'e'
                    ? end
                    : center;
            const newPos = cleanPos - (pos === 'Top' ? top : 0);

            if (force || parentScroll > elemPos || parentScroll + parentVol < elemPos + elemVol) {
                if (animationTime < 1) parent[`scroll${pos}`] = newPos;
                else {
                    const diff = parent[`scroll${pos}`] - newPos;
                    const time = Math.abs(animationTime / diff);
                    const dir = diff > 0 ? -1 : 1;
                    let last = 0;

                    const step = (dec = 0) => setTimeout(() => {
                        const px = (parent[`scroll${pos}`] += dir) - dir;

                        if (parent.getAttribute(attrName) === attrVal)
                            if (dec < 5 && (dir > 0 ? px < newPos : px > newPos))
                                step(dec + (px !== last ? 0 : 1));

                        last = px;
                    }, time);

                    step();
                }
            }
        };

        [
            [/left/i, /right/i, /top/i, /bottom/i, /center +-/i, 'h'],
            [/top/i, /bottom/i, /left/i, /right/i, /- +center/i, 'v']
        ].forEach(([sReg, eReg, nsReg, neReg, ncReg, dir]: any[]) => {
            if (is(sReg)) scroll('s', dir);
            else if (is(eReg)) scroll('e', dir);
            else if (
                is(nsReg) || is(neReg)
                    ? is(/center/i)
                    : is(/center/i) && !is(ncReg)
            ) scroll('c', dir);
        });

        if (isStatic) parent.style.position = prevPosition;
    }

    unique<Item, Res>(arr: Item[], by: (f: Item) => Res) {
        const exclusives: Res[] = [];
        return arr.filter(item => exclusives.indexOf(by(item)) === -1 ? exclusives.push(by(item)) : false);
    }

    static values<T extends {} | []>(obj: T | nil) {
        return obj ? Object.values(obj) : [];
    }

    keys<Item extends {}>(item: Item): (keyof Item)[] {
        return Object.keys(item) as never;
    }

    randomSort<Item>(items: Item[]) {
        return items.sort(() => this.randomOf(-1, 1));
    }

    findMap<Item, Val, Def>(items: Item[], cb: (item: Item, index: number, items: Item[]) => Val, def: Def) {
        for (let i = 0; i < items.length; i++) {
            const val = cb(items[i], i, items);
            if (val) return val;
        }
        return def;
    }

    groupByFieldsSoftly<Item extends Record<Fieldn, Item[Fieldn]>, Fieldn extends string>(fieldns: Fieldn[], items: Item[], numOf: number, addRestMode: AddRestMode) {
        const lastFieldn = fieldns[fieldns.length - 1];
        const wraps = items
            .map((item) => ({ item }))
            .sort(({ item: a }, { item: b }) => {
                return this.findMap(fieldns, (fieldn, fieldni, fieldna) => {
                    return a[fieldn] > b[fieldn]
                        ? -1
                        : a[fieldn] < b[fieldn]
                            ? 1
                            : fieldni === fieldna.length - 1
                                ? this.randomOf(-1, 1)
                                : 0;
                }, 0);
            });
        const groups: Item[][] = this.netFromLine(wraps, numOf, ({ item }) => item);
        const teams: Item[][] = [];
        let rest: Item[] = [];

        for (let i = 0; i < numOf; i++) {
            const team: Item[] = [];
            teams.push(team);
            // eslint-disable-next-line no-loop-func
            groups.forEach((group) => {
                if (group.length === numOf) team.push(group[i]);
                else rest = group;
            });
        }

        const sorter: (a: number[], b: number[]) => number = addRestMode === 'strong'
            ? ([a], [b]) => b - a
            : addRestMode === 'weak'
                ? ([a], [b]) => a - b
                : () => this.randomOf(-1, 1);

        const map = teams
            .map((team, teami) => [team.reduce((rate, item) => rate + item[lastFieldn], 0), teami])
            .sort(sorter);

        rest.forEach((item, itemi) => {
            const [, index] = map[itemi];
            teams[index].push(item);
        });

        teams
            .sort(() => this.randomOf(-1, 1))
            .forEach((team) => team.sort(() => this.randomOf(-1, 1)));

        return teams;
    }

    netFromLine<Item, FillItem>(line: Item[], cols: number, map: (item: Item, rowi: number, index: number) => FillItem) {
        const rows: FillItem[][] = [];

        for (let i = 0, rowi = 0; i < line.length;) {
            const row: FillItem[] = [];
            rows.push(row);
            for (let j = 0; j < cols; j++, i++)
                if (i < line.length) row.push(map(line[i], rowi, i));
            rowi++;
        }

        return rows;
    }

    findNext<Item>(items: Item[], item: Item, step = 1) {
        return items[(items.indexOf(item) + Math.abs(step)) % items.length];
    }

    invokeOrGet(value: Function | any) {
        return (...args: any[]) => this.isFunc(value) ? value(...args) : value;
    }
}


const mylib = new MyLib();
export default mylib;



