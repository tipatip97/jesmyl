import { useSelector } from "react-redux";
import "./App.scss";
import { ABSOLUTE__POPUP } from "./complect/absolute-popup/AbsolutePopup";
import EvaIcon from "./complect/eva-icon";
import { FULLSCREEN__CONTENT } from "./complect/fullscreen-content/FullscreenContent";
import Modal from "./complect/modal/Modal";
import TheRefresher from "./complect/refresh/Refresher";
import listenThemeChanges from "./complect/theme-changer";
import useFullScreen from "./complect/useFullscreen";
import AppRouter from "./components/AppRouter";
import Board from "./components/board/Board";
import { BoardAppName } from "./components/board/Board.model";
import { RootState } from "./store";

listenThemeChanges();

function App() {
  const app: BoardAppName = useSelector(
    (state: RootState) => state.board.currentApp
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
      {app ? <AppRouter app={app} /> : <Board />}
    </div>
  );
}

export default App;
