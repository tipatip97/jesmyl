import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComplectState } from "./Complect.model";



const initialState: ComplectState = {
    isFullscreenContentOpen: false,
};

export const slice = createSlice({
    name: "complect",
    initialState,
    reducers: {
        switchFullscreenContentOpen: (state, action: PayloadAction<boolean | nil>) => {
            state.isFullscreenContentOpen = action.payload ?? !state.isFullscreenContentOpen;
        },
    },
});

export const { switchFullscreenContentOpen } =
    slice.actions;
export default slice.actions;

export const complectReducer = slice.reducer;
