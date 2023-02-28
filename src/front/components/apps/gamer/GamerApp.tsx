import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { updateSpyLocations, updateSpyRooms } from "./Gamer.store";
import gamerStorage from "./gamerStorage";

export default function GamerApp({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();

  gamerStorage.dispatch(dispatch)
    .it("rooms", updateSpyRooms)
    .it("locations", updateSpyLocations);

  return <>{content}</>;
}
