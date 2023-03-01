import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { updateGamerRooms, updateSpyLocations } from "./Gamer.store";
import gamerStorage from "./gamerStorage";

export default function GamerApp({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();

  gamerStorage.dispatch(dispatch)
    .it("rooms", updateGamerRooms)
    .it("locations", updateSpyLocations);

  return <>{content}</>;
}
