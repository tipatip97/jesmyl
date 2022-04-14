import { useSelector } from "react-redux";
import "./App.scss";
import { FULLSCREEN__CONTENT } from "./complect/fullscreen-content/FullscreenContent";
import Modal from "./complect/modal/Modal";
import TheRefresher from "./complect/refresh/Refresher";
import listenThemeChanges from "./complect/theme-changer";
import AppRouter from "./components/AppRouter";
import Board from "./components/board/Board";
import { BoardAppName } from "./components/board/Board.model";
import { RootState } from "./store";

listenThemeChanges();

function App() {
  const app: BoardAppName = useSelector(
    (state: RootState) => state.board.currentApp
  );
  const isFullscreenContentOpen = useSelector(
    (state: RootState) => state.complect.isFullscreenContentOpen
  );

  return (
    <>
      <TheRefresher />
      <Modal />
      <FULLSCREEN__CONTENT isOpen={isFullscreenContentOpen} />
      {app ? <AppRouter app={app} /> : <Board />}
    </>
  );
}

export default App;
