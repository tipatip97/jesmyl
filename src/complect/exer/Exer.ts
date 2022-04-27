import { JStorageName } from "../../app/App.model";
import { Auth } from "../../components/index/Index.model";
import { appStorage, indexStorage } from "../../shared/jstorages";
import { JStorage } from "../JStorage";
import modalService from "../modal/Modal.service";
import mylib from "../my-lib/MyLib";
import { Refresh } from "../refresh/Refresh";
import { Exec } from "./Exec";
import { ExecDict, ExecRule, ExerStorage, FreeExecDict } from "./Exer.model";

type Callback = (okRes: any, errRes: any) => void;

export class Exer<Storage extends ExerStorage> {
    host = Refresh.host;
    appName: JStorageName;
    execs: Exec<any>[] = [];
    storage: JStorage<Storage>;
    key = 'execs' as keyof Storage;
    rules: ExecRule[] = [];
    checkedActions: Record<string, true | null> = {};
    auth: Auth;

    constructor(appName: JStorageName) {
        this.storage = appStorage[appName];
        this.appName = appName;
        this.auth = indexStorage.getOr('auth', { level: 0 });

        this.updateRules();
    }

    updateRules() {
        const app = indexStorage.get("apps")?.find((app) => app.name === "cm");

        this.rules = [
            ...Object.entries(app?.variables || {}).map(([action, level]) => ({
                action,
                level: level as number,
            })),
            ...(this.storage.get('actions') as [] || [])
        ];
    }

    set<Value>(execs: FreeExecDict<Value> | FreeExecDict<Value>[]) {
        [execs].flat().forEach((freeExec) => {
            if (!freeExec) return;
            const { scope, value, method = 'other', anti } = freeExec;
            const exec = { ...freeExec, method };

            const prevExeci = this.execs.findIndex(ex => ex.scope === scope && ex.method === method);
            const prevExec: Exec<Value> = this.execs[prevExeci];
            const lasti = this.execs.length - 1;
            const lastExec: Exec<Value> = this.execs[lasti];

            let isPrevented = false;

            if (anti) {
                const antis = [anti].flat();
                const remIndexes: number[] = [];

                for (let execi = 0; execi < this.execs.length; execi++) {

                    for (const anti of antis) {
                        const prevent = anti(this.execs[execi]);

                        if (prevent) {
                            remIndexes.push(execi);
                            if (prevent()) isPrevented = true;
                        }
                    }
                    if (isPrevented) break;
                }
                remIndexes.sort((a, b) => b - a).forEach(execi => this.execs.splice(execi, 1));
            }

            if (isPrevented) return;

            if (method === 'func') {
                if (prevExec) this.execs.splice(prevExeci, 1, new Exec(exec, this.rules));
                else this.execs.push(new Exec(exec, this.rules));

            } else if (method === 'migrate' && lastExec && lastExec.method === method && lastExec.scope === scope) {
                if (!Object.keys(value || {}).length) this.execs.splice(lasti, 1);
                else this.execs.splice(lasti, 1, new Exec(exec, this.rules));

            } else if (method === 'set') {
                if (prevExec)
                    if (mylib.isEq(prevExec.prev, value)) this.execs.splice(prevExeci, 1);
                    else {
                        const needRemove = prevExec.setValue(value, exec);
                        if (needRemove) this.execs.splice(prevExeci, 1);
                    }
                else if (!mylib.isEq(exec.prev, exec.value))
                    this.execs.push(new Exec(exec, this.rules));
            } else if (!prevExec || !mylib.isEq(exec.args, prevExec.args)) this.execs.push(new Exec(exec, this.rules));

            exec.scope = scope;
            switch (mylib.func(exec.onSet).call(exec)) {
                case mylib.c.REMOVE: this.execs.splice(prevExeci, 1);
            }
        });
    }

    isThereLocals() {
        return this.storage.has(this.key);
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
                    this.execs = this.execs.filter(ex => ((resp.ok && ex.del) || resp.rejected) &&
                        resp.rejected.some((rej: Exec<Value> & { exec: Exec<Value> }) => {
                            if (ex.id === rej.exec.id) {
                                ex.errors = rej.errors;
                                return true;
                            }
                            return false;
                        }));

                    cb && cb(resp, null);
                    finCb && finCb(resp, null);
                }
            },
            error: onError,
        });
    }

    saveLocally() {
        this.storage.set(this.key, this.execs.map(exec => exec.toDict()) as never);
    }

    removeLocals() {
        this.storage.rem(this.key);
    }

    removeAll() {
        this.execs = [];
        this.removeLocals();
    }

    setLocals() {
        if (this.storage.has(this.key)) {
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

    isActionAccessed(action: string): true | null {
        if (this.checkedActions[action] !== undefined) return this.checkedActions[action] || null;
        if (!this.rules?.length) return null;

        const rule = this.rules.find((right) => right.action === action) as ExecRule;
        if (!rule)
            console.error(`Зарегистрировано правило на неизвестное действие ${action}`);

        return (this.checkedActions[action] = rule ? ((rule.level || 0) <= this.auth.level ? true : null) : null);
    };
}



