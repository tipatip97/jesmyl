import { useDispatch } from "react-redux";
import { refresh } from "../../../complect/refresh/Refresher";
import { BoardApplication } from "../Board.model";
import { setCurrentApp, setBoardPhase } from "../Board.store";

export default function BoardAppList({ apps }: { apps: BoardApplication[] }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="phase-name">Приложения</div>
      {apps.map((app: BoardApplication) => {
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
      })}
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
