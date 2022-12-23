import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { liderStorage } from "../../../shared/jstorages";
import { defaultSendingComments, SendingComments } from "./components/comments/LeaderComment.model";
import { LeaderContextsImportable } from "./components/contexts/Contexts.model";
import { StoragedGameTimerImportableDict } from "./components/games/timers/GameTimer.model";
import { HumanListSortVariant, PeopleImportable } from "./components/people/People.model";
import { GamesStoreImportable, LiderState, LiderStoraged } from "./Lider.model";

export const liderExer = new Exer('lider', liderStorage);

const initialState: LiderState = {
  route: liderStorage.getOr('route', ['all']),
  people: liderStorage.get('people'),
  contexts: liderStorage.get('contexts'),
  ccontextw: liderStorage.getOr('ccontextw', 0),
  games: liderStorage.get('games'),
  cgamew: liderStorage.get('cgamew'),
  cgroupw: liderStorage.get('cgroupw'),
  gameTimers: liderStorage.getOr('gameTimers', {}),
  humanListSortVariant: liderStorage.getOr('humanListSortVariant', 'name'),
  sendingComments: liderStorage.getOr('sendingComments', defaultSendingComments),
  errorSentComments: [],
  numUpdatesContexts: 0,
  numUpdatesPeople: 0,
  numUpdatesGames: 0,
  numUpdatesTimers: 0,
};

export const slice = createSlice({
  name: "lider",
  initialState,
  reducers: {
    setLiderRoute: (state, action: PayloadAction<NavigationStorage<LiderStoraged>>) => {
      state.route = action.payload.route;
    },
    setCurrentContextw: (state, action: PayloadAction<number | und>) => {
      state.ccontextw = action.payload;
      liderStorage.set('ccontextw', action.payload);
    },
    setCurrentGroupw: (state, action: PayloadAction<number | und>) => {
      state.cgroupw = action.payload;
      liderStorage.set('cgroupw', action.payload);
    },
    setHumanListSortVariant: (state, action: PayloadAction<HumanListSortVariant>) => {
      state.humanListSortVariant = action.payload;
      liderStorage.set('humanListSortVariant', action.payload);
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
      liderStorage.set('cgamew', action.payload);
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
  setLiderRoute,
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

export const liderReducer = slice.reducer;
