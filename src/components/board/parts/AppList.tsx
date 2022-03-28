import { setPhase } from "../boardSlice";

export function BoardAppList() {
  return (
    <>
      <div className="phase-name">Приложения</div>
      {/* {window.json.apps &&
        window.json.apps.map((app) => {
          const isDisabled = app.disabled;

          return app.hidden ? null : (
            <div
              className={`app-item${isDisabled ? " mdisabled" : ""}${
                ~this.state.appsInProcess.indexOf(app.name)
                  ? " mprogressed"
                  : ""
              }`}
            >
              <div
                className="app-title"
                onClick={
                  isDisabled ? null : () => window.applicanter.load(app.name)
                }
              >
                <span className="text">{app.title}</span>
              </div>
            </div>
          );
        })} */}
      <div className="system-item">
        <span className="text" onClick={() => setPhase("settings")}>
          инструменты
        </span>
      </div>
    </>
  );
}
