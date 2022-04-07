import { useSelector } from "react-redux";
import "./App.scss";
import TheModal from "./complect/modal/TheModal";
import { TheRefresher } from "./complect/refresh/TheRefresher";
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
      <TheRefresher />
      <TheModal />
      {app ? <AppRouter app={app} /> : <Board />}
    </>
  );
}

export default App;
