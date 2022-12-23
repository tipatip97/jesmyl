import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { spyStorage } from "../../../shared/jstorages";
import { updateSpyCache } from "./Spy.store";

export default function SpyApp({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();

  spyStorage.listen("cache", "SpyApp", (val) => dispatch(updateSpyCache(val)));

  return <>{content}</>;
}
