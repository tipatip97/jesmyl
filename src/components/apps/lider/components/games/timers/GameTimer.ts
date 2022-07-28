import mylib from "../../../../../../complect/my-lib/MyLib";
import SourceBased from "../../../../../../complect/SourceBased";
import Team from "../../teams/Team";
import Game from "../Game";
import { GameTimerImportable, GameTimerMode } from "../Games.model";

export default class GameTimer extends SourceBased<GameTimerImportable> {
    game?: Game;
    teams: Team[];
    isNewTimer?: boolean;

    constructor(top: GameTimerImportable, game?: Game, isNewTimer?: boolean) {
        super(top);
        this.game = game;
        const teams = game?.teams || [];
        this.isNewTimer = isNewTimer;

        this.teams = this.teamList
            ? this.teamList.map((wid) => {
                const team = teams.find((team) => team.wid === wid);
                return team && game && new Team(team.toDict(), team.humans, game)
            }).filter((team) => team) as Team[]
            : game?.teams || [];
    }

    get wid() { return this.getBasic('w'); }
    get owner() { return this.getBasic('owner'); }
    get fio() { return this.getBasic('fio'); }

    get finishes() { return this.getBasic('finishes'); }
    set finishes(val) { this.setExportable('finishes', val); }

    get joins() { return this.getBasic('joins'); }
    set joins(val) { this.setExportable('joins', val); }

    get mode() { return this.getBasic('mode'); }
    set mode(val) { this.setExportable('mode', val); }

    get start() { return this.getBasic('start'); }
    set start(val) { this.setExportable('start', val); }

    get starts() { return this.getBasic('starts'); }
    set starts(val) { this.setExportable('starts', val); }

    get name() { return this.getBasic('name'); }
    set name(val) { this.setExportable('name', val); }

    get teamList() { return this.getBasic('teams'); }
    set teamList(val) { this.setExportable('teams', val); }

    get isStarted() {
        return !!(this.start || this.starts?.filter((ts) => ts).length);
    }

    startTime(rowi: number) {
        return (this.mode === GameTimerMode.Total
            ? this.start
            : this.starts?.[rowi]) || 0;
    }

    resetTimers() {
        this.start = null;
        this.starts = null;
        this.finishes = null;
    }

    rateSortedTeams(isFilterOnlyFinished?: boolean) {
        const starts = this.starts || [];
        const finishes = this.finishes || {};
        const start = this.start || 0;

        let teamsNet = mylib.netFromLine(this.teams, this.joins || 1,
            this.mode === GameTimerMode.Total
                ? (team, rowi) => ({ team, start, finish: finishes[team.wid], rowi })
                : (team, rowi) => ({ team, start: starts[rowi], finish: finishes[team.wid], rowi })
        ).flat();

        if (isFilterOnlyFinished)
            teamsNet = teamsNet.filter(({ start, finish }) => start && finish);

        return teamsNet.sort(({ start: aStart, finish: aFinish }, { start: bStart, finish: bFinish }) => {
            return (aFinish - aStart) - (bFinish - bStart);
        });
    }

    isRowFinished(topRowi: number) {
        const finishes = this.finishes || {};

        return !this.rateSortedTeams()
            .filter(({ rowi }) => topRowi === rowi)
            .some(({ team }) => !finishes[team.wid]);
    }

    toExportDict() {
        return {
            ...super.toDict(),
            gamew: this.game?.wid,
            ts: this.makeNewTs(),
        };
    }
}