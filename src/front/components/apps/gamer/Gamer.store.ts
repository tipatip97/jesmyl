import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { GamerPassport, GamerRoom, GamerState, GamerGameName } from "./Gamer.model";
import gamerStorage from "./gamerStorage";
import { OfflineSpyGame } from "./games/spy/offline-room/SpyOfflineRoom.model";


export const gamerExer = new Exer('gamer', gamerStorage);

const initialState: GamerState = {
    roomw: gamerStorage.get("roomw"),
    rooms: gamerStorage.getOr("rooms", []),
    offlineRooms: gamerStorage.getOr("offlineRooms", []),
    locations: gamerStorage.getOr("locations", []),
    passport: gamerStorage.get("passport"),
};

export const slice = createSlice({
    name: "gamer",
    initialState,
    reducers: {
        setSpyCurrentRoomw: (state, action: PayloadAction<number>) => {
            state.roomw = action.payload;
        },
        updateSpyRooms: (state, action: PayloadAction<GamerRoom[]>) => {
            state.rooms = action.payload;
        },
        updateSpyOfflineRooms: (state, action: PayloadAction<GamerRoom[]>) => {
            state.offlineRooms = action.payload;
            gamerStorage.set('offlineRooms', state.offlineRooms);
        },
        updateSpyLocations: (state, action: PayloadAction<string[]>) => {
            state.locations = action.payload;
        },
        updateSpyPassport: (state, action: PayloadAction<GamerPassport | null>) => {
            state.passport = action.payload ?? undefined;
            if (!state.passport) gamerStorage.rem('passport');
            else gamerStorage.set('passport', state.passport);
        },
        updateSpyOfflineGame: (state, action: PayloadAction<OfflineSpyGame | null>) => {
            state.offlineSpyGame = action.payload ?? undefined;
        },
        updateCurrentOfflineGameName: (state, action: PayloadAction<GamerGameName | null>) => {
            state.currentOfflineGameName = action.payload ?? undefined;
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
    updateCurrentOfflineGameName,
} = slice.actions;
export default slice.actions;

export const gamerReducer = slice.reducer;
