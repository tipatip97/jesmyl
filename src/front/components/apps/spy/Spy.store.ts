import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { spyStorage } from "../../../shared/jstorages";
import { SpyCache, SpyState } from "./Spy.model";


export const spyExer = new Exer('spy', spyStorage);

const initialState: SpyState = {
    roomw: spyStorage.get("roomw"),
    cache: spyStorage.getOr("cache", { rooms: [], locations: [] }),
};

export const slice = createSlice({
    name: "spy",
    initialState,
    reducers: {
        setSpyCurrentRoomw: (state, action: PayloadAction<number>) => {
            state.roomw = action.payload;
        },
        updateSpyCache: (state, action: PayloadAction<SpyCache | und>) => {
            state.cache = action.payload;
        },
    },
});

export const {
    updateSpyCache,
    setSpyCurrentRoomw,
} = slice.actions;
export default slice.actions;

export const spyReducer = slice.reducer;
