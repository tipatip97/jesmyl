import EvaIcon from "../complect/eva-icon";
import navConfigurers from "../shared/navConfigurers";
import { AppName } from "./App.model";

export default function AppFooter({ app }: { app: AppName }) {
  const { phase, setPhase, specialPhase, footerItems } = navConfigurers[app]();

  return (
    <div className="footer">
      {footerItems.map(({ title, icon, phases, activeWithSpecialPhases }) => {
        const isActive = specialPhase
          ? activeWithSpecialPhases
          : phases.indexOf(phase) > -1;
        return !phases[0] ? null : (
          <div
            key={`main-footer-item_${icon}`}
            className={`footer-item ${isActive ? "active" : ""}`}
            onClick={() =>
              setPhase(activeWithSpecialPhases ? phases[0] : [phases[0], null])
            }
          >
            <div className="icon-container">
              <EvaIcon name={`${icon}${isActive ? "" : "-outline"}` as never} />
            </div>
            <div className="title">{title}</div>
          </div>
        );
      })}
    </div>
  );
}
