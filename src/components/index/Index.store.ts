import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppName } from "../../app/App.model";
import { Exer } from "../../complect/exer/Exer";
import { appStorage, indexStorage } from "../../shared/jstorages";
import {
  IndexApplication, IndexPhase, IndexSpecialPhase, IndexAuthorization,
  IndexState,
  IndexStateError, IndexStorage, SetFieldState
} from "./Index.model";

export const indexExer = new Exer<IndexStorage>(indexStorage, 'index');

indexStorage.registerTop(appStorage);

const initialState: IndexState = {
  phase: indexStorage.getOr("phase", "main"),
  specialPhase: indexStorage.getOr("specialPhase", "cm"),
  prevPhase: indexStorage.getOr("prevPhase", "main"),
  currentApp: indexStorage.getOr("currentApp", "cm"),
  apps: [],
};

export const slice = createSlice({
  name: "index",
  initialState,
  reducers: {
    setIndexPhase: (state, action: PayloadAction<{ phase: IndexPhase; prevPhase: IndexPhase; specialPhase: IndexSpecialPhase }>) => {
      state.phase = action.payload.phase;
      state.prevPhase = action.payload.prevPhase;
      if (action.payload.specialPhase !== undefined) state.specialPhase = action.payload.specialPhase;
    },
    setApps: (state, action: PayloadAction<IndexApplication[]>) => {
      state.apps = action.payload;
    },
    setCurrentApp: (state, action: PayloadAction<AppName>) => {
      state.currentApp = action.payload;
      indexStorage.set("currentApp", action.payload);
    },
    setError: (state, action: PayloadAction<IndexStateError>) => {
      state.errorMessage = action.payload.errorMessage;
      state.errorScope = action.payload.errorScope;
    },
    setFieldState: (
      state,
      action: PayloadAction<SetFieldState<keyof IndexAuthorization>>
    ) => {
      if (state.auth)
        state.auth[action.payload.fieldn] = action.payload.value || "";
    },
  },
});

export const { setIndexPhase, setFieldState, setError, setCurrentApp, setApps } =
  slice.actions;
export default slice.actions;

export const indexReducer = slice.reducer;
