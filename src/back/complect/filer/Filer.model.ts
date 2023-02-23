import { ExecutionRule } from "../executer/Executer.model";
import { LocalSokiAuth, SokiAppName } from "../soki/soki.model";

export type FilerAppStore = Record<SokiAppName, FilerAppConfig>;

export interface FilerAppRequirement {
    name: string,
    rootPath?: string,
    ext?: string | null,
    level?: number,
    map?: (data: any) => any,
    prepare?: (data: any, auth?: LocalSokiAuth | null) => any,
    watch?: [string, (content: string) => any],
}

export type SimpleKeyValue<Key = string, Value = unknown> = SimpleValueKey<Value, Key>;
export type SimpleValueKey<Value = unknown, Key = string> = { key: Key, value: Value };

export interface FilerAppConfig {
    title: string,
    requirements: (string | FilerAppRequirement)[],
}

export interface FilerApp extends FilerAppConfig {
    requirements: FilerAppRequirement[],
}

export interface FilerContentData<MappedData = unknown> {
    data: any,
    string: string,
    mtime: number,
    level: number,
    prepare: (data: any, auth?: LocalSokiAuth | null) => any,
    mapped: MappedData,
}

export type FilerWatcher = (appName: SokiAppName, name: string, data: any) => void;

export type FilerContent = Record<'actions', FilerContentData<ExecutionRule[]>> & Record<string, FilerContentData>;
export type FilerContents = Record<Partial<SokiAppName>, FilerContent>;