import { useSelector } from "react-redux";
import { ABSOLUTE__POPUP } from "../complect/absolute-popup/useAbsolutePopup";
import EvaIcon from "../complect/eva-icon";
import { FULLSCREEN__CONTENT } from "../complect/fullscreen-content/useFullscreenContent";
import Modal from "../complect/modal/Modal";
import TheRefresher from "../complect/refresh/Refresher";
import listenThemeChanges from "../complect/theme-changer";
import useFullScreen from "../complect/useFullscreen";
import AppRouter from "../components/AppRouter";
import { BoardAppName } from "../components/board/Board.model";
import { RootState } from "../shared/store";
import "./App.scss";
import AppFooter from "./AppFooter";

listenThemeChanges();

function App() {
  const app: BoardAppName = useSelector(
    (state: RootState) => state.index.currentApp
  );
  const [isFullscreen, switchFullscreen] = useFullScreen();

  return (
    <div
      className={`application-container${
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
      <ABSOLUTE__POPUP />
      {app ? (
        <>
          <AppRouter app={app} />
          <AppFooter app={app} />
        </>
      ) : null}
    </div>
  );
}

export default App;
