import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { appStorage, cmStorage } from "../../../shared/jstorages";
import { FontSizeContainPropsPosition } from "./base/font-size-contain/FontSizeContain.model";
import { ParanjaMode } from "./base/useParanja";
import { ChordVisibleVariant, CmPhase, CmRollMode, CmSpecialPhase, CmState, CmStorage } from "./Cm.model";
import { IExportableMeeting } from "./lists/meetings/Meetings.model";

export const cmExer = new Exer<CmStorage>(cmStorage, 'cm');

cmStorage.registerTop(appStorage);

const initialState: CmState = {
  chordVisibleVariant: cmStorage.getOr('chordVisibleVariant', 0),
  ccomw: cmStorage.get('ccomw'),
  ccatw: cmStorage.getOr('ccatw', 0),
  laterComwList: cmStorage.getOr('laterComwList', []),
  phase: cmStorage.getOr('phase', 'all'),
  specialPhase: cmStorage.getOr('specialPhase', null),
  prevPhase: cmStorage.get('prevPhase'),
  rollMode: null,
  isCmFullscreen: false,
  isShowMarks: false,
  isAnchorsVisible: true,
  paranjaMode: null,
  rollModeMarks: false,
  marks: cmStorage.getOr('marks', []),
  cm_meetings: cmStorage.get('cm_meetings'),
  meetingw: cmStorage.get('meetingw'),
  comFontSize: cmStorage.getOr('comFontSize', 15),
  chords: cmStorage.getOr('chords', {}),
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
    setCmPhase: (state, action: PayloadAction<{ prevPhase: CmPhase; phase: CmPhase; specialPhase: CmSpecialPhase }>) => {

      state.prevPhase = action.payload.prevPhase;
      state.phase = action.payload.phase;
      if (action.payload.specialPhase !== undefined) state.specialPhase = action.payload.specialPhase;
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
    updateMeetingList: (state, action: PayloadAction<IExportableMeeting[] | und>) => {
      state.cm_meetings = action.payload;
    },
    setCurrentMeetingw: (state, action: PayloadAction<number>) => {
      state.meetingw = action.payload;
    },
    switchCmFullscreen: (state, action: PayloadAction<boolean | nil>) => {
      state.isCmFullscreen = action.payload ?? state.isCmFullscreen;
    },
    switchShowMarks: (state, action: PayloadAction<boolean | nil>) => {
      state.isShowMarks = action.payload ?? state.isShowMarks;
    },
    switchAnchorsVisible: (state, action: PayloadAction<boolean | nil>) => {
      state.isAnchorsVisible = action.payload ?? !state.isAnchorsVisible;
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
  setCmPhase,
  selectCcol,
  switchCmFullscreen,
  switchAnchorsVisible,
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
  setParanjaMode,
  updateLaterComwList,
  riseUpAbsolutePopupUpdates,
  riseUpMeetingsUpdate,
} = slice.actions;
export default slice.actions;

export const cmReducer = slice.reducer;
