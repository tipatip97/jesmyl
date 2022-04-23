import mylib from "../my-lib/MyLib";
import { ExecArgs, ExecDict, ExecMethod, ExecRule } from "./Exer.model";


export class Exec<Value> {
    scope?: string;
    title: string = '';
    prev?: Value;
    value?: Value;
    method: ExecMethod;
    args?: Record<string, any>;
    action: string;
    generalId?: string;
    createByPath?: boolean;
    id = (Date.now() - -Math.random()).toString();
    argValue?: string;
    del?: boolean = false;
    muted?: boolean;
    errors?: string[];
    rule?: ExecRule;

    onSet?: (exec: Exec<Value>) => [];
    onLoad?: (exec: Exec<Value>) => '';

    constructor(exec: ExecDict<Value>, rules: ExecRule[]) {
        const setReals = (keys: (keyof this)[]) => keys.forEach((key) => {
            if (exec.hasOwnProperty(key)) this[key as keyof this] = (exec[key as keyof ExecDict<Value>] as never);
        });
        this.action = exec.action;
        this.method = exec.method;
        setReals(['argValue', 'scope', 'prev', 'value', 'args', 'generalId', 'createByPath', 'muted']);
        this.rule = rules.find(rule => rule.action === this.action);
        if (!this.rule) console.error(`Неизвестное правило "${this.action}"`);
        this.updateTitle();
    }

    updateTitle() {
        const rule = this.rule;
        if (!rule?.title) return;
        this.title = mylib.stringTemplater(rule.title, this.args);
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
            method: this.method,
            args: {
                ...this.args,
                prev: this.prev,
                ...(this.argValue
                    ? { [this.argValue]: this.value }
                    : null)
            }
        };
    }

    setValue(value?: Value) {
        this.value = value;
        if (this.args && this.argValue != null) this.args[this.argValue] = value;
        this.updateTitle();
        return this.value === this.prev;
    }
}
