import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { localAuth } from "./Board.source";
import { BoardAppList } from "./parts/AppList";
import { BoardLogin } from "./parts/Login";
import { BoardRegister } from "./parts/Register";
import { BoardSettings } from "./parts/Settings";

export default function Board() {
  const phase = useSelector((state: RootState) => state.board.phase);

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
            <BoardAppList></BoardAppList>
          ) : phase === "login" ? (
            <BoardLogin></BoardLogin>
          ) : phase === "register" ? (
            <BoardRegister></BoardRegister>
          ) : phase === "settings" ? (
            <BoardSettings></BoardSettings>
          ) : null}
          ;
        </div>
      </div>
    </div>
  );
}
