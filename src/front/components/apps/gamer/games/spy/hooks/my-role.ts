import useAuth from "../../../../../index/useAuth";
import { LocalSokiAuth } from "../../../Gamer.model";
import { SpyRoomState } from "../Spy.model";
import { unsecretSpyRole } from "./locations";
import { useSpyRoomStateNaked } from "./state";


export const useSpyMyRoleNaked = () => useSpyMyRole(useSpyRoomStateNaked(), useAuth());

export const useSpyMyRole = (state: SpyRoomState | und, auth: LocalSokiAuth) => {
    return state?.roles && auth.login && unsecretSpyRole(state.roles[auth.login])
};
