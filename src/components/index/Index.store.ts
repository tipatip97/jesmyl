import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppName } from "../../app/App.model";
import { Exer } from "../../complect/exer/Exer";
import { setPhaseInState } from "../../complect/nav-configurer/useNavConfigurer";
import { appStorage, indexStorage } from "../../shared/jstorages";
import {
  IndexApplication, IndexPhase, IndexSpecialPhase,
  IndexState,
  IndexStateError, IndexStorage, Auth
} from "./Index.model";

export const indexExer = new Exer<IndexStorage>(indexStorage, 'index');

indexStorage.registerTop(appStorage);

const initialState: IndexState = {
  phase: indexStorage.getOr("phase", "main"),
  specialPhase: indexStorage.getOr("specialPhase", "cm"),
  prevPhase: indexStorage.getOr("prevPhase", "main"),
  currentApp: indexStorage.getOr("currentApp", "cm"),
  lastUpdate: indexStorage.get("lastUpdate"),
  auth: indexStorage.get('auth'),
  apps: [],
};

export const slice = createSlice({
  name: "index",
  initialState,
  reducers: {
    setIndexPhase: (state, action: PayloadAction<{ phase: IndexPhase | nil; prevPhase: IndexPhase | nil; specialPhase: IndexSpecialPhase }>) => {
      setPhaseInState(state, action.payload.phase, action.payload.prevPhase, action.payload.specialPhase);
    },
    setAuthData: (state, action: PayloadAction<Auth>) => {
      state.auth = action.payload;
      indexStorage.set('auth', action.payload);
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
  },
});

export const {
  setIndexPhase,
  setError,
  setCurrentApp,
  setApps,
  setAuthData,
} = slice.actions;
export default slice.actions;

export const indexReducer = slice.reducer;
