import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { cmStorage } from "../../../shared/jstorages";
import { FontSizeContainPropsPosition } from "./base/font-size-contain/FontSizeContain.model";
import { ParanjaMode } from "./base/useParanja";
import { ChordVisibleVariant, CmRollMode, CmState, FavoriteMeetings, PlayerHideMode } from "./Cm.model";
import { ChordPack } from "./col/com/chord-card/ChordCard.model";
import { MigratableComToolName } from "./col/com/Com.model";
import { Exec } from "./editor/CmEditor.model";
import { IExportableMeetings } from "./lists/meetings/Meetings.model";

export const cmExer = new Exer('cm', cmStorage);

const initialState: CmState = {
  chordVisibleVariant: cmStorage.getOr('chordVisibleVariant', 0),
  ccomw: cmStorage.get('ccomw'),
  ccatw: cmStorage.getOr('ccatw', 0),
  laterComwList: cmStorage.getOr('laterComwList', []),
  rollMode: null,
  isCmFullscreen: false,
  isMiniAnchor: cmStorage.getOr('isMiniAnchor', false),
  playerHideMode: cmStorage.getOr('playerHideMode', null),
  paranjaMode: null,
  rollModeMarks: false,
  marks: cmStorage.getOr('marks', []),
  selectedComws: cmStorage.getOr('selectedComws', []),
  meetings: cmStorage.get('meetings'),
  eventw: cmStorage.get('eventw'),
  comFontSize: cmStorage.getOr('comFontSize', 15),
  chordTracks: cmStorage.getOr('chordTracks', {}),
  isShowTranslationInfo: cmStorage.getOr('isShowTranslationInfo', true),
  translationUpdates: 0,
  translationBlock: 0,
  isTranslationBlockVisible: true,
  translationBlockPosition: 'center',
  favoriteMeetings: cmStorage.getOr('favoriteMeetings', { contexts: [], events: [] }),
  comTopTools: cmStorage.getOr('comTopTools', ["mark-com", "fullscreen-mode"]),
  currentMeetingsContext: cmStorage.getOr('currentMeetingsContext', []),

  numComUpdates: 0,
  numColsUpdates: 0,
  numAbsolutePopupUpdates: 0,
  numMeetingsUpdate: 0,

  // editor
  execs: cmStorage.getOr('execs', []),
  mp3Rules: cmStorage.getOr('mp3Rules', []),
};

export const slice = createSlice({
  name: "cm",
  initialState,
  reducers: {
    selectCcol: (state, action: PayloadAction<{ fieldn: 'catw' | 'comw', val?: number }>) => {
      if (action.payload.val == null) return;
      if (action.payload.fieldn === 'catw') {
        state.ccatw = action.payload.val;
      }
      if (action.payload.fieldn === 'comw') {
        state.ccomw = action.payload.val;
      }
    },
    setMarkList: (state, action: PayloadAction<number[]>) => {
      state.marks = action.payload;
    },
    updateCmChordTracks: (state, action: PayloadAction<ChordPack>) => {
      state.chordTracks = action.payload;
    },
    updateMeetingList: (state, action: PayloadAction<IExportableMeetings | und>) => {
      state.meetings = action.payload;
    },
    updateFavoriteMeetings: (state, action: PayloadAction<FavoriteMeetings>) => {
      state.favoriteMeetings = action.payload;
      cmStorage.set('favoriteMeetings', state.favoriteMeetings);
    },
    updateSelectedComws: (state, action: PayloadAction<number[]>) => {
      state.selectedComws = action.payload;
    },
    updateComTopTools: (state, action: PayloadAction<MigratableComToolName[]>) => {
      state.comTopTools = action.payload;
      cmStorage.set('comTopTools', action.payload);
    },
    updateCurrentMeetingsContext: (state, action: PayloadAction<number[]>) => {
      state.currentMeetingsContext = action.payload;
      cmStorage.set('currentMeetingsContext', action.payload);
    },
    updateEditorExecList: (state, action: PayloadAction<Exec[]>) => {
      state.execs = action.payload;
    },
    setCurrentEventw: (state, action: PayloadAction<number>) => {
      state.eventw = action.payload;
    },
    switchCmFullscreen: (state, action: PayloadAction<boolean | nil>) => {
      state.isCmFullscreen = action.payload ?? state.isCmFullscreen;
    },
    switchIsMiniAnchor: (state, action: PayloadAction<boolean | nil>) => {
      state.isMiniAnchor = action.payload ?? !state.isMiniAnchor;
      cmStorage.set('isMiniAnchor', state.isMiniAnchor);
    },
    setPlayerHideMode: (state, action: PayloadAction<PlayerHideMode>) => {
      state.playerHideMode = action.payload;
      cmStorage.set('playerHideMode', state.playerHideMode);
    },
    setParanjaMode: (state, action: PayloadAction<ParanjaMode>) => {
      state.paranjaMode = action.payload;
    },
    updateLaterComwList: (state, action: PayloadAction<number[]>) => {
      state.laterComwList = action.payload;
    },
    setChordVisibleVariant: (state, action: PayloadAction<ChordVisibleVariant>) => {
      state.chordVisibleVariant = action.payload;
    },
    setComFontSize: (state, action: PayloadAction<number>) => {
      const size = Math.ceil(action.payload);
      const fontSize = size < 5 ? 5 : size > 70 ? 70 : size;
      state.comFontSize = fontSize;
      cmStorage.set('comFontSize', fontSize);
    },
    changeRollMode: (state, action: PayloadAction<CmRollMode>) => {
      state.rollMode = action.payload;
    },
    setTranslationBlock: (state, action: PayloadAction<number>) => {
      state.translationBlock = action.payload;
    },
    switchTranslationBlockVisible: (state, action: PayloadAction<boolean>) => {
      state.isTranslationBlockVisible = action.payload;
    },
    switchShowTranslationInfo: (state, action: PayloadAction<boolean>) => {
      state.isShowTranslationInfo = action.payload;
      if (!state.isShowTranslationInfo) cmStorage.set('isShowTranslationInfo', false);
    },
    setTranslationBlockPosition: (state, action: PayloadAction<FontSizeContainPropsPosition>) => {
      state.translationBlockPosition = action.payload;
    },
    riseUpTranslationUpdates: (state) => {
      state.translationUpdates++;
    },
    riseUpComUpdate: (state) => {
      state.numComUpdates++;
    },
    riseUpColsUpdates: (state) => {
      state.numColsUpdates++;
    },
    riseUpAbsolutePopupUpdates: (state) => {
      state.numAbsolutePopupUpdates++;
    },
    riseUpMeetingsUpdate: (state) => {
      state.numMeetingsUpdate++;
    },
  },
});

export const {
  riseUpColsUpdates,
  selectCcol,
  switchCmFullscreen,
  switchIsMiniAnchor,
  setPlayerHideMode,
  setChordVisibleVariant,
  riseUpComUpdate,
  changeRollMode,
  setMarkList,
  updateMeetingList,
  updateFavoriteMeetings,
  updateSelectedComws,
  updateComTopTools,
  updateCurrentMeetingsContext,
  updateEditorExecList,
  setCurrentEventw,
  setComFontSize,
  setTranslationBlock,
  switchTranslationBlockVisible,
  setTranslationBlockPosition,
  riseUpTranslationUpdates,
  switchShowTranslationInfo,
  setParanjaMode,
  updateLaterComwList,
  updateCmChordTracks,
  riseUpAbsolutePopupUpdates,
  riseUpMeetingsUpdate,
} = slice.actions;
export default slice.actions;

export const cmReducer = slice.reducer;
