import { AppName } from "../app/App.model";
import { AbsolutePopupMode } from "./absolute-popup/useAbsolutePopup.model";
import { FullScreenContentOpenMode } from "./fullscreen-content/useFullscreenContent";


export interface ComplectStorage {}

type ComplectPhase = '';
type ComplectSpecialPhase = AppName;

export interface ComplectState {
    phase: ComplectPhase;
    prevPhase: ComplectPhase;
    specialPhase: ComplectSpecialPhase;
    fullscreenContentOpenMode: FullScreenContentOpenMode;
    absolutePopupOpenMode: AbsolutePopupMode;
    isFullscreen: boolean;
}