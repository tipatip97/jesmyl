import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";

export interface LiderState extends LiderStorage {
    route: FreeNavRoute;
}

export interface LiderStorage {
    people?: People;
    games?: GamesStore;
    humanListSortVariant: HumanListSortVariant;
}

export type HumanListSortVariant = keyof typeof humanFieldTranslations;

export interface People {
    humans?: Human[];
}

export interface Human {
    name: string;
    isMan: boolean;
    notes: string;
    id: string;
    ufp: number;
    ufp2: number;
    isInactive?: boolean;
}

export interface HumanTeam {
    id: number;
    name: string;
    members: string[];
}

export interface LocalHumanTeam extends HumanTeam {
    humans: Human[];
}

export interface TeamGame {
    id: number;
    name: string;
    teams: HumanTeam[];
}

export interface GamesStore {
    teamGames: TeamGame[];
}

export const humanFieldTranslations: Partial<Record<keyof Human, string>> = {
    name: 'имя',
    ufp: 'УФП',
};

export interface LiderNavData { }
