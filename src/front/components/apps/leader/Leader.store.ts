import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { leaderStorage } from "../../../shared/jstorages";
import { defaultSendingComments, SendingComments } from "./components/comments/LeaderComment.model";
import { LeaderContextsImportable } from "./components/contexts/Contexts.model";
import { StoragedGameTimerImportableDict } from "./components/games/timers/GameTimer.model";
import { HumanListSortVariant, PeopleImportable } from "./components/people/People.model";
import { GamesStoreImportable, LeaderState } from "./Leader.model";

export const leaderExer = new Exer('leader', leaderStorage);

const initialState: LeaderState = {
  people: leaderStorage.get('people'),
  contexts: leaderStorage.get('contexts'),
  ccontextw: leaderStorage.getOr('ccontextw', 0),
  games: leaderStorage.get('games'),
  cgamew: leaderStorage.get('cgamew'),
  cgroupw: leaderStorage.get('cgroupw'),
  gameTimers: leaderStorage.getOr('gameTimers', {}),
  humanListSortVariant: leaderStorage.getOr('humanListSortVariant', 'name'),
  sendingComments: leaderStorage.getOr('sendingComments', defaultSendingComments),
  errorSentComments: [],
  numUpdatesContexts: 0,
  numUpdatesPeople: 0,
  numUpdatesGames: 0,
  numUpdatesTimers: 0,
};

export const slice = createSlice({
  name: "leader",
  initialState,
  reducers: {
    setCurrentContextw: (state, action: PayloadAction<number | und>) => {
      state.ccontextw = action.payload;
      leaderStorage.set('ccontextw', action.payload);
    },
    setCurrentGroupw: (state, action: PayloadAction<number | und>) => {
      state.cgroupw = action.payload;
      leaderStorage.set('cgroupw', action.payload);
    },
    setHumanListSortVariant: (state, action: PayloadAction<HumanListSortVariant>) => {
      state.humanListSortVariant = action.payload;
      leaderStorage.set('humanListSortVariant', action.payload);
    },
    updateGamesStore: (state, action: PayloadAction<GamesStoreImportable>) => {
      state.games = action.payload;
    },
    updateGamesTimers: (state, action: PayloadAction<StoragedGameTimerImportableDict>) => {
      state.gameTimers = action.payload;
    },
    updateLeaderPeople: (state, action: PayloadAction<PeopleImportable>) => {
      state.people = action.payload;
    },
    updateLeaderContexts: (state, action: PayloadAction<LeaderContextsImportable>) => {
      state.contexts = action.payload;
    },
    updateCgamew: (state, action: PayloadAction<number>) => {
      state.cgamew = action.payload;
      leaderStorage.set('cgamew', action.payload);
    },
    updateSendingComments: (state, action: PayloadAction<SendingComments>) => {
      state.sendingComments = action.payload;
    },
    updateRrrorSentComments: (state, action: PayloadAction<number[]>) => {
      state.errorSentComments = action.payload;
    },
    riseUpNumUpdatesContexts: (state) => { state.numUpdatesContexts++; },
    riseUpNumUpdatesPeople: (state) => { state.numUpdatesPeople++; },
    riseUpNumUpdatesGames: (state) => { state.numUpdatesGames++; },
    riseUpNumUpdatesTimers: (state) => { state.numUpdatesTimers++; },
  },
});

export const {
  setHumanListSortVariant,
  updateGamesStore,
  updateCgamew,
  updateSendingComments,
  updateRrrorSentComments,
  updateLeaderPeople,
  updateGamesTimers,
  setCurrentGroupw,
  updateLeaderContexts,
  setCurrentContextw,
  riseUpNumUpdatesPeople,
  riseUpNumUpdatesGames,
  riseUpNumUpdatesTimers,
  riseUpNumUpdatesContexts
} = slice.actions;
export default slice.actions;

export const leaderReducer = slice.reducer;
