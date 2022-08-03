import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";
import { SendingComments } from "./components/comments/LeaderComment.model";
import { LeaderContextsImportable } from "./components/contexts/Contexts.model";
import { GameTeamExportable, GameTeamImportable } from "./components/games/teams/GameTeams.model";
import { GameTimerImportable } from "./components/games/timers/GameTimer.model";
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
    cgroupw?: number;
    ccontextw?: number;
    humanListSortVariant: HumanListSortVariant;
    gameTimers: Record<number, GameTimerImportable | null>;
    sendingComments: SendingComments;
    numUpdatesPeople: number;
    numUpdatesTimers: number;
    numUpdatesGames: number;
    numUpdatesContexts: number;
}

export interface TeamGameImportable extends TeamGameExportable {
    w: number;
    teams?: GameTeamImportable[];
}

export interface TeamGameExportable {
    ts: number;
    contextw: number;
    name: string;
    timerNames?: string[];
    teams?: GameTeamExportable[];
    timers?: GameTimerImportable[];
}

export interface GamesStoreImportable {
    teamGames?: TeamGameImportable[];
}

export interface LiderNavData { }
