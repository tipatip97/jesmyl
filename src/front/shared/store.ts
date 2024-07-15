import { configureStore } from '@reduxjs/toolkit';
import { gamerReducer } from '../components/apps/gamer/Gamer.store';
import { leaderReducer } from '../components/apps/leader/Leader.store';
import { tunerReducer } from '../components/apps/tuner/Tuner.store';

export const store = configureStore({
  reducer: {
    tuner: tunerReducer,
    gamer: gamerReducer,
    leader: leaderReducer,
  },
  middleware: mw => mw({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
