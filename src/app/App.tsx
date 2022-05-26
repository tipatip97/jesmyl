import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ABSOLUTE__BOTTOM__POPUP } from "../complect/absolute-popup/useAbsoluteBottomPopup";
import { ABSOLUTE__FLOAT__POPUP } from "../complect/absolute-popup/useAbsoluteFloatPopup";
import EvaIcon from "../complect/eva-icon/EvaIcon";
import { FULLSCREEN__CONTENT } from "../complect/fullscreen-content/useFullscreenContent";
import { KEYBOARD_FLASH } from "../complect/keyboard/useKeyboard";
import Modal from "../complect/modal/Modal";
import TheRefresher from "../complect/refresh/Refresher";
import listenThemeChanges from "../complect/theme-changer";
import useFullScreen from "../complect/useFullscreen";
import { IndexAppName } from "../components/index/Index.model";
import { RootState } from "../shared/store";
import "./App.scss";
import AppFooter from "./AppFooter";
import AppRouter from "./AppRouter";

listenThemeChanges();

function App() {
  const app: IndexAppName = useSelector(
    (state: RootState) => state.index.currentApp
  );
  const [isFullscreen, switchFullscreen] = useFullScreen();
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(
    () =>
      window.addEventListener("keydown", (event) => {
        event.code === "Escape" && switchFullscreen(false);
      }),
    []
  );

  return (
    <div className={`above-container ${keyboardOpen ? "keyboard-open" : ""}`}>
      <div
        className={`application-container app_${app || "index"}${
          isFullscreen ? " fullscreen-mode" : ""
        }`}
      >
        <EvaIcon
          name="collapse-outline"
          className="collapse-fullscreen-button pointer"
          onClick={() => switchFullscreen(false)}
        />
        <TheRefresher />
        <Modal />
        <FULLSCREEN__CONTENT />
        <ABSOLUTE__BOTTOM__POPUP />
        <ABSOLUTE__FLOAT__POPUP />
        {app ? (
          <>
            <AppRouter app={app} />
            <AppFooter app={app} />
          </>
        ) : null}
      </div>
      <KEYBOARD_FLASH
        onBlur={() => setKeyboardOpen(false)}
        onFocus={() => setKeyboardOpen(true)}
      />
    </div>
  );
}

export default App;
