import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";
import { SendingComments } from "./components/comments/LeaderComment.model";
import { LeaderContextsImportable } from "./components/contexts/Contexts.model";
import { GameTimerImportable } from "./components/games/Games.model";
import { GameTeamExportable, GameTeamImportable } from "./components/games/teams/GameTeams.model";
import { HumanListSortVariant, PeopleImportable } from "./components/people/People.model";

export interface LiderState extends LiderStoraged {
    route: FreeNavRoute;
    errorSentComments: number[];
}

export interface LiderStoraged {
    people?: PeopleImportable;
    contexts?: LeaderContextsImportable;
    games?: GamesStoreImportable;
    cgamew?: number;
    humanListSortVariant: HumanListSortVariant;
    gameTimers: Record<number, GameTimerImportable | null>;
    sendingComments: SendingComments;
    currentContextw: number;
    numUpdatesPeople: number;
    numUpdatesTimers: number;
    numUpdatesGames: number;
    numUpdatesContexts: number;
}

export interface TeamGameImportable extends TeamGameExportable {
    w: number;
    teams: GameTeamImportable[];
}

export interface TeamGameExportable {
    ts: number;
    contextw: number;
    name: string;
    teams: GameTeamExportable[];
    timers?: GameTimerImportable[];
}

export interface GamesStoreImportable {
    teamGames?: TeamGameImportable[];
}

export interface LiderNavData { }
