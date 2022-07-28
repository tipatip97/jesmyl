import Team from "../../teams/Team";

export interface RateSortedItem {
    team: Team;
    start: number;
    finish: number;
    rowi: number;
}
