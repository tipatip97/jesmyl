import SourceBased from "../../../../../complect/SourceBased";
import { TeamGameExportable, TeamGameImportable } from "../../Lider.model";
import { liderExer } from "../../Lider.store";
import Human from "../people/Human";
import GameTeam from "./teams/GameTeam";
import LeaderGameTimer from "./timers/GameTimer";

export default class Game extends SourceBased<TeamGameImportable> {
    teams: GameTeam[];
    timers?: LeaderGameTimer[];

    constructor(top: TeamGameImportable, humans: Human[]) {
        super(top);
        this.teams = this.teamList.map((team) => new GameTeam(team, humans, this));
        this.timers = this.timerList?.map((timer) => new LeaderGameTimer(timer, this));
    }

    isTimerWasPublicate(timerTs: number) {
        return this.timers?.some((timer) => timer.ts === timerTs)
    }

    getTimer(timerWid: number) {
        return this.timers?.find((timer) => timer.wid === timerWid);
    }

    getTeam(teamWid: number) {
        return this.teams?.find((team) => team.wid === teamWid);
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
        return new Promise((res, rej) => liderExer.send({
            action: "addTeamGame",
            method: "push",
            args: {
                ts: Date.now() + Math.random(),
                name,
                contextw,
                teams: teams.map((team) => team.toDict()),
            } as TeamGameExportable,
        }, res, rej));
    }
}