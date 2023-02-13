import { appNames } from "../../../../app/App.model";
import useAbsoluteBottomPopup from "../../../../complect/absolute-popup/useAbsoluteBottomPopup";
import BrutalItem from "../../../../complect/brutal-item/BrutalItem";
import BrutalScreen from "../../../../complect/brutal-screen/BrutalScreen";
import EvaIcon from "../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../complect/fullscreen-content/useFullscreenContent";
import useQRMaster from "../../../../complect/qr-code/useQRMaster";
import useApps from "../../../../complect/useApps";
import navConfigurers from "../../../../shared/navConfigurers";
import PhaseIndexContainer from "../../complect/PhaseIndexContainer";
import useAuth from "../../useAuth";
import IndexAbout from "../IndexAbout";
import "./IndexMain.scss";
import UserMore from "./UserMore";


export default function IndexMain() {
  const { openFullscreenContent } = useFullscreenContent();
  const { goTo } = navConfigurers["index"]();
  const { openAbsoluteBottomPopup } = useAbsoluteBottomPopup();
  const { apps, currentApp, appConfigs, jumpToApp } = useApps();

  const filteredApps = apps.filter((app) => app !== currentApp && appNames.indexOf(app.name) > -1);
  const { auth, isConnected } = useAuth();
  const { readQR } = useQRMaster();

  const appList =
    filteredApps.length === 0
      ? null
      : filteredApps.map((app) => {
        return (
          <div
            key={`thematic-cat-${app.name}`}
            className="item flex"
            onClick={() => jumpToApp(app.name)}
          >
            <EvaIcon
              name={appConfigs[app.name].nav.logo || "cube-outline"}
              className="margin-big-gap"
            />
            <div className="app-title-label">{app.title}</div>
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
          <BrutalItem
            icon="qr-code"
            title="Читать QR"
            onClick={() => readQR()}
          />
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
