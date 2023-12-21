import { GamerRoom } from '../../../Gamer.model';
import { useGamerCurrentRoom } from '../../../complect/rooms/room/hooks/current-room';
import { GamerAliasRoomState } from '../Alias.model';

export const useAliasRoomState = () => takeAliasRoomState(useGamerCurrentRoom());

export const takeAliasRoomState = (room: GamerRoom | und) => room?.games?.alias as GamerAliasRoomState | und;
