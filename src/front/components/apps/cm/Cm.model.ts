import { ClientExecutionDict } from '../../../complect/exer/Exer.model';
import { EeStorageStoreType } from './base/ee-storage/EeStorage.model';
import { IExportableSetts } from './col/com/block-styles/BlockStyles.model';
import { ChordPack } from './col/com/chord-card/ChordCard.model';
import { MigratableComToolName } from './col/com/Com.model';
import { IExportableCols } from './cols/Cols.model';
import { CmEditorStoraged } from './editor/CmEditor.model';
import { IExportableMeetings } from './lists/meetings/Meetings.model';
import { CmTranslationScreenConfig } from './translation/complect/controlled/model';

export interface CmState extends CmStoraged {
  translationBlock: number;
  isCmFullscreen: boolean;
  rollModeMarks: boolean;

  numComUpdates: number;
  numAbsolutePopupUpdates: number;
}

export type CmRollMode = 'pause' | 'play' | null;

export enum ChordVisibleVariant {
  None = 0,
  Minimal = 1,
  Maximal = 2,
}

export type FavoriteMeetings = Record<'events' | 'contexts', number[]>;

export interface CmStoraged extends CmEditorStoraged {
  cols?: IExportableCols;
  laterComwList: number[];
  chordVisibleVariant: ChordVisibleVariant;
  marks: number[];
  meetings?: IExportableMeetings;
  comFontSize: number;
  chordTracks: ChordPack;
  isShowTranslationInfo: boolean;
  favoriteMeetings: FavoriteMeetings;
  comTopTools: MigratableComToolName[];
  isMiniAnchor: boolean;
  playerHideMode: PlayerHideMode;
  translationScreenConfigs: CmTranslationScreenConfig[];

  speedRollKf: number;
}

export type PlayerHideMode = 'expand' | 'min' | '';

export interface CmStorage extends CmStoraged {
  settings: IExportableSetts;
  eeStorage: EeStorageStoreType;
  executions: ClientExecutionDict[];
}

export interface CmNavData {
  selectedComws: number[];
  ccomw: number;
  ccatw: number;
  eventw: number;
  eventContext: number[];
}
