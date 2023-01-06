import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppName } from "../../app/App.model";
import { Exer } from "../../complect/exer/Exer";
import { NavRouting } from "../../complect/nav-configurer/Navigation.model";
import { indexStorage } from "../../shared/jstorages";
import {
  Auth, IndexApplication, IndexState,
  IndexStateError
} from "./Index.model";

export const indexExer = new Exer('index', indexStorage);

const initialState: IndexState = {
  routing: indexStorage.getOr("routing", null),
  currentApp: indexStorage.getOr("currentApp", "cm"),
  auth: indexStorage.get('auth'),
  apps: indexStorage.getOr('apps', []),
  numModalUpdates: 0,
  errors: {},
  userMessages: indexStorage.getOr("userMessages", []),
};

export const slice = createSlice({
  name: "index",
  initialState,
  reducers: {
    updateIndexRouting: (state, action: PayloadAction<NavRouting>) => {
      state.routing = action.payload;
    },
    setAuthData: (state, action: PayloadAction<Auth | null>) => {
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
      if (action.payload.scope) {
        if (action.payload.message == null) delete state.errors[action.payload.scope];
        else
          state.errors[action.payload.scope] = action.payload.message;
      }
    },
    riseUpModalUpdates: (state) => {
      state.numModalUpdates++;
    },
  },
});

export const {
  updateIndexRouting,
  setError,
  setCurrentApp,
  setApps,
  setAuthData,
  riseUpModalUpdates,
} = slice.actions;
export default slice.actions;

export const indexReducer = slice.reducer;
