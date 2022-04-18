import { AppName } from "../app/App.model";
import { AbsolutePopupMode } from "./absolute-popup/useAbsolutePopup.model";


export interface ComplectStorage {}

type ComplectPhase = '';
type ComplectSpecialPhase = AppName;

export interface ComplectState {
    phase: ComplectPhase;
    prevPhase: ComplectPhase;
    specialPhase: ComplectSpecialPhase;
    isFullscreenContentOpen: boolean;
    absolutePopupOpenMode: AbsolutePopupMode;
    isFullscreen: boolean;
}