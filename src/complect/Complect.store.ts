import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { indexStorage } from "../shared/jstorages";
import { AbsolutePopupMode } from "./absolute-popup/useAbsolutePopup.model";
import { ComplectState } from "./Complect.model";
import { FullScreenContentOpenMode } from "./fullscreen-content/useFullscreenContent";


const initialState: ComplectState = {
    phase: '',
    prevPhase: '',
    specialPhase: indexStorage.getOr('currentApp', 'cm'),
    fullscreenContentOpenMode: null,
    absolutePopupOpenMode: null,
    isFullscreen: false,
};

export const slice = createSlice({
    name: "complect",
    initialState,
    reducers: {
        setFullscreenContentOpenMode: (state, action: PayloadAction<FullScreenContentOpenMode>) => {
            state.fullscreenContentOpenMode = action.payload;
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
    setFullscreenContentOpenMode,
    setAbsolutePopupOpen,
    switchComplectFullscreen
} =
    slice.actions;
export default slice.actions;

export const complectReducer = slice.reducer;
