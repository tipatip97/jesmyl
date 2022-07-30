import { ReactNode } from "react";
import Human from "./Human";

export type HumanListSortVariant = keyof typeof humanFieldTranslations;

export interface HumanImportable extends HumanExportable {
    w: number;
}

export interface HumanExportable {
    ts: number;
    name: string;
    isMan: boolean;
    notes: string;
    bDay: number;
    ufp1: number;
    ufp2: number;
    isInactive?: boolean;
}

export const humanFieldTranslations: Partial<Record<keyof Human, string>> = {
    name: 'имя',
    ufp: 'УФП',
};

export interface PeopleExportable {
    humans?: HumanExportable[];
}

export interface PeopleImportable {
    humans?: HumanImportable[];
}

export interface HumanListComponentProps {
    isAsPage?: boolean;
    uniq?: string;
    list?: (list?: Human[]) => und | Human[];
    dangers?: Human[];
    successes?: Human[];
    searcherClass?: string;
    placeholder?: string;
    onMoreClick?: () => void;
    moreNode?: ReactNode;
    asHumanMore?: (human: Human) => ReactNode;
}

export interface SelectHumansComponentProps {
    uniq: string;
    excludedTitle?: string;
    onListUpdate?: (addList: Human[], delList: Human[]) => void;
    chosenPlaceholder: string;
    chooseTitle: string;
    chosenTitle: string;
    fixedList?: Human[];
    excludes?: Human[];
}