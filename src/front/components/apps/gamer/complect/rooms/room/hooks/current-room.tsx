import { useGamerRoomw } from "../../hooks/roomw";
import { useGamerRooms } from "./rooms";

export const useGamerCurrentRoom = () => {
  const roomw = useGamerRoomw();

  return useGamerRooms()?.find(({ w }) => w === roomw);
}
