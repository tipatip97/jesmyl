import { useEffect, useState } from "react";
import onBackButton from "../../../complect/back-button-listener";
import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import { cmStorage } from "../../../store/jstorages";
import useNav from "./base/useNav";
import useParanja from "./base/useParanja";
import { Comps, footerItems } from "./Cm.complect";
import "./Cm.scss";
import { useCols } from "./cols/useCols";
import useTranslation from "./translation/useTranslation";

export default function CmApplication() {
  const {
    phase,
    setPhase,
    goBack,
    isFullScreen,
    switchFullscreen,
    rollMode: { rollMode },
  } = useNav();
  const [, setCols] = useCols();

  const { isShowMarks } = useTranslation();

  const [topClickDateNow, setTopClickDateNow] = useState(0);

  cmStorage.listen("cols", "cols-update", (val) => setCols(val));
  const { onParanjaClick, paranjaMode } = useParanja();

  onBackButton.listen("cm-listener", () => goBack());
  useEffect(() => () => onBackButton.mute("cm-listener"), []);

  return (
    <>
      <div
        key="app-container"
        className={`main-container phase-${phase}${
          isFullScreen || rollMode ? " fullscreen-mode" : ""
        }${rollMode ? " roll-mode" : ""}${
          isShowMarks ? " show-marks-mode" : ""
        }`}
        onClick={() => {
          if (phase !== "com" || rollMode) return;
          if (Date.now() - topClickDateNow < 500) {
            switchFullscreen();
            setTopClickDateNow(0);
          } else setTopClickDateNow(Date.now());
        }}
      >
        <EvaIcon
          name="collapse-outline"
          className="collapse-fullscreen-button pointer"
          onClick={() => switchFullscreen(false)}
        />

        <div className="header"></div>
        <div className="content">
          {Object.entries(Comps).map(([phasen, phaseComp]) => {
            if (phasen !== phase) return null;
            return (
              <div key={`phase-content.${phasen}`} className="phase-content">
                {phasen === phase ? phaseComp() : null}
              </div>
            );
          })}
        </div>
        <div className="footer">
          {footerItems.map(({ title, icon, phases }) => (
            <div
              key={`main-footer-item_${icon}`}
              className={`footer-item ${
                phases.indexOf(phase) > -1 ? "active" : ""
              }`}
              onClick={() => setPhase(phases[0])}
            >
              <div className="icon-container">
                <EvaIcon name={icon} />
              </div>
              <div className="title">{title}</div>
            </div>
          ))}
        </div>
      </div>
      <div
        key="paranja"
        className={`paranja ${paranjaMode || ""}`}
        onClick={() => onParanjaClick()}
      />
    </>
  );
}
