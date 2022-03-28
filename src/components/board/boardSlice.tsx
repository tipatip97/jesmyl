import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BoardPhase,
  BorderAuthorization,
  BorderState,
  BorderStateError,
  SetFieldState,
} from "./Board.model";

const initialState: BorderState = {
  phase: "apps",
};

export const slice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setPhase: (state, action: PayloadAction<BoardPhase>) => {
      state.phase = action.payload;
    },
    setError: (state, action: PayloadAction<BorderStateError>) => {
      state.errorMessage = action.payload.errorMessage;
      state.errorScope = action.payload.errorScope;
    },
    setFieldState: (
      state,
      action: PayloadAction<SetFieldState<keyof BorderAuthorization>>
    ) => {
      if (state.auth) state.auth[action.payload.fieldn] = action.payload.value || '';
    },
  },
});

export const { setPhase, setFieldState, setError } = slice.actions;
export default slice.actions;

export const boardReducer = slice.reducer;
