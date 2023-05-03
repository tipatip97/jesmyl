import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MyLib } from "../../complect/my-lib/MyLib";
import { RouterNavigateData, RouterNavigateCast, RouterState } from "./Router.model";
import routerStorage from "./routerStorage";

const initialState: RouterState = {};

MyLib.entries(routerStorage.properties).forEach(([key, val]) => {
  initialState[key as keyof RouterState] = val;
});

export const slice = createSlice({
  name: "router",
  initialState,
  reducers: {
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

export const {
  routerFixNavigateCast,
  routerFixNavigateData,
} = slice.actions;
export default slice.actions;

export const routerReducer = slice.reducer;
