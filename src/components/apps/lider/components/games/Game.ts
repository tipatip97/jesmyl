import SourceBased from "../../../../../complect/SourceBased";
import { TeamGameExportable } from "../../Lider.model";
import Human from "../people/Human";
import Team from "./Team";

export default class Game extends SourceBased<TeamGameExportable> {
    teams: Team[];

    constructor(top: TeamGameExportable, humans: Human[]) {
        super(top);
        this.teams = this.teamList.map((team) => new Team(team, humans));
    }

    get name() { return this.getBasic('name'); }
    get teamList() { return this.getBasic('teams'); }
    get id() { return this.getBasic('id'); }

    toDict(): TeamGameExportable {
        return {
            id: this.id,
            name: this.name,
            teams: this.teams.map((team) => team.toDict())
        };
    }
}