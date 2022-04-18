import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { indexStorage } from "../shared/jstorages";
import { AbsolutePopupMode } from "./absolute-popup/useAbsolutePopup.model";
import { ComplectState } from "./Complect.model";


const initialState: ComplectState = {
    phase: '',
    prevPhase: '',
    specialPhase: indexStorage.getOr('currentApp', 'cm'),
    isFullscreenContentOpen: false,
    absolutePopupOpenMode: null,
    isFullscreen: false,
};

export const slice = createSlice({
    name: "complect",
    initialState,
    reducers: {
        switchFullscreenContentOpen: (state, action: PayloadAction<boolean | nil>) => {
            state.isFullscreenContentOpen = action.payload ?? !state.isFullscreenContentOpen;
        },
        switchComplectFullscreen: (state, action: PayloadAction<boolean | nil>) => {
            state.isFullscreen = action.payload ?? !state.isFullscreen;
        },
        setAbsolutePopupOpen: (state, action: PayloadAction<AbsolutePopupMode>) => {
            state.absolutePopupOpenMode = action.payload;
        },
    },
});

export const {
    switchFullscreenContentOpen,
    setAbsolutePopupOpen,
    switchComplectFullscreen
} =
    slice.actions;
export default slice.actions;

export const complectReducer = slice.reducer;
