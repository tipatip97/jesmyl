import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JStorage } from "../JStorage";
import { NavigationStorage } from "../nav-configurer/Navigation.model";
import { ClipboardStore, StrongState } from "./Strong.model";

export const strongStorage: JStorage<NavigationStorage<StrongState>> = new JStorage<NavigationStorage<StrongState>>('strong');

const initialState: StrongState = {
    clipboard: strongStorage.getOr('clipboard', { items: {} }),
};

export const slice = createSlice({
    name: "strong",
    initialState,
    reducers: {
        clipboard: (state, action: PayloadAction<ClipboardStore>) => {
            state.clipboard = action.payload;
            strongStorage.set('clipboard', action.payload);
        },
    },
});

export default slice.actions;
export const strongReducer = slice.reducer;
