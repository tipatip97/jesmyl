import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Exer } from '../../../complect/exer/Exer';
import { GamerPassport, GamerState } from './Gamer.model';
import gamerStorage from './gamerStorage';

export const gamerExer = new Exer('gamer', gamerStorage);

const initialState: GamerState = {
  rooms: [],
  aliasWordPacks: [],
  offlineRooms: [],
  locations: [],
};

export const slice = createSlice({
  name: 'gamer',
  initialState,
  reducers: {
    ...gamerStorage.initializators([
      'currentOfflineGameName',
      'offlineSpyGame',
      'locations',
      'offlineRooms',
      'rooms',
      'roomw',
      'rules',
      'aliasWordPacks',
      'passport',
    ]),
    passport: (state, action: PayloadAction<GamerPassport | null>) => {
      state.passport = action.payload ?? undefined;
      if (!state.passport) gamerStorage.rem('passport');
      else gamerStorage.set('passport', state.passport);
    },
  },
});

export default slice.actions;
export const gamerReducer = slice.reducer;
