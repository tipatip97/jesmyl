import SourceBased from "../../../../../complect/SourceBased";
import { HumanTeam } from "../../Lider.model";
import Human from "../people/Human";

export default class Team extends SourceBased<HumanTeam> {
    humans: Human[];

    constructor(top: HumanTeam, humans: Human[]) {
        super(top);
        this.humans = this.members
            .map((id) => humans.find((human) => human.id === id))
            .filter((human) => human) as Human[];
    }

    get name() { return this.getBasic('name'); }
    set name(val) { this.setExportable('name', val); }
    get members() { return this.getBasic('members'); }
}