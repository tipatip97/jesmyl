import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../complect/exer/Exer";
import { appStorage, indexStorage } from "../../store/jstorages";
import {
  BoardAppName,
  BoardPhase,
  IndexStorage,
  BorderAuthorization,
  BorderState,
  BorderStateError,
  SetFieldState,
  BoardApplication,
} from "./Board.model";

export const boardExer = new Exer<IndexStorage>(indexStorage, 'index');

indexStorage.registerTop(appStorage);

const initialState: BorderState = {
  phase: "apps",
  currentApp: indexStorage.getOr("currentApp", "index"),
  apps: [],
};

export const slice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setPhase: (state, action: PayloadAction<BoardPhase>) => {
      state.phase = action.payload;
    },
    setApps: (state, action: PayloadAction<BoardApplication[]>) => {
      state.apps = action.payload;
    },
    setCurrentApp: (state, action: PayloadAction<BoardAppName>) => {
      state.currentApp = action.payload;
      indexStorage.set("currentApp", action.payload);
    },
    setError: (state, action: PayloadAction<BorderStateError>) => {
      state.errorMessage = action.payload.errorMessage;
      state.errorScope = action.payload.errorScope;
    },
    setFieldState: (
      state,
      action: PayloadAction<SetFieldState<keyof BorderAuthorization>>
    ) => {
      if (state.auth)
        state.auth[action.payload.fieldn] = action.payload.value || "";
    },
  },
});

export const { setPhase, setFieldState, setError, setCurrentApp, setApps } =
  slice.actions;
export default slice.actions;

export const boardReducer = slice.reducer;
