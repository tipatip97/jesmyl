import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import { appStorage, indexStorage } from "../../../shared/jstorages";
import { RootState } from "../../../shared/store";

export default function IndexAbout() {
  const apps = useSelector((state: RootState) => state.index.apps);
  const currentAppName = useSelector(
    (state: RootState) => state.index.currentApp
  );
  const [indexLastUpdate, setIdexLastUpdate] = useState(
    indexStorage.get("lastUpdate")
  );
  const [appLastUpdate, setAppLastUpdate] = useState(
    appStorage[currentAppName].get("lastUpdate")
  );

  indexStorage.listen("lastUpdate", "IndexAbout", (val) => {
    setIdexLastUpdate(val);
  });
  appStorage[currentAppName].listen("lastUpdate", "IndexAbout", (val) => {
    setAppLastUpdate(val);
  });

  useEffect(
    () => () => {
      indexStorage.mute("lastUpdate", "IndexAbout");
      appStorage[currentAppName].mute("lastUpdate", "IndexAbout");
    },
    []
  );

  const latsDate = useMemo(() => {
    const lastTimestamp = Math.max(indexLastUpdate || 0, appLastUpdate || 0);
    return lastTimestamp > 0
      ? new Date(lastTimestamp * 1000).toLocaleString()
      : null;
  }, [currentAppName, indexLastUpdate, appLastUpdate]);

  const currentApp = apps.find((app) => app.name === currentAppName);

  return (
    <div className="full-container flex center">
      <div
        className="flex custom-align-items column"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex margin-gap-v">
          <EvaIcon name="telegram" />
          <a href="https://t.me/jesmyl_space">@jesmyl_space</a>
        </div>
        <div className="flex">
          <EvaIcon name="telegram" />
          <a href="https://t.me/danikpon">дизайн (3</a>
        </div>
      </div>
      <div className="absolute float-bottom margin-gap-v flex center full-width">
        <span>
          {currentApp && latsDate && `${currentApp.title} ${latsDate}`}
        </span>
      </div>
    </div>
  );
}
