import { useSelector } from "react-redux";
import "./App.scss";
import { ABSOLUTE_POPUP_ELEMENT } from "./complect/absolute-popup";
import { FULLSCREEN__CONTENT } from "./complect/fullscreen-content";
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

  return (
    <>
      <TheRefresher />
      <Modal />
      <FULLSCREEN__CONTENT />
      <ABSOLUTE_POPUP_ELEMENT />
      {app ? <AppRouter app={app} /> : <Board />}
    </>
  );
}

export default App;
