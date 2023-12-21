import { useGamerPlayers } from '../../hooks/players';
import { useGamerOfflineRoom } from './current-room';

export const useGamerOfflineRoomsPlayers = () => useGamerPlayers(useGamerOfflineRoom());
