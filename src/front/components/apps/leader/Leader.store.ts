import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { ClientExecutionDict } from "../../../complect/exer/Exer.model";
import { LeaderContextsImportable } from "./components/contexts/Contexts.model";
import { StoragedGameTimerImportableDict } from "./components/games/timers/GameTimer.model";
import { HumanListSortVariant, PeopleImportable } from "./components/people/People.model";
import { GamesStoreImportable, LeaderState } from "./Leader.model";
import leaderStorage from "./leaderStorage";

export const leaderExer = new Exer('leader', leaderStorage);

const initialState: LeaderState = {
  people: leaderStorage.get('people'),
  contexts: leaderStorage.get('contexts'),
  games: leaderStorage.get('games'),
  gameTimers: leaderStorage.getOr('gameTimers', {}),
  humanListSortVariant: leaderStorage.getOr('humanListSortVariant', 'name'),
  sendingComments: leaderStorage.getOr('sendingComments', {}),
  isSendingMessagesError: false,
};

export const slice = createSlice({
  name: "leader",
  initialState,
  reducers: {
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
    updateSendingComments: (state, action: PayloadAction<ClientExecutionDict[]>) => {
      state.sendingComments = { comments: action.payload };
      leaderStorage.set('sendingComments', state.sendingComments);
    },
    updateRrrorSentComments: (state, action: PayloadAction<boolean>) => {
      state.isSendingMessagesError = action.payload;
    },
  },
});

export default slice.actions;

export const leaderReducer = slice.reducer;
