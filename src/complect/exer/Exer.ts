import { JStorageName } from "../../app/App.model";
import { Auth } from "../../components/index/Index.model";
import { indexStorage } from "../../shared/jstorages";
import { JStorage } from "../JStorage";
import modalService from "../modal/Modal.service";
import mylib from "../my-lib/MyLib";
import { Refresh } from "../refresh/Refresh";
import { Exec } from "./Exec";
import { ExecDict, ExecRule, ExerStorage, FreeExecDict, FreeExecDictAntiCallback } from "./Exer.model";

type Callback = (okRes: any, errRes: any) => void;

export class Exer<Storage extends ExerStorage> {
    host = Refresh.host;
    appName: JStorageName;
    execs: Exec<any>[] = [];
    storage: JStorage<Storage> | nil;
    key = 'execs' as keyof Storage;
    rules: ExecRule[] = [];
    checkedActions: Record<string, true | null> = {};
    auth: Auth;
    appVariables?: { mutedExecs: boolean };

    constructor(appName: JStorageName, storage: JStorage<Storage> | nil) {
        this.storage = storage;
        this.appName = appName;
        this.auth = indexStorage.getOr('auth', { level: 0 });

        this.appVariables = indexStorage.get("apps")?.find((app) => app.name === this.appName)?.variables;
        this.updateRules();
    }

    updateRules() {
        this.rules = [
            ...Object.entries(this.appVariables || {})
                .map(([action, level]) => typeof level === 'number' ? { action, level } : null)
                .filter(rule => rule) as ExecRule[],
            ...(this.storage?.get('actions') as [] || [])
        ];
    }

    setIfCan<Value>(freeExec: FreeExecDict<Value>): Exec<Value> | null {
        return this.actionAccessedOrNull(freeExec.action) && this.set(freeExec);
    }

    set<Value>(freeExec: FreeExecDict<Value>): Exec<Value> | null {
        if (!freeExec) return null;
        let retExec: Exec<Value> | null = null;
        const { scope, value, method = 'other', anti, friendly } = freeExec;
        const exec = { ...freeExec, method, muted: this.appVariables?.mutedExecs ?? freeExec.muted };

        setTimeout(() => console.info(exec, this.execs));

        const prevExeci = this.execs.findIndex(ex => ex.scope === scope && ex.method === method);
        const prevExec: Exec<Value> = this.execs[prevExeci];
        const lasti = this.execs.length - 1;
        const lastExec: Exec<Value> = this.execs[lasti];

        let isPrevented = false;
        const removeNabors = (nabors: FreeExecDictAntiCallback<Value>[], onFind: () => void) => {
            const remIndexes: number[] = [];

            for (let execi = 0; execi < this.execs.length; execi++) {

                for (const anti of nabors) {
                    const prevent = anti(this.execs[execi]);

                    if (prevent) {
                        remIndexes.push(execi);
                        if (prevent()) onFind();
                    }
                }
                if (isPrevented) break;
            }
            remIndexes.sort((a, b) => b - a).forEach(execi => this.execs.splice(execi, 1));
        };

        if (anti) removeNabors([anti].flat(), () => isPrevented = true);

        if (isPrevented) return null;

        if (method === 'func') {
            if (prevExec) this.execs.splice(prevExeci, 1, retExec = new Exec(exec, this.rules));
            else this.execs.push(retExec = new Exec(exec, this.rules));

        } else if (method === 'migrate' && lastExec && lastExec.method === method && lastExec.scope === scope) {
            if (!Object.keys(value || {}).length) this.execs.splice(lasti, 1);
            else this.execs.splice(lasti, 1, retExec = new Exec(exec, this.rules));

        } else if (method === 'set') {
            if (prevExec)
                if (mylib.isEq(prevExec.prev, value)) this.execs.splice(prevExeci, 1);
                else {
                    const needRemove = prevExec.setValue(value, exec);
                    if (needRemove) {
                        let isRemove = true;
                        if (friendly) removeNabors([friendly].flat(), () => isRemove = false);
                        if (isRemove) this.execs.splice(prevExeci, 1);
                    }
                }
            else if (!mylib.isEq(exec.prev, exec.value))
                this.execs.push(retExec = new Exec(exec, this.rules));
        } else if (!prevExec || !mylib.isEq(exec.args, prevExec.args) || exec.args == null) this.execs.push(retExec = new Exec(exec, this.rules));

        exec.scope = scope;
        switch (mylib.func(exec.onSet).call(exec)) {
            case mylib.c.REMOVE: this.execs.splice(prevExeci, 1);
        }

        return retExec;
    }

    isThereLocals() {
        return this.storage?.has(this.key);
    }

    send<Value>(fixedExecs: ExecDict<Value> | (ExecDict<Value>[]), cb?: Callback, errCb?: Callback, finCb?: Callback) {
        this.load(cb, errCb, finCb, [fixedExecs].flat().map(exec => new Exec(exec, this.rules)));
    }

    load<Value>(cb?: Callback | nil, errCb?: Callback | nil, finCb?: Callback | nil, fixedExecs?: Exec<Value>[]) {
        const execs = (fixedExecs || this.execs)
            .map(exec => exec.forLoad())
            .filter(ex => ex);

        const onError = (error: Error) => {
            modalService.confirm(`${error || `Ошибка!`}\nСохранить локально?`)
                .then(isSave => {
                    if (isSave) this.saveLocally();
                    else modalService.confirm(`Удалить весь стек?`)
                        .then(isRemove => {
                            if (isRemove) {
                                this.removeLocals();
                                this.execs.length = 0;
                            }
                        });
                });
            errCb && errCb(null, error);
            finCb && finCb(null, error);
        };

        this.fetch({
            execs,
            success: resp => {
                if (!resp.ok) onError(resp.errors);
                else {
                    this.execs = this.execs.filter(ex => {
                        const isRejected = resp.rejected?.some((rej: Exec<Value> & { exec: Exec<Value> }) => {
                            if (ex.id === rej.exec.id) {
                                ex.errors = rej.errors;
                                return true;
                            }
                            return false;
                        });
                        if (!isRejected) ex.onLoad?.(ex);
                        return ex.del || isRejected;
                    });

                    cb && cb(resp, null);
                    finCb && finCb(resp, null);
                }
            },
            error: onError,
        });
    }

    saveLocally() {
        this.storage?.set(this.key, this.execs.map(exec => exec.toDict()) as never);
    }

    removeLocals() {
        this.storage?.rem(this.key);
    }

    removeAll() {
        this.execs = [];
        this.removeLocals();
    }

    setLocals() {
        if (this.storage?.has(this.key)) {
            this.set(this.storage.get(this.key) as never);
        }
    }

    fetch<Value>(S: {
        execs: (ExecDict<Value> | null)[], success?: Callback, error?: Callback,
        complete?: Callback
    }) {
        const {
            execs = [],
            success = () => { },
            error = () => { },
            complete = () => { }
        } = S;
        const body = new FormData();

        body.append('execs', JSON.stringify(execs));
        body.append('auth', indexStorage.getString('auth') || '');
        body.append('appName', JSON.stringify(this.appName));

        fetch(`${this.host}/execute`, { method: 'POST', body })
            .then(response => response.json())
            .then(response => {
                success(response, null);
                complete(response, null);
            })
            .catch(errorMessage => {
                error(null, errorMessage);
                complete(null, errorMessage);
            });
    }

    actionAccessedOrNull(action: string | nil, isNullifyed?: boolean): true | null {
        if (action == null) return isNullifyed ? true : null;
        if (this.checkedActions[action] !== undefined) return this.checkedActions[action] || null;
        if (!this.rules?.length) return null;

        const rule = this.rules.find((right) => right.action === action) as ExecRule;
        if (!rule)
            console.error(`Зарегистрировано правило на неизвестное действие ${action}`);

        return (this.checkedActions[action] = rule ? ((rule.level || 0) <= +this.auth.level ? true : null) : null);
    };
}



