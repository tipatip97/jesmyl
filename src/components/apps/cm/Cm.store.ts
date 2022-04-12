import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { appStorage, cmStorage } from "../../../store/jstorages";
import { ParanjaMode } from "./base/useParanja";
import { ChordVisibleVariant, CmPhase, CmRollMode, CmState, CmStorage } from "./Cm.model";
import { FontSizeContainPropsPosition } from "./complect/font-size-contain/FontSizeContain.model";
import { IExportableMeeting } from "./meetings/Meetings.model";

export const cmExer = new Exer<CmStorage>(cmStorage, 'cm');

cmStorage.registerTop(appStorage);

const initialState: CmState = {
  chordVisibleVariant: cmStorage.getOr('chordVisibleVariant', 0),
  ccomw: cmStorage.get('ccomw'),
  ccatw: cmStorage.getOr('ccatw', 0),
  laterComwList: cmStorage.getOr('laterComwList', []),
  phase: cmStorage.getOr('phase', 'cat'),
  prevPhase: cmStorage.get('prevPhase'),
  rollMode: null,
  isCmFullscreen: false,
  isShowMarks: false,
  isAnchorsVisible: false,
  paranjaMode: null,
  rollModeMarks: false,
  marks: cmStorage.getOr('marks', []),
  cm_meetings: cmStorage.getOr('cm_meetings', []),
  comFontSize: cmStorage.getOr('comFontSize', 15),
  chords: cmStorage.getOr('chords', {}),
  translationUpdates: 0,
  translationBlock: 0,
  isTranslationBlockVisible: true,
  translationBlockPosition: 'center',

  numComUpdates: 0,
  numColsUpdates: 0,
  numModalUpdates: 0,
  numAbsolutePopupUpdates: 0,
};

export const slice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setCmPhase: (state, action: PayloadAction<CmPhase>) => {
      state.prevPhase = state.phase;
      state.phase = action.payload;
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
    setMeetingList: (state, action: PayloadAction<IExportableMeeting[]>) => {
      state.cm_meetings = action.payload;
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
      if (size < 5 || size > 70) return;
      state.comFontSize = size;
      cmStorage.set('comFontSize', size);
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
    riseUpModalUpdates: (state) => {
      state.numModalUpdates++;
    },
    riseUpAbsolutePopupUpdates: (state) => {
      state.numAbsolutePopupUpdates++;
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
  setMeetingList,
  riseUpModalUpdates,
  setComFontSize,
  setTranslationBlock,
  switchTranslationBlockVisible,
  setTranslationBlockPosition,
  riseUpTranslationUpdates,
  switchShowMarks,
  setParanjaMode,
  updateLaterComwList,
  riseUpAbsolutePopupUpdates,
} = slice.actions;
export default slice.actions;

export const cmReducer = slice.reducer;
