import { configureStore } from '@reduxjs/toolkit';
import { gamerReducer } from '../components/apps/gamer/Gamer.store';
import { tunerReducer } from '../components/apps/tuner/Tuner.store';

export const store = configureStore({
  reducer: {
    tuner: tunerReducer,
    gamer: gamerReducer,
  },
  middleware: mw => mw({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
