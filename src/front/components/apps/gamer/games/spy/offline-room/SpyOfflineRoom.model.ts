

export interface OfflineSpyGame {
    location: string,
    iterations: number,
    reshareData: OfflineGameShare,
}

export type OfflineGameShare = [
    string, // location,
    number, // spiesCount,
    number, // iterations,
    string, // memberStrList
];
