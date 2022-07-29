import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";
import { SendingComments } from "./components/comments/LeaderComment.model";
import { GameTimerImportable } from "./components/games/Games.model";
import { HumanListSortVariant, PeopleExportable } from "./components/people/People.model";
import { GameTeamExportable, GameTeamImportable } from "./components/games/teams/GameTeams.model";

export interface LiderState extends LiderStoraged {
    route: FreeNavRoute;
    errorSentComments: number[];
}

export interface LiderStoraged {
    people?: PeopleExportable;
    numUpdatesPeople: number;
    numUpdatesTimers: number;
    numUpdatesGames: number;
    games?: GamesStoreImportable;
    cgamew?: number;
    humanListSortVariant: HumanListSortVariant;
    gameTimers: Record<number, GameTimerImportable | null>;
    sendingComments: SendingComments;
}

export interface TeamGameImportable extends TeamGameExportable {
    w: number;
    teams: GameTeamImportable[];
}

export interface TeamGameExportable {
    ts: number;
    name: string;
    teams: GameTeamExportable[];
    timers?: GameTimerImportable[];
}

export interface GamesStoreImportable {
    teamGames?: TeamGameImportable[];
}

export interface LiderNavData { }
