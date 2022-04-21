import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { indexStorage } from "../shared/jstorages";
import { ComplectState } from "./Complect.model";
import { FullScreenContentOpenMode } from "./fullscreen-content/useFullscreenContent";


const initialState: ComplectState = {
    phase: '',
    prevPhase: '',
    specialPhase: indexStorage.getOr('currentApp', 'cm'),
    fullscreenContentOpenMode: null,
    isAbsoluteFloatPopupOpen: false,
    isAbsoluteBottomPopupOpen: false,
    numAbsoluteBottomPopupUpdates: 0,
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
        switchAbsoluteFloatPopupOpen: (state, action: PayloadAction<boolean | nil>) => {
            state.isAbsoluteFloatPopupOpen = action.payload ?? !state.isAbsoluteFloatPopupOpen;
        },
        switchAbsoluteBottomPopupOpen: (state, action: PayloadAction<boolean | nil>) => {
            state.isAbsoluteBottomPopupOpen = action.payload ?? !state.isAbsoluteBottomPopupOpen;
        },
        riseUpAbsoluteBottomPopupUpdates: (state) => {
            state.numAbsoluteBottomPopupUpdates++;
        },
    },
});

export const {
    setFullscreenContentOpenMode,
    switchAbsoluteFloatPopupOpen,
    switchAbsoluteBottomPopupOpen,
    riseUpAbsoluteBottomPopupUpdates,
    switchComplectFullscreen
} =
    slice.actions;
export default slice.actions;

export const complectReducer = slice.reducer;
