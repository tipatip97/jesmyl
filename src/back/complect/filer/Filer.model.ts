import { sokiWhenRejButTs } from "../../values";
import { ExecutionDict, ExecutionReal, ShortRealRule } from "../executer/Executer.model";
import { LocalSokiAuth, SokiAppName } from "../soki/soki.model";

export type FilerAppStore = Record<SokiAppName, FilerAppConfig>;

export interface FilerAppRequirement {
    rootPath?: string,
    ext?: string | null,
    level?: number,
    map?: (data: any) => any,
    prepareContent?: (data: any, auth?: LocalSokiAuth | null) => any,
    transform?: (data: any, auth?: LocalSokiAuth | null) => any,
    onCantRead?: (isRead: boolean, exec: ExecutionDict, rule: ExecutionReal, auth: LocalSokiAuth | null | undefined, bag: any, data: any, whenRejButTs: typeof sokiWhenRejButTs) => string | null | typeof sokiWhenRejButTs,
    watch?: [string, (content: string) => any],
    refreshTrigger?: string,
}

export type SimpleKeyValue<Key = string, Value = unknown> = SimpleValueKey<Value, Key>;
export type SimpleValueKey<Value = unknown, Key = string> = { key: Key, value: Value };

export interface FilerAppConfigActions {
    rules: ExecutionReal[],
    shortRules: ShortRealRule[],
    shortRulesMd5: string | null,
}

export interface FilerAppConfig extends FilerApp {
    title: string,
    actions: FilerAppConfigActions,
}

export interface FilerApp {
    requirements: Record<string, FilerAppRequirement | null>,
}

export interface FilerContentData {
    data: any,
    string?: string,
    mtime: number,
    level: number,
    prepareContent?: (data: any, auth?: LocalSokiAuth | null) => any,
}

export type FilerWatcher = (appName: SokiAppName, name: string, data: unknown, mtime: number) => void;

export type FilerContent = Record<string, FilerContentData>;
export type FilerContents = Record<Partial<SokiAppName>, FilerContent>;