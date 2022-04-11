import { ExecDict } from "../../../complect/exer/Exer.model";
import { IExportableCols } from "./cols/Cols.model";
import { IExportableMeeting } from "./meetings/Meetings.model";
import { IExportableSetts } from "./complect/settings/Setts.model";
import { EeStorageStoreType } from "./ee-storage/EeStorage.model";
import { FontSizeContainPropsPosition } from "./complect/font-size-contain/FontSizeContain.model";
import { EvaIconName } from "../../../complect/eva-icon/EvaIcon.model";
import { ParanjaMode } from "./base/useParanja";



export interface CmState extends CmStoraged {
    rollMode: CmRollMode;
    translationUpdates: number;
    translationBlock: number;
    translationBlockIsVisible: boolean;
    translationBlockPosition: FontSizeContainPropsPosition;
    isCmFullscreenMode: boolean;
    paranjaMode: ParanjaMode;
    isShowMarksMode: boolean;
    isPlayerShown: boolean;
    rollModeMarks: boolean;

    numComUpdates: number;
    numColsUpdates: number;
    numModalUpdates: number;
}

export type CmRollMode = 'pause' | 'play' | null;

export type ChordVisibleVariant = 0 | 1 | 2;

export type CmPhase = 'lists' | 'other' | 'cats' | 'cat' | 'com' | 'editor' | 'news' | 'translations';


export interface FooterItem {
    title: string;
    icon: EvaIconName;
    phases: CmPhase[];
}
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
    
    speedRollKf: number;
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


