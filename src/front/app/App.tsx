import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ABSOLUTE__BOTTOM__POPUP } from "../complect/absolute-popup/useAbsoluteBottomPopup";
import { ABSOLUTE__FLOAT__POPUP } from "../complect/absolute-popup/useAbsoluteFloatPopup";
import EvaIcon from "../complect/eva-icon/EvaIcon";
import { FULLSCREEN__CONTENT } from "../complect/fullscreen-content/useFullscreenContent";
import { KEYBOARD_FLASH } from "../complect/keyboard/KeyboardInput";
import Modal from "../complect/modal/Modal";
import { crossApplicationLinkCoder, jesmylHostName } from "../complect/qr-code/QRCodeMaster";
import listenThemeChanges from "../complect/theme-changer";
import useApps from "../complect/useApps";
import useFullScreen from "../complect/useFullscreen";
import di from "../components/index/Index.store";
import indexStorage from "../components/index/indexStorage";
import navConfigurers from "../shared/navConfigurers";
import { RootState } from "../shared/store";
import { appNames } from "./App.model";
import "./App.scss";
import AppFooter from "./AppFooter";
import AppRouter from "./AppRouter";

listenThemeChanges();

const currentAppSelector = (state: RootState) => state.index.currentApp;

function App() {
  const dispatch = useDispatch();
  const appName = useSelector(currentAppSelector);
  const [isFullscreen, switchFullscreen] = useFullScreen();
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const { goBack, registerBackAction } = navConfigurers[appName]();
  const { jumpToApp } = useApps();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      event.code === "Escape" && switchFullscreen(false);
      if (event.code === "ArrowLeft" && event.altKey) {
        event.preventDefault();
        goBack();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goBack]);

  indexStorage.dispatch(dispatch)
    .it('schedules', di.updateScheduleStorage)
    .it('appVersion', di.setAppVersion)
    .it('statistic', di.updateIndexStatistic);

  useEffect(() => {
    if (window.location.href.startsWith(jesmylHostName)) {
      const decodeds = crossApplicationLinkCoder.decode(window.location.href);
      if (decodeds) {
        const { appName, key, value } = decodeds;
        if (appName && key && value !== undefined) {
          window.history.pushState({}, "", jesmylHostName);

          if (appNames.some((name) => name === appName)) {
            jumpToApp(appName, key as never, value);
          }
        }
      }
    }
  }, []);

  return (
    <div className={`above-container ${keyboardOpen ? "keyboard-open" : ""}`}>
      <div
        className={`application-container app_${appName}${isFullscreen ? " fullscreen-mode" : ""}`}
      >
        <EvaIcon
          name="collapse-outline"
          className="collapse-fullscreen-button pointer"
          onClick={() => switchFullscreen(false)}
        />
        <Modal />
        <FULLSCREEN__CONTENT
          onOpen={(close) => registerBackAction(() => close())}
        />
        <ABSOLUTE__BOTTOM__POPUP
          onOpen={(close) => registerBackAction(() => close())}
        />
        <ABSOLUTE__FLOAT__POPUP
          onOpen={(close) => registerBackAction(() => close())}
        />
        <AppRouter appName={appName} />
        <AppFooter appName={appName} />
      </div>
      <KEYBOARD_FLASH
        onFocus={(input) => {
          setKeyboardOpen(true);
          registerBackAction(() => !input || input.blur());
        }}
        onBlur={() => {
          setKeyboardOpen(false);
        }}
      />
    </div>
  );
}

export default App;
