import { FreeExecDict } from "../../../../../complect/exer/Exer.model";
import SourceBased from "../../../../../complect/SourceBased";
import { IExportableUser } from "../../Admin.model";
import { adminExer } from "../../Admin.store";
import './User.scss';

export class User extends SourceBased<IExportableUser> {
    get login() { return this.getBasic('login'); }
    set login(val) { this.setExportable('login', val); }

    get level() { return this.getBasic('level'); }
    set level(val) { this.setExportable('level', val); }

    get name() { return this.getBasic('fio'); }
    set name(val) { this.setExportable('fio', val); }

    exec<Value>(bag: FreeExecDict<Value>) {
        return adminExer.set({
            ...bag,
            scope: `${bag.action}.${this.login}`,
            args: {
                ...bag.args,
                login: this.login,
                fio: this.name,
            }
        });
    }

    setLevel(level: number, passphrase: string, at: string) {
        this.exec({
            action: 'setUserLevel',
            prev: this.level,
            method: 'set',
            value: level,
            args: {
                level,
                passphrase,
                at
            },
        });
    }
}