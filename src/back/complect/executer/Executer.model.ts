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

export interface ExecuteFeedbacks {
    fixes: string[],
    replacedExecs: ExecutionReal[],
    errorMessage: string,
}

export type ExecutionRuleTrackBeat = string | [string, string, any];
export type ExecutionTrack = ExecutionRuleTrackBeat[];
export type ExecutionTrackTail = [number, ExecutionTrack];

export type ExecutionSidesDict = Record<string, ExecutionSide>;

export interface BasicRule {
    method: ExecutionMethod,
    value?: unknown,
    args?: Record<string, unknown>,
}

export interface ExecutionSide extends BasicRule {
    trackTail: ExecutionTrackTail,
}

export interface ExecutionRule extends BasicRule {
    action: string,
    title?: string,
    track?: ExecutionTrack,
    shortTitle?: string,
    level?: number,
    uniqs?: string[] | Record<string, string>,
    expected?: [] | {},
    access?: string,
    side?: ExecutionSidesDict,
    expecteds?: ExecutionExpectations,
    isSequre?: boolean,
    fixAccesses?: Record<string, ExecutionTrack>,
    writeArg?: string,
    setInEachValueItem?: ExecuterSetInEachValueItem,
    ['/']?: ExecutionRule,
}

export type ExecutionExpectations = [number, {} | []][];

export type ExecuterSetInEachValueItem = Record<string, Record<string, unknown>>;

export interface ExecutionRealAccumulatable {
    expecteds?: ExecutionExpectations,
    args?: Record<string, any>,
    track: ExecutionTrack,
    sides?: ExecutionSide[],
    accesses: string[],
    setInEachValueItem?: ExecuterSetInEachValueItem,
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
    fix: ExecutionRuleTrackBeat,
    fixedAccesses?: FixedAccesses,
}

export type FixedAccesses = { track: ExecutionTrack, tail: Record<string, ExecutionTrack> }[];

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
    Args = 'Аргументы',
    NoRule = 'Не найдено',
    Sequre = 'Не верный пароль',
    Error = 'Ошибка',
}

export interface ExecuteError {
    type: ExecuteErrorType,
    note: string;
}
