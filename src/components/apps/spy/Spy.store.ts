import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { spyStorage } from "../../../shared/jstorages";
import { SpyCache, SpyState, SpyStorage } from "./Spy.model";


export const spyExer = new Exer('spy', spyStorage);

const initialState: SpyState = {
    route: spyStorage.getOr("route", ['spy']),
    roomw: spyStorage.get("roomw"),
    cache: spyStorage.getOr("cache", { rooms: [], locations: [] }),
};

export const slice = createSlice({
    name: "spy",
    initialState,
    reducers: {
        setSpyRoute: (state, action: PayloadAction<NavigationStorage<SpyStorage>>) => {
            state.route = action.payload.route;
        },
        setSpyCurrentRoomw: (state, action: PayloadAction<number>) => {
            state.roomw = action.payload;
        },
        updateSpyCache: (state, action: PayloadAction<SpyCache | und>) => {
            state.cache = action.payload;
        },
    },
});

export const {
    setSpyRoute,
    updateSpyCache,
    setSpyCurrentRoomw,
} = slice.actions;
export default slice.actions;

export const spyReducer = slice.reducer;
