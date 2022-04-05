import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { appStorage, cmStorage } from "../../../store/jstorages";
import { ChordVisibleVariant, CmPhase, CmRollMode, CmState, CmStorage } from "./Cm.model";

export const cmExer = new Exer<CmStorage>(cmStorage, 'cm');

cmStorage.registerTop(appStorage);

const initialState: CmState = {
  chordVisibleVariant: cmStorage.getOr('chordVisibleVariant', 0),
  ccomw: cmStorage.get('ccomw'),
  ccatw: cmStorage.get('ccatw'),
  phase: cmStorage.getOr('phase', 'cats'),
  rollMode: null,
  isComFullscreenMode: false,
  isPlayerShown: false,
  rollModeMarks: false,
  numComUpdates: 0,
  numColsUpdates: 0,
  marks: cmStorage.getOr('marks', []),
  comFontSize: 100,
};

export const slice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setPhase: (state, action: PayloadAction<CmPhase>) => {
      state.phase = action.payload;
    },
    selectCcol: (state, action: PayloadAction<{ ccatw?: number, ccomw?: number }>) => {
      if (action.payload.ccatw != null) {
        state.ccatw = action.payload.ccatw;
      }
      if (action.payload.ccomw != null) {
        state.ccomw = action.payload.ccomw;
      }
    },
    // addMarks: (state, action: PayloadAction<number | number[]>) => {
    //   state.marks = marks.add(action.payload);
    // },
    // removeMark: (state, action: PayloadAction<number>) => {
    //   state.marks = marks.remove(action.payload);
    // },
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
  },
});

export const { colsForceUpdate, setPhase, selectCcol, updateIsComFullscreenMode, updateIsPlayerShown, updateChordVisibleVariant, comForceUpdate, changeRollMode, changeRollModeMarks } =
  slice.actions;
export default slice.actions;

export const cmReducer = slice.reducer;
