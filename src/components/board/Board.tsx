import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { localAuth } from "./Board.source";
import { BoardAppList } from "./parts/AppList";
import { BoardLogin } from "./parts/Login";
import { BoardRegister } from "./parts/Register";
import { BoardSettings } from "./parts/Settings";
import "./Board.scss";
import { indexStorage } from "../../store/Index.storage";
import { useEffect } from "react";
import { BoardApplication, IndexStorage } from "./Board.model";
import { setApps } from "./Board.store";

export default function Board() {
  const phase = useSelector((state: RootState) => state.board.phase);
  const apps: BoardApplication[] = useSelector(
    (state: RootState) => state.board.apps
  );
  const dispatch = useDispatch();

  const listener = indexStorage.listen(
    "board-listener",
    <K extends keyof IndexStorage>(key: K, val: IndexStorage[K] | null) => {
      switch (key) {
        case "apps":
          dispatch(setApps(val as BoardApplication[]));
          break;
      }
    }
  );

  useEffect(() => {
    indexStorage.update(listener);
    return () => indexStorage.mute("board-listener");
  }, []);

  return (
    <div className="app-loader-screen">
      {localAuth?.fio ? (
        <div key="uset-greets" className="user-greets">
          Привет, {localAuth.fio}!
        </div>
      ) : null}
      <div className="app-loader-window-wrapper">
        <div className="app-loader-window">
          {phase === "apps" ? (
            <BoardAppList apps={apps}></BoardAppList>
          ) : phase === "login" ? (
            <BoardLogin></BoardLogin>
          ) : phase === "register" ? (
            <BoardRegister></BoardRegister>
          ) : phase === "settings" ? (
            <BoardSettings></BoardSettings>
          ) : null}
        </div>
      </div>
    </div>
  );
}
