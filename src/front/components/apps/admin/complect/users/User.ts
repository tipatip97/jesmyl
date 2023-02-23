import SourceBased from "../../../../../complect/SourceBased";
import { UserAuth } from "../../Admin.model";

export class User extends SourceBased<UserAuth> {
    get login() { return this.getBasic('login'); }
    set login(val) { this.setExportable('login', val); }

    get level() { return this.getBasic('level'); }
    set level(val) { this.setExportable('level', val); }

    get name() { return this.getBasicOr('fio', ''); }
    set name(val) { this.setExportable('fio', val); }
}