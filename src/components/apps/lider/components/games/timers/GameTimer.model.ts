import GameTeam from "../teams/GameTeam";

export interface RateSortedItem {
    team: GameTeam;
    start: number;
    finish: number;
    rowi: number;
}
