import SourceBased from "../../../../../complect/SourceBased";
import { TeamGameExportable, TeamGameImportable } from "../../Lider.model";
import { liderExer } from "../../Lider.store";
import Human from "../people/Human";
import GameTeam from "./teams/GameTeam";
import LeaderGameTimer from "./timers/GameTimer";
import { GameTimerConfigurable } from "./timers/GameTimer.model";

export default class Game extends SourceBased<TeamGameImportable> {
    teams?: GameTeam[];
    timers?: LeaderGameTimer[];
    asd = this.makeNewTs();

    constructor(top: TeamGameImportable, humans: Human[]) {
        super(top);
        this.teams = this.teamList?.map((team) => new GameTeam(team, humans, this));
        this.timers = this.timerList?.map((timer) => new LeaderGameTimer(timer, this));
    }

    isTimerWasPublicate(timerTs: number) {
        return this.timers?.some((timer) => timer.ts === timerTs);
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
    get timerNames() { return this.getBasic('timerNames'); }
    get timerFields() { return this.getBasic('timerFields'); }

    toExportDict(): TeamGameExportable {
        return {
            ...super.toDict(),
            teams: this.teams?.map((team) => team.toDict()),
            ts: this.makeNewTs(),
        };
    }

    publicateTeams(teams: GameTeam[]) {
        return new Promise((res, rej) => {
            liderExer.send({
                action: 'updateGameTeamList',
                method: 'other',
                args: {
                    gamew: this.wid,
                    list: teams.map((team) => team.toDict())
                },
            }, res, rej, null, true);
        });
    }

    publicateTimerNameList(list: string[]) {
        return new Promise((res, rej) => {
            liderExer.send({
                action: 'updateGameTimerNames',
                method: 'other',
                args: {
                    gamew: this.wid,
                    list,
                },
            }, res, rej);
        });
    }

    publicateGameTimerFields(value: GameTimerConfigurable) {
        return new Promise((res, rej) => {
            liderExer.send({
                action: 'updateGameTimerFields',
                method: 'other',
                args: {
                    ...value,
                    gamew: this.wid,
                },
            }, res, rej);
        });
    }

    static sendNewGame(name: string, contextw: number, timerNames?: string[], teams?: GameTeam[]) {
        return new Promise((res, rej) => liderExer.send({
            action: "addTeamGame",
            method: "push",
            args: {
                ts: Date.now() + Math.random(),
                name,
                contextw,
                timerNames,
                teams: teams?.map((team) => team.toDict()),
            } as TeamGameExportable,
        }, res, rej, null, true));
    }
}