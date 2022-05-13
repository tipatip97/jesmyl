import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { cmStorage } from "../../../shared/jstorages";
import { FontSizeContainPropsPosition } from "./base/font-size-contain/FontSizeContain.model";
import { ParanjaMode } from "./base/useParanja";
import { ChordVisibleVariant, CmRollMode, CmState, CmStorage } from "./Cm.model";
import { IExportableMeetings } from "./lists/meetings/Meetings.model";

export const cmExer = new Exer('cm', cmStorage);

const initialState: CmState = {
  route: cmStorage.getOr('route', ['all']),
  chordVisibleVariant: cmStorage.getOr('chordVisibleVariant', 0),
  ccomw: cmStorage.get('ccomw'),
  ccatw: cmStorage.getOr('ccatw', 0),
  laterComwList: cmStorage.getOr('laterComwList', []),
  lastUpdate: cmStorage.get('lastUpdate'),
  rollMode: null,
  isCmFullscreen: false,
  isShowMarks: false,
  isMiniAnchor: false,
  paranjaMode: null,
  rollModeMarks: false,
  marks: cmStorage.getOr('marks', []),
  meetings: cmStorage.get('meetings'),
  eventw: cmStorage.get('eventw'),
  comFontSize: cmStorage.getOr('comFontSize', 15),
  chords: cmStorage.getOr('chords', {}),
  isShowTranslationInfo: cmStorage.getOr('isShowTranslationInfo', true),
  translationUpdates: 0,
  translationBlock: 0,
  isTranslationBlockVisible: true,
  translationBlockPosition: 'center',

  numComUpdates: 0,
  numColsUpdates: 0,
  numAbsolutePopupUpdates: 0,
  numMeetingsUpdate: 0,
};

export const slice = createSlice({
  name: "cm",
  initialState,
  reducers: {
    setCmRoute: (state, action: PayloadAction<NavigationStorage<CmStorage>>) => {
      state.route = action.payload.route;
    },
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
    setCmChords: (state, action: PayloadAction<Record<string, number[]>>) => {
      state.chords = action.payload;
    },
    updateMeetingList: (state, action: PayloadAction<IExportableMeetings | und>) => {
      state.meetings = action.payload;
    },
    setCurrentMeetingw: (state, action: PayloadAction<number>) => {
      state.eventw = action.payload;
    },
    switchCmFullscreen: (state, action: PayloadAction<boolean | nil>) => {
      state.isCmFullscreen = action.payload ?? state.isCmFullscreen;
    },
    switchShowMarks: (state, action: PayloadAction<boolean | nil>) => {
      state.isShowMarks = action.payload ?? state.isShowMarks;
    },
    switchIsMiniAnchor: (state, action: PayloadAction<boolean | nil>) => {
      state.isMiniAnchor = action.payload ?? !state.isMiniAnchor;
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
    switchRollModeMarks: (state, action: PayloadAction<boolean | nil>) => {
      state.rollModeMarks = action.payload ?? state.rollModeMarks;
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
  setCmRoute,
  selectCcol,
  switchCmFullscreen,
  switchIsMiniAnchor,
  setChordVisibleVariant,
  riseUpComUpdate,
  changeRollMode,
  switchRollModeMarks,
  setMarkList,
  updateMeetingList,
  setCurrentMeetingw,
  setComFontSize,
  setTranslationBlock,
  switchTranslationBlockVisible,
  setTranslationBlockPosition,
  riseUpTranslationUpdates,
  switchShowMarks,
  switchShowTranslationInfo,
  setParanjaMode,
  updateLaterComwList,
  riseUpAbsolutePopupUpdates,
  riseUpMeetingsUpdate,
} = slice.actions;
export default slice.actions;

export const cmReducer = slice.reducer;
