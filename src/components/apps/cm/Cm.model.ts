import { ExecDict } from "../../../complect/exer/Exer.model";
import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";
import { EeStorageStoreType } from "./base/ee-storage/EeStorage.model";
import { FontSizeContainPropsPosition } from "./base/font-size-contain/FontSizeContain.model";
import { IExportableSetts } from "./base/settings/Setts.model";
import { ParanjaMode } from "./base/useParanja";
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

export enum ChordVisibleVariant {
    None = 0,
    Minimal = 1,
    Maximal = 2,
}


export interface CmStoraged {
    route: FreeNavRoute;
    ccatw?: number;
    ccomw?: number;
    meetingw?: number;
    laterComwList: number[];
    chordVisibleVariant: ChordVisibleVariant;
    marks: number[];
    cm_meetings?: IExportableMeeting[];
    comFontSize: number;
    chords: Record<string, number[]>;
    isShowTranslationInfo: boolean;

    lastUpdate?: number;
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


