import SourceBased from "../../../../../complect/SourceBased";
import { HumanExportable } from "./Human.model";

export default class Human extends SourceBased<HumanExportable> {
    get name() { return this.getBasic('name'); }
    set name(val) { this.setExportable('name', val); }

    get id() { return this.getBasic('id'); }
    set id(val) { this.setExportable('id', val); }

    get isInactive() { return this.getBasic('isInactive'); }
    set isInactive(val) { this.setExportable('isInactive', val); }

    get isMan() { return this.getBasic('isMan'); }
    set isMan(val) { this.setExportable('isMan', val); }

    get notes() { return this.getBasic('notes'); }
    set notes(val) { this.setExportable('notes', val); }

    get ufp1() { return this.getBasic('ufp1'); }
    set ufp1(val) { this.setExportable('ufp1', val); }

    get ufp2() { return this.getBasic('ufp2'); }
    set ufp2(val) { this.setExportable('ufp2', val); }

    get ufp() {
        return this.ufp1 && this.ufp2 ? ((this.ufp1 || 0) + (this.ufp2 || 0)) / 2 : 0;
    }
}