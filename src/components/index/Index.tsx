import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { indexStorage } from "../../shared/jstorages";
import { IndexApplication } from "./Index.model";
import "./Index.scss";
import { setApps } from "./Index.store";
import useIndexNav from "./complect/useIndexNav";
import IndexMain from "./parts/index-main/IndexMain";
import IndexSettings from "./parts/Settings";

export default function Index() {
  const dispatch = useDispatch();

  const listener = indexStorage.listen("apps", "index-listener", (val) => {
    dispatch(setApps(val as IndexApplication[]));
  });
  const { phase } = useIndexNav();

  useEffect(() => {
    indexStorage.update("apps", listener);
    return () => indexStorage.mute("apps", "index-listener");
  });

  switch (phase) {
    case "main":
      return <IndexMain />;
    case "settings":
      return <IndexSettings />;
  }
  return null;
}
