import { useDispatch, useSelector } from "react-redux";
import { appNames } from "../../../../app/App.model";
import BrutalItem from "../../../../complect/brutal-item/BrutalItem";
import BrutalScreen from "../../../../complect/brutal-screen/BrutalScreen";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import { RootState } from "../../../../shared/store";
import PhaseIndexContainer from "../../complect/PhaseIndexContainer";
import useIndexNav from "../../complect/useIndexNav";
import { setCurrentApp } from "../../Index.store";
import useAuth from "../../useAuth";
import IndexAbout from "../IndexAbout";
import "./IndexMain.scss";

export default function IndexMain() {
  const dispatch = useDispatch();
  const apps = useSelector((state: RootState) => state.index.apps);
  const currentAppName = useSelector(
    (state: RootState) => state.index.currentApp
  );
  const { openFullscreenContent } = useFullscreenContent();
  const { goTo } = useIndexNav();

  const currentApp = apps.find((app) => app.name === currentAppName);
  const filteredApps = apps.filter(
    (app) => app !== currentApp && appNames.indexOf(app.name) > -1
  );
  const { auth } = useAuth();

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
                className="margin-big-gap"
              />
              <div>{app.title}</div>
            </div>
          );
        });

  return (
    <PhaseIndexContainer
      topClass="index-main"
      withoutBackButton
      headClass="flex between"
      headTitle={currentApp?.title || "Другое"}
      head={auth?.fio && <div className="margin-big-gap-h">{auth?.fio}</div>}
      contentClass="flex column"
      content={
        <>
          {/* <BrutalItem
            icon="settings-2-outline"
            title="Настройки"
            onClick={() => setPhase("settings")}
          /> */}
          {auth?.fio ? null : (
            <BrutalItem
              icon="login-outline"
              title="Войти"
              onClick={() => goTo("login")}
            />
          )}
          <BrutalItem
            icon="info-outline"
            title="О приложении"
            onClick={() => openFullscreenContent(<IndexAbout />, true)}
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
