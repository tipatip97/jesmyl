import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
  middleware: mw => mw({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
