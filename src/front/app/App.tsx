import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ABSOLUTE__BOTTOM__POPUP } from "../complect/absolute-popup/useAbsoluteBottomPopup";
import { ABSOLUTE__FLOAT__POPUP } from "../complect/absolute-popup/useAbsoluteFloatPopup";
import EvaIcon from "../complect/eva-icon/EvaIcon";
import { FULLSCREEN__CONTENT } from "../complect/fullscreen-content/useFullscreenContent";
import { KEYBOARD_FLASH } from "../complect/keyboard/useKeyboard";
import Modal from "../complect/modal/Modal";
import listenThemeChanges from "../complect/theme-changer";
import useFullScreen from "../complect/useFullscreen";
import { IndexAppName } from "../components/index/Index.model";
import navConfigurers from "../shared/navConfigurers";
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
  const { goBack, registerBackAction } = navConfigurers[app]();

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
        {app ? (
          <>
            <AppRouter app={app} />
            <AppFooter app={app} />
          </>
        ) : null}
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
