import SourceBased from "../../../../../complect/SourceBased";
import { TeamGameExportable, TeamGameImportable } from "../../Leader.model";
import { leaderExer } from "../../Leader.store";
import Human from "../people/Human";
import GameTeam from "./teams/GameTeam";
import LeaderGameTimer from "./timers/GameTimer";
import { GameTimerConfigurable } from "./timers/GameTimer.model";

export default class Game extends SourceBased<TeamGameImportable> {
    teams?: GameTeam[];
    timers?: LeaderGameTimer[];

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
        return leaderExer.send({
            action: 'updateGameTeamList',
            method: 'set',
            args: {
                gamew: this.wid,
                list: teams.map((team) => team.toDict())
            },
        });
    }

    publicateTimerNameList(list: string[]) {
        return leaderExer.send({
            action: 'updateGameTimerNames',
            method: 'set',
            args: {
                gamew: this.wid,
                list,
            },
        });
    }

    publicateGameTimerFields(value: GameTimerConfigurable) {
        return leaderExer.send({
            action: 'updateGameTimerFields',
            method: 'set_all',
            args: {
                ...value,
                gamew: this.wid,
            },
        });
    }

    remove() {
        return leaderExer.send({
            action: "removeTeamGame",
            method: "remove",
            args: {
                gamew: this.wid
            },
        });
    }

    static sendNewGame({ name, contextw, teams, timerNames, timerFields }: { name: string, contextw: number, timerNames?: string[], teams?: GameTeam[]; timerFields?: GameTimerConfigurable }) {
        return leaderExer.send({
            action: "addTeamGame",
            method: "push",
            args: {
                ts: Date.now() + Math.random(),
                name,
                contextw,
                timerNames,
                timerFields,
                teams: teams?.map((team) => team.toDict()),
            } as TeamGameExportable,
        });
    }
}