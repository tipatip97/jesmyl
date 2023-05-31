import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { IndexApplication } from "./Index.model";
import "./Index.scss";
import di from "./Index.store";
import indexStorage from "./indexStorage";

export default function Index({ content }: { content: ReactNode }) {
  const dispatch = useDispatch();

  const listener = indexStorage.listen("apps", "index-listener", (val) => {
    dispatch(di.setApps(val as IndexApplication[]));
  });

  useEffect(() => {
    indexStorage.update("apps", listener);
    return () => indexStorage.mute("apps", "index-listener");
  });

  return <>{content}</>;
}
