import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AbsolutePopupMode } from "./absolute-popup";
import { ComplectState } from "./Complect.model";


const initialState: ComplectState = {
    isFullscreenContentOpen: false,
    absolutePopupOpenMode: null,
};

export const slice = createSlice({
    name: "complect",
    initialState,
    reducers: {
        switchFullscreenContentOpen: (state, action: PayloadAction<boolean | nil>) => {
            state.isFullscreenContentOpen = action.payload ?? !state.isFullscreenContentOpen;
        },
        setAbsolutePopupOpen: (state, action: PayloadAction<AbsolutePopupMode>) => {
            state.absolutePopupOpenMode = action.payload;
        },
    },
});

export const {
    switchFullscreenContentOpen,
    setAbsolutePopupOpen
} =
    slice.actions;
export default slice.actions;

export const complectReducer = slice.reducer;
