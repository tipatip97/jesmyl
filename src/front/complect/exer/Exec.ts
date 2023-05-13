import { ReactNode } from "react";
import { ExecutionMethod, ShortRealRule } from "../../../back/complect/executer/Executer.model";
import { CorrectsBox } from "../../components/apps/cm/editor/corrects-box/CorrectsBox";
import SourceBased from "../SourceBased";
import mylib from "../my-lib/MyLib";
import { ClientExecutionDict, ExecRule, FreeExecDict } from "./Exer.model";


export class Exec<Value> extends SourceBased<ClientExecutionDict> {
    scope?: string;
    title: ReactNode = '';
    prev?: Value;
    value?: Value;
    method?: ExecutionMethod;
    args?: Record<string, any>;
    action: string;
    generalId?: string;
    createByPath?: boolean;
    id = (Date.now() - -Math.random()).toString();
    del?: boolean = false;
    muted?: boolean;
    errors?: string[];
    rule?: ShortRealRule;
    exec: ClientExecutionDict<Value>;
    corrects?: CorrectsBox;

    onSet?: (exec: Exec<Value>) => [];
    onLoad?: (exec: Exec<Value>) => '';
    data?: Record<string, any>;

    constructor(exec: ClientExecutionDict<Value>, rules: ExecRule[]) {
        super(exec);
        this.exec = exec;
        this.action = exec.action;
        this.method = exec.method;
        this.data = exec.data;
        if (exec.method === 'set') this.prev = mylib.clone(exec.prev);
        this.corrects = exec.corrects;

        this.setReals(exec, ['scope', 'onLoad', 'value', 'args', 'generalId', 'createByPath', 'muted']);

        this.rule = rules.find(rule => rule.action === this.action);
        if (!this.rule) console.error(`Неизвестное правило "${this.action}"`);

        this.updateTitle();
        this.checkIsCorrectArgs();
    }

    updateTitle() {
        const rule = this.rule;
        if (!rule?.title) return;
        this.title = mylib.stringTemplater(rule.title, this.args);
    }

    forLoad() {
        if (this.del) return null;
        return this.toDict();
    }

    toDict() {
        return {
            action: this.action,
            muted: this.muted,
            createByPath: this.createByPath,
            id: this.id,
            method: this.method,
            args: this.args
        };
    }

    checkIsCorrectArgs() {
        if (!this.args || !this.rule?.args) return;

        const errors = mylib.checkIsCorrectArgs(this.action, this.args, this.rule.args);

        this.corrects = (this.corrects || new CorrectsBox())
            .merge({ errors: errors?.map((message) => ({ message })) });
    }

    setValue(value?: Value, exec?: FreeExecDict<Value>) {
        if (exec) {
            mylib.func(exec.onSet).call(exec);
            if (exec.args != null) this.args = {
                ...this.args,
                ...exec.args,
                ...(this.method === 'set' ? { prev: this.prev } : null),
            };
            if (exec.corrects && this.corrects) this.corrects.setAll(exec.corrects);
        }

        if (value !== undefined) this.value = value;
        this.updateTitle();
        this.checkIsCorrectArgs();
        return this.value === this.prev;
    }
}
