import SourceBased from "../../../../../complect/SourceBased";
import Human from "./Human";
import { PeopleExportable } from "./Human.model";

export default class People extends SourceBased<PeopleExportable> {
    humanList?: Human[];

    constructor(top: PeopleExportable) {
        super(top);
        this.humanList = top.humans?.map((human) => new Human(human));
    }

    get humans() { return this.getBasic('humans'); }
    set humans(val) { this.setExportable('humans', val); }

    get activeHumans() {
        return this.humanList?.filter((human) => !human.isInactive);
    }
}