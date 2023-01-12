import { useDispatch, useSelector } from "react-redux";
import { AppName, appNames } from "../../../../app/App.model";
import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import BrutalItem from "../../../../complect/brutal-item/BrutalItem";
import BrutalScreen from "../../../../complect/brutal-screen/BrutalScreen";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import { MyLib } from "../../../../complect/my-lib/MyLib";
import useNavConfigurer from "../../../../complect/nav-configurer/useNavConfigurer";
import { qrCodeMaster } from "../../../../complect/qr-code/QRCodeMaster";
import navConfigurers from "../../../../shared/navConfigurers";
import { RootState } from "../../../../shared/store";
import { soki } from "../../../../soki";
import PhaseIndexContainer from "../../complect/PhaseIndexContainer";
import { setCurrentApp } from "../../Index.store";
import useAuth from "../../useAuth";
import IndexAbout from "../IndexAbout";
import "./IndexMain.scss";
import UserMore from "./UserMore";

const appsSelector = (state: RootState) => state.index.apps;
const currentAppSelector = (state: RootState) => state.index.currentApp;

export default function IndexMain({ onAppNameChange }: { onAppNameChange: (appName: AppName) => void }) {
  const dispatch = useDispatch();
  const apps = useSelector(appsSelector);
  const currentAppName = useSelector(currentAppSelector);
  const { openFullscreenContent } = useFullscreenContent();
  const { goTo } = navConfigurers["index"]();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();

  const currentApp = apps.find((app) => app.name === currentAppName);
  const appConfigs = {} as Record<AppName, ReturnType<typeof useNavConfigurer>>;

  MyLib.entries(navConfigurers).forEach(([name, config]) => (appConfigs[name] = config()));

  const filteredApps = apps.filter(
    (app) => app !== currentApp && appNames.indexOf(app.name) > -1
  );
  const { auth, isConnected } = useAuth();

  const appList =
    filteredApps.length === 0
      ? null
      : filteredApps.map((app) => {
        return (
          <div
            key={`thematic-cat-${app.name}`}
            className="item flex"
            onClick={() => {
              onAppNameChange(app.name);
              dispatch(setCurrentApp(app.name));
              soki.onAppChange(app.name);
              const rootPhase = appConfigs[app.name].nav.rootPhase;
              if (rootPhase) {
                appConfigs[app.name].navigate([rootPhase]);
                appConfigs.index.navigate(null);
              }
            }}
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
          {isConnected || <div className="error-message">Соединение...</div>}
          {auth?.fio ? null : (
            <BrutalItem
              icon="person-outline"
              title="Войти"
              onClick={() => goTo("login")}
            />
          )}
          <BrutalItem
            icon="settings-2-outline"
            title="Настройки"
            onClick={() => goTo("settings")}
          />
          {auth?.level === 100 && <BrutalItem
            icon="qr-code"
            title="Читать QR"
            onClick={() => qrCodeMaster.read().then((data) => console.log(data))}
          />}
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
