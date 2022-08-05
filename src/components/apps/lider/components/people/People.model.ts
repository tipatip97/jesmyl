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
    list?: (list?: number[]) => und | number[];
    dangers?: number[];
    successes?: number[];
    searcherClass?: string;
    placeholder?: string;
    onMoreClick?: () => void;
    moreNode?: ((human: Human) => ReactNode) | ReactNode;
    asHumanMore?: (human: Human) => ReactNode;
    humanMoreAdditions?: (human: Human) => ReactNode;
    humansRef?: { current: Human[] };
}

export interface SelectHumansComponentProps {
    uniq: string;
    excludedTitle?: string;
    onListsUpdate?: (addList: number[], delList: number[]) => void;
    chosenPlaceholder: string;
    chooseTitle: string;
    chosenTitle: ReactNode;
    redactable?: boolean;
    redact?: boolean;
    fixedList?: number[];
    wholeList?: number[];
    excludes?: number[];
}