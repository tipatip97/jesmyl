import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppName } from "../../app/App.model";
import { Exer } from "../../complect/exer/Exer";
import { NavigationStorage } from "../../complect/nav-configurer/Navigation.model";
import { indexStorage } from "../../shared/jstorages";
import {
  Auth, IndexApplication, IndexState,
  IndexStateError,
  IndexStorage
} from "./Index.model";

export const indexExer = new Exer('index', indexStorage);

const initialState: IndexState = {
  route: indexStorage.getOr("route", null),
  currentApp: indexStorage.getOr("currentApp", "cm"),
  lastUpdate: indexStorage.get("lastUpdate"),
  auth: indexStorage.get('auth'),
  apps: [],
  numModalUpdates: 0,
  errors: {},
  userMessages: indexStorage.getOr("userMessages", []),
};

export const slice = createSlice({
  name: "index",
  initialState,
  reducers: {
    setIndexRoute: (state, action: PayloadAction<NavigationStorage<IndexStorage>>) => {
      state.route = action.payload.route;
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
  setIndexRoute,
  setError,
  setCurrentApp,
  setApps,
  setAuthData,
  riseUpModalUpdates,
} = slice.actions;
export default slice.actions;

export const indexReducer = slice.reducer;
