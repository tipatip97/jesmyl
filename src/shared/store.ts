import { configureStore } from '@reduxjs/toolkit'
import { complectReducer } from '../complect/Complect.store';
import { adminReducer } from '../components/apps/admin/Admin.store';
import { cmReducer } from '../components/apps/cm/Cm.store';
import { printerReducer } from '../components/apps/printer/Printer.store';
import { tunerReducer } from '../components/apps/tuner/Tuner.store';
import { indexReducer } from '../components/index/Index.store';

export const store = configureStore({
    reducer: {
        index: indexReducer,
        tuner: tunerReducer,
        admin: adminReducer,
        cm: cmReducer,
        complect: complectReducer,
        printer: printerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
