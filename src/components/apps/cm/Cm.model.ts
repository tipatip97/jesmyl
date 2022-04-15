import { EvaIconName } from "../../../complect/eva-icon";
import { ExecDict } from "../../../complect/exer/Exer.model";
import { EeStorageStoreType } from "./base/ee-storage/EeStorage.model";
import { FontSizeContainPropsPosition } from "./base/font-size-contain/FontSizeContain.model";
import { IExportableSetts } from "./base/settings/Setts.model";
import { ParanjaMode } from "./base/useParanja";
import { inlinePhases, specialPhases } from "./Cm.complect";
import { IExportableCols } from "./cols/Cols.model";
import { IExportableMeeting } from "./lists/meetings/Meetings.model";

export interface CmState extends CmStoraged {
    rollMode: CmRollMode;
    translationUpdates: number;
    translationBlock: number;
    isTranslationBlockVisible: boolean;
    translationBlockPosition: FontSizeContainPropsPosition;
    isCmFullscreen: boolean;
    paranjaMode: ParanjaMode;
    isShowMarks: boolean;
    isAnchorsVisible: boolean;
    rollModeMarks: boolean;

    numComUpdates: number;
    numColsUpdates: number;
    numAbsolutePopupUpdates: number;
    numMeetingsUpdate: number;
}

export type CmRollMode = 'pause' | 'play' | null;

export type ChordVisibleVariant = 0 | 1 | 2;

export type CmPhase = typeof inlinePhases[number][number];
export type CmSpecialPhase = typeof specialPhases[number] | null;
export type SetPhasePayload = CmPhase | [CmPhase, CmSpecialPhase | nil, boolean?];


export interface FooterItem {
    title: string;
    icon: EvaIconName;
    phases: CmPhase[];
    activeWithSpecialPhases?: boolean;
}
export interface CmStoraged {
    ccatw?: number;
    ccomw?: number;
    meetingw?: number;
    laterComwList: number[];
    chordVisibleVariant: ChordVisibleVariant;
    phase: CmPhase;
    specialPhase: CmSpecialPhase;
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


