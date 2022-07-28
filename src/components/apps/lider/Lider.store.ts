import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { liderStorage } from "../../../shared/jstorages";
import { defaultSendingComments, SendingComments } from "./components/comments/LeaderComment.model";
import { HumanListSortVariant } from "./components/people/People.model";
import { GamesStoreImportable, LiderState, LiderStoraged } from "./Lider.model";

export const liderExer = new Exer('lider', liderStorage);

const initialState: LiderState = {
  route: liderStorage.getOr('route', ['all']),
  people: liderStorage.get('people'),
  games: liderStorage.get('games'),
  cgamew: liderStorage.get('cgamew'),
  gameTimers: liderStorage.getOr('gameTimers', {}),
  humanListSortVariant: liderStorage.getOr('humanListSortVariant', 'name'),
  sendingComments: liderStorage.getOr('sendingComments', defaultSendingComments),
  errorSentComments: [],
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
    setHumanListSortVariant: (state, action: PayloadAction<HumanListSortVariant>) => {
      state.humanListSortVariant = action.payload;
      liderStorage.set('humanListSortVariant', action.payload);
    },
    updateGamesStore: (state, action: PayloadAction<GamesStoreImportable>) => {
      state.games = action.payload;
      liderStorage.set('games', action.payload);
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
  riseUpNumUpdatesPeople,
  riseUpNumUpdatesGames,
  riseUpNumUpdatesTimers,
} = slice.actions;
export default slice.actions;

export const liderReducer = slice.reducer;
