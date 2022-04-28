import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setPhaseInState } from "../../../complect/nav-configurer/useNavConfigurer";
import { tunerStorage } from "../../../shared/jstorages";
import { TunerPhase, TunerSpecialPhase, TunerState } from "./Tuner.model";

const initialState: TunerState = {
    phase: tunerStorage.getOr("phase", "tuner"),
    prevPhase: tunerStorage.getOr("prevPhase", "tuner"),
    specialPhase: tunerStorage.get("specialPhase"),
};

export const slice = createSlice({
    name: "tuner",
    initialState,
    reducers: {
        setTunerPhase: (state, action: PayloadAction<{ phase: TunerPhase | nil; prevPhase: TunerPhase | nil; specialPhase: TunerSpecialPhase | nil }>) => {
            setPhaseInState(state, action.payload.phase, action.payload.prevPhase, action.payload.specialPhase);
        },
    },
});

export const {
    setTunerPhase,
} = slice.actions;
export default slice.actions;

export const tunerReducer = slice.reducer;
