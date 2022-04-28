import { CorrectsBox } from "../../components/apps/cm/editor/corrects-box/CorrectsBox";
import mylib from "../my-lib/MyLib";
import Simplifyed from "../Simplifyed";
import { ExecDict, ExecMethod, ExecRule, FreeExecDict } from "./Exer.model";


export class Exec<Value> extends Simplifyed {
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
    corrects?: CorrectsBox;

    onSet?: (exec: Exec<Value>) => [];
    onLoad?: (exec: Exec<Value>) => '';

    constructor(exec: ExecDict<Value>, rules: ExecRule[]) {
        super();
        this.action = exec.action;
        this.method = exec.method;
        this.prev = mylib.clone(exec.prev);
        this.corrects = exec.corrects;

        this.setReals(exec, ['argValue', 'scope', 'value', 'args', 'generalId', 'createByPath', 'muted']);

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

    setValue(value?: Value, exec?: FreeExecDict<Value>) {
        if (exec) {
            if (exec.args != null) this.args = { ...exec.args, prev: this.prev };
            if (exec.corrects && this.corrects) this.corrects.setAll(exec.corrects);
        }
        
        if (value !== undefined) this.value = value;
        this.updateTitle();
        return this.value === this.prev;
    }
}
