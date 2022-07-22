import Human from "./Human";

export type HumanListSortVariant = keyof typeof humanFieldTranslations;

export interface HumanExportable {
    name: string;
    isMan: boolean;
    notes: string;
    bDay: number;
    id: string;
    ufp1: number;
    ufp2: number;
    group?: number;
    isInactive?: boolean;
}

export const humanFieldTranslations: Partial<Record<keyof Human, string>> = {
    name: 'имя',
    ufp: 'УФП',
};

export interface PeopleExportable {
    humans?: HumanExportable[];
}