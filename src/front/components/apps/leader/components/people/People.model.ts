import { ReactNode } from "react";

export type HumanListSortVariant = keyof typeof humanFieldTranslations;

export interface HumanImportable extends HumanExportable {
    w: number,
}

export interface HumanExportable {
    name: string,
    isMan: boolean,
    notes: string,
    bDay: number,
    ufp1: number,
    ufp2: number,
    isInactive?: boolean,
}

export const humanFieldTranslations: Partial<Record<keyof HumanImportable, string>> = {
    name: 'имя',
    ufp1: 'УФП',
};

export interface PeopleExportable {
    humans?: HumanExportable[],
}

export interface PeopleImportable {
    humans?: HumanImportable[],
}

export interface HumanListComponentProps {
    isAsPage?: boolean,
    className?: string,
    list?: number[],
    searcherClass?: string,
    placeholder?: string,
    onMoreClick?: () => void,
    fieldLabel?: 'mentors' | 'members',
    asHumanMore?: (human: HumanImportable) => ReactNode,
    humanMoreAdditions?: (human: HumanImportable) => ReactNode,
    humansRef?: { current: HumanImportable[] },
    excludedHumans?: number[],
    excludedLabel?: ReactNode,
    onAddHuman?: (human: HumanImportable) => Promise<unknown>,
    onRemoveHuman?: (human: HumanImportable) => Promise<unknown>,
}

export interface SelectHumansComponentProps {
    excludedTitle?: string,
    onListsUpdate?: (addList: number[], delList: number[]) => void,
    chosenPlaceholder: string,
    chooseTitle: string,
    chosenTitle: ReactNode,
    redactable?: boolean,
    redact?: boolean,
    fixedList?: number[],
    wholeList?: number[],
    excludes?: number[],
}