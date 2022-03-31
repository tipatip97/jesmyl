import { configureStore } from '@reduxjs/toolkit'
import { cmReducer } from '../components/apps/cm/Cm.store';
import { boardReducer } from '../components/board/Board.store';

export const store = configureStore({
    reducer: {
        board: boardReducer,
        cm: cmReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>


