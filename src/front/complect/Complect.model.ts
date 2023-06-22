import { FullScreenContentOpenMode } from "./fullscreen-content/useFullscreenContent";


export interface ComplectStorage {
    rememberExpandes: string[],
}

export interface ComplectState {
    fullscreenContentOpenMode: FullScreenContentOpenMode,
    isAbsoluteFloatPopupOpen: boolean,
    isAbsoluteBottomPopupOpen: boolean,
    numAbsoluteBottomPopupUpdates: number,
    isFullscreen: boolean,
    numExerUpdates: number,
    isNumberSearch: boolean,
}