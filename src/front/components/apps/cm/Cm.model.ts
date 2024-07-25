import { IExportableMeetings } from '../../../../back/apps/cm/Meetings.model';
import { ClientExecutionDict } from '../../../complect/exer/Exer.model';
import { IExportableCols } from '../../../models';
import { EeStorageStoreType } from './base/ee-storage/EeStorage.model';
import { IExportableSetts } from './col/com/block-styles/BlockStyles.model';
import { ChordPack } from './col/com/chord-card/ChordCard.model';
import { MigratableComToolName } from './col/com/Com.model';
import { CmTranslationScreenConfig } from './translation/complect/controlled/model';

export type CmRollMode = 'pause' | 'play' | null;

export enum ChordVisibleVariant {
  None = 0,
  Minimal = 1,
  Maximal = 2,
}

export type FavoriteMeetings = Record<'events' | 'contexts', number[]>;
export interface CmState {
  cols: IExportableCols | nil;
  laterComwList: number[];
  chordVisibleVariant: ChordVisibleVariant;
  marks: number[];
  meetings?: IExportableMeetings;
  comFontSize: number;
  comComments: Record<number, string>;
  chordTracks: ChordPack;
  isShowTranslationInfo: boolean;
  favoriteMeetings: FavoriteMeetings;
  comTopTools: MigratableComToolName[];
  isMiniAnchor: boolean;
  playerHideMode: PlayerHideMode;
  isMetronomeHide: boolean;
  translationScreenConfigs: CmTranslationScreenConfig[];
  metronomeAccentes: string;
  metronomeMainSound: `${number}`;
  metronomeSecondarySound: `${number}`;

  speedRollKf: number;
}

export type PlayerHideMode = 'expand' | 'min' | '';

export interface CmStorage extends CmState {
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
