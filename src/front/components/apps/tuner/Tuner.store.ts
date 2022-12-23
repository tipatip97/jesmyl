import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { tunerStorage } from "../../../shared/jstorages";
import { TunerState, TunerStorage } from "./Tuner.model";

const initialState: TunerState = {
    route: tunerStorage.getOr("route", ['tuner']),
};

export const slice = createSlice({
    name: "tuner",
    initialState,
    reducers: {
        setTunerPhase: (state, action: PayloadAction<NavigationStorage<TunerStorage>>) => {
            state.route = action.payload.route;
        },
    },
});

export const {
    setTunerPhase,
} = slice.actions;
export default slice.actions;

export const tunerReducer = slice.reducer;
