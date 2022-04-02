import { Exec } from "./Exec";

export interface ExecDict<Value, Args> {
    action: string;
    scope?: string;
    eprev?: Value;
    prev?: Value;
    value?: Value;
    method?: string;
    args?: ExecArgs<Value, Args>;
    generalId?: string;
    createByPath?: boolean;
    argValue?: string;
    del?: boolean;
    muted?: boolean;
    errors?: string[];
    uniq?: number | string;

    onSet?: (exec: Exec<Value, Args>) => void;
    onLoad?: (exec: Exec<Value, Args>) => void;
    isFriendly?: boolean;
}

export type ExecArgs<Value, Args = {}> = ExecArgsDefault<Value> & Args;

export interface ExecArgsDefault<Value> {
    def?: Value | null;
    prev?: Value;
}

