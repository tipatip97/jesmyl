import { useState } from "react";
import { useDispatch } from "react-redux";
import { indexStorage } from "../../../store/jstorages";
import { BoardApplication, BoardAppName } from "../Board.model";
import { setCurrentApp, setPhase } from "../Board.store";

export function BoardAppList({ apps }: { apps: BoardApplication[] }) {
  const dispatch = useDispatch();
  const [appsInProcess, setAppsInProcess] = useState<BoardAppName[]>([]);

  return (
    <>
      <div className="phase-name">Приложения</div>
      {apps.map((app: BoardApplication) => {
        const isDisabled = app.disabled;

        return app.hidden ? null : (
          <div
            key={`board-app:${app.name}`}
            className={`app-item${isDisabled ? " mdisabled" : ""}${
              ~appsInProcess.indexOf(app.name) ? " mprogressed" : ""
            }`}
          >
            <div
              className="app-title"
              onClick={() => {
                if (!isDisabled) {
                  dispatch(setCurrentApp(app.name));
                  setAppsInProcess(appsInProcess.concat(app.name));
                }
              }}
            >
              <span className="text">{app.title}</span>
            </div>
          </div>
        );
      })}
      <div className="system-item">
        <span className="text" onClick={() => dispatch(setPhase("settings"))}>
          инструменты
        </span>
      </div>
    </>
  );
}
