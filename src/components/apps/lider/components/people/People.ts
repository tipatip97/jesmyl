import SourceBased from "../../../../../complect/SourceBased";
import Human from "./Human";
import { PeopleImportable } from "./People.model";

export default class People extends SourceBased<PeopleImportable> {
    humanList?: Human[];

    constructor(top: PeopleImportable) {
        super(top);
        this.humanList = top.humans?.map((human) => new Human(human));
    }

    get humans() { return this.getBasic('humans'); }
    set humans(val) { this.setExportable('humans', val); }

    get humansReadyToPlay() {
        return this.humanList?.filter((human) => human.isCanPlayGame());
    }
}