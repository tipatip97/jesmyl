import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { liderStorage } from "../../../shared/jstorages";
import { HumanListSortVariant } from "./components/people/Human.model";
import { GamesStoreExportable, LiderState, LiderStoraged } from "./Lider.model";

export const liderExer = new Exer('lider', liderStorage);

const initialState: LiderState = {
  route: liderStorage.getOr('route', ['all']),
  people: liderStorage.get('people'),
  games: liderStorage.get('games'),
  cgamew: liderStorage.get('cgamew'),
  humanListSortVariant: liderStorage.getOr('humanListSortVariant', 'name'),
  numPeopleUpdates: 0,
  numGamesUpdates: 0,
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
    updateGamesStore: (state, action: PayloadAction<GamesStoreExportable>) => {
      state.games = action.payload;
      liderStorage.set('games', action.payload);
    },
    updateCgamew: (state, action: PayloadAction<number>) => {
      state.cgamew = action.payload;
      liderStorage.set('cgamew', action.payload);
    },
    riseUpPeopleNumUpdates: (state) => { state.numPeopleUpdates++; },
    riseUpGamesNumUpdates: (state) => { state.numGamesUpdates++; },
  },
});

export const {
  setLiderRoute,
  setHumanListSortVariant,
  updateGamesStore,
  updateCgamew,
  riseUpPeopleNumUpdates,
  riseUpGamesNumUpdates,
} = slice.actions;
export default slice.actions;

export const liderReducer = slice.reducer;
