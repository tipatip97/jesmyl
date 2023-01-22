import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { spyStorage } from "../../../shared/jstorages";
import { updateSpyLocations, updateSpyRooms } from "./Spy.store";

export default function SpyApp({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();

  spyStorage.listen("rooms", "SpyApp", (val) => val && dispatch(updateSpyRooms(val)));
  spyStorage.listen("locations", "SpyApp", (val) => val && dispatch(updateSpyLocations(val)));

  return <>{content}</>;
}
