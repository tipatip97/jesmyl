import { configureStore } from '@reduxjs/toolkit'
import { complectReducer } from '../complect/Complect.store';
import { cmReducer } from '../components/apps/cm/Cm.store';
import { boardReducer } from '../components/board/Board.store';

export const store = configureStore({
    reducer: {
        index: boardReducer,
        cm: cmReducer,
        complect: complectReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
