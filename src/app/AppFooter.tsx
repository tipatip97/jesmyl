import { useState } from "react";
import EvaIcon from "../complect/eva-icon/EvaIcon";
import { isAccessed } from "../components/apps/cm/Cm.complect";
import useIndexNav from "../components/index/complect/useIndexNav";
import navConfigurers from "../shared/navConfigurers";
import { AppName } from "./App.model";

export default function AppFooter({ app }: { app: AppName }) {
  const { phase, setPhase, specialPhase, footerItems } = navConfigurers[app]();
  const { specialPhase: appPhase, setPhase: setIndexPhase } = useIndexNav();
  const [footApp, setCurrFooterState] = useState("index");

  return (
    <div className="footer">
      {footerItems.map((props) => {
        if (!props) return null;
        const { title, icon, phases, activeWithSpecialPhases, accessRule } = props;
        if (accessRule != null && !isAccessed(accessRule)) return null;
        const isActive =
          appPhase !== "index" &&
          (specialPhase ? activeWithSpecialPhases : phases.indexOf(phase) > -1);
        return !phases[0] ? null : (
          <div
            key={`main-footer-item_${icon}`}
            className={`footer-item ${isActive ? "active" : ""}`}
            onClick={() => {
              setPhase(activeWithSpecialPhases ? phases[0] : [phases[0], null]);
              setIndexPhase([null, app]);
              setCurrFooterState(app);
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
        onClick={() => {
          if (footApp === "index") setIndexPhase(["main", "index"]);
          else setIndexPhase([null, "index"]);
          setCurrFooterState("index");
        }}
      >
        <div className="icon-container">
          <EvaIcon
            name={`arrow-circle-right${appPhase !== "index" ? "-outline" : ""}`}
          />
        </div>
        <div className="title">Другое</div>
      </div>
    </div>
  );
}
