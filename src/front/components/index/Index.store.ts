import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SokiStatistic } from "../../../back/complect/soki/soki.model";
import { AppName, appNames } from "../../app/App.model";
import { Exer } from "../../complect/exer/Exer";
import {
  Auth, IndexApplication, IndexState,
  IndexStateError
} from "./Index.model";
import indexStorage from "./indexStorage";
import { ScheduleStorage } from "../../complect/schedule-widget/ScheduleWidget.model";

export const indexExer = new Exer('index', indexStorage);
export const defaultAppName = 'cm';

const app = indexStorage.getOr("currentApp", defaultAppName);
const currentApp = appNames.includes(app) ? app : defaultAppName;

const initialState: IndexState = {
  currentApp,
  appVersion: indexStorage.get("appVersion"),
  auth: indexStorage.get('auth'),
  isUseNativeKeyboard: indexStorage.getOr('isUseNativeKeyboard', true),
  apps: indexStorage.getOr('apps', []),
  schedules: indexStorage.getOr('schedules', { list: [] }),
  numModalUpdates: 0,
  errors: {},
  statistic: null,
  userMessages: indexStorage.getOr("userMessages", []),
};

export const slice = createSlice({
  name: "index",
  initialState,
  reducers: {
    updateIndexStatistic: (state, action: PayloadAction<SokiStatistic | null>) => {
      state.statistic = action.payload;
    },
    updateScheduleStorage: (state, action: PayloadAction<ScheduleStorage>) => {
      state.schedules = action.payload;
    },
    setAuthData: (state, action: PayloadAction<Auth | null>) => {
      state.auth = action.payload;
    },
    setAppVersion: (state, action: PayloadAction<number>) => {
      state.appVersion = action.payload;
      indexStorage.set('appVersion', action.payload);
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
    switchIsUseNativeKeyboard: (state, action: PayloadAction<boolean | und>) => {
      state.isUseNativeKeyboard = action.payload ?? !state.isUseNativeKeyboard;
      indexStorage.set("isUseNativeKeyboard", state.isUseNativeKeyboard);
    },
    riseUpModalUpdates: (state) => {
      state.numModalUpdates++;
    },
  },
});

const indexStoreActions = slice.actions;

export default indexStoreActions;

export const indexReducer = slice.reducer;
