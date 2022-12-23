import { configureStore } from '@reduxjs/toolkit'
import { complectReducer } from '../complect/Complect.store';
import { adminReducer } from '../components/apps/admin/Admin.store';
import { cmReducer } from '../components/apps/cm/Cm.store';
import { liderReducer } from '../components/apps/lider/Lider.store';
import { spyReducer } from '../components/apps/spy/Spy.store';
import { tunerReducer } from '../components/apps/tuner/Tuner.store';
import { indexReducer } from '../components/index/Index.store';

export const store = configureStore({
    reducer: {
        index: indexReducer,
        tuner: tunerReducer,
        admin: adminReducer,
        spy: spyReducer,
        cm: cmReducer,
        complect: complectReducer,
        lider: liderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
