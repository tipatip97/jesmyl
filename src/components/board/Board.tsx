import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import { indexStorage } from "../../shared/jstorages";
import { BoardApplication } from "./Board.model";
import "./Board.scss";
import { localAuth } from "./Board.source";
import { setApps } from "./Board.store";
import BoardAppList from "./parts/AppList";
import BoardLogin from "./parts/Login";
import BoardRegister from "./parts/Register";
import BoardSettings from "./parts/Settings";

export default function Board() {
  const phase = useSelector((state: RootState) => state.index.phase);
  const dispatch = useDispatch();

  const listener = indexStorage.listen("apps", "board-listener", (val) => {
    dispatch(setApps(val as BoardApplication[]));
  });

  useEffect(() => {
    indexStorage.update("apps", listener);
    return () => indexStorage.mute("apps", "board-listener");
  });

  return (
    <div className="app-loader-screen">
      {localAuth?.fio ? (
        <div className="user-greets">Привет, {localAuth.fio}!</div>
      ) : null}
      <div className="app-loader-window-wrapper">
        <div className="app-loader-window">
          {phase === "apps" ? (
            <BoardAppList />
          ) : phase === "login" ? (
            <BoardLogin />
          ) : phase === "register" ? (
            <BoardRegister />
          ) : phase === "settings" ? (
            <BoardSettings />
          ) : null}
        </div>
      </div>
    </div>
  );
}
