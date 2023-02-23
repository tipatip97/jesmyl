import { configureStore } from '@reduxjs/toolkit'
import { complectReducer } from '../complect/Complect.store';
import { cmReducer } from '../components/apps/cm/Cm.store';
import { leaderReducer } from '../components/apps/leader/Leader.store';
import { spyReducer } from '../components/apps/spy/Spy.store';
import { tunerReducer } from '../components/apps/tuner/Tuner.store';
import { indexReducer } from '../components/index/Index.store';

export const store = configureStore({
    reducer: {
        index: indexReducer,
        tuner: tunerReducer,
        spy: spyReducer,
        cm: cmReducer,
        complect: complectReducer,
        leader: leaderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
