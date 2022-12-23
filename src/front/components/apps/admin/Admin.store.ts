import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exer } from "../../../complect/exer/Exer";
import { NavigationStorage } from "../../../complect/nav-configurer/Navigation.model";
import { adminStorage } from "../../../shared/jstorages";
import { AdminState, AdminStorage, IExportableUser, UserVisits } from "./Admin.model";


export const adminExer = new Exer('admin', adminStorage);

const initialState: AdminState = {
    route: adminStorage.getOr("route", ['admin']),
    userList: adminStorage.getOr("userList", []),
    currentUser: adminStorage.get("currentUser"),
    userVisits: adminStorage.getOr("userVisits", {}),
};

export const slice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdminRoute: (state, action: PayloadAction<NavigationStorage<AdminStorage>>) => {
            state.route = action.payload.route;
        },
        setCurrentUser: (state, action: PayloadAction<string>) => {
            state.currentUser = action.payload;
        },
        updateUserVisits: (state, action: PayloadAction<UserVisits>) => {
            state.userVisits = action.payload;
        },
        updateUserList: (state, action: PayloadAction<IExportableUser[]>) => {
            state.userList = action.payload;
        },
    },
});

export const {
    setAdminRoute,
    setCurrentUser,
    updateUserVisits,
    updateUserList,
} = slice.actions;
export default slice.actions;

export const adminReducer = slice.reducer;
