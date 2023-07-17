import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../complect/exer/Exer";
import {
  IndexState,
  IndexStateError
} from "./Index.model";
import indexStorage from "./indexStorage";

export const indexExer = new Exer('index', indexStorage);
export const defaultAppName = 'cm';

const initialState: IndexState = {
  currentApp: defaultAppName,
  appVersion: 0,
  auth: { level: 0 },
  isUseNativeKeyboard: false,
  schedules: { list: [] },
  numModalUpdates: 0,
  errors: {},
  statistic: null,
  userMessages: [],
};

export const slice = createSlice({
  name: "index",
  initialState,
  reducers: {
    ...indexStorage.initializators([
      'appVersion',
      "auth",
      "currentApp",
      "errors",
      "isUseNativeKeyboard",
      "numModalUpdates",
      "registeredApps",
      "rejectedComponents",
      "rules",
      "schedules",
      "statistic",
      "theme",
      "updateRequisites",
      "updateOnRefresher",
      "userMessages",
    ]),
    setError: (state, action: PayloadAction<IndexStateError>) => {
      if (action.payload.scope) {
        if (action.payload.message == null) delete state.errors[action.payload.scope];
        else
          state.errors[action.payload.scope] = action.payload.message;
      }
    },
    isUseNativeKeyboard: (state, action: PayloadAction<boolean | und>) => {
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
