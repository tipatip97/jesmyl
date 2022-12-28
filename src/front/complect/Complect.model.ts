import { FullScreenContentOpenMode } from "./fullscreen-content/useFullscreenContent";


export interface ComplectStorage {
}

export interface ComplectState extends ComplectStorage {
    fullscreenContentOpenMode: FullScreenContentOpenMode;
    isAbsoluteFloatPopupOpen: boolean;
    isAbsoluteBottomPopupOpen: boolean;
    numAbsoluteBottomPopupUpdates: number;
    isFullscreen: boolean;
    numExerUpdates: number;
}