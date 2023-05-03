import { configureStore } from '@reduxjs/toolkit'
import { complectReducer } from '../complect/Complect.store';
import { cmReducer } from '../components/apps/cm/Cm.store';
import { leaderReducer } from '../components/apps/leader/Leader.store';
import { gamerReducer } from '../components/apps/gamer/Gamer.store';
import { tunerReducer } from '../components/apps/tuner/Tuner.store';
import { indexReducer } from '../components/index/Index.store';
import { routerReducer } from '../components/router/Router.store';

export const store = configureStore({
    reducer: {
        index: indexReducer,
        tuner: tunerReducer,
        gamer: gamerReducer,
        cm: cmReducer,
        complect: complectReducer,
        leader: leaderReducer,
        router: routerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
