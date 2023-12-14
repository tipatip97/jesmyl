import { useMemo } from "react";
import { GamerRoomMember } from "../../../Gamer.model";
import { useGamerRoomPlayers } from "../../../complect/rooms/room/hooks/players";
import { SpyRoomState } from "../Spy.model";
import { unsecretSpyRole } from "./locations";
import { useSpyRoomStateNaked } from "./state";

const itIt = (it: unknown) => it;

export const useSpyCurrentLocationNaked = () => useSpyCurrentLocation(useSpyRoomStateNaked(), useGamerRoomPlayers());

export const useSpyCurrentLocation = (state: SpyRoomState | und, players: GamerRoomMember[] | und) => {
    return useMemo(() => {
        const roles = state?.roles;

        return roles == null
            ? ''
            : players
                ?.map((player) => unsecretSpyRole((roles[player.login]) || ''))
                .find(itIt);
    }, [players, state?.roles]);
};
