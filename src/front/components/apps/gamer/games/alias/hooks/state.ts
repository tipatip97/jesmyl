import { useGamerCurrentRoom } from "../../../complect/rooms/room/hooks/current-room";
import { GamerAliasRoomState } from "../Alias.model";


export const useAliasRoomState =
    () => useGamerCurrentRoom()?.games?.alias as GamerAliasRoomState | und;
