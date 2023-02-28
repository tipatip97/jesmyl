import { SokiAppName } from "../soki/soki.model";

export type ExecutionMethod = 'formula' | 'set' | 'set_all' | 'push' | 'concat' | 'func' | 'migrate' | 'remove' | 'remove_each' | 'other';

export interface ExecutionDict<Value = any, Args = Record<string, any>> {
    action: string,
    method: ExecutionMethod,
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

export interface ExecutionRule {
    action: string,
    method: ExecutionMethod,
    title?: string,
    shortTitle?: string,
    level?: number,
    cloneArgs?: Record<string, string>,
    args?: Record<string, unknown>,
    track?: ExecutionTrack,
    uniqs?: string[] | Record<string, string>,
    expected?: [] | {},
    access?: string,
    side?: ExecutionRule,
    value?: unknown,
    expecteds?: [ExecutionTrack, [] | {}][],
    isSequre?: boolean,
    fixAccesses?: Record<string, ExecutionTrack>,
}

export type ExecutionExpectations = [ExecutionTrack, {} | []][];

export interface ExecutionRealAccumulatable {
    expecteds?: ExecutionExpectations,
    args: Record<string, any>,
    track: ExecutionTrack,
    sides?: ExecutionRule[],
    accesses: string[],
}

export type ExecutionFixedAccesses = Record<string, () => boolean>;

export interface ExecutionReal extends ExecutionRealAccumulatable {
    action: string;
    method: ExecutionMethod,
    shortTitle?: string,
    isSequre?: boolean,
    level?: number,
    value: any,
    uniqs?: string[] | Record<string, string>,
    cloneArgs?: Record<string, string>,
    fix: ExecutionRuleTrackBeat,
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
