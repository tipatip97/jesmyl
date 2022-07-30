import SourceBased from "../../../../../complect/SourceBased";
import { TeamGameExportable, TeamGameImportable } from "../../Lider.model";
import { liderExer } from "../../Lider.store";
import Human from "../people/Human";
import GameTeam from "./teams/GameTeam";
import GameTimer from "./timers/GameTimer";

export default class Game extends SourceBased<TeamGameImportable> {
    teams: GameTeam[];
    timers?: GameTimer[];

    constructor(top: TeamGameImportable, humans: Human[]) {
        super(top);
        this.teams = this.teamList.map((team) => new GameTeam(team, humans, this));
        this.timers = this.timerList?.map((timer) => new GameTimer(timer, this));
    }

    get name() { return this.getBasic('name'); }
    get teamList() { return this.getBasic('teams'); }
    get wid() { return this.getBasic('w'); }
    get timerList() { return this.getBasic('timers'); }
    get contextw() { return this.getBasic('contextw'); }

    toExportDict(): TeamGameExportable {
        return {
            ...super.toDict(),
            teams: this.teams.map((team) => team.toDict()),
            ts: this.makeNewTs(),
        };
    }

    static sendNewGame(name: string, teams: GameTeam[], contextw: number) {
        liderExer.send({
            action: "addTeamGame",
            method: "push",
            args: {
                ts: Date.now() + Math.random(),
                name,
                contextw,
                teams: teams.map((team) => team.toDict()),
            } as TeamGameExportable,
        });
    }
}