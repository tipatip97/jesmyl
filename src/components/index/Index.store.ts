import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppName } from "../../app/App.model";
import { NavRoute } from "../../complect/nav-configurer/Navigation.model";
import { indexStorage } from "../../shared/jstorages";
import {
  Auth, IndexApplication, IndexState,
  IndexStateError
} from "./Index.model";

const initialState: IndexState = {
  route: indexStorage.getOr("route", null),
  currentApp: indexStorage.getOr("currentApp", "cm"),
  lastUpdate: indexStorage.get("lastUpdate"),
  auth: indexStorage.get('auth'),
  apps: [],
};

export const slice = createSlice({
  name: "index",
  initialState,
  reducers: {
    setIndexRoute: (state, action: PayloadAction<{ route: NavRoute }>) => {
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
      state.errorMessage = action.payload.errorMessage;
      state.errorScope = action.payload.errorScope;
    },
  },
});

export const {
  setIndexRoute,
  setError,
  setCurrentApp,
  setApps,
  setAuthData,
} = slice.actions;
export default slice.actions;

export const indexReducer = slice.reducer;
