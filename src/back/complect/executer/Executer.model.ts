import { SokiAppName } from "../soki/soki.model";

export type ExecutionMethod = 'formula' | 'set' | 'set_all' | 'push' | 'concat' | 'func' | 'migrate' | 'remove' | 'remove_each' | 'other';

export interface ExecutionDict<Value = any, Args = Record<string, any>> {
    action: string,
    method?: ExecutionMethod,
    value?: Value,
    prev?: Value,
    args?: Args,
    corrects?: unknown,
}

export interface ExecuteResults {
    fixes: string[],
    replacedExecs: ExecutionReal[],
    errorMessage: string,
}

export type ExecutionRuleTrackBeat = string | [string, string, any];
export type ExecutionTrack = ExecutionRuleTrackBeat[];

export type BasicRuleDict = Record<string, BasicRule>;

export interface BasicRule {
    method: ExecutionMethod,
    track?: ExecutionTrack,
    value?: unknown,
    args?: Record<string, unknown>,
}
export interface ExecutionRule extends BasicRule, NativeExecutionRule {
    action: string,
    title?: string,
    shortTitle?: string,
    level?: number,
    cloneArgs?: Record<string, string>,
    uniqs?: string[] | Record<string, string>,
    expected?: [] | {},
    access?: string,
    side?: BasicRuleDict,
    expecteds?: ExecutionExpectations,
    isSequre?: boolean,
    fixAccesses?: Record<string, ExecutionTrack>,
    writeArg?: string,
    ['/']?: ExecutionRule,
}

export type ExecutionExpectations = [ExecutionTrack, {} | []][];

export type ExecuterSetInEachValueItem = Record<string, Record<string, unknown>>;

export interface ExecutionRealAccumulatable extends NativeExecutionRule {
    expecteds?: ExecutionExpectations,
    args?: Record<string, any>,
    cloneArgs?: Record<string, string>,
    track: ExecutionTrack,
    sides?: BasicRule[],
    accesses: string[],
}

export type ExecutionFixedAccesses = Record<string, () => boolean>;

export interface ExecutionReal extends ExecutionRealAccumulatable {
    action: string;
    method: ExecutionMethod,
    title?: string,
    shortTitle?: string,
    isSequre?: boolean,
    level?: number,
    value: any,
    uniqs?: string[] | Record<string, string>,
    cloneArgs?: Record<string, string>,
    fix: ExecutionRuleTrackBeat,
    nativeRule?: ExecutionRule,
}

export interface NativeExecutionRule {
    setInEachValueItem?: ExecuterSetInEachValueItem,
}

export interface TrackerRet {
    parent: any;
    target: any;
    penultimate: any;
    lastTrace: any;
}

export type ExecutedAreas = Record<SokiAppName, string[]>;

export interface ExecutionResponse {
    ok: boolean;
    rejected?: [];
}

export enum ExecuteErrorType {
    Level = 'Нет прав',
    Access = 'Запрет',
    NoRule = 'Не найдено',
    Sequre = 'Не верный пароль',
    Error = 'Ошибка',
}

export interface ExecuteError {
    type: ExecuteErrorType,
    note: string;
}
