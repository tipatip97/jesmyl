import { ExecArgs, ExecDict } from "./Exer.model";


export class Exec<Value, Def, Args> {
    scope?: string;
    eprev?: Value;
    prev?: Value;
    value?: Value;
    method?: string;
    args?: ExecArgs<Def, Args>;
    action: string;
    generalId?: string;
    createByPath?: boolean;
    id = (Date.now() - -Math.random()).toString();
    argValue?: string;
    del?: boolean = false;
    muted?: boolean;
    errors?: string[];

    onSet?: (exec: Exec<Value, Def, Args>) => [];
    onLoad?: (exec: Exec<Value, Def, Args>) => '';
    isFriendly?: boolean;

    constructor(exec: ExecDict<Value, Def, Args>) {
        this.scope = exec.scope;
        this.eprev = exec.eprev;
        this.prev = exec.prev;
        this.value = exec.value;
        this.method = exec.method;
        this.args = exec.args;
        this.action = exec.action;
        this.generalId = exec.generalId;
        this.createByPath = exec.createByPath;
        this.isFriendly = exec.isFriendly;
        this.muted = exec.muted;
    }

    forLoad() {
        if (this.del) return null;
        this.onLoad && this.onLoad(this);

        return this.toDict();
    }

    toDict() {
        return {
            action: this.action,
            muted: this.muted,
            createByPath: this.createByPath,
            id: this.id,
            args: {
                ...this.args,
                prev: this.eprev,
                ...(this.argValue
                    ? { [this.argValue]: this.value }
                    : null)
            }
        };
    }
}
