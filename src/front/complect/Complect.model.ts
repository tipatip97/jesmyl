import { FullContentOpenMode } from './fullscreen-content/useFullContent';

export interface ComplectStorage {
  rememberExpandes: string[];
}

export interface ComplectState {
  fullscreenContentOpenMode: FullContentOpenMode;
  isAbsoluteFloatPopupOpen: boolean;
  isAbsoluteBottomPopupOpen: boolean;
  numAbsoluteBottomPopupUpdates: number;
  isFullscreen: boolean;
  numExerUpdates: number;
  isNumberSearch: boolean;
}
