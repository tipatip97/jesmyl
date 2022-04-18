import EvaIcon from "../complect/eva-icon";
import useIndexNav from "../components/index/complect/useIndexNav";
import navConfigurers from "../shared/navConfigurers";
import { AppName } from "./App.model";

export default function AppFooter({ app }: { app: AppName }) {
  const { phase, setPhase, specialPhase, footerItems } = navConfigurers[app]();
  const { specialPhase: appPhase, setPhase: setIndexPhase } = useIndexNav();

  return (
    <div className="footer">
      {footerItems.map(({ title, icon, phases, activeWithSpecialPhases }) => {
        const isActive =
          appPhase !== "index" &&
          (specialPhase ? activeWithSpecialPhases : phases.indexOf(phase) > -1);
        return !phases[0] ? null : (
          <div
            key={`main-footer-item_${icon}`}
            className={`footer-item ${isActive ? "active" : ""}`}
            onClick={() => {
              setPhase(activeWithSpecialPhases ? phases[0] : [phases[0], null]);
              setIndexPhase(["main", app]);
            }}
          >
            <div className="icon-container">
              <EvaIcon name={`${icon}${isActive ? "" : "-outline"}` as never} />
            </div>
            <div className="title">{title}</div>
          </div>
        );
      })}
      <div
        className={`footer-item ${appPhase === "index" ? "active" : ""}`}
        onClick={() => setIndexPhase(["main", "index"])}
      >
        <div className="icon-container">
          <EvaIcon name="arrow-circle-right-outline" />
        </div>
        <div className="title">Другое</div>
      </div>
    </div>
  );
}
