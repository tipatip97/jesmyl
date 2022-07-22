import SourceBased from "../../../../../complect/SourceBased";
import { HumanTeam } from "../../Lider.model";
import Game from "../games/Game";
import Human from "../people/Human";

export default class Team extends SourceBased<HumanTeam> {
    humans: Human[];
    game: Game | null;

    constructor(top: HumanTeam, humans: Human[], game: Game | null) {
        super(top);
        this.humans = this.members
            .map((id) => humans.find((human) => human.id === id))
            .filter((human) => human) as Human[];
        this.game = game;
    }

    get wid() { return this.getBasic('w'); }
    get name() { return this.getBasic('name'); }
    set name(val) { this.setExportable('name', val); }
    get members() { return this.getBasic('members'); }
    get comments() { return this.getBasic('comments'); }

    toDict(): HumanTeam {
        return {
            name: this.name,
            members: this.members,
            w: this.wid
        };
    }
}