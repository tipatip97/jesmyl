import { Exec } from "./Exec";

export interface ExecDict<Value, Def, Args> {
    scope?: string;
    eprev?: Value;
    prev?: Value;
    value?: Value;
    method?: string;
    args?: Args;
    action: string;
    generalId?: string;
    createByPath?: boolean;
    argValue?: string;
    del?: boolean;
    muted?: boolean;
    errors?: string[];

    onSet?: (exec: Exec<Value, Def, Args>) => [];
    onLoad?: (exec: Exec<Value, Def, Args>) => '';
    isFriendly?: boolean;
}

export type ExecArgs<Def, Args = {}> = { def?: Def } & Args;

