import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ABSOLUTE__BOTTOM__POPUP } from "../complect/absolute-popup/useAbsoluteBottomPopup";
import { ABSOLUTE__FLOAT__POPUP } from "../complect/absolute-popup/useAbsoluteFloatPopup";
import EvaIcon from "../complect/eva-icon/EvaIcon";
import { FULLSCREEN__CONTENT } from "../complect/fullscreen-content/useFullscreenContent";
import JesmylLogo from "../complect/jesmyl-logo/JesmylLogo";
import { KEYBOARD_FLASH } from "../complect/keyboard/KeyboardInput";
import { KeyboardInputStorage } from "../complect/keyboard/KeyboardStorage";
import Modal from "../complect/modal/Modal";
import { crossApplicationLinkCoder, jesmylHostName } from "../complect/qr-code/QRCodeMaster";
import listenThemeChanges from "../complect/theme-changer";
import useApps from "../complect/useApps";
import useFullScreen from "../complect/useFullscreen";
import di from "../components/index/Index.store";
import indexStorage from "../components/index/indexStorage";
import routerStoreActions from "../components/router/Router.store";
import routerStorage from "../components/router/routerStorage";
import navConfigurers from "../shared/navConfigurers";
import { RootState } from "../shared/store";
import { appNames } from "./App.model";
import "./App.scss";
import AppFooter from "./AppFooter";
import AppRouter from "./AppRouter";

listenThemeChanges();

const currentAppSelector = (state: RootState) => state.index.currentApp;
const emptyArr: [] = [];
const setIsReady = () => routerStoreActions.isReady(true);

function App() {
  const dispatch = useDispatch();
  const appName = useSelector(currentAppSelector);
  const [isFullscreen, switchFullscreen] = useFullScreen();
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const { goBack, registerBackAction } = navConfigurers[appName]();
  const { jumpToApp } = useApps();
  const [isShowLogo, setIsShowLogo] = useState(true);

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
  }, [goBack, switchFullscreen]);

  routerStorage.initDispatches(dispatch, routerStoreActions, setIsReady);
  indexStorage.initDispatches(dispatch, di);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setTimeout(setIsShowLogo, 1200, false) }, emptyArr);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, emptyArr);

  const onOpen = useCallback((close: () => boolean) => registerBackAction(() => close()), [registerBackAction]);
  const keyboardProps = useMemo(() => {
    return {
      onFocus: (input: KeyboardInputStorage | nil) => {
        setKeyboardOpen(true);
        registerBackAction(() => !input || input.blur());
      },
      onBlur: () => {
        setKeyboardOpen(false);
      }
    };
  }, [registerBackAction]);

  return (
    <div className={`above-container ${keyboardOpen ? "keyboard-open" : ""}`}>
      {isShowLogo && <div className="jesmyl-smile-box flex center absolute full-width full-height z-index:5">
        <JesmylLogo className="no-fade-in-effect" />
      </div>}
      <div
        className={`application-container app_${appName}${isFullscreen ? " fullscreen-mode" : ""}`}
      >
        <EvaIcon
          name="collapse-outline"
          className="collapse-fullscreen-button pointer"
          onClick={() => switchFullscreen(false)}
        />
        <Modal />
        <FULLSCREEN__CONTENT onOpen={onOpen} />
        <ABSOLUTE__BOTTOM__POPUP onOpen={onOpen} />
        <ABSOLUTE__FLOAT__POPUP onOpen={onOpen} />
        <AppRouter appName={appName} />
        <AppFooter appName={appName} />
      </div>
      <KEYBOARD_FLASH {...keyboardProps} />
    </div>
  );
}

export default App;
