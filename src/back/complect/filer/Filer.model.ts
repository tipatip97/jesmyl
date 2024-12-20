import { LocalSokiAuth, SokiAppName, sokiWhenRejButTs } from 'shared/api';
import { ExecutionDict, ExecutionReal, ShortRealRule } from '../../../shared/api/complect/executer/model';

export type FilerAppStore = Record<SokiAppName, FilerAppConfig>;

export interface FilerAppRequirement<Data = any> {
  rootPath?: string;
  ext?: string | null;
  level?: number;
  map?: (data: Data) => Data;
  prepareContent?: (data: Data, auth?: LocalSokiAuth | null) => Data;
  transform?: (data: Data, auth?: LocalSokiAuth | null) => Data;
  onInit?: (data: Data) => void;
  onCantRead?: (
    isRead: boolean,
    exec: ExecutionDict,
    rule: ExecutionReal,
    auth: LocalSokiAuth | null | undefined,
    bag: any,
    data: Data,
    whenRejButTs: typeof sokiWhenRejButTs,
  ) => string | null | typeof sokiWhenRejButTs;
  watch?: [string, (content: string) => any];
  refreshTrigger?: string;
}

export interface FilerAppConfigActions {
  rules: ExecutionReal[];
  shortRules: ShortRealRule[];
  shortRulesMd5: string | null;
}

export interface FilerAppConfig extends FilerApp {
  title: string;
  actions: FilerAppConfigActions;
}

export interface FilerApp {
  requirements: Record<string, FilerAppRequirement | null>;
}

export interface FilerContentData {
  data: any;
  string?: string;
  mtime: number;
  level: number;
  prepareContent?: (data: any, auth?: LocalSokiAuth | null) => any;
}

export type FilerWatcher = (appName: SokiAppName, name: string, data: unknown, mtime: number) => void;

export type FilerContent = Record<string, FilerContentData>;
export type FilerContents = Record<Partial<SokiAppName>, FilerContent>;
