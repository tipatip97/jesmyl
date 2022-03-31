import { Cat } from "./col/cat/Cat";
import { Com } from "./col/com/Com";
import { IExportableCols } from "./complect/cols/Cols.model";


export interface CmState {
    ccat?: Cat;
    ccom?: Com;
    phase: CmPhase;
    rollMode: boolean;
    isComFullscreenMode: boolean;
}

export type CmPhase = 'cats' | 'cat' | 'com' | 'editor';

export interface CmStorage {
    actions: CmAction[];
    phase: CmPhase;
    cols: IExportableCols;
    ccat: number;
    ccom: number;
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


