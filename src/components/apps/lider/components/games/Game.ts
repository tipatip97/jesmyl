import SourceBased from "../../../../../complect/SourceBased";
import { TeamGameExportable, TeamGameImportable } from "../../Lider.model";
import Human from "../people/Human";
import Team from "../teams/Team";
import GameTimer from "./timers/GameTimer";

export default class Game extends SourceBased<TeamGameImportable> {
    teams: Team[];
    timers?: GameTimer[];

    constructor(top: TeamGameImportable, humans: Human[]) {
        super(top);
        this.teams = this.teamList.map((team) => new Team(team, humans, this));
        this.timers = this.timerList?.map((timer) => new GameTimer(timer, this));
    }

    get name() { return this.getBasic('name'); }
    get teamList() { return this.getBasic('teams'); }
    get wid() { return this.getBasic('w'); }
    get timerList() { return this.getBasic('timers'); }

    toExportDict(): TeamGameExportable {
        return {
            ...super.toDict(),
            teams: this.teams.map((team) => team.toExportDict()),
            ts: this.makeNewTs(),
        };
    }
}