import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";
import { SendingComments } from "./components/comments/LeaderComment.model";
import { GameTimerExportable } from "./components/games/Games.model";
import { HumanListSortVariant, PeopleExportable } from "./components/people/People.model";
import { TeamInGameExportable } from "./components/teams/Teams.model";

export interface LiderState extends LiderStoraged {
    route: FreeNavRoute;
    errorSentComments: number[];
}

export interface LiderStoraged {
    people?: PeopleExportable;
    numUpdatesPeople: number;
    numUpdatesTimers: number;
    numUpdatesGames: number;
    games?: GamesStoreExportable;
    cgamew?: number;
    humanListSortVariant: HumanListSortVariant;
    gameTimers: Record<number, GameTimerExportable | null>;
    sendingComments: SendingComments;
}

export interface TeamGameExportable {
    w: number;
    name: string;
    teams: TeamInGameExportable[];
    timers?: GameTimerExportable[];
}

export interface GamesStoreExportable {
    teamGames?: TeamGameExportable[];
}

export interface LiderNavData { }
