import { LocalSokiAuth, SokiAppName } from "../soki/soki.model";

export type FilerAppStore = Record<SokiAppName, FilerAppConfig>;

export interface FilerAppRequirement {
    name: string,
    ext?: string,
    level?: number,
    get?: () => { data: any, mtime: number },
    map?: (data: any) => any,
    prepare?: (data: any, auth?: LocalSokiAuth | null) => any,
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

export interface FilerContentData {
    data: any,
    string: string,
    mtime: number,
    level: number,
    prepare: (data: any, auth?: LocalSokiAuth | null) => any,
    mapped: unknown,
}

export type FilerContent = Record<string, FilerContentData>;
export type FilerContents = Record<Partial<SokiAppName>, FilerContent>;