import {
  ExecuteReplaceableField,
  ExecutionArgs,
  ExecutionMethod,
  ExecutionSidesDict,
  ExecutionTrack,
} from './complect/executer/Executer.model';
import { LocalSokiAuth } from './complect/soki/soki.model';
import { knownIconNames } from './knownIconNames';
import { actionBoxSetSystems } from './values';

export type ActionBoxSide =
  | ExecutionSidesDict
  | ((realArgs?: ExecutionArgs, auth?: LocalSokiAuth | null) => ExecutionSidesDict | und);

export interface ActionTimer {
  startMs?: number;
  startId?: string;
  clearId?: string;
}

export type ActionBoxOnFinalCallback<Value = any, Ret = void> = (
  args: ExecutionArgs | null,
  value: Value,
  auth: LocalSokiAuth | nil,
) => Ret;

export interface ActionBox<Value = any>
  extends Partial<Record<`/${string}`, ActionBox>>,
    Partial<Record<`<${string}>`, ActionBox>> {
  level?: number;
  scopeNode?: string;
  shortTitle?: string;
  title?: string | ((args: Record<string, unknown>) => string);
  access?: string;
  uniqs?: string[];
  fixAccesses?: Record<string, ExecutionTrack>;
  onSuccess?: ActionBoxOnFinalCallback;
  onFailure?: ActionBoxOnFinalCallback;
  side?: ActionBoxSide;
  expected?: [] | {};
  setInEachValueItem?: Record<string, Record<string, unknown>>;
  setEachInParent?: Record<string, Record<string, unknown>>;
  isSequre?: boolean;
  setSystems?: ActionBoxSetSystems[];
  setItemSystems?: ActionBoxSetSystems[];
  RRej?: number;
  C?: ActionCRUD;
  U?: ActionCRUD;
  D?: ActionCRUD;
  $$var?: `$$${string}`;

  action?: string;
  timer?: ExecuteReplaceableField<ActionTimer>;
  method?: ExecutionMethod;
  value?: ExecuteReplaceableField<Value, {} | null>;
  args?: ExecutionArgs<string | any[]>;
}

export interface ActionCRUD {
  method?: ExecutionMethod;
  value?: ExecuteReplaceableField<any, {}>;
  args?: ExecutionArgs<string | any[]>;
  setSystems?: ActionBoxSetSystems[];
  setItemSystems?: ActionBoxSetSystems[];
  uniqs?: string[];
  RRej?: boolean | number;
  shortTitle?: string;
  title?: string | ((args: Record<string, unknown>) => string);
}

export type ActionBoxSetSystemsFree = keyof typeof actionBoxSetSystems;
export type ActionBoxSetSystems = ActionBoxSetSystemsFree | `${ActionBoxSetSystemsFree}:${string}`;

export type ActionBoxValue<Value> = Value extends string | number | boolean
  ? `{${string}}` | Value | (() => Value)
  : Value extends Array<infer Val>
    ? Array<ActionBoxValue<Val>>
    : Value extends {}
      ? { [Key in keyof Value]: ActionBoxValue<Value[Key]> }
      : Value;

enum NotANumber {
  nan = 'NaN',
}

declare global {
  type num = 0 | 1;
  type str = '' | '1';
  type nil = null | undefined;
  type und = undefined;
  type ArrayMapCb<T> = (box: T, boxi: number, boxa: T[]) => T;
  type ArrayCb<T> = (box: T, boxi: number, boxa: T[]) => any;
  type TimeOut = ReturnType<typeof setTimeout> | und | number;
  type intStr = `${'-' | ''}${number}`;
  type doubleStr = `${intStr}.${number}`;
  type numberStr = `${intStr}${`.${number}` | ''}`;

  type NaN = NotANumber;
  type NaNumber = number | NotANumber;

  type EventStopper<With = {}> = { stopPropagation(): void } & With;
  type CallbackStopper = (event: EventStopper) => void;

  type EventPreventer<With = {}> = { preventDefault(): void } & With;
  type CallbackPreventer = (event: EventPreventer) => void;

  type NonUndefined<T> = T extends undefined ? never : T;
  type NonNull<T> = T extends null ? never : T;
  type NonNil<T> = T extends nil ? never : T;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
  type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);
}

declare global {
  type KnownIconName = (typeof knownIconNames)[number];
  type KnownIconNameForPack = KnownIconName;
}
