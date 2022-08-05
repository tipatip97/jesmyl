import { LeaderCommentExportable, LeaderCommentImportable, LeaderCommentInitializable } from "../../comments/LeaderComment.model";
import GameTeam from "../teams/GameTeam";
import LeaderGameTimer from "./GameTimer";

export interface RateSortedItem {
    team?: GameTeam;
    start: number;
    finish: number;
    rowi: number;
}

export enum GameTimerMode {
    TimerTotal = 1,
    TimerApart = 2,
    Messager = 3,
}

export const timerModeAliases = {} as Record<GameTimerMode, string>;

export const timerModeAliasList = [
    {
        id: GameTimerMode.TimerApart,
        title: "Таймер - Частный старт",
    },
    {
        id: GameTimerMode.TimerTotal,
        title: "Таймер - Общий старт",
    },
    {
        id: GameTimerMode.Messager,
        title: "Скрытый",
    },
];

timerModeAliasList.forEach(({ id, title }) => {
    timerModeAliases[id] = title;
});

export interface GameTimerImportable extends GameTimerBasics {
    w: number;
    fio: string;
    owner: string;
    comments?: LeaderCommentImportable[];
    isInactive?: boolean;
}

export interface GameTimerUpdateExportable {
    gamew: number;
    timerw: number;
    value: GameTimerUpdatable;
}

export interface GameTimerUpdatable {
    starts?: number[] | null;
    finishes?: Record<number, number> | null;
    teams?: number[];
}

export interface GameTimerCreatable extends GameTimerBasics {
    gamew: number;
    comments?: LeaderCommentInitializable[];
}

export interface GameTimerConfigurable {
    mode: GameTimerMode;
    joins?: number;
    teams?: number[];
}

export interface GameTimerBasics extends GameTimerUpdatable, GameTimerConfigurable {
    ts: number;
    name: string;
    start?: number | null;
}

export interface GameTimerExportable extends GameTimerBasics {
    comments?: LeaderCommentExportable[];
}

export type StoragedGameTimerImportable = { [gameWid: number]: { [timerTs: number]: GameTimerImportable | null } };

export interface StoragedGameTimerImportableDict {
    news?: StoragedGameTimerImportable;
    redacts?: StoragedGameTimerImportable;
}


export type StoragedGameTimer = { [gameWid: number]: { [timerTs: number]: LeaderGameTimer | null } };

export interface StoragedGameTimerDict {
    news: StoragedGameTimer;
    redacts: StoragedGameTimer;
}
