import { configureStore } from '@reduxjs/toolkit'
import { complectReducer } from '../complect/Complect.store';
import { cmReducer } from '../components/apps/cm/Cm.store';
import { tunerReducer } from '../components/apps/tuner/Tuner.store';
import { indexReducer } from '../components/index/Index.store';

export const store = configureStore({
    reducer: {
        index: indexReducer,
        tuner: tunerReducer,
        cm: cmReducer,
        complect: complectReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
