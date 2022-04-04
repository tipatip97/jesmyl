import { Cat } from "./col/cat/Cat";
import { Com } from "./col/com/Com";
import { IExportableCols } from "./cols/Cols.model";
import { IExportableSetts } from "./complect/settings/Setts.model";
import { EeStorageStoreType } from "./ee-storage/EeStorage.model";


export interface CmState {
    ccat?: Cat | null;
    ccom?: Com | null;
    phase: CmPhase;
    rollMode: CmRollMode;
    isComFullscreenMode: boolean;
    isPlayerShown: boolean;
    rollModeMarks: boolean;
    numComUpdates: number;
    marks: number[];
    chordVisibleVariant: ChordVisibleVariant;
    comFontSize: number;
}

export type CmRollMode = 'pause' | null;

export type ChordVisibleVariant = 0 | 1 | 2;

export type CmPhase = 'cats' | 'cat' | 'com' | 'editor';

export interface CmStorage {
    actions: CmAction[];
    phase: CmPhase;
    cols: IExportableCols;
    ccat: number;
    ccom: number;
    marks: number[];
    settings: IExportableSetts;
    chordVisibleVariant: ChordVisibleVariant;
    eeStorage: EeStorageStoreType;
}

export interface CmAction {
    title?: string;
    action: string;
    level: number;
}

export interface CmAppVariables {
    canRedact: number;
    mutedExecs: boolean;
}


