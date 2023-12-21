import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComplectState, ComplectStorage } from './Complect.model';
import { FullScreenContentOpenMode } from './fullscreen-content/useFullscreenContent';
import { JStorage } from './JStorage';
import { NavigationStorage } from './nav-configurer/Navigation.model';

export const complectStorage: JStorage<NavigationStorage<ComplectStorage>> = new JStorage<
  NavigationStorage<ComplectStorage>
>('complect');

const initialState: ComplectState = {
  fullscreenContentOpenMode: null,
  isAbsoluteFloatPopupOpen: false,
  isAbsoluteBottomPopupOpen: false,
  isFullscreen: false,
  isNumberSearch: false,
  numAbsoluteBottomPopupUpdates: 0,
  numExerUpdates: 0,
};

export const slice = createSlice({
  name: 'complect',
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
    switchIsNumberSearch: (state, action: PayloadAction<boolean | nil>) => {
      state.isNumberSearch = action.payload ?? !state.isNumberSearch;
    },
    switchAbsoluteBottomPopupOpen: (state, action: PayloadAction<boolean | nil>) => {
      state.isAbsoluteBottomPopupOpen = action.payload ?? !state.isAbsoluteBottomPopupOpen;
    },
    riseUpAbsoluteBottomPopupUpdates: (state) => {
      state.numAbsoluteBottomPopupUpdates++;
    },
    riseUpExerUpdates: (state) => {
      state.numExerUpdates++;
    },
  },
});

export const {
  setFullscreenContentOpenMode,
  switchAbsoluteFloatPopupOpen,
  switchAbsoluteBottomPopupOpen,
  riseUpAbsoluteBottomPopupUpdates,
  switchIsNumberSearch,
  switchComplectFullscreen,
  riseUpExerUpdates,
} = slice.actions;
export default slice.actions;

export const complectReducer = slice.reducer;
