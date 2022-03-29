import { configureStore } from '@reduxjs/toolkit'
import { boardReducer } from '../components/board/Board.store';

export const store = configureStore({
    reducer: {
        board: boardReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>


