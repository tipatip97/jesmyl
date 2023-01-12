import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import { indexStorage } from "../../../shared/jstorages";
import { RootState } from "../../../shared/store";
import * as versionNum from '../../../version.json';

const version = { ...versionNum };

const appsSelector = (state: RootState) => state.index.apps;
const currentAppSelector = (state: RootState) => state.index.currentApp;

export default function IndexAbout() {
  const apps = useSelector(appsSelector);
  const currentAppName = useSelector(currentAppSelector);
  const { index, [currentAppName]: app } = indexStorage.get("lastUpdates") || {};
  const [indexLastUpdate, setIdexLastUpdate] = useState(index);
  const [appLastUpdate, setAppLastUpdate] = useState(app);

  indexStorage.listen("lastUpdates", "IndexAbout", (val) => {
    const { index, [currentAppName]: app } = val || {};
    setIdexLastUpdate(index);
    setAppLastUpdate(app);
  });

  useEffect(() => () => { indexStorage.mute("lastUpdates", "IndexAbout"); }, []);

  const latsDate = useMemo(() => {
    const lastTimestamp = Math.max(indexLastUpdate || 0, appLastUpdate || 0);
    return lastTimestamp > 0
      ? new Date(lastTimestamp).toLocaleString()
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
      <div className="absolute pos-bottom margin-big-gap-v flex center full-width">
        <span>
          {currentApp && latsDate && `${currentApp.title} ${latsDate}; v${version.num}`}
        </span>
      </div>
    </div>
  );
}
