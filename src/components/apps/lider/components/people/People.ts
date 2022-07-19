import SourceBased from "../../../../../complect/SourceBased";
import Human from "./Human";
import { PeopleExportable } from "./Human.model";

export default class People extends SourceBased<PeopleExportable> {
    constructor(top: PeopleExportable) {
        super(top);
        this.humans = top.humans?.map((human) => new Human(human));
    }

    get humans() { return this.getBasic('humans'); }
    set humans(val) { this.setExportable('humans', val); }

    get activeHumans() {
        return this.humans?.filter((human) => !human.isInactive);
    }
}