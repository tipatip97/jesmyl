import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { GamerGameName, GamerPassport, GamerRoom, GamerState } from "./Gamer.model";
import gamerStorage from "./gamerStorage";
import { OfflineSpyGame } from "./games/spy/offline-room/SpyOfflineRoom.model";


export const gamerExer = new Exer('gamer', gamerStorage);

const initialState: GamerState = {
    rooms: [],
    aliasWords: [],
    offlineRooms: [],
    locations: [],
};

export const slice = createSlice({
    name: "gamer",
    initialState,
    reducers: {
        ...gamerStorage.initializators([
            'currentOfflineGameName',
            'offlineSpyGame',
            'locations',
            'offlineRooms',
            'rooms',
            'roomw',
            'rules',
            'aliasWords',
            'passport',
        ]),
        passport: (state, action: PayloadAction<GamerPassport | null>) => {
            state.passport = action.payload ?? undefined;
            if (!state.passport) gamerStorage.rem('passport');
            else gamerStorage.set('passport', state.passport);
        },
    },
});

export default slice.actions;
export const gamerReducer = slice.reducer;
