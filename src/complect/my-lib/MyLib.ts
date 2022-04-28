/* eslint-disable no-cond-assign */
/* eslint-disable eqeqeq */
import { StringTemplaterArgs } from "./MyLib.model";

var md5 = require('md5');

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

    searchRate<FerryType, ObjName extends keyof FerryType = keyof FerryType>(objects: FerryType[ObjName][], searchWord: string, places: (Trace[] | Trace)[], objName: ObjName): Ferry<FerryType, ObjName>[] {
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

    normQuery(query: string) {
        return query.replace(/[^-a-z0-9]/g, all => `_${all.charCodeAt(0)}`);
    }

    stringTemplater<Args>(str: string, topArgs: Args): string {
        topArgs = Object.assign({
            ink: (num: number, post = '', pre = '') => num == null ? null : `${pre}${num - -1}${post}`,
            switch: function (...args: any[]) {
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
        }, topArgs);

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

    useElement(nodeName: string, topId: string, cb: (elem: HTMLElement) => void, doc = document, forceReborn = false): HTMLElement {
        const id = this.normQuery(topId);
        const oldElement = document.querySelector(`#${id}`);

        if (oldElement) {
            if (forceReborn) {
                oldElement.remove();
            } else {
                cb && cb(oldElement as HTMLElement);
                return oldElement as HTMLElement;
            }
        }

        const element = document.createElement(nodeName);

        element.id = id;
        let serviceNode = document.querySelector('#service_node');
        if (!serviceNode) {
            serviceNode = document.createElement('div');
            serviceNode.id = 'service_node';
            doc.body.appendChild(serviceNode);
        }
        serviceNode.appendChild(element);
        cb && cb(element);
        return element;
    }

    compileCss(scss: string, styleId: string) {
        const tromb = (p => {
            let t = 0;
            return () => `${p}${t++}`;
        })('<');

        let colonCode = 1000000;

        while (scss.match(String.fromCharCode(colonCode))) {
            colonCode++;
        }

        const replaceColons = (str: string) => str.replace(/:/g, all => String.fromCharCode(colonCode));
        let text;

        try {

            text = '{' + scss
                // comments
                .replace(/\/\*+[\w\W]*?\*+\//g, '')
                .replace(/(^|\n)\s*\/{2,}.*?(?=\n)/g, '$1')

                .replace(/"/g, '\\"')

                .replace(/(^|[;{}])[^};]*?{/g, all => replaceColons(all))
                .replace(/\s*,\s*/g, ',') // {
                .replace(/([\s\n ]*|[{};,])[\s\n ]*(.+?)[\n\s ]*{/g, (all, $1, $2) => `${$1}\n\n  "${replaceColons($2)}${tromb()}": {`)
                .replace(/([-\w]+)[\n\s ]*:[\n\s ]*([\w\W]+?)[;\n}]/ig, (all, $1, $2) => `"${replaceColons($1)}${tromb()}":"${replaceColons($2)}",`) // {
                .replace(/(\s*),(\s*)}/g, '$1$2}') // {{
                .replace(/([}\]])(\s*)"/g, '$1,$2"')
                .replace(RegExp(String.fromCharCode(colonCode), 'g'), ':')

                + '}';

            return this.stringifyCss(JSON.parse(text)); // {{
        } catch (error) {
            console.error(`CSS Parser Error. incorrect css text${styleId ? ` in ${styleId}` : ''}`, error, text);
            throw error;
        }
    }

    stringifyCss(obj: any) {
        const trombReg = /<\d+$/g;
        let css = '';

        const stringifyCss = (obj: any, topPath = '', isAnnotate = false, isAnnotateInner = false) => { // {

            css += isAnnotateInner
                ? `${topPath}{`
                : isAnnotate
                    ? `}${topPath}{`
                    : topPath
                        ? `}${topPath}{`
                        : '';
            for (const objn in obj)
                if (this.isStr(obj[objn]))
                    css += `${objn.replace(trombReg, '').replace(/([A-Z])/g, all => `-${all.toLowerCase()}`)}:${obj[objn]};`;

            for (const objn in obj)
                if (typeof obj[objn] !== 'string') {
                    const query = objn.replace(trombReg, '');
                    const isAnn = /^\s*@/.test(query);
                    const includeQuery = () => topPath
                        .split(',')
                        .map(
                            sTopPath => query
                                .split(',')
                                .map(sQuery => /^=/.test(sQuery)
                                    ? sQuery.trim().replace(/^=/, '')
                                    : /&/.test(sQuery)
                                        ? sQuery.trim().replace(/&/g, sTopPath.trim())
                                        : `${sTopPath.trim()} ${sQuery.trim()}`
                                ).join(',')
                        ).join(',');

                    const path = (isAnn || isAnnotateInner || isAnnotate ? query : includeQuery()).trim().replace(/\s*([,>+])\s*/g, '$1');

                    stringifyCss(obj[objn], path, isAnn, isAnnotate);
                }
            css += isAnnotateInner
                ? `}`
                : '';
        }

        stringifyCss(obj);

        return `${css}}`.replace(/}/, '').replace(/(^|})[^{]+{}/g, '$1');
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

    dconsl(...args: any[]) {
        return this.consl(...args);
    }
    conslConfig(args: any[]) {
        return {
            val: args[0],
            value: args[0],
            args,
            get: (argn: number) => args[argn],
        };
    }

    _clearButton?: HTMLButtonElement;
    _conslBox?: HTMLDivElement;

    conslBox({ top, toggle, show }: { top?: string, toggle?: boolean, show?: string } = {} as never) {

        if (this._conslBox == null)
            this._conslBox = this.useElement('div', `consl-app`, box => {
                box.style.display = 'none';

                this.useElement('style', 'consl-style', style => {
                    style.innerText = (`
                .consl-grey {color: grey;}
                .consl-green {color: green;}
                .consl-violet {color: violet;}
                .consl-red {color: pink;}
                .consl-blue {color: blue;}
                .consl-pre {margin: 0;padding: 0;display: inline-block;}
            `);
                });

            }) as HTMLDivElement;

        if (top) {
            this._conslBox.style.position = 'absolute';
            this._conslBox.style.marginTop = top;
        }
        if (toggle) {
            this._conslBox.style.display = this._conslBox.style.display ? null as never : 'none';
        }
        if (show != null) {
            this._conslBox.style.display = show ? null as never : 'none';
        }


        return this._conslBox;
    }

    cconsl(...args: any[]) {
        this.consl(...args);
        console.log(...args);
    }

    consl(...args: any) {
        const config: any = this.conslConfig(args);

        try {

            let clearButton = this._clearButton || document.getElementById(`consl-app-clear`);
            if (clearButton == null) {
                const button = document.createElement(`button`);
                button.id = `consl-app-clear`;
                button.innerText = `CLEAR`;
                button.onclick = event => document.querySelectorAll(`.consl-app-message`).forEach(box => box.remove());
                this.conslBox().appendChild(button);
                this._clearButton = clearButton = button;
            }
            const typizator = (some: any, parent: HTMLElement, name?: string | nil, level = 0, isOwn = true, specialText = null) => {

                const someType = this.typeOf(some);

                const element = document.createElement('div');
                parent.appendChild(element);
                let html: string = '';
                const repHtmls = (str: string) => str.replace(/[<>&#]/g, all => `&#${all.charCodeAt(0)};`);

                const innerHTML = (htmlText: string) => `${name == null ? '' : `<span class="consl-${name && isOwn ? 'violet' : 'grey'}">${name ? '' : '"'}${name}${name ? '' : '"'}</span>: `}${htmlText}`;

                if (specialText) html = `<span class="consl-green">${specialText}</span>`;
                else
                    switch (someType) {
                        case 'Str':
                            const bracket = `<span class="consl-grey">"</span>`;
                            const text = repHtmls(some);
                            const isSliced = text.length > 150;
                            const head = isSliced ? text.slice(0, 100) : text;

                            const strHtml = (innerTxt: string, showInfo = true) => `<pre class="consl-red consl-pre">${bracket}${innerTxt}${bracket}</pre>${isSliced && showInfo ? `<sub class="consl-grey">(показано ${head.length} из ${text.length} символов)</sub>` : ''}`;
                            html = strHtml(head);
                            if (isSliced) {
                                let opened = true;

                                element.onclick = e => {
                                    e.preventDefault();
                                    e.stopPropagation();

                                    element.innerHTML = innerHTML(strHtml(opened ? head : text, opened));
                                    opened = !opened;
                                };
                            }

                            break;
                        case 'Bool':
                        case 'Nan':
                        case 'Num':
                            html = `<span class="consl-blue">${some}</span>`;
                            break;
                        case 'Null':
                        case 'Und':
                            html = `<span class="consl-grey">${some}</span>`;
                            break;
                        case 'Func':
                            html = some.name
                                ? `<span class="consl-grey">${/^\s*class/.test(some.toString()) ? 'class ' : ''}${name === some.name ? '' : `${some.name} `}</span>()`
                                : '()';

                            (() => {
                                const box = document.createElement('div');
                                let isFirstly = true;
                                box.hidden = true;
                                const prevParams = '["val"]';

                                element.ondblclick = e => {
                                    e.preventDefault();
                                    e.stopPropagation();

                                    const paramsStr = prompt(`invoke ${name || 'function'}`, prevParams) || '[]';
                                    const params = JSON.parse(paramsStr);

                                    some.apply(null, params);
                                };

                                element.onclick = e => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    box.hidden = !box.hidden;

                                    if (isFirstly) {
                                        isFirstly = false;
                                        element.appendChild(box);
                                        box.innerHTML = `<pre>${some}</pre>`;
                                    }
                                };
                            })();
                            break;
                        case 'Arr':
                        case 'Obj':
                            (() => {
                                const isArr = someType === 'Arr';
                                const box = document.createElement('div');
                                let isFirstly = true;
                                box.hidden = true;


                                if (some instanceof RegExp) {
                                    html = some.toString();
                                } else {
                                    html = isArr
                                        ? `[<span class="consl-grey">${some.length}</span>]`
                                        : some.constructor && some.constructor.name && some.constructor.name !== 'Object'
                                            ? `<span class="consl-grey">${some.constructor.name}</span> {}`
                                            : '{}';
                                    element.onclick = e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        box.hidden = !box.hidden;

                                        if (isFirstly) {
                                            isFirstly = false;
                                            element.appendChild(box);
                                            const owns = this.getAllProperties(some).filter(propn => !some.hasOwnProperty(propn));

                                            Object.keys(some).concat(isArr ? ['length'] : []).forEach(fieldn => typizator(some[fieldn], box, fieldn, level + 1, some.hasOwnProperty(fieldn)));
                                            if (owns.length) {
                                                let isInnFirstly = true;
                                                const innBox = document.createElement('div');
                                                const elem = typizator([], box, null, level + 1, false, ((some || 0).constructor || 0).name || 'open()');
                                                innBox.hidden = true;

                                                elem.onclick = e => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    innBox.hidden = !innBox.hidden;

                                                    if (isInnFirstly) {
                                                        isInnFirstly = false;
                                                        box.appendChild(innBox);
                                                        owns.forEach(fieldn => typizator(some[fieldn], innBox, fieldn, level + 1, false));
                                                    }
                                                };
                                            }
                                        }
                                    };
                                }
                            })();
                            break;
                    }

                element.style.marginLeft = `${level ? 15 : 0}px`;
                element.innerHTML = innerHTML(html);


                return element;
            };

            const child = document.createElement(`div`);
            const className = 'consl-app-message';

            child.style.borderBottom = `solid 1px grey`;
            child.style.marginBottom = `1em`;
            child.style.maxHeight = ``;
            child.className = className;
            Array.from(arguments).forEach(something => typizator(something, child));
            this.insertAfter(child, clearButton);


            const setConfig = (params: any = {}) => {
                const {
                    type = 1,
                    top = '100vh',
                    unclosable = false
                } = params;

                const [bgColor = 'black', color = 'white'] = [[`red`], [`black`], [`blue`], ['orange', 'black']][type] || [];

                child.style.backgroundColor = bgColor;
                child.style.color = color;

                if (unclosable) child.classList.remove(className);

                this.conslBox({ top });
                return config;
            };

            const insertAfter = (element: HTMLElement) => {
                this.insertAfter(child, element);
                return config;
            };

            setConfig();
            config.config = setConfig;
            config.insertAfter = insertAfter;

            return config;
        } catch (error) {
            config.config = () => {
                throw error;
            };
            config.insertAfter = () => {
                throw error;
            };

            return config;
        }
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
  
    clone(obj: any) {
      const cloned: any[] = [];
      
      const clone = (what: any) => {
        if (this.isStr(what)) return '' + what;
        if (this.isNum(what)) return 0 + what;
        if (this.isBool(what)) return !!what;
        if (what == null || this.isFunc(what)) return what;
        
        if (this.isobj(what)) {
          if (cloned.indexOf(what) > -1) throw Error('Circular clone');
          cloned.push(what);
          const newObj: any = this.isArr(what) ? [] : {};
          
          for (const whatn in what) 
            newObj[whatn] = clone(what[whatn]);
          
          return newObj;
        }
      };
      
      return clone(obj);
    }
}


const mylib = new MyLib();
export default mylib;




