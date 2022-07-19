import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";
import Human from "./components/people/Human";
import { HumanListSortVariant, PeopleExportable } from "./components/people/Human.model";

export interface LiderState extends LiderStoraged {
    route: FreeNavRoute;
}

export interface LiderStoraged {
    people?: PeopleExportable;
    numPeopleUpdates: number;
    numGamesUpdates: number;
    games?: GamesStoreExportable;
    cgamew?: number;
    humanListSortVariant: HumanListSortVariant;
}

export interface HumanTeam {
    id: number;
    name: string;
    members: string[];
}

export interface LocalHumanTeam extends HumanTeam {
    humans: Human[];
}

export interface TeamGameExportable {
    id: number;
    name: string;
    teams: HumanTeam[];
}

export interface GamesStoreExportable {
    teamGames: TeamGameExportable[];
}

export interface LiderNavData { }
