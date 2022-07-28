import { ReactNode } from "react";
import { CorrectsBox } from "../../components/apps/cm/editor/corrects-box/CorrectsBox";
import mylib, { MyLib } from "../my-lib/MyLib";
import SourceBased from "../SourceBased";
import { ExecDict, ExecMethod, ExecRule, ExecRuleClient, FreeExecDict } from "./Exer.model";


export class Exec<Value> extends SourceBased<ExecDict> {
    scope?: string;
    title: ReactNode = '';
    prev?: Value;
    value?: Value;
    method: ExecMethod;
    args?: Record<string, any>;
    action: string;
    generalId?: string;
    createByPath?: boolean;
    id = (Date.now() - -Math.random()).toString();
    del?: boolean = false;
    muted?: boolean;
    errors?: string[];
    rule?: ExecRuleClient;
    corrects?: CorrectsBox;

    onSet?: (exec: Exec<Value>) => [];
    onLoad?: (exec: Exec<Value>) => '';

    constructor(exec: ExecDict<Value>, rules: ExecRule[]) {
        super(exec);
        this.action = exec.action;
        this.method = exec.method;
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
        const args = { ...this.args };
        if (this.rule?.cloneArgs) {
            MyLib.entries(this.rule.cloneArgs).forEach(([from, to]) => args[to] === undefined && (args[to] = args[from]));
        }
        const argsEntries = MyLib.entries(args);
        const ruleEntries = MyLib.entries(this.rule?.args || {});
        const corrects = this.corrects || new CorrectsBox();
        const add = (message: string) => {
            this.corrects = corrects.merge({ errors: [{ message }] });
            if (message) console.error(message);
            return corrects;
        }

        if (!ruleEntries.length) return;
        if (!argsEntries.length) {
            return add('Нет необходимых аргументов для данного исполнения');;
        }

        for (const [key, type] of ruleEntries) {
            const argEntry = argsEntries.find(([argn]) => argn === key);
            if (!argEntry) {
                if (mylib.isRequiredType(type))
                    add(`Не указан параметр "${key}" для исполнения "${this.action}"`);;
                continue;
            }
            const [, value] = argEntry;
            if (!mylib.isCorrectType(value, type)) add(`Неверный тип параметра "${key}" (${value}) в исполнении "${this.action}". Ожидалось "${type}"`);
        }

        this.corrects = corrects;
    }

    setValue(value?: Value, exec?: FreeExecDict<Value>) {
        if (exec) {
            mylib.func(exec.onSet).call(exec);
            if (exec.args != null) this.args = {
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
