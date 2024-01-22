import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Exer } from '../../../complect/exer/Exer';
import { LeaderState } from './Leader.model';
import leaderStorage from './leaderStorage';

export const leaderExer = new Exer('leader', leaderStorage);

const initialState: LeaderState = {
  gameTimers: {},
  humanListSortVariant: 'name',
  sendingComments: [],
  isSendingMessagesError: false,
};

export const slice = createSlice({
  name: 'leader',
  initialState,
  reducers: {
    ...leaderStorage.initializators([
      'contexts',
      'gameTimers',
      'games',
      'humanListSortVariant',
      'people',
      'rules',
      'sendingComments',
    ]),
    isSendingMessagesError: (state, action: PayloadAction<boolean>) => {
      state.isSendingMessagesError = action.payload;
    },
  },
});

export const leaderStoreActions = slice.actions;

export const leaderReducer = slice.reducer;
