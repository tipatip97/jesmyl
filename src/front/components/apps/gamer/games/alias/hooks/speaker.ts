import { useMemo } from "react";
import { useGamerRoomPlayers } from "../../../complect/rooms/room/hooks/players";
import { useAliasSpeakerLogin } from "./speaker-login";


export const useAliasSpeaker = () => {
    const players = useGamerRoomPlayers();
    const memberLogin = useAliasSpeakerLogin();

    return useMemo(() => {
        return players?.find(({ login }) => memberLogin === login);
    }, [memberLogin, players]);
};
