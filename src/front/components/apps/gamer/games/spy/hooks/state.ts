import { GamerRoom } from "../../../Gamer.model";
import { useGamerCurrentRoom } from "../../../complect/rooms/room/hooks/current-room";
import { SpyRoomState } from "../Spy.model";


export const useSpyRoomState = (room: GamerRoom | und) => room?.games?.spy as SpyRoomState | und;;
export const useSpyRoomStateNaked = () => useSpyRoomState(useGamerCurrentRoom());
