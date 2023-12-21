import { GamerRoom } from '../../../../Gamer.model';
import { useGamerPlayers } from '../../hooks/players';
import { useGamerCurrentRoom } from './current-room';

export const useGamerRoomPlayers = () => useGamerRoomPlayersNaked(useGamerCurrentRoom());
export const useGamerRoomPlayersNaked = (room: GamerRoom | und) => useGamerPlayers(room);
