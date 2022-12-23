import SourceBased from "../../../../../complect/SourceBased";
import Human from "./Human";
import { PeopleImportable } from "./People.model";

export default class People extends SourceBased<PeopleImportable> {
    humans?: Human[];

    constructor(top: PeopleImportable) {
        super(top);
        this.humans = this.getBasic('humans')?.map((human) => new Human(human));
    }

    get humansReadyToPlay() {
        return this.humans?.filter((human) => human.isCanPlayGame());
    }
}