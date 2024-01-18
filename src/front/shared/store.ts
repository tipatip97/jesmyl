import { configureStore } from '@reduxjs/toolkit';
import { complectReducer } from '../complect/Complect.store';
import { strongReducer } from '../complect/strong-control/Strong.store';
import { cmReducer } from '../components/apps/cm/Cm.store';
import { gamerReducer } from '../components/apps/gamer/Gamer.store';
import { leaderReducer } from '../components/apps/leader/Leader.store';
import { tunerReducer } from '../components/apps/tuner/Tuner.store';
import { indexReducer } from '../components/index/Index.store';
import { routerReducer } from '../components/router/Router.store';
import { bibleReducer } from '../components/apps/bible/Bible.store';

export const store = configureStore({
  reducer: {
    index: indexReducer,
    tuner: tunerReducer,
    gamer: gamerReducer,
    cm: cmReducer,
    complect: complectReducer,
    leader: leaderReducer,
    router: routerReducer,
    strong: strongReducer,
    bible: bibleReducer,
  },
  middleware: mw => mw({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
