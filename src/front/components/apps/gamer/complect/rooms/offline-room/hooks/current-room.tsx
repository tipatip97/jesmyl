import { useGamerOfflineRooms } from "./rooms";
import { useGamerRoomw } from "../../hooks/roomw";

export const useGamerOfflineRoom = () => {
  const roomw = useGamerRoomw();
  return useGamerOfflineRooms()?.find(({ w }) => w === roomw);
}
