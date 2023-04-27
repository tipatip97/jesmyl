import { ExecutionReal } from "../executer/Executer.model";
import { LocalSokiAuth, SokiAppName } from "../soki/soki.model";

export type FilerAppStore = Record<SokiAppName, FilerAppConfig>;

export interface FilerAppRequirement {
    name: string,
    rootPath?: string,
    ext?: string | null,
    level?: number,
    map?: (data: any) => any,
    prepareContent?: (data: any, auth?: LocalSokiAuth | null) => any,
    transform?: (data: any, auth?: LocalSokiAuth | null) => any,
    watch?: [string, (content: string) => any],
    refreshTrigger?: string,
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
    prepareContent: (data: any, auth?: LocalSokiAuth | null) => any,
    transformed: MappedData,
    mapped: MappedData,
}

export type FilerWatcher = (appName: SokiAppName, name: string, data: any) => void;

export type FilerContent = Record<'actions', FilerContentData<ExecutionReal[]>> & Record<string, FilerContentData>;
export type FilerContents = Record<Partial<SokiAppName>, FilerContent>;