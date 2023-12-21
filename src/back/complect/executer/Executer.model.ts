import { ActionBoxSetSystems, ActionTimer } from '../../models';
import { LocalSokiAuth, SokiAppName } from '../soki/soki.model';

export type ExecutionMethod =
  | 'formula'
  | 'set'
  | 'set_all'
  | 'push'
  | 'concat'
  | 'toggle'
  | 'toggle_by'
  | 'migrate'
  | 'insert_beforei'
  | 'remove'
  | 'remove_each'
  | 'delete'
  | 'other';

export interface ExecutionDict<Value = any, Args = ExecutionArgs<any, Value>> {
  action: string;
  method?: ExecutionMethod;
  value?: Value;
  prev?: Value;
  args?: Args;
  corrects?: unknown;
  timer?: ExecuteReplaceableField<ActionTimer>;
}

export interface ExecuteDoItProps {
  method: ExecutionMethod;
  target: any;
  penultimate: any;
  lastTrace: string | number;
  value: any;
  realArgs?: ExecutionArgs;
  auth?: LocalSokiAuth | null;
  uniqs?: string[] | Record<string, string>;
}

export interface ExecuteFeedbacks {
  fixes: string[];
  replacedExecs: ExecutionReal[];
  errorMessage: string | undefined;
  rules: ExecutionReal[];
}

export type ExecutionRuleTrackBeat =
  | string
  | [string, string, any]
  | [string, string, any, string, string, any]
  | [string, string, any, string, string, any, string, string, any];
export type ExecutionTrack = ExecutionRuleTrackBeat[];
export type ExecutionTrackTail = [number, ExecutionTrack];

export type ExecutionSidesDict = Record<`/${any}`, ExecutionSide>;

export interface BasicRule {
  method: ExecutionMethod;
  value?: ((props: ExecutionArgs | null) => any) | string | number | null | any[] | {};
  args?: ExecutionArgs;
}

export type ExecuteReplaceableField<Ret, Join = Ret> =
  | Join
  | `{${string}}`
  | ((props: ExecutionArgs | null) => Ret | void);

export interface ExecutionSide extends BasicRule, Partial<ExecutionSidesDict> {
  trackTail?: ExecutionTrackTail;
}

export interface ExecutionRule extends BasicRule {
  action: string;
  title?: string;
  track?: ExecutionTrack;
  shortTitle?: string;
  level?: number;
  uniqs?: string[] | Record<string, string>;
  expected?: [] | {};
  access?: string;
  side?: ExecutionSidesDict;
  expecteds?: ExecutionExpectations;
  isSequre?: boolean;
  fixAccesses?: Record<string, ExecutionTrack>;
  writeArg?: string;
  setInEachValueItem?: ExecuterSetInEachValueItem;
}

export type ExecutionExpectations = [number, {} | []][];

export type ExecuterSetInEachValueItem = Record<string, Record<string, unknown>>;

export type ExecutionArgs<
  Value = unknown,
  Args = Record<string, any>,
  Vars = Partial<Record<string, any> & Record<'$$currentValue', any>>,
> = Partial<Args & Record<'$$vars', Vars> & Record<'value', Value>>;

export type RealAccumulatableRuleSides =
  | ExecutionSide[]
  | ((realArgs?: ExecutionArgs, auth?: LocalSokiAuth | null) => ExecutionSide[] | undefined);

export interface RealAccumulatableRule<
  Value = unknown,
  Args = Record<string, unknown>,
  Vars = Partial<Record<string, unknown>>,
> {
  scopeNode?: string;
  expecteds?: ExecutionExpectations;
  args?: ExecutionArgs<Value, Args, Vars>;
  track: ExecutionTrack;
  sides?: RealAccumulatableRuleSides;
  accesses: string[];
  setInEachValueItem?: ExecuterSetInEachValueItem;
  RRej?: boolean | number;
  $$vars: Record<`$$${string}`, number>;
}

export interface ShortRealRule<
  Value = unknown,
  Args = Record<string, unknown>,
  Vars = Partial<Record<string, unknown>>,
> {
  action: string;
  title?: string;
  shortTitle?: string;
  level?: number;
  isSequre?: boolean;
  args?: ExecutionArgs<Value, Args, Vars>;
}

export interface ExecutionReal<Value = unknown, Args = Record<string, unknown>, Vars = Partial<Record<string, unknown>>>
  extends RealAccumulatableRule<Value, Args, Vars>,
    ShortRealRule<Value, Args, Vars> {
  method: ExecutionMethod;
  value: any | ((props: ExecuteDoItProps) => any);
  uniqs?: string[] | Record<string, string>;
  fix: ExecutionRuleTrackBeat;
  fixedAccesses?: FixedAccesses;
  setSystems?: ActionBoxSetSystems[];
  setItemSystems?: ActionBoxSetSystems[];
  timer?: ExecuteReplaceableField<ActionTimer>;
}

export type FixedAccesses = {
  track: ExecutionTrack;
  tail: Record<string, ExecutionTrack>;
}[];

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
  type: ExecuteErrorType;
  note: string;
}
