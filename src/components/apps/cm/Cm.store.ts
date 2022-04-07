import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { appStorage, cmStorage } from "../../../store/jstorages";
import { ChordVisibleVariant, CmPhase, CmRollMode, CmState, CmStorage } from "./Cm.model";
import { IExportableMeeting } from "./complect/meetings/Meetings.model";

export const cmExer = new Exer<CmStorage>(cmStorage, 'cm');

cmStorage.registerTop(appStorage);

const initialState: CmState = {
  chordVisibleVariant: cmStorage.getOr('chordVisibleVariant', 0),
  ccomw: cmStorage.get('ccomw'),
  ccatw: cmStorage.get('ccatw'),
  phase: cmStorage.getOr('phase', 'cats'),
  prevPhase: cmStorage.get('prevPhase'),
  rollMode: null,
  isComFullscreenMode: false,
  isPlayerShown: false,
  rollModeMarks: false,
  marks: cmStorage.getOr('marks', []),
  cm_meetings: cmStorage.getOr('cm_meetings', []),
  comFontSize: 100,
  chords: cmStorage.getOr('chords', {}),

  numComUpdates: 0,
  numColsUpdates: 0,
  numModalUpdates: 0,
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
    updateIsComFullscreenMode: (state, action: PayloadAction<boolean>) => {
      state.isComFullscreenMode = action.payload;
    },
    updateIsPlayerShown: (state, action: PayloadAction<boolean>) => {
      state.isPlayerShown = action.payload;
    },
    updateChordVisibleVariant: (state, action: PayloadAction<ChordVisibleVariant>) => {
      state.chordVisibleVariant = action.payload;
    },
    updateComFontSize: (state, action: PayloadAction<number>) => {
      state.comFontSize = action.payload;
    },
    changeRollMode: (state, action: PayloadAction<CmRollMode>) => {
      state.rollMode = action.payload;
    },
    changeRollModeMarks: (state, action: PayloadAction<boolean>) => {
      state.rollModeMarks = action.payload;
    },
    comForceUpdate: (state) => {
      state.numComUpdates = state.numComUpdates + 1;
    },
    colsForceUpdate: (state) => {
      state.numColsUpdates = state.numColsUpdates + 1;
    },
    riseUpModalUpdates: (state) => {
      state.numModalUpdates = state.numModalUpdates + 1;
    },
  },
});

export const { colsForceUpdate, setCmPhase, selectCcol, updateIsComFullscreenMode, updateIsPlayerShown, updateChordVisibleVariant, comForceUpdate, changeRollMode, changeRollModeMarks, setMarkList, setMeetingList, riseUpModalUpdates } =
  slice.actions;
export default slice.actions;

export const cmReducer = slice.reducer;
