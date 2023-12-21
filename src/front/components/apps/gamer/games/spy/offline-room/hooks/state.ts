import { GamerRoom } from '../../../../Gamer.model';
import { useGamerOfflineRoom } from '../../../../complect/rooms/offline-room/hooks/current-room';
import { SpyRoomState } from '../../Spy.model';

export const useSpyOfflineRoomState = (currentOfflineRoom: GamerRoom | und) =>
  currentOfflineRoom?.games?.spy as SpyRoomState | und;

export const useSpyOfflineCurrentRoomState = () => useSpyOfflineRoomState(useGamerOfflineRoom());
