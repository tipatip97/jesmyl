import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../../complect/refresh/Refresher";
import { RootState } from "../../../store";
import { BoardApplication } from "../Board.model";
import { setCurrentApp, setBoardPhase } from "../Board.store";

export default function BoardAppList() {
  const dispatch = useDispatch();
  const apps: BoardApplication[] = useSelector(
    (state: RootState) => state.board.apps
  );

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
        <span
          className="text"
          onClick={() => dispatch(setBoardPhase("settings"))}
        >
          инструменты
        </span>
      </div>
    </>
  );
}
