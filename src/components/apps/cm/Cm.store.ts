import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { appStorage, cmStorage } from "../../../store/jstorages";
import { ChordVisibleVariant, CmPhase, CmRollMode, CmState, CmStorage } from "./Cm.model";
import { Cat } from "./col/cat/Cat";
import { Com } from "./col/com/Com";
import { cols } from "./cols/Cols";
import { nav } from "./complect/Nav";
import { marks } from "./marks/Marks";

export const cmExer = new Exer<CmStorage>(cmStorage, 'cm');

cmStorage.registerTop(appStorage);

const initialState: CmState = {
  phase: nav.loadPhase(),
  chordVisibleVariant: nav.loadChordVisibleVariant(),
  ccat: cols.loadCcat(),
  ccom: cols.loadCcom(),
  rollMode: false,
  isComFullscreenMode: false,
  isPlayerShown: false,
  rollModeMarks: false,
  numComUpdates: 0,
  marks: marks.load(),
  comFontSize: 100,
};

export const slice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setPhase: (state, action: PayloadAction<{ phase: CmPhase, spec?: number }>) => {
      const { phase, spec } = action.payload;
      state.phase = nav.setPhase(phase);

      if (spec != null)
        switch (phase) {
          case 'cat':
            cols.setCcat(spec);
            break;
          case 'com':
            cols.setCcom(spec);
            break;
        }
    },
    selectCcol: (state, action: PayloadAction<{ ccat?: Cat, ccom?: Com }>) => {
      if (action.payload.ccat) {
        state.ccat = cols.setCcat(action.payload.ccat);
      }
      if (action.payload.ccom) {
        state.ccom = cols.setCcom(action.payload.ccom);
      }
    },
    addMarks: (state, action: PayloadAction<number | number[]>) => {
      state.marks = marks.add(action.payload);
    },
    removeMark: (state, action: PayloadAction<number>) => {
      state.marks = marks.remove(action.payload);
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
    comForceUpdate: (state) => {
      state.numComUpdates = state.numComUpdates + 1;
    },
    changeRollMode: (state, action: PayloadAction<CmRollMode>) => {
      state.rollMode = action.payload;
    },
    changeRollModeMarks: (state, action: PayloadAction<boolean>) => {
      state.rollModeMarks = action.payload;
    },
  },
});

export const { setPhase, updateIsComFullscreenMode, selectCcol, updateIsPlayerShown, updateChordVisibleVariant, comForceUpdate, changeRollMode, changeRollModeMarks } =
  slice.actions;
export default slice.actions;

export const cmReducer = slice.reducer;
