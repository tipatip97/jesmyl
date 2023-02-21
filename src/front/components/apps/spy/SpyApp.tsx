import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { updateSpyLocations, updateSpyRooms } from "./Spy.store";
import spyStorage from "./spyStorage";

export default function SpyApp({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();

  spyStorage.dispatch(dispatch)
    .it("rooms", updateSpyRooms)
    .it("locations", updateSpyLocations);

  return <>{content}</>;
}
