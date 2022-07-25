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
    w: number;
    name: string;
    members: string[];
    comments?: HumanTeamComment[];
}

export interface HumanTeamCommentSend {
    wid: number;
    comment: string;
    teamw: number;
    gamew: number;
}

export interface HumanTeamComment {
    comment: string;
    owner: string;
    fio: string;
    w: number;
}

export interface LocalHumanTeam extends HumanTeam {
    humans: Human[];
}

export interface TeamGameExportable {
    w: number;
    name: string;
    teams: HumanTeam[];
}

export interface GamesStoreExportable {
    teamGames?: TeamGameExportable[];
}

export interface LiderNavData { }
