import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { spyStorage } from "../../../shared/jstorages";
import { OfflineGame, SpyPassport, SpyRoom, SpyState } from "./Spy.model";


export const spyExer = new Exer('spy', spyStorage);

const initialState: SpyState = {
    roomw: spyStorage.get("roomw"),
    rooms: spyStorage.getOr("rooms", []),
    offlineRooms: spyStorage.getOr("offlineRooms", []),
    locations: spyStorage.getOr("locations", []),
    passport: spyStorage.get("passport"),
};

export const slice = createSlice({
    name: "spy",
    initialState,
    reducers: {
        setSpyCurrentRoomw: (state, action: PayloadAction<number>) => {
            state.roomw = action.payload;
        },
        updateSpyRooms: (state, action: PayloadAction<SpyRoom[]>) => {
            state.rooms = action.payload;
        },
        updateSpyOfflineRooms: (state, action: PayloadAction<SpyRoom[]>) => {
            state.offlineRooms = action.payload;
            spyStorage.set('offlineRooms', state.offlineRooms);
        },
        updateSpyLocations: (state, action: PayloadAction<string[]>) => {
            state.locations = action.payload;
        },
        updateSpyPassport: (state, action: PayloadAction<SpyPassport | null>) => {
            state.passport = action.payload ?? undefined;
            if (!state.passport) spyStorage.rem('passport');
            else spyStorage.set('passport', state.passport);
        },
        updateSpyOfflineGame: (state, action: PayloadAction<OfflineGame | null>) => {
            state.offlineGame = action.payload ?? undefined;
        },
    },
});

export const {
    updateSpyRooms,
    updateSpyOfflineRooms,
    updateSpyLocations,
    setSpyCurrentRoomw,
    updateSpyPassport,
    updateSpyOfflineGame,
} = slice.actions;
export default slice.actions;

export const spyReducer = slice.reducer;
