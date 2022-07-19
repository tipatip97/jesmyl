import Human from "./Human";

export type HumanListSortVariant = keyof typeof humanFieldTranslations;

export interface HumanExportable {
    name: string;
    isMan: boolean;
    notes: string;
    id: string;
    ufp1: number;
    ufp2: number;
    isInactive?: boolean;
}

export const humanFieldTranslations: Partial<Record<keyof HumanExportable, string>> = {
    name: 'имя',
    ufp1: 'УФП',
};

export interface PeopleExportable {
    humans?: Human[];
}