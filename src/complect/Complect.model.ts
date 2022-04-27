import { AppName } from "../app/App.model";
import { FullScreenContentOpenMode } from "./fullscreen-content/useFullscreenContent";


export interface ComplectStorage { }

type ComplectPhase = '';
type ComplectSpecialPhase = AppName;

export interface ComplectState {
    phase: ComplectPhase;
    prevPhase: ComplectPhase;
    specialPhase: ComplectSpecialPhase;
    fullscreenContentOpenMode: FullScreenContentOpenMode;
    isAbsoluteFloatPopupOpen: boolean;
    isAbsoluteBottomPopupOpen: boolean;
    numAbsoluteBottomPopupUpdates: number;
    isFullscreen: boolean;
    numExerUpdates: number;
}