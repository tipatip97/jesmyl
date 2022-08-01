import { LeaderCommentImportable } from "../../comments/LeaderComment.model";
import GameTeam from "../teams/GameTeam";

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

export interface GameTimerImportable extends GameTimerExportable {
    w: number;
    fio: string;
    owner: string;
    comments?: LeaderCommentImportable[];
    isInactive?: boolean;
}

export interface GameTimerCreatable extends GameTimerExportable {
    gamew: number;
}

export interface GameTimerExportable {
    ts: number;
    name: string;
    mode: GameTimerMode;
    joins?: number;
    start?: number | null;
    starts?: number[] | null;
    finishes?: Record<number, number> | null;
    teams?: number[];
}
