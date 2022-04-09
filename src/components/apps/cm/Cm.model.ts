import { ExecDict } from "../../../complect/exer/Exer.model";
import { IExportableCols } from "./cols/Cols.model";
import { IExportableMeeting } from "./meetings/Meetings.model";
import { IExportableSetts } from "./complect/settings/Setts.model";
import { EeStorageStoreType } from "./ee-storage/EeStorage.model";
import { FontSizeContainPropsPosition } from "./complect/font-size-contain/FontSizeContain.model";



export interface CmState extends CmStoraged {
    rollMode: CmRollMode;
    translationUpdates: number;
    translationBlock: number;
    translationBlockIsVisible: boolean;
    translationBlockPosition: FontSizeContainPropsPosition;
    isComFullscreenMode: boolean;
    isPlayerShown: boolean;
    rollModeMarks: boolean;

    numComUpdates: number;
    numColsUpdates: number;
    numModalUpdates: number;
}

export type CmRollMode = 'pause' | null;

export type ChordVisibleVariant = 0 | 1 | 2;

export type CmPhase = 'cats' | 'cat' | 'com' | 'editor' | 'news' | 'translations';

export interface CmStoraged {
    ccatw?: number;
    ccomw?: number;
    chordVisibleVariant: ChordVisibleVariant;
    phase: CmPhase;
    prevPhase?: CmPhase;
    marks: number[];
    cm_meetings: IExportableMeeting[];
    comFontSize: number;
    chords: Record<string, number[]>;
}

export interface CmStorage extends CmStoraged {
    actions: CmAction[];
    cols: IExportableCols;
    settings: IExportableSetts;
    eeStorage: EeStorageStoreType;
    executions: ExecDict[];
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


