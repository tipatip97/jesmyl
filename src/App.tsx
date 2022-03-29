import { useSelector } from "react-redux";
import "./App.scss";
import Modal from "./complect/modal/Modal";
import { Refresher } from "./complect/refresh/Refresher";
import { AppRouter } from "./components/AppRouter";
import Board from "./components/board/Board";
import { BoardAppName } from "./components/board/Board.model";
import { RootState } from "./store";

function App() {
  const app: BoardAppName = useSelector(
    (state: RootState) => state.board.currentApp
  );

  return (
    <>
      <Refresher />
      <Modal />
      {app ? <AppRouter app={app} /> : <Board />}
    </>
  );
}

export default App;
