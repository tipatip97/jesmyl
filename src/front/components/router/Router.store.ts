import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MyLib } from "../../complect/my-lib/MyLib";
import { RouterNavigateCast, RouterNavigateData, RouterState } from "./Router.model";
import routerStorage from "./routerStorage";

const initialState: RouterState = {};

MyLib.entries(routerStorage.properties).forEach(([key, val]) => {
  initialState[key as keyof RouterState] = val;
});

export const slice = createSlice({
  name: "router",
  initialState,
  reducers: {
    ...routerStorage.initializators([
      'admin',
      'admin.data',
      'cm',
      'cm.data',
      'gamer',
      'gamer.data',
      'index',
      'index.data',
      'leader',
      'leader.data',
      'tuner',
      'tuner.data',
      'rules',
    ]),
    routerFixNavigateCast: (state, action: PayloadAction<RouterNavigateCast>) => {
      state[action.payload.appName] = action.payload.value;
      if (action.payload.isPreventSave) return;
      routerStorage.set(action.payload.appName, action.payload.value);
    },
    routerFixNavigateData: (state, action: PayloadAction<RouterNavigateData>) => {
      state[`${action.payload.appName}.data`] = action.payload.value;
      if (action.payload.isPreventSave) return;
      routerStorage.set(`${action.payload.appName}.data`, action.payload.value);
    },
  },
});

const routerStoreActions = slice.actions;
export default routerStoreActions;

export const routerReducer = slice.reducer;
