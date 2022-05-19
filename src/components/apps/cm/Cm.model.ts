import { ExecDict } from "../../../complect/exer/Exer.model";
import { FreeNavRoute } from "../../../complect/nav-configurer/Navigation.model";
import { EeStorageStoreType } from "./base/ee-storage/EeStorage.model";
import { FontSizeContainPropsPosition } from "./base/font-size-contain/FontSizeContain.model";
import { IExportableSetts } from "./col/com/block-styles/BlockStyles.model";
import { ParanjaMode } from "./base/useParanja";
import { MigratableComToolName } from "./col/com/Com.model";
import { IExportableCols } from "./cols/Cols.model";
import { IExportableMeetings } from "./lists/meetings/Meetings.model";

export interface CmState extends CmStoraged {
    rollMode: CmRollMode;
    translationUpdates: number;
    translationBlock: number;
    isTranslationBlockVisible: boolean;
    translationBlockPosition: FontSizeContainPropsPosition;
    isCmFullscreen: boolean;
    paranjaMode: ParanjaMode;
    isShowMarks: boolean;
    isMiniAnchor: boolean;
    rollModeMarks: boolean;
    selectedComs: number[];
    currentMeetingsContext: number[];

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

export interface CmStoraged {
    route: FreeNavRoute;
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


