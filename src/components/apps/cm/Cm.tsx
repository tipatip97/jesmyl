import { ReactNode, useEffect, useState } from "react";
import onBackButton from "../../../complect/back-button-listener";
import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import { cmStorage } from "../../../store/jstorages";
import useNav from "./base/useNav";
import useParanja from "./base/useParanja";
import { footerItems } from "./Cm.complect";
import { CmPhase } from "./Cm.model";
import "./Cm.scss";
import TheCat from "./col/cat/TheCat";
import TheCom from "./col/com/TheCom";
import { useCols } from "./cols/useCols";
import useAbsolutePopup from "./complect/absolute-popup/useAbsolutePopup";
import Editor from "./editor/Editor";
import Lists from "./lists/Lists";
import Marks from "./marks/Marks";
import TheMeeting from "./meetings/TheMeeting";
import TheMeetings from "./meetings/TheMeetings";
import Other from "./other/Other";
import Translations from "./translation/Translation";
import useTranslation from "./translation/useTranslation";

const Comps: Record<CmPhase, () => ReactNode> = {
  all: () => <TheCat allMode />,
  cat: () => <TheCat />,
  com: () => <TheCom />,
  editor: () => <Editor />,
  translation: () => <Translations />,
  lists: () => <Lists />,
  marks: () => <Marks />,
  meetings: () => <TheMeetings />,
  meeting: () => <TheMeeting />,
  other: () => <Other />,
};

export default function CmApplication() {
  const {
    phase,
    setPhase,
    goBack,
    isFullScreen,
    switchFullscreen,
    rollMode: { rollMode },
    specialPhase,
  } = useNav();
  const [, setCols] = useCols();

  const { isShowMarks } = useTranslation();

  const [topClickDateNow, setTopClickDateNow] = useState(0);

  cmStorage.listen("cols", "cols-update", (val) => setCols(val));
  const { onParanjaClick, paranjaMode } = useParanja();

  onBackButton.listen("cm-listener", () => goBack());
  useEffect(() => () => onBackButton.mute("cm-listener"), []);
  const { absolutePopupContent } = useAbsolutePopup();

  return (
    <>
      <div
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
          {footerItems.map(
            ({ title, icon, phases, activeWithSpecialPhases }) => {
              const isActive = specialPhase
                ? activeWithSpecialPhases
                : phases.indexOf(phase) > -1;
              return !phases[0] ? null : (
                <div
                  key={`main-footer-item_${icon}`}
                  className={`footer-item ${isActive ? "active" : ""}`}
                  onClick={() =>
                    setPhase(
                      activeWithSpecialPhases ? phases[0] : [phases[0], null]
                    )
                  }
                >
                  <div className="icon-container">
                    <EvaIcon
                      name={`${icon}${isActive ? "" : "-outline"}` as never}
                    />
                  </div>
                  <div className="title">{title}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <div
        className={`paranja ${paranjaMode || ""}`}
        onClick={() => onParanjaClick()}
      />
      {absolutePopupContent}
    </>
  );
}
