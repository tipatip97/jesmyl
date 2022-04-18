import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../../complect/refresh/Refresher";
import { RootState } from "../../../shared/store";
import { BoardApplication } from "../Board.model";
import { setCurrentApp } from "../Board.store";
import useIndexNav from "../complect/useIndexNav";

export default function BoardAppList() {
  const dispatch = useDispatch();
  const apps: BoardApplication[] = useSelector(
    (state: RootState) => state.index.apps
  );
  const { setPhase } = useIndexNav();

  return (
    <>
      <div className="phase-name">Приложения</div>
      {!apps ? (
        <p style={{ textAlign: "center" }}>Загрузка...</p>
      ) : (
        apps.map((app: BoardApplication) => {
          const isDisabled = app.disabled;

          return app.hidden ? null : (
            <div
              key={`board-app:${app.name}`}
              className={`app-item${isDisabled ? " mdisabled" : ""}`}
            >
              <div
                className="app-title"
                onClick={() => {
                  if (!isDisabled) {
                    dispatch(setCurrentApp(app.name));
                    refresh.check();
                  }
                }}
              >
                <span className="text">{app.title}</span>
              </div>
            </div>
          );
        })
      )}
      <div className="system-item">
        <span className="text" onClick={() => setPhase("settings")}>
          инструменты
        </span>
      </div>
    </>
  );
}
