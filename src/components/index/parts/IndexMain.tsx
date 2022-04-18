import { useDispatch, useSelector } from "react-redux";
import BrutalItem from "../../../complect/brutal-item";
import BrutalScreen from "../../../complect/brutal-screen/BrutalScreen";
import EvaIcon from "../../../complect/eva-icon";
import PageOnDevelopment from "../../../complect/page-on-development/PageOnDevelopment";
import { RootState } from "../../../shared/store";
import PhaseIndexContainer from "../complect/phase-container/PhaseIndexContainer";
import useIndexNav from "../complect/useIndexNav";
import { setCurrentApp } from "../Index.store";

export default function IndexMain() {
  const dispatch = useDispatch();
  const { setPhase } = useIndexNav();
  const apps = useSelector((state: RootState) => state.index.apps);
  const currentApp = useSelector((state: RootState) => state.index.currentApp);

  return <PageOnDevelopment head="Другое" />

  const filteredApps = apps.filter((app) => app.name !== currentApp);
  const appList =
    filteredApps.length === 0
      ? null
      : filteredApps.map((app) => {
          return (
            <div
              key={`thematic-cat-${app.name}`}
              className="item flex"
              onClick={() => dispatch(setCurrentApp(app.name))}
            >
              <EvaIcon
                name={app.icon || "cube-outline"}
                className="main-big-gap"
              />
              <div>{app.name}</div>
            </div>
          );
        });

  return (
    <PhaseIndexContainer
      topClass="index-main"
      withoutBackButton
      head="Другое"
      contentClass="flex column"
      content={
        <>
          <BrutalItem
            icon="settings-2-outline"
            title="Настройки"
            onClick={() => setPhase("settings")}
          />
          {appList && (
            <BrutalScreen>
              <div className="title">Другие программы</div>
              {appList}
            </BrutalScreen>
          )}
        </>
      }
    />
  );
}
