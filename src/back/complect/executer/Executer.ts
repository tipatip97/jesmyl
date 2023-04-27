/* eslint-disable eqeqeq */
import { sequreMD5Passphrase } from "../../values";
import smylib, { SMyLib } from "../soki/complect/SMyLib";
import { LocalSokiAuth } from "../soki/soki.model";
import { ExecuteError, ExecuteErrorType, ExecuteFeedbacks, ExecuterSetInEachValueItem, ExecutionDict, ExecutionExpectations, ExecutionMethod, ExecutionReal, ExecutionRealAccumulatable, ExecutionRule, ExecutionRuleTrackBeat, ExecutionSide, ExecutionSidesDict, ExecutionTrack, FixedAccesses, TrackerRet } from "./Executer.model";

const globs: Record<string, any> = {
    'setNewWid()': () => new Date().getTime() + Math.random()
};

const reportFailError = (rej: (resp: { ok: false, fail?: boolean, message: string }) => void, error: any) => rej({ ok: false, fail: true, message: error && (error.stack ?? error.message) });

export class Executer {
    static readonly stubEmpty = ['EMPTY'];

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

    static tracker(track: ExecutionTrack, parents: Record<string, unknown>, realArgs?: Record<string, unknown> | null, topParent?: Record<string, Object> | null, auth?: LocalSokiAuth | null): TrackerRet {
        const targets: any[] = topParent ? [topParent] : [];

        for (let tracei = 0; tracei < track.length; tracei++) {
            const trace = track[tracei];
            const target = targets[targets.length - 1];

            if (tracei === 0) {
                if (topParent) continue;
                if (smylib.isStr(trace)) targets.push(parents[trace]);
                else if (!Array.isArray(trace)) targets.push(trace);

                continue;
            } else if (trace === '.') continue;

            if (target == null)
                return {
                    parent: null,
                    target: null,
                    penultimate: targets[targets.length - 2],
                    lastTrace: track[track.length - 1] as string,
                };

            if (Array.isArray(trace)) {
                if (Array.isArray(target)) {
                    const val = target.find((val) => this.isExpected(val, trace, realArgs, auth));
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

    static isCorrectType(value: any, typer: number | string | (string | number)[]): boolean {
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

    static isExpected(source: Record<string, unknown>, inspector: (number | string | (number | string)[])[], args?: Record<string, unknown> | null, auth?: LocalSokiAuth | null): boolean {
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

    static replaceArgs<Value>(value: Value, realArgs: Record<string, any> | null = {}, auth?: LocalSokiAuth | null, defCb?: () => Value): Value {
        if (smylib.isStr(value)) {
            if (value.includes('{') && value.includes('}')) {
                let val: any = this.stubEmpty;
                const text = value.replace(/\{(([@*?])?([$\w]+(\(\))?))\}/g, (all, name, prefix, key) => {
                    val = prefix === '@' ? this.getIfGlob(name) : prefix === '*' ? auth?.[key as never] : realArgs?.[key];
                    return val ?? all ?? '';
                });
                if (val === this.stubEmpty && defCb) return defCb();
                return value.match(/{|}/g)?.length === 2 && value.match(/^{|}$/g)?.length === 2 ? val : text;
            } else return defCb ? defCb() : value;
        } else if (smylib.isobj(value)) {
            const newValue = smylib.newInstance(value) as Record<string, any>;

            for (const key in value) {
                const val = this.replaceArgs(value[key], realArgs, auth);

                if (val !== undefined) {
                    const arg = this.replaceArgs(key, realArgs, auth);
                    if (arg != null) newValue[arg] = val;
                    else newValue[key] = val;
                }
            }

            return newValue as never;
        }

        return defCb ? defCb() : value;
    }

    static prepareTrack = (path: string): ExecutionTrack => path.startsWith('<') ? [] : path.slice(1).split('/').map((part) => part.startsWith('[') && part.endsWith(']') ? part.slice(1, -1).split(' ') as ExecutionRuleTrackBeat : part).filter(part => part);

    static prepareActionList(actions: Record<string, ExecutionRule>, fixedAccesses: FixedAccesses) {
        const rules: ExecutionReal[] = [];

        const find = (composit: Record<string, ExecutionRule>, topRule: ExecutionRealAccumulatable = {} as never): ExecutionReal | null => {
            for (const key in composit) {
                const action = composit[key];
                if (key.startsWith('/') || (key.startsWith('<') && key.endsWith('>'))) {
                    const track = key.startsWith('<') ? [] : this.prepareTrack(key);
                    const accTrack = topRule.track?.concat(track || []) || track;

                    const accSides = () => {
                        const sides: ExecutionSide[] = topRule.sides || [];
                        const accSides = (accSideTrack: ExecutionRuleTrackBeat[], side?: ExecutionSidesDict) => {
                            if (!side) return;
                            SMyLib.entries(side).forEach(([key, side]: [string, ExecutionSide]) => {
                                const trackedSide = { ...side };
                                const sideTrack = accSideTrack.concat(this.prepareTrack(key));

                                SMyLib.entries(trackedSide).forEach(([key, val]) => {
                                    if (key.startsWith('/')) {
                                        delete trackedSide[key as never];
                                        accSides(sideTrack, { [key]: val as never });
                                    }
                                });

                                trackedSide.trackTail = [accTrack.length, sideTrack];
                                sides.push(trackedSide);
                            });
                        };

                        accSides([], action.side);
                        if (sides.length) return sides;
                    };

                    const accRule: ExecutionRealAccumulatable = {
                        track: accTrack,
                        args: { ...topRule.args, ...action.args },
                        expecteds: (action.expected ? topRule.expecteds || [] : topRule.expecteds)
                            ?.concat(action.expected ? [[accTrack.length, action.expected]] : []),
                        accesses: action.access
                            ? (topRule.accesses || []).concat(action.access)
                            : topRule.accesses,
                        sides: accSides(),
                    };

                    if (action.fixAccesses) {
                        fixedAccesses.push({
                            track: accTrack,
                            tail: action.fixAccesses,
                        });
                    }

                    const execRule: ExecutionReal = smylib.clone({
                        ...action,
                        ...accRule,
                        fix: accRule.track?.[0],
                        value: action.value,
                    });

                    SMyLib.entries(execRule).forEach(([argName]) => {
                        if (argName.startsWith('/') || argName.startsWith('<'))
                            delete execRule[argName as never];
                    });

                    if (accRule.accesses) execRule.fixedAccesses = fixedAccesses;

                    if (execRule.action)
                        rules.push(execRule);

                    const nextRule = find(action as never, accRule);
                    if (nextRule) return nextRule;
                }
            }
            return null;
        };

        find(actions);

        return rules;
    }

    static mapActionList(rules: ExecutionReal[]) {
        return rules.map(({ title, shortTitle, level, action, isSequre, args }) => {
            return {
                title,
                shortTitle,
                level,
                action,
                isSequre,
                args,
            };
        });
    }

    static prepareRuleForDo = (() => {
        const replacedFields: (keyof ExecutionReal)[] = ['value', 'sides'];
        const simpleFields: (keyof ExecutionReal)[] = [
            'action',
            'setInEachValueItem',
            'fix',
            'method',
            'expecteds',
        ];

        return (rule: ExecutionReal, realRule: ExecutionReal, allArgs: Record<string, unknown>, value: unknown, auth?: LocalSokiAuth | null) => {
            const ret: ExecutionReal = { ...rule };

            simpleFields.forEach((argn) => ret[argn] = realRule[argn]);

            replacedFields.forEach((argn) => {
                ret[argn] = this.replaceArgs(realRule[argn], allArgs, auth);
            });

            if (ret.value === undefined) ret.value = value ?? allArgs?.value;

            return ret;
        };
    })();

    static prepareRuleForFeedback(rule: ExecutionReal) {
        const ret = { ...rule };

        delete ret.setInEachValueItem;

        return ret;
    }

    static prepareRule(
        rule: ExecutionReal,
        value: unknown,
        contents: Record<string, unknown>,
        realArgs?: Record<string, unknown>,
        auth?: LocalSokiAuth | null,
    ) {
        const track = this.replaceArgs(rule.track, realArgs, auth);
        const allArgs: Record<string, unknown> = {
            ...realArgs,
            $$currentValue: this.tracker(track, contents, realArgs, null, auth).target,
        };

        const ret = {
            track,
            title: rule.title && smylib.stringTemplater(rule.title, allArgs),
        } as ExecutionReal;

        return this.prepareRuleForDo(ret, rule, allArgs, value, auth);
    }

    static checkExpecteds(track: ExecutionTrack, contents: Record<string, unknown>, expecteds?: ExecutionExpectations, args?: Record<string, unknown>) {
        let trackered = this.tracker(track, contents, args);

        if (trackered.target == null && expecteds) {
            expecteds.forEach(([trackEnd, expected]) => {
                const { penultimate, target, lastTrace } = this.tracker(track.slice(0, trackEnd), contents, args);
                if (target == null && penultimate) penultimate[lastTrace] = smylib.clone(expected);
            });

            return this.tracker(track, contents, args);
        }
        return trackered;
    }

    static execSides(topTrack: ExecutionTrack, sides: ExecutionSide[], contents: Record<string, unknown>, auth?: LocalSokiAuth | null, { shortTitle, title }: { shortTitle?: string, title?: string } = {}) {
        return new Promise<boolean>((resolve, reject) => {
            sides.some(({ method, value, args, trackTail }) => {
                if (trackTail) {
                    const track = topTrack.slice(0, trackTail[0]).concat(trackTail[1]);
                    const { lastTrace, penultimate, target } = this.tracker(track, contents, args, undefined, auth);

                    if (value === this.stubEmpty) {
                        reject(`Неизвестное значение попутных модификаций ${lastTrace} для действия "${shortTitle || title}"`);
                        return true;
                    }

                    this.doIt({ method, target, penultimate, lastTrace, value, realArgs: args, auth })
                        .then(resolve)
                        .catch((errorMessage) => reject(`#63674012239 ${errorMessage}`));
                }

                return false;
            });
        });
    }

    static isAccessDenied(
        accesses: string[] | undefined | null,
        fixedAccesses: FixedAccesses,
        contents: Record<string, unknown>,
        realArgs?: Record<string, unknown>,
        auth?: LocalSokiAuth | null,
    ) {
        if (!accesses) return false;
        const templaterFixedArgs: Record<string, boolean> = {};

        const onUnknownArg = (argName: string): boolean => {
            const trackFixed = fixedAccesses?.find(({ tail }) => tail[argName]);
            const track = trackFixed?.track.concat(trackFixed.tail[argName]);

            if (!track) return false;

            const result = !!this.tracker(track, contents, realArgs, null, auth);
            templaterFixedArgs[argName] = result;

            return result;
        };

        return accesses.some((accessFormula) => {
            try {
                const body = smylib.stringTemplater(accessFormula, templaterFixedArgs, onUnknownArg).replace(/[^()\w|&!?]/g, '');
                const data: { result?: boolean } = {};
                // eslint-disable-next-line no-new-func
                if (body) new Function('data', `data.result = ${body};`)(data);
                return !data.result;
            } catch (e) {
                console.error(e);
                return true;
            }
        });
    }

    static executeReals(contents: Record<string, any>, execs: ExecutionReal[]) {
        return new Promise<string[]>((resolve, reject) => {
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
                    if (did && exec.sides) this.execSides(exec.track, exec.sides, contents)
                        .then(() => resolve(fixes))
                        .catch((errorMessage) => reject(errorMessage));
                    else resolve(fixes);
                }).catch((errorMessage) => reject(errorMessage));
            });
        });
    }

    static execute(rules: ExecutionReal[], contents: Record<string, unknown>, execs: ExecutionDict[], auth?: LocalSokiAuth | null) {
        return new Promise<ExecuteFeedbacks>((resolve, reject) => {
            try {
                const replacedExecs: ExecutionReal[] = [];
                const fixes: string[] = [];
                const level = auth?.level;
                const errors: ExecuteError[] = [];

                execs.some((exec) => {
                    const prepRule = rules.find((rule) => rule.action === exec.action);
                    if (!prepRule) {
                        errors.push({
                            type: ExecuteErrorType.NoRule,
                            note: exec.action
                        });
                        return false;
                    }

                    if (prepRule.fixedAccesses) {
                        if (!prepRule.accesses || this.isAccessDenied(
                            prepRule.accesses,
                            prepRule.fixedAccesses,
                            contents,
                            exec.args,
                            auth
                        )) {
                            errors.push({
                                type: ExecuteErrorType.Access,
                                note: exec.action,
                            });

                            return true;
                        }
                    }

                    if (!exec.args || !prepRule.args) {
                        errors.push({
                            type: ExecuteErrorType.Args,
                            note: exec.action,
                        });

                        return true;
                    } else {
                        const argErrors = smylib.checkIsCorrectArgs(exec.action, exec.args, prepRule.args);
                        if (argErrors?.length) {
                            errors.push({
                                type: ExecuteErrorType.Args,
                                note: argErrors.join(';\n'),
                            });

                            return true;
                        }
                    }

                    const rule = this.prepareRule(prepRule, exec.value, contents, exec.args, auth);

                    const note = rule.shortTitle || rule.action;

                    if (rule.isSequre && (smylib.md5(exec.args?.passphrase || '') !== sequreMD5Passphrase)) {
                        errors.push({
                            type: ExecuteErrorType.Sequre,
                            note,
                        });
                        return true;
                    }

                    if (level != null && rule.level && rule.level > level) {
                        errors.push({
                            type: ExecuteErrorType.Level,
                            note,
                        });
                        return true;
                    }

                    if (smylib.isStr(rule.fix) && !fixes.includes(rule.fix)) fixes.push(rule.fix);

                    if (rule.track) {
                        const { target, penultimate, lastTrace } = this.checkExpecteds(rule.track, contents, rule.expecteds, rule.args);
                        this.setInEachValueItem(
                            rule.value,
                            rule.setInEachValueItem,
                            exec.args,
                            auth,
                        );

                        this.doIt({
                            target,
                            penultimate,
                            lastTrace,
                            auth,
                            realArgs: exec.args,
                            value: rule.value,
                            uniqs: rule.uniqs,
                            method: rule.method,
                        })
                            .then((did) => {
                                if (did) {
                                    replacedExecs.push(this.prepareRuleForFeedback(rule));

                                    if (rule.sides)
                                        this.execSides(rule.track, rule.sides, contents, auth, rule)
                                            .catch((note) => errors.push({ note, type: ExecuteErrorType.Error }));
                                }
                            })
                            .catch((note) => errors.push({ note, type: ExecuteErrorType.Error }));
                    }

                    return false;
                });

                setTimeout(() => {
                    const errorMessage = SMyLib.entries(errors.sort((a, b) => a.type > b.type ? 1 : a.type < b.type ? -1 : 0)
                        .reduce<Record<ExecuteErrorType, string[]>>((acc, { type, note }) => ({ ...acc, [type]: (acc[type] || []).concat(note) }), {} as never))
                        .reduce<string[]>((acc, [title, notes]) => acc.concat(`${title}:\n  ${notes.join(', ')}`), [])
                        .join('\n');

                    resolve({ fixes, replacedExecs, errorMessage });
                });
            } catch (error) {
                reportFailError(reject, error);
            }
        });
    }

    static setInEachValueItem(value: unknown, forces?: ExecuterSetInEachValueItem, realArgs?: Record<string, unknown>, auth?: LocalSokiAuth | null) {
        if (!forces) return;
        const forcesEntries = SMyLib.entries(forces);

        forcesEntries.forEach(([tracky, setts]) => {
            const setDeepper = (trackys: string[], deepItem: unknown) => {
                if (!trackys.length) {
                    if (smylib.isObj(deepItem))
                        SMyLib.entries(this.replaceArgs(smylib.clone(setts), realArgs, auth))
                            .forEach(([key, val]) => deepItem[key] = val);
                    else if (smylib.isArr(deepItem))
                        deepItem.forEach((nextItem) => setDeepper([], nextItem));
                    return;
                }

                const [trackBeat] = trackys;

                if (smylib.isObj(deepItem))
                    setDeepper(trackys.slice(1), deepItem[trackBeat]);

                if (smylib.isArr(deepItem)) {
                    const nextTracky = trackys.slice(1);
                    deepItem.forEach((nextItem) => setDeepper(nextTracky, nextItem[trackBeat]));
                }
            };

            tracky.split(/\s*,\s*/)
                .forEach((trackyBeat) => {
                    if (trackyBeat === '.') setDeepper([], value);
                    else setDeepper(trackyBeat.split('.'), value);
                })
        });
    }

    static ununiqErrorMessage(uniqs: string[] | Record<string, string> | undefined, target: Record<string, unknown>[], value: any) {
        if (!uniqs) return null;
        const key = (smylib.isArr(uniqs) ? uniqs : Object.keys(uniqs))
            .find((key) => {
                if (key === '.') return target.includes(value);
                else return target.some((val) => val[key] === value[key]);
            });

        if (key == null) return null;
        if (smylib.isArr(uniqs)) return key ? `Неуникальное значение ${key}` : null;
        else return uniqs[key];
    }

    static doIt({ method, target, penultimate, lastTrace, value, realArgs, auth, uniqs }: {
        method: ExecutionMethod,
        target: any,
        penultimate: any,
        lastTrace: string | number,
        value: any,
        realArgs?: Record<string, unknown>,
        auth?: LocalSokiAuth | null,
        uniqs?: string[] | Record<string, string>,
    }) {
        return new Promise<boolean>((resolve, reject) => {
            try {
                switch (method) {
                    case 'set':
                        if (penultimate) penultimate[lastTrace] = smylib.clone(value);
                        break;
                    case 'set_all':
                        if (target) SMyLib.entries(smylib.clone(value)).forEach(([key, val]) => target[key] = val);
                        break;
                    case 'formula':
                        try {
                            if (penultimate && smylib.isStr(value)) {
                                const val = this.replaceArgs(value, realArgs, auth);
                                if (smylib.isStr(val)) {
                                    const body = val.replace(/[^()X\d-+* /]/g, '').replace(/X/g, '' + (target || 0));
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
                        const pushTarget = smylib.isArr(target) ? target : penultimate[lastTrace] = [];
                        const error = this.ununiqErrorMessage(uniqs, pushTarget, value);
                        if (error) {
                            reject(error);
                            return;
                        }
                        pushTarget?.push(smylib.clone(value));
                        break;
                    case 'concat':
                        const concatTarget = smylib.isArr(target) ? target : penultimate[lastTrace] = [];
                        if (smylib.isArr(value)) {
                            const error = this.ununiqErrorMessage(uniqs, concatTarget, value);
                            if (error) {
                                reject(error);
                                return;
                            }
                            smylib.clone(value).forEach((val) => concatTarget.push(val));
                        }
                        break;
                    case 'remove':
                        if (smylib.isArr(target) && value != null)
                            if (smylib.isNum(value)) target.splice(value, 1);
                            else {
                                const valuei = target.findIndex((source: any) => this.isExpected(source, value, realArgs));
                                if (valuei > -1) target.splice(valuei, 1);
                            }
                        break;
                    case 'remove_each':
                        if (smylib.isArr(target) && value != null) {
                            penultimate[lastTrace] = target.filter((source: any) => !this.isExpected(source, value, realArgs));
                        }
                        break;
                    case 'migrate':
                        if (penultimate && value) {
                            SMyLib.entries(penultimate).forEach(([, item]: [any, any]) => {
                                const val = value[item[lastTrace]];
                                if (val != null) item[lastTrace] = val;
                            });
                            let next = +(penultimate as any[]).reduce((fin, currItem) => {
                                return fin < currItem[lastTrace] ? currItem[lastTrace] : fin;
                            }, 0) || 0;
                            const signs: number[] = [];

                            (penultimate as any[]).forEach((item) => {
                                const sign = item[lastTrace];
                                if (signs.includes(sign))
                                    item[lastTrace] = ++next;

                                signs.push(sign);
                            });
                        }
                        break;
                }

                resolve(true);
            } catch (e) {
                reject('' + e);
            }
        });
    }
}
