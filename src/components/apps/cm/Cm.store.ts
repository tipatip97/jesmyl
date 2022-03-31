import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { appStorage, cmStorage } from "../../../store/jstorages";
import { CmPhase, CmState, CmStorage } from "./Cm.model";
import { Cat } from "./col/cat/Cat";
import { Com } from "./col/com/Com";

export const boardExer = new Exer<CmStorage>(cmStorage, 'index');

cmStorage.registerTop(appStorage);

const initialState: CmState = {
  phase: cmStorage.getOr('phase', 'cats'),
  // ccat: cmStorage.get('ccat'),
  // ccom: cmStorage.get('ccom'),
  rollMode: false,
  isComFullscreenMode: false,
};

export const slice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setPhase: (state, action: PayloadAction<{ phase: CmPhase, spec?: number }>) => {
      const { phase, spec } = action.payload;
      state.phase = phase;
      cmStorage.set('phase', phase);

      if (spec != null)
        switch (phase) {
          case 'cat':
            cmStorage.set('ccat', spec);
            break;
          case 'com':
            cmStorage.set('ccom', spec);
            break;
        }
    },
    selectCcol: (state, action: PayloadAction<{ ccat?: Cat, ccom?: Com }>) => {
      if (action.payload.ccat) {
        state.ccat = action.payload.ccat;
        cmStorage.set('ccat', action.payload.ccat.wid);
      } else if (action.payload.ccom) {
        state.ccom = action.payload.ccom;
        cmStorage.set('ccat', action.payload.ccom.wid);
      }
    },
    setIsComFullscreenMode: (state, action: PayloadAction<boolean>) => {
      state.isComFullscreenMode = action.payload;
    },
  },
});

export const { setPhase, setIsComFullscreenMode, selectCcol } =
  slice.actions;
export default slice.actions;

export const cmReducer = slice.reducer;
