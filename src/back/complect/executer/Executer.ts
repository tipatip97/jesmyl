/* eslint-disable eqeqeq */
import smylib, { SMyLib } from "../soki/complect/SMyLib";
import { LocalSokiAuth } from "../soki/Soki.model";
import { ExecuteError, ExecuteErrorType, ExecuteResults, ExecutionDict, ExecutionExpectations, ExecutionMethod, ExecutionReal, ExecutionRealAccumulatable, ExecutionRule, ExecutionTrack, TrackerRet } from "./Executer.model";


const globs: Record<string, any> = {
    'setNewWid()': () => new Date().getTime() + Math.random()
};

const reportFailError = (rej: (resp: { ok: false, fail?: boolean, message: string }) => void, error: any) => rej({ ok: false, fail: true, message: error && (error.stack ?? error.message) });

export class Executer {
    findMap<Item, Ret>(arr: Item[], cb: (item: Item, itemi: number, itema: Item[]) => Ret): Ret | undefined {
        let ret = undefined;
        return arr.some((item, itemi, itema) => {
            const val = cb(item, itemi, itema);
            if (val === undefined) return false;
            else {
                ret = val;
                return true;
            }
        }) ? ret : undefined;
    }

    static tracker(track: ExecutionTrack, parents: Record<string, unknown>, args?: Record<string, unknown> | null, topParent?: Record<string, Object> | null, auth?: LocalSokiAuth): TrackerRet {
        const targets: any[] = topParent ? [topParent] : [];

        for (let tracei = 0; tracei < track.length; tracei++) {
            const trace = track[tracei];
            const target = targets[targets.length - 1];

            if (tracei === 0) {
                if (topParent) continue;
                if (smylib.isStr(trace)) targets.push(parents[trace]);
                else if (!Array.isArray(trace)) targets.push(trace);

                continue;
            }

            if (target == null) return {
                penultimate: null,
                lastTrace: null,
                parent: null,
                target: null
            };

            if (Array.isArray(trace)) {
                if (Array.isArray(target)) {
                    const val = target.find((val) => this.isExpected(val, trace, args, auth));
                    targets.push(val);
                    continue;
                }
            } else targets.push(target[trace]);
        }

        return {
            parent: targets[0],
            target: targets[targets.length - 1],
            penultimate: targets[targets.length - 2],
            lastTrace: track[track.length - 1] as string,
        };
    }

    static getGlob(globName: string, ...args: any) {
        if (globName[0] === '@') globName = globName.slice(1);

        const track = smylib.explode(':', globName, 2);
        const traces = smylib.explode('.', track[0]);
        const name = traces[0];

        if (globs[name]) {

            if (traces.length < 2) {
                const glob = globs[name];
                let result = glob;

                if (smylib.isFunc(glob)) {

                    if (track[1]) {
                        const args = smylib.explode(':', track[1]);
                        result = glob(...args);
                    } else result = glob();
                }

                return result;
            } else {
                const parents = {};
                const parent = this.tracker(traces, parents, null, globs)['target'];

                if (track.length > 1) {
                    track[1] = JSON.parse(track[1]);
                    return this.tracker(track, parents, null, parent)['target'];
                } else return parent;
            }
        } else return args[1];
    }

    static getIfGlob(field: string, ...defs: any[]) {
        const def = defs.length ? defs[0] : field;

        if (!smylib.isStr(field) || field[0] !== '@') {
            return def;
        } else {
            return this.getGlob(field.slice(1), def);
        }
    }

    static getAttribute(target: any, topField: (string | number) | (string | number)[]): any {
        let fields;

        if (smylib.isArr(topField)) fields = topField;
        else fields = [topField];

        const isVariated = smylib.isArr(topField);

        for (let i = 0; i < fields.length; i++) {
            const field = fields[i];

            if (smylib.isStr(field)) {
                const name = field.slice(1);

                if (field[0] === '.') {
                    if (field === '.') {
                        if (isVariated && target == null) continue;
                        return target;
                    } else if (name === 'length') {
                        if (isVariated && !target.length) continue;
                        return target.length;
                    }
                } else if (field[0] === '!') {
                    if (isVariated && target) continue;
                    return !target;
                } else if (field[0] === '@') {
                    const val = this.getGlob(name);

                    if (isVariated && val == null) continue;
                    return val;
                } else if (field[0] === '?') {
                    const val = this.isExpected(target, target[name]);

                    if (isVariated && !val) continue;
                    return val;
                } else if (field[0] === '*') {
                    const val = target[name] === undefined || this.isExpected(target, target[name]);

                    if (isVariated && !val) continue;
                    return val;
                } else {
                    let val;
                    if (field[0] === '\\' || field[0] === '$') {
                        if (target[name] != null) val = target[name];
                    } else if (target[field] != null) val = target[field];
                    if (isVariated && val == null) continue;
                    return val;
                }
            } else {
                const res = target[field];
                if (isVariated && res == null) continue;
                return res;
            }
        }
    }

    static isCorrectType(value: any, typer: string | string[]): boolean {
        if (smylib.isStr(typer)) {
            if (typer[0] === '#') {
                const explodes = smylib.explode(':', typer, 2);
                const type = explodes[0]?.slice(1);
                if (type) {
                    const lower = type.toLowerCase();

                    if ((lower === type && value == null) || lower === 'any') return true;

                    let isCorrect = false;

                    if (lower === 'list') isCorrect = smylib.isArr(value);
                    else if (lower === 'dict') isCorrect = smylib.isObj(value);
                    else if (lower === 'object') isCorrect = smylib.isobj(value);
                    else if (lower === 'string') isCorrect = smylib.isStr(value);
                    else if (lower === 'str') isCorrect = value === '' || value === '1';
                    else if (lower === 'number') isCorrect = smylib.isNum(value);
                    else if (lower === 'num') isCorrect = value === 0 || value === 1;
                    else if (lower === 'boolean') isCorrect = smylib.isBool(value);
                    else if (lower === 'simple') isCorrect = smylib.isStr(value) || smylib.isNum(value);
                    else if (lower === 'primitive') isCorrect = smylib.isBool(value) || smylib.isStr(value) || smylib.isNum(value);

                    return isCorrect;
                }
            } else if (typer.startsWith('/') && typer.endsWith('/')) {
                return !!typer.match(value);
            } else return value === typer;
        } else if (smylib.isobj(typer)) {
            for (const typn in typer)
                if (smylib.typeOf(value) !== smylib.typeOf(typer[typn]))
                    return false;
            return true;
        } else if (value === typer) return true;

        return false;
    }

    static isExpected(source: Record<string, unknown>, inspector: (number | string | (number | string)[])[], args?: Record<string, unknown> | null, auth?: LocalSokiAuth): boolean {
        if (inspector == null) return false;

        if (smylib.isobj(inspector)) {
            if (Array.isArray(inspector)) {
                const valLen = inspector.length;

                if (valLen === 1) return !!inspector[0];
                else if (valLen > 2) {
                    const step = 3;
                    let happensCount = 0;
                    let wholeCount = 0;
                    let prevLogicEnd: '' | '&' | '|' = '';

                    for (let i = 0; i < valLen; i += step) {
                        wholeCount += 1;

                        const field = this.replaceArgs(inspector[i], args, auth, () => this.getAttribute(source, inspector[i]));
                        let operator = inspector[i + 1];
                        const sign = this.replaceArgs(inspector[i + 2], args, auth);
                        let result = false;

                        if (smylib.isStr(operator)) {
                            const logicEnd = operator[operator.length - 1] as '|' | '&';
                            const logicStart = operator[0];
                            const logics = ['&', '|', '(', ')'];
                            const logicBrackets = ['(', ')'];

                            if (logics.indexOf(logicStart) > -1) operator = operator[1];
                            if (logicEnd && logics.indexOf(logicEnd) > -1)
                                operator = operator?.slice(0, -1);

                            if (operator === "==") result = field == sign;
                            else if (operator === "===") result = field === sign;
                            else if (operator === ">=") result = field >= sign;
                            else if (operator === "<=") result = field <= sign;
                            else if (operator === "!=") result = field != sign;
                            else if (operator === "!==") result = field !== sign;
                            else if (operator === "<") result = field < sign;
                            else if (operator === ">") result = field > sign;
                            else if (operator === "is" || operator === "not") {
                                const isNot = operator === "not";

                                result = sign === 'Truthy'
                                    ? (isNot ? !field : !!field)
                                    : (sign === 'Falsy'
                                        ? (isNot ? !!field : !field)
                                        : (isNot ? !this.isCorrectType(field, sign) : this.isCorrectType(field, sign)));
                            } else if ((operator === 'in' || operator === 'out') && smylib.isArr(sign)) {
                                return operator === 'in' ? sign.includes(field) : !sign.includes(field);
                            }

                            if (result) {
                                if (logicEnd === '|' || prevLogicEnd === '|') return true;
                                else happensCount++;
                            } else if (logicEnd === '&' || logicStart === '&' || prevLogicEnd === '&') return false;

                            if (logicEnd && logicBrackets.indexOf(logicEnd) < 0 && logics.indexOf(logicEnd) > -1) prevLogicEnd = logicEnd;
                        }
                    }

                    return !!(wholeCount && (happensCount === wholeCount));
                }
            } else {
                for (const key in inspector as {}) {
                    const tern = 'WHEN';
                    if (key === tern) {
                        const num = this.isExpected(source, inspector[tern][0], args, auth) ? 1 : 2;

                        return this.isExpected(source, inspector[tern][num], args, auth);
                    } else if (source[key] !== inspector[key])
                        return false;
                }
                return true;
            }
        } else return inspector;

        return false;
    }

    static replaceArgs<Value>(value: Value, args: Record<string, any> | null = {}, auth?: LocalSokiAuth, defCb?: () => string): any {
        if (smylib.isStr(value)) {
            if (value.includes('{') && value.includes('}')) {
                const initial: string[] = ['INITIAL'];
                let val: any = initial;
                const text = value.replace(/\{(([@*?])?(\w+(\(\))?))\}/g, (all, name, prefix, key) => {
                    val = prefix === '@' ? this.getIfGlob(name) : prefix === '*' ? auth?.[key as never] : args?.[key];
                    return val || all || '';
                });
                if (val === initial && defCb) return defCb();
                return value.match(/{|}/g)?.length === 2 && value.match(/^{|}$/g)?.length === 2 ? val : text;
            } else return defCb ? defCb() : value;
        } else if (smylib.isobj(value)) {
            const newValue = smylib.isArr(value) ? [] : {} as Record<string, any>;

            for (const key in value) {
                const val = this.replaceArgs(value[key], args, auth);

                if (val !== undefined) {
                    const arg = this.replaceArgs(key, args, auth);
                    if (arg != null) newValue[arg] = val;
                    else newValue[key] = val;
                }
            }

            return newValue;
        }

        return defCb ? defCb() : value;
    }

    static cloneArgs(args: Record<string, unknown>, cloneArgs?: Record<string, string>) {
        SMyLib.entries(cloneArgs || {}).forEach(([from, to]) => {
            if (args[to] === undefined && args[from] !== undefined) args[to] = args[from];
        });
        return args;
    }

    static findRule(rules: ExecutionRule[], exec: ExecutionDict<any, any>, auth?: LocalSokiAuth): ExecutionReal | null {
        const find = (rules: ExecutionRule[], topRule: ExecutionRealAccumulatable = {} as never): ExecutionReal | null => {
            for (const rule of rules) {
                const accTrack = topRule.track?.concat(rule.track || []) || rule.track;
                const accRule: ExecutionRealAccumulatable = {
                    track: accTrack,
                    args: this.cloneArgs({ ...topRule.args, ...rule.args }, rule.cloneArgs),
                    expecteds: (rule.expected ? topRule.expecteds || [] : topRule.expecteds)
                        ?.concat(rule.expected ? [[accTrack, rule.expected]] : []),
                    accesses: (rule.access ? topRule.accesses || [] : topRule.accesses)
                        ?.concat(rule.access ? [(accTrack || []).concat(rule.access)] : []),
                    sides: (rule.side ? topRule.sides || [] : topRule.sides)?.concat(
                        rule.side?.map(({ track, ...other }) => {
                            return { ...other, track: accTrack.concat(track || []) };
                        }) || []),

                };
                if (rule.action === exec.action) {
                    const ret = this.replaceArgs<ExecutionReal>({
                        ...accRule,
                        action: rule.action,
                        method: rule.method,
                        level: rule.level,
                        uniqs: rule.uniqs,
                        fix: accRule.track[0],
                        value: rule.value === undefined ? exec.value ?? exec.args?.value : rule.value,
                        shortTitle: rule.shortTitle,
                    }, exec.args, auth);
                    return ret;
                }
                if (rule.next) {
                    const nextRule = find(rule.next, accRule);
                    if (nextRule) return nextRule;
                }
            }
            return null;
        };

        return find(rules);
    }

    static checkExpecteds(track: ExecutionTrack, contents: Record<string, unknown>, expecteds?: ExecutionExpectations, args?: Record<string, unknown>) {
        let trackered = this.tracker(track, contents, args);

        if (trackered.target == null && expecteds) {
            expecteds.forEach(([track, expected]) => {
                const { penultimate, target, lastTrace } = this.tracker(track, contents, args);
                if (target == null && penultimate) penultimate[lastTrace] = smylib.clone(expected);
            });

            return this.tracker(track, contents, args);
        }
        return trackered;
    }

    static execSides(sides: ExecutionRule[], contents: Record<string, unknown>, auth?: LocalSokiAuth) {
        sides.forEach(({ method, value, args, track }) => {
            if (track) {
                const { lastTrace, penultimate, target } = this.tracker(track, contents, args, undefined, auth);
                this.doIt({ method, target, penultimate, lastTrace, value, args, auth });
            }
        });
    }

    static isAccessed(accesses: ExecutionTrack[] | undefined | null, contents: Record<string, unknown>, args?: Record<string, unknown>, auth?: LocalSokiAuth) {
        return !accesses || !accesses.some((track) => !this.tracker(track, contents, args, null, auth).target);
    }

    static executeReals(contents: Record<string, any>, execs: ExecutionReal[]) {
        return new Promise<string[]>((res) => {
            const fixes: string[] = [];

            execs.forEach((exec) => {
                const firstTrace = exec.track[0];
                if (smylib.isStr(firstTrace) && !fixes.includes(firstTrace)) fixes.push(firstTrace);
                const { penultimate, target, lastTrace } = this.checkExpecteds(exec.track, contents, exec.expecteds);

                this.doIt({
                    method: exec.method,
                    target,
                    penultimate,
                    lastTrace,
                    value: exec.value,
                    uniqs: exec.uniqs,
                }).then((did) => {
                    if (did && exec.sides) this.execSides(exec.sides, contents);
                });
            });

            res(fixes);
        });
    }

    static execute(rules: ExecutionRule[], contents: Record<string, unknown>, execs: ExecutionDict[], auth?: LocalSokiAuth) {
        return new Promise<ExecuteResults>((res, rej) => {
            try {
                const replacedExecs: ExecutionReal[] = [];
                const fixes: string[] = [];
                const level = auth?.level;
                const errors: ExecuteError[] = [];

                execs.forEach((exec) => {
                    const rule = this.findRule(rules, exec, auth);

                    if (rule)
                        if (this.isAccessed(rule.accesses, contents, exec.args, auth)) {
                            if (level != null && rule.level && rule.level > level) {
                                errors.push({
                                    type: ExecuteErrorType.Access,
                                    note: rule.shortTitle || rule.action
                                });
                                return;
                            }
                            if (smylib.isStr(rule.fix) && !fixes.includes(rule.fix)) fixes.push(rule.fix);

                            if (rule?.track) {
                                const value = rule.value;
                                const { lastTrace, penultimate, target } = this.checkExpecteds(rule.track, contents, rule.expecteds, rule.args);

                                replacedExecs.push(rule);

                                this.doIt({
                                    target,
                                    penultimate,
                                    lastTrace,
                                    value,
                                    auth,
                                    args: exec.args,
                                    method: rule.method,
                                    uniqs: rule.uniqs,
                                }).then((did) => {
                                    if (did && rule.sides) this.execSides(rule.sides, contents, auth);
                                });
                            }
                        } else errors.push({
                            type: ExecuteErrorType.Access,
                            note: rule.shortTitle || rule.action
                        });
                    else errors.push({
                        type: ExecuteErrorType.NoRule,
                        note: exec.action
                    });
                });

                const errorMessage = SMyLib.entries(errors.sort((a, b) => a.type > b.type ? 1 : a.type < b.type ? -1 : 0)
                    .reduce<Record<ExecuteErrorType, string[]>>((acc, { type, note }) => ({ ...acc, [type]: (acc[type] || []).concat(note) }), {} as never))
                    .reduce<string[]>((acc, [title, notes]) => acc.concat(`${title}:\n  ${notes.join(', ')}`), [])
                    .join('\n');

                res({ fixes, replacedExecs, errorMessage });
            } catch (error) {
                reportFailError(rej, error);
            }
        });
    }

    static isUniq(uniqs: string[] | undefined, target: Record<string, unknown>[], value: any) {
        return !uniqs || !uniqs.some((uniq) => {
            if (uniq === '.') return target.includes(value);
            else return target.some((val) => val[uniq] === value);
        });
    }

    static doIt({ method, target, penultimate, lastTrace, value, args, auth, uniqs }: {
        method: ExecutionMethod,
        target: any,
        penultimate: any,
        lastTrace: string | number,
        value: any,
        args?: Record<string, unknown>,
        auth?: LocalSokiAuth,
        uniqs?: string[],
    }) {
        return new Promise((res, rej) => {
            try {
                switch (method) {
                    case 'set':
                        if (penultimate) penultimate[lastTrace] = value;
                        break;
                    case 'set_all':
                        if (target) SMyLib.entries(value).forEach(([key, val]) => target[key] = val);
                        break;
                    case 'formula':
                        try {
                            if (penultimate && smylib.isStr(value) && smylib.isNum(target)) {
                                const val = this.replaceArgs(value, args, auth);
                                if (smylib.isStr(val)) {
                                    const body = val.replace(/[^()X\d-+* /]/g, '').replace(/X/g, '' + target);
                                    const data: { result?: number } = {};
                                    // eslint-disable-next-line no-new-func
                                    new Function('data', `data.result = ${body};`)(data);
                                    if (data.result != null) penultimate[lastTrace] = data.result;
                                }
                            }
                        } catch (e) {
                            console.error(e);
                        }
                        break;
                    case 'push':
                        if (smylib.isArr(target) && this.isUniq(uniqs, target, value)) target?.push(value);
                        break;
                    case 'concat':
                        if (penultimate && smylib.isArr(target) && this.isUniq(uniqs, target, value)) penultimate[lastTrace] = target.concat(value);
                        break;
                    case 'remove':
                    case 'remove_each':
                        if (smylib.isArr(target) && penultimate && value && this.isUniq(uniqs, target, value))
                            penultimate[lastTrace] = target.filter((source: any) => !this.isExpected(source, value as never, args));
                        break;
                    case 'migrate':
                        if (penultimate && value) {
                            SMyLib.entries(penultimate).forEach(([, item]: [any, any]) => {
                                const val = value[item[lastTrace]];
                                if (val != null) item[lastTrace] = val;
                            });
                        }
                        break;
                    default:
                        res(true);
                }

                res(true);
            } catch (e) {
                rej(e);
            }
        });
    }
}
