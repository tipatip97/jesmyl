import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exer } from '../../../complect/exer/Exer';
import { CmState } from './Cm.model';
import cmStorage from './cmStorage';

export const cmExer = new Exer('cm', cmStorage);

const initialState: CmState = {
  chordVisibleVariant: 0,
  laterComwList: [],
  isCmFullscreen: false,
  isMiniAnchor: false,
  playerHideMode: 'min',
  rollModeMarks: false,
  marks: [],
  comFontSize: 15,
  chordTracks: {},
  isShowTranslationInfo: true,
  translationUpdates: 0,
  translationBlock: 0,
  isTranslationBlockVisible: true,
  translationBlockPosition: 'center',
  favoriteMeetings: { contexts: [], events: [] },
  comTopTools: ['mark-com', 'fullscreen-mode'],
  translationScreenConfigs: [],
  currentTranslationConfigi: 0,

  numComUpdates: 0,
  numAbsolutePopupUpdates: 0,
  speedRollKf: 10,

  // editor
  execs: [],
  mp3Rules: [],
};

export const slice = createSlice({
  name: 'cm',
  initialState,
  reducers: {
    ...cmStorage.initializators([
      'chordTracks',
      'chordVisibleVariant',
      'cols',
      'comFontSize',
      'comTopTools',
      'eeStorage',
      'execs',
      'executions',
      'favoriteMeetings',
      'isMiniAnchor',
      'isShowTranslationInfo',
      'laterComwList',
      'marks',
      'meetings',
      'mp3Rules',
      'playerHideMode',
      'rules',
      'settings',
      'speedRollKf',
      'translationBlockPosition',
      'translationBlock',
      'translationScreenConfigs',
    ]),
    currentTranslationConfigi: (state, action: PayloadAction<number>) => {
      state.currentTranslationConfigi = action.payload;
    },
    switchCmFullscreen: (state, action: PayloadAction<boolean | nil>) => {
      state.isCmFullscreen = action.payload ?? !state.isCmFullscreen;
    },
    isTranslationBlockVisible: (state, action: PayloadAction<boolean | nil>) => {
      state.isTranslationBlockVisible = action.payload ?? !state.isTranslationBlockVisible;
    },
    switchIsMiniAnchor: (state, action: PayloadAction<boolean | nil>) => {
      state.isMiniAnchor = action.payload ?? !state.isMiniAnchor;
      cmStorage.set('isMiniAnchor', state.isMiniAnchor);
    },
    setComFontSize: (state, action: PayloadAction<number>) => {
      const size = Math.ceil(action.payload);
      const fontSize = size < 5 ? 5 : size > 70 ? 70 : size;
      state.comFontSize = fontSize;
      cmStorage.set('comFontSize', fontSize);
    },
    switchShowTranslationInfo: (state, action: PayloadAction<boolean>) => {
      state.isShowTranslationInfo = action.payload;
      if (!state.isShowTranslationInfo) cmStorage.set('isShowTranslationInfo', false);
    },
    riseUpTranslationUpdates: state => {
      state.translationUpdates++;
    },
    riseUpComUpdate: state => {
      state.numComUpdates++;
    },
    riseUpAbsolutePopupUpdates: state => {
      state.numAbsolutePopupUpdates++;
    },
  },
});

const cmStoreActions = slice.actions;
export default cmStoreActions;

export const cmReducer = slice.reducer;
