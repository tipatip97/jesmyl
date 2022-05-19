import { useDispatch, useSelector } from "react-redux";
import { AppName, appNames } from "../../../../app/App.model";
import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import BrutalItem from "../../../../complect/brutal-item/BrutalItem";
import BrutalScreen from "../../../../complect/brutal-screen/BrutalScreen";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import useNavConfigurer from "../../../../complect/nav-configurer/useNavConfigurer";
import navConfigurers from "../../../../shared/navConfigurers";
import { RootState } from "../../../../shared/store";
import PhaseIndexContainer from "../../complect/PhaseIndexContainer";
import { setCurrentApp } from "../../Index.store";
import useAuth from "../../useAuth";
import IndexAbout from "../IndexAbout";
import "./IndexMain.scss";
import UserMore from "./UserMore";

export default function IndexMain() {
  const dispatch = useDispatch();
  const apps = useSelector((state: RootState) => state.index.apps);
  const currentAppName = useSelector(
    (state: RootState) => state.index.currentApp
  );
  const { openFullscreenContent } = useFullscreenContent();
  const { goTo } = navConfigurers["index"]();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  const currentApp = apps.find((app) => app.name === currentAppName);
  const appConfigs = {} as Record<AppName, ReturnType<typeof useNavConfigurer>>;

  Object.entries(navConfigurers).forEach(
    ([name, config]) => (appConfigs[name as AppName] = config())
  );

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
                name={appConfigs[app.name].nav.logo || "cube-outline"}
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
      head={
        auth?.fio && (
          <div
            className="margin-big-gap-h pointer"
            onClick={() => {
              openAbsoluteBottomPopup(<UserMore />);
            }}
          >
            {auth?.fio}
          </div>
        )
      }
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
