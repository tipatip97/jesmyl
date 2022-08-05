import SourceBased from "../../../../../complect/SourceBased";
import { HumanImportable } from "./People.model";

export default class Human extends SourceBased<HumanImportable> {
    get name() { return this.getBasic('name'); }
    set name(val) { this.setExportable('name', val); }

    get wid() { return this.getBasic('w'); }

    get isInactive() { return this.getBasic('isInactive'); }

    get isMan() { return this.getBasic('isMan'); }
    set isMan(val) { this.setExportable('isMan', val); }

    get notes() { return this.getBasic('notes'); }
    set notes(val) { this.setExportable('notes', val); }

    get bDay() { return this.getBasic('bDay'); }
    set bDay(val) { this.setExportable('bDay', val); }

    get ufp1() { return this.getBasic('ufp1'); }
    set ufp1(val) { this.setExportable('ufp1', val); }

    get ufp2() { return this.getBasic('ufp2'); }
    set ufp2(val) { this.setExportable('ufp2', val); }

    get ufp() {
        return this.ufp1 && this.ufp2 ? ((this.ufp1 || 0) + (this.ufp2 || 0)) / 2 : 0;
    }

    isCanPlayGame() {
        return !this.isInactive// && this.ufp;
    }
}