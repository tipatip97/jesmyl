import { useMemo } from "react";
import { GamerRoomMember } from "../../../Gamer.model";
import { SpyRoomState } from "../Spy.model";
import { SPY_ROLE, unsecretSpyRole } from "./locations";

const extractLogin = (player: { login: string }) => player.login;

export const useGamerCurrentRoomSpies = (state: SpyRoomState | und, players: GamerRoomMember[] | und) => {
    return useMemo(() => {
        const roles = state?.roles;

        return roles == null
            ? []
            : players
                ?.filter((player) => unsecretSpyRole(roles[player.login]) === SPY_ROLE)
                .map(extractLogin);
    }, [players, state?.roles])
};
