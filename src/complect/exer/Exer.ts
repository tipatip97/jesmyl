import { localAuth } from "../../components/board/Board.source";
import { AppName } from "../../store/Storage.model";
import { JStorage } from "../JStorage";
import modalService from "../modal/Modal.service";
import mylib from "../my-lib/MyLib";
import { Refresh } from "../refresh/Refresh";
import { Exec } from "./Exec";
import { ExecDict } from "./Exer.model";

type Callback = (okRes: any, errRes: any) => void;

export class Exer<Storage> {
    host = Refresh.host;
    appName = '';
    execs: Exec<any, any>[] = [];
    storage: JStorage<Storage>;
    key = 'execs' as keyof Storage;

    constructor(storage: JStorage<Storage>, appName: AppName) {
        this.storage = storage;
        this.appName = appName;
    }

    set<Value, Args>(execs: ExecDict<Value, Args> | ExecDict<Value, Args>[]) {
        ([] as ExecDict<Value, Args>[]).concat(execs).filter(e => e).forEach((exec) => {
            const { scope, prev, value, method } = exec;

            const prevExeci = this.execs.findIndex(ex => ex.scope === scope && ex.method === method);
            const prevExec: Exec<Value, Args> = this.execs[prevExeci];
            const lasti = this.execs.length - 1;
            const lastExec: Exec<Value, Args> = this.execs[lasti];

            if (method === 'func') {
                if (prevExec) this.execs.splice(prevExeci, 1, new Exec(exec));
                else this.execs.push(new Exec(exec));

            } else if (method === 'migrate' && lastExec && lastExec.method === method && lastExec.scope === scope) {
                if (!Object.keys(value || {}).length) this.execs.splice(lasti, 1);
                else this.execs.splice(lasti, 1, new Exec(exec));

            } else if (method === 'set') {
                if (mylib.isEq(exec.prev, exec.value)) return;
                if (prevExec)
                    if (mylib.isEq(prevExec.eprev, value)) this.execs.splice(prevExeci, 1);
                    else this.execs.splice(prevExeci, 1, new Exec(exec));
                else this.execs.push(new Exec(exec));

                exec.eprev = prevExec && prevExec.hasOwnProperty('eprev')
                    ? prevExec.eprev
                    : prev == null
                        ? null
                        : JSON.parse(JSON.stringify(prev));
            }

            exec.scope = scope;
            switch (mylib.func(exec.onSet).call(exec)) {
                case mylib.c.REMOVE: this.execs.splice(prevExeci, 1);
            }
        });

        if (!this.execs.some(ex => !ex.isFriendly))
            this.execs.splice(0, this.execs.length);
    }

    isThereLocals() {
        return this.storage.has(this.key);
    }

    send<Value, Args>(fixedExecs: ExecDict<Value, Args> | (ExecDict<Value, Args>[]), cb?: Callback, errCb?: Callback, finCb?: Callback) {
        this.load(cb, errCb, finCb, ([] as ExecDict<Value, Args>[]).concat(fixedExecs).map(exec => new Exec(exec)));
    }

    load<Value, Args>(cb?: Callback, errCb?: Callback, finCb?: Callback, fixedExecs?: Exec<Value, Args>[]) {
        const execs = (fixedExecs || this.execs)
            .map(exec => exec.forLoad())
            .filter(ex => ex);

        const onError = (error: Error) => {
            // this.dconsl(error, text).config({ type: 0 });
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
        // this.dconsl(execs);

        this.fetch({
            execs,
            success: resp => {
                // this.dconsl(resp);

                if (!resp.ok) onError(resp.errors);
                else {
                    this.execs = this.execs.filter(ex => ((resp.ok && ex.del) || resp.rejected) &&
                        resp.rejected.some((rej: Exec<Value, Args> & { exec: Exec<Value, Args> }) => {
                            if (ex.id === rej.exec.id) {
                                ex.errors = rej.errors;
                                return true;
                            }
                            return false;
                        }));
                    //this.setLS(, this.execs);
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

    setLocals() {
        if (this.storage.has(this.key)) {
            this.set(this.storage.get(this.key) as never);
        }
    }

    fetch<Value, Args>(S: {
        execs: (ExecDict<Value, Args> | null)[], success?: Callback, error?: Callback,
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
        body.append('auth', JSON.stringify(localAuth));
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
}



