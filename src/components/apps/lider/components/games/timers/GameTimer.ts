import mylib from "../../../../../../complect/my-lib/MyLib";
import SourceBased from "../../../../../../complect/SourceBased";
import { liderExer } from "../../../Lider.store";
import { LeaderCommentImportable } from "../../comments/LeaderComment.model";
import Game from "../Game";
import GameTeam from "../teams/GameTeam";
import { GameTimerCreatable, GameTimerImportable, GameTimerMode, GameTimerUpdatable, GameTimerUpdateExportable, RateSortedItem } from "./GameTimer.model";

export default class LeaderGameTimer extends SourceBased<GameTimerImportable> {
    game?: Game;
    teams: GameTeam[];
    isNew?: boolean;
    isRedact?: boolean;

    constructor(top: GameTimerImportable, game?: Game, isNew?: boolean, isRedact?: boolean) {
        super(top);
        this.game = game;
        this.isNew = isNew;
        this.isRedact = isRedact;

        this.teams = this.setTeams();
    }

    setTeams() {
        const teams = this.game?.teams || [];

        return this.teams = this.teamList
            ? this.teamList.map((wid) => {
                const team = teams.find((team) => team.wid === wid);
                return team && this.game && new GameTeam(team.toDict(), team.humans, this.game)
            }).filter((team) => team) as GameTeam[]
            : this.game?.teams || [];
    }

    get wid() { return this.getBasic('w'); }
    get ts() { return this.getBasic('ts'); }
    get owner() { return this.getBasic('owner'); }
    get fio() { return this.getBasic('fio'); }
    get isInactive() { return this.getBasic('isInactive'); }

    get comments() { return this.getBasic('comments'); }
    set comments(val) { this.setExportable('comments', val); }

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
        return (this.mode === GameTimerMode.TimerTotal
            ? this.start
            : this.starts?.[rowi]) || 0;
    }

    resetTimers() {
        this.start = null;
        this.starts = null;
        this.finishes = null;
    }

    newComment(comment: string) {
        if (this.comments == null) this.comments = [];
        this.comments = [...this.comments, {
            comment,
            fio: '',
            owner: '',
            ts: this.makeNewTs(),
            w: 0,
        }];
    }

    removeComment({ ts: topTs }: LeaderCommentImportable) {
        this.comments = this.comments?.filter(({ ts }) => ts !== topTs);
    }

    rateSortedTeams(isFilterOnlyFinished?: boolean): RateSortedItem[] {
        const starts = this.starts || [];
        const finishes = this.finishes || {};
        const start = this.start || 0;

        let teamsNet = mylib.netFromLine(this.teams, this.joins || 1,
            this.mode === GameTimerMode.TimerTotal
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
            .some(({ team }) => team && !finishes[team.wid]);
    }

    isTeamFinished(teamw: number) {
        return this.finishes?.[teamw];
    }

    isTeamCantMove(topTeam: GameTeam) {
        const rowi = this.rateSortedTeams().find(({ team }) => team && topTeam.wid === team.wid)?.rowi;
        return rowi != null && this.startTime(rowi) && this.isTeamFinished(topTeam.wid);
    }

    static publicateNew(args: GameTimerCreatable) {
        return new Promise((res, rej) => liderExer.send(
            {
                action: "addGameTimer",
                method: "push",
                args,
            }, res, rej, null, true
        ));
    }

    static updateTimerComponents(gamew: number, timerw: number, value: GameTimerUpdatable) {
        return new Promise((res, rej) => liderExer.send(
            {
                action: "updateTimerComponents",
                method: "other",
                args: { gamew, timerw, value } as GameTimerUpdateExportable,
            }, res, rej, null, true
        ));
    }
}