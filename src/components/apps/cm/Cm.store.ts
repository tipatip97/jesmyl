import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { appStorage, cmStorage } from "../../../store/jstorages";
import { ChordVisibleVariant, CmPhase, CmRollMode, CmState, CmStorage } from "./Cm.model";
import { FontSizeContainPropsPosition } from "./complect/font-size-contain/FontSizeContain.model";
import { IExportableMeeting } from "./meetings/Meetings.model";

export const cmExer = new Exer<CmStorage>(cmStorage, 'cm');

cmStorage.registerTop(appStorage);

const initialState: CmState = {
  chordVisibleVariant: cmStorage.getOr('chordVisibleVariant', 0),
  ccomw: cmStorage.get('ccomw'),
  ccatw: cmStorage.get('ccatw'),
  phase: cmStorage.getOr('phase', 'cats'),
  prevPhase: cmStorage.get('prevPhase'),
  rollMode: null,
  isCmFullscreenMode: false,
  isShowMarksMode: false,
  isPlayerShown: false,
  rollModeMarks: false,
  marks: cmStorage.getOr('marks', []),
  cm_meetings: cmStorage.getOr('cm_meetings', []),
  comFontSize: cmStorage.getOr('comFontSize', 100),
  chords: cmStorage.getOr('chords', {}),
  translationUpdates: 0,
  translationBlock: 0,
  translationBlockIsVisible: true,
  translationBlockPosition: 'center',

  numComUpdates: 0,
  numColsUpdates: 0,
  numModalUpdates: 0,
};

export const slice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setCmPhase: (state, action: PayloadAction<CmPhase>) => {
      state.prevPhase = state.phase;
      state.phase = action.payload;
    },
    selectCcol: (state, action: PayloadAction<{ fieldn: 'catw' | 'comw', val?: number }>) => {
      if (action.payload.val == null) return;
      if (action.payload.fieldn === 'catw') {
        state.ccatw = action.payload.val;
      }
      if (action.payload.fieldn === 'comw') {
        state.ccomw = action.payload.val;
      }
    },
    setMarkList: (state, action: PayloadAction<number[]>) => {
      state.marks = action.payload;
    },
    setCmChords: (state, action: PayloadAction<Record<string, number[]>>) => {
      state.chords = action.payload;
    },
    setMeetingList: (state, action: PayloadAction<IExportableMeeting[]>) => {
      state.cm_meetings = action.payload;
    },
    updateIsCmFullscreenMode: (state, action: PayloadAction<boolean>) => {
      state.isCmFullscreenMode = action.payload;
    },
    setIsShowMarksMode: (state, action: PayloadAction<boolean>) => {
      state.isShowMarksMode = action.payload;
    },
    updateIsPlayerShown: (state, action: PayloadAction<boolean>) => {
      state.isPlayerShown = action.payload;
    },
    updateChordVisibleVariant: (state, action: PayloadAction<ChordVisibleVariant>) => {
      state.chordVisibleVariant = action.payload;
    },
    updateComFontSize: (state, action: PayloadAction<number>) => {
      state.comFontSize = action.payload;
      cmStorage.set('comFontSize', action.payload);
    },
    changeRollMode: (state, action: PayloadAction<CmRollMode>) => {
      state.rollMode = action.payload;
    },
    setTranslationBlock: (state, action: PayloadAction<number>) => {
      state.translationBlock = action.payload;
    },
    setTranslationBlockIsVisible: (state, action: PayloadAction<boolean>) => {
      state.translationBlockIsVisible = action.payload;
    },
    setTranslationBlockPosition: (state, action: PayloadAction<FontSizeContainPropsPosition>) => {
      state.translationBlockPosition = action.payload;
    },
    changeRollModeMarks: (state, action: PayloadAction<boolean>) => {
      state.rollModeMarks = action.payload;
    },
    riseUpTranslationUpdates: (state) => {
      state.translationUpdates++;
    },
    comForceUpdate: (state) => {
      state.numComUpdates++;
    },
    colsForceUpdate: (state) => {
      state.numColsUpdates++;
    },
    riseUpModalUpdates: (state) => {
      state.numModalUpdates++;
    },
  },
});

export const { colsForceUpdate, setCmPhase, selectCcol, updateIsCmFullscreenMode, updateIsPlayerShown, updateChordVisibleVariant, comForceUpdate, changeRollMode, changeRollModeMarks, setMarkList, setMeetingList, riseUpModalUpdates, updateComFontSize, setTranslationBlock, setTranslationBlockIsVisible, setTranslationBlockPosition, riseUpTranslationUpdates, setIsShowMarksMode } =
  slice.actions;
export default slice.actions;

export const cmReducer = slice.reducer;
