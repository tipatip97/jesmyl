import { configureStore } from '@reduxjs/toolkit';
import { gamerReducer } from '../components/apps/gamer/Gamer.store';

export const store = configureStore({
  reducer: {
    gamer: gamerReducer,
  },
  middleware: mw => mw({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
