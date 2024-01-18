import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ComplectState, ComplectStorage } from './Complect.model';
import { FullContentOpenMode } from './fullscreen-content/useFullContent';
import { JStorage } from './JStorage';
import { NavigationStorage } from './nav-configurer/Navigation.model';
import { FixedResizerLines } from '../components/apps/+complect/translations/complect/model';

export const complectStorage = new JStorage<NavigationStorage<ComplectStorage>, ComplectState>('complect');

const initialState: ComplectState = {
  fullscreenContentOpenMode: null,
  isAbsoluteFloatPopupOpen: false,
  isAbsoluteBottomPopupOpen: false,
  isFullscreen: false,
  isNumberSearch: false,
  numAbsoluteBottomPopupUpdates: 0,
  numExerUpdates: 0,
  screenTranslationConfigs: [],
  rememberExpandes: [],
  currentTranslationConfigi: 0,
  isTranslationTextVisible: true,
  numTranslationsUpdates: 0,
  currentTranslationTextApp: 'cm',
};

export const slice = createSlice({
  name: 'complect',
  initialState,
  reducers: {
    ...complectStorage.initializators([
      'screenTranslationConfigs',
      'rules',
      'rememberExpandes',
      'currentTranslationConfigi',
      'currentTranslationTextApp',
    ]),
    fixedResizerLines: (state, action: PayloadAction<FixedResizerLines | und>) => {
      state.fixedResizerLines = action.payload;
    },
    isTranslationTextVisible: (state, action: PayloadAction<boolean | und>) => {
      state.isTranslationTextVisible = action.payload ?? !state.isTranslationTextVisible;
    },
    setFullscreenContentOpenMode: (state, action: PayloadAction<FullContentOpenMode>) => {
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
    riseUpAbsoluteBottomPopupUpdates: state => {
      state.numAbsoluteBottomPopupUpdates++;
    },
    riseUpExerUpdates: state => {
      state.numExerUpdates++;
    },
    riseUpTranslationUpdates: state => {
      state.numTranslationsUpdates++;
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
export const complectActions = slice.actions;

export const complectReducer = slice.reducer;
