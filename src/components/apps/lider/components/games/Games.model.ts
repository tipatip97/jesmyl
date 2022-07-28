
export enum GameTimerMode {
    Total = 1,
    Apart = 2,
}

export interface GameTimerImportable extends GameTimerExportable {
    w: number;
    fio: string;
    owner: string;
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
