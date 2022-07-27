
export enum GameTimerMode {
    Total = 1,
    Apart = 2,
}

export interface GameTimerExportable {
    w: number;
    name: string;
    mode: GameTimerMode;
    joins?: number;
    start?: number | null;
    starts?: number[] | null;
    finishes?: Record<number, number> | null;
    teams?: number[];
}
