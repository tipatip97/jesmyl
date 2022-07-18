import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { liderStorage } from "../../../shared/jstorages";
import { GamesStore, HumanListSortVariant, LiderState, LiderStorage, People } from "./Lider.model";

export const liderExer = new Exer('lider', liderStorage);

const initialState: LiderState = {
  route: liderStorage.getOr('route', ['all']),
  people: liderStorage.get('people'),
  games: liderStorage.get('games'),
  humanListSortVariant: liderStorage.getOr('humanListSortVariant', 'name'),
};

export const slice = createSlice({
  name: "lider",
  initialState,
  reducers: {
    setLiderRoute: (state, action: PayloadAction<NavigationStorage<LiderStorage>>) => {
      state.route = action.payload.route;
    },
    setHumanListSortVariant: (state, action: PayloadAction<HumanListSortVariant>) => {
      state.humanListSortVariant = action.payload;
      liderStorage.set('humanListSortVariant', action.payload);
    },
    updatePeople: (state, action: PayloadAction<People>) => {
      state.people = action.payload;
    },
    updateGamesStore: (state, action: PayloadAction<GamesStore>) => {
      state.games = action.payload;
      liderStorage.set('games', action.payload);
    },
  },
});

export const {
  setLiderRoute,
  updatePeople,
  setHumanListSortVariant,
  updateGamesStore,
} = slice.actions;
export default slice.actions;

export const liderReducer = slice.reducer;
