
import { ClientExecutionDict } from "../../../complect/exer/Exer.model";
import { EeStorageStoreType } from "./base/ee-storage/EeStorage.model";
import { FontSizeContainPropsPosition } from "./base/font-size-contain/FontSizeContain.model";
import { ParanjaMode } from "./base/useParanja";
import { IExportableSetts } from "./col/com/block-styles/BlockStyles.model";
import { MigratableComToolName } from "./col/com/Com.model";
import { IExportableCols } from "./cols/Cols.model";
import { CmEditorStoraged } from "./editor/CmEditor.model";
import { IExportableMeetings } from "./lists/meetings/Meetings.model";

export interface CmState extends CmStoraged {
    rollMode: CmRollMode;
    translationUpdates: number;
    translationBlock: number;
    isTranslationBlockVisible: boolean;
    translationBlockPosition: FontSizeContainPropsPosition;
    isCmFullscreen: boolean;
    paranjaMode: ParanjaMode;
    isMiniAnchor: boolean;
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

export type FavoriteMeetings = Record<'events' | 'contexts', number[]>;

export interface CmStoraged extends CmEditorStoraged {
    ccatw?: number;
    ccomw?: number;
    eventw?: number;
    laterComwList: number[];
    chordVisibleVariant: ChordVisibleVariant;
    marks: number[];
    meetings?: IExportableMeetings;
    comFontSize: number;
    chords: Record<string, number[]>;
    isShowTranslationInfo: boolean;
    favoriteMeetings: FavoriteMeetings;
    comTopTools: MigratableComToolName[];
    selectedComws: number[];
    currentMeetingsContext: number[];
}

export interface CmStorage extends CmStoraged {
    actions: CmAction[];
    cols: IExportableCols;
    settings: IExportableSetts;
    eeStorage: EeStorageStoreType;
    executions: ClientExecutionDict[];

    speedRollKf: number;
}

export interface CmAction {
    title?: string;
    action: string;
    level: number;
    valueAs?: string;
}

export interface CmAppVariables {
    canRedact: number;
    mutedExecs: boolean;
}

export interface CmNavData {
    selectedComws: number[];
}

export interface CmQRData {
    comws: number[],
}
