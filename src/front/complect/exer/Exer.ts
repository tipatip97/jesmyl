import { Auth } from '../../components/index/Index.model';
import { ExecutionDict, LocalSokiAuth, SokiAppName, SokiServerEvent } from '../../models';
import { soki } from '../../soki';
import { JStorage } from '../JStorage';
import mylib from '../my-lib/MyLib';
import { Exec } from './Exec';
import {
  ClientExecutionDict,
  ExecRule,
  ExerStorage,
  FreeExecDict,
  FreeExecDictAntiCallback,
  FreeExecDictAntiCallbackStrategy,
} from './Exer.model';

export class Exer<Storage extends ExerStorage> {
  appName: SokiAppName;
  execs: Exec<any>[] = [];
  storage: JStorage<Storage> | nil;
  key = 'execs' as keyof Storage;
  rules: ExecRule[] = [];

  constructor(appName: SokiAppName, storage: JStorage<Storage, any> | nil) {
    this.storage = storage;
    this.appName = appName;

    this.updateRules();
  }

  async updateRules() {
    this.rules = [...(((await this.storage?.get('rules')) as []) || [])];
  }

  clear() {
    this.execs = [];
  }

  set<Value>(freeExec: FreeExecDict<Value>): Exec<Value> | null {
    if (!freeExec) return null;
    let retExec: Exec<Value> | null = null;
    const { scope, value, method = 'set', anti, friendly } = freeExec;
    const exec = { ...freeExec, method };

    setTimeout(() => console.info(exec, this.execs));

    const prevExeci = this.execs.findIndex(ex => ex.scope === scope && ex.method === method);
    const prevExec: Exec<Value> = this.execs[prevExeci];
    const lasti = this.execs.length - 1;
    const lastExec: Exec<Value> = this.execs[lasti];

    let isPrevented = false;
    const removeNabors = (nabors: FreeExecDictAntiCallback<Value>[], onFind: () => void) => {
      const remIndexes: number[] = [];

      for (const anti of nabors) {
        for (let execi = 0; execi < this.execs.length; execi++) {
          const prevent = anti(this.execs[execi]);

          if (prevent) {
            remIndexes.push(execi);
            const startegies = FreeExecDictAntiCallbackStrategy;
            const strategy = prevent(startegies);
            if (strategy === startegies.RemoveNew) onFind();
          }
        }
        if (isPrevented) break;
      }
      remIndexes.sort((a, b) => b - a).forEach(execi => this.execs.splice(execi, 1));
    };

    if (anti) removeNabors([anti].flat(), () => (isPrevented = true));

    if (isPrevented) return null;

    if (method === 'migrate' && lastExec && lastExec.method === method && lastExec.scope === scope) {
      if (!Object.keys(value || {}).length) this.execs.splice(lasti, 1);
      else this.execs.splice(lasti, 1, (retExec = new Exec(exec, this.rules)));
    } else if (method === 'set') {
      if (prevExec)
        if (mylib.isEq(prevExec.prev, value)) this.execs.splice(prevExeci, 1);
        else {
          const needRemove = prevExec.setValue(value, exec);
          if (needRemove) {
            let isRemove = true;
            if (friendly) removeNabors([friendly].flat(), () => (isRemove = false));
            if (isRemove) this.execs.splice(prevExeci, 1);
          }
        }
      else if (!mylib.isEq(exec.prev, exec.value)) this.execs.push((retExec = new Exec(exec, this.rules)));
    } else if (!prevExec || !mylib.isEq(exec.args, prevExec.args) || exec.args == null)
      this.execs.push((retExec = new Exec(exec, this.rules)));

    exec.scope = scope;
    switch (mylib.func(exec.onSet).call(exec)) {
      case mylib.c.REMOVE:
        this.execs.splice(prevExeci, 1);
    }

    return retExec;
  }

  send<Value>(fixedExecs: ClientExecutionDict<Value> | ClientExecutionDict<Value>[]) {
    return this.load([fixedExecs].flat().map(exec => new Exec(exec, this.rules)));
  }

  load<Value>(fixedExecs?: Exec<Value>[] | nil) {
    return new Promise<SokiServerEvent | null>((resolve, reject) => {
      const execs = (fixedExecs || this.execs).map(exec => exec.forLoad()).filter(ex => ex);

      if (!execs.length) {
        return resolve(null);
      }

      soki.send({ execs: execs.filter(dict => dict) as ExecutionDict[] }, this.appName).on(
        result => {
          this.execs = ((fixedExecs as Exec<any>[]) || this.execs).filter(ex => {
            ex.onLoad?.(ex, result);
            return ex.del;
          });

          resolve(result);
        },
        err => reject(err),
      );
    });
  }

  levelAccessedOrNull(
    level: ((auth: LocalSokiAuth, store: any | null) => boolean | null) | number | nil,
    auth: Auth,
    isNullifyed?: boolean,
  ): true | null {
    if (level == null) return isNullifyed ? true : null;
    if (mylib.isFunc(level)) return level(auth, null) || null;
    return level <= +(auth.level ?? 0) ? true : null;
  }
}
