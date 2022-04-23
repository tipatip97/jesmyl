import { CorrectsBox } from "../../components/apps/cm/editor/corrects-box/CorrectsBox";
import { Exec } from "./Exec";

export interface ExecRule {
    action?: string;
    title?: string;
    level?: number;
    track?: (string | string[])[];
    next?: ExecRule[];
    method?: ExecMethod;
}


export type ExecMethod = 'set' | 'push' | 'func' | 'migrate';

export interface ExerStorage {
    actions: ExecRule[];
}

export interface FreeExecDict<Value> {
    action: string;
    scope?: string;
    prev?: Value;
    value?: Value;
    method?: ExecMethod;
    args?: Record<string, any>;
    generalId?: string | number;
    createByPath?: boolean;
    argValue?: string;
    del?: boolean;
    muted?: boolean;
    errors?: string[];
    uniq?: number | string;
    corrects?: CorrectsBox;

    onSet?: (exec: Exec<Value>) => void;
    onLoad?: (exec: Exec<Value>) => void;
}

export interface ExecDict<Value = any> extends FreeExecDict<Value> {
    method: ExecMethod;
}

export type ExecArgs<Value> = ExecArgsDefault<Value>;

export interface ExecArgsDefault<Value> {
    def?: Value | null;
    prev?: Value;
}

