import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import onBackButton from "../../../complect/back-button-listener";
import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../store";
import { cmStorage } from "../../../store/jstorages";
import useNav from "./base/useNav";
import useParanja from "./base/useParanja";
import { Comps, footerItems, isAccessed } from "./Cm.complect";
import "./Cm.scss";
import { updateComFontSize } from "./Cm.store";
import ComPlayerSignaler from "./col/com/player/ComPlayerSignaler";
import { useCcol } from "./col/useCcol";
import { useCols } from "./cols/useCols";
import { mainTopButtons } from "./editor/Lazies";
import Marks from "./marks/Marks";
import TheMeetings from "./meetings/TheMeetings";
import Resizer from "./resizer/Resizer";
import useTranslation from "./translation/useTranslation";

export default function CmApplication() {
  const rangeStep = 5;
  const rangeMin = 20;
  const rangeMax = 200;

  const dispatch = useDispatch();
  const {
    phase,
    setPhase,
    goBack,
    isCanGoBack,
    isFullScreen,
    switchFullscreen,
    rollMode: { rollMode },
  } = useNav();
  const comFontSize = useSelector((state: RootState) => state.cm.comFontSize);
  const [, setCols] = useCols();
  const [ccom] = useCcol("com");

  const { openTranslations, isShowMarksMode } = useTranslation();

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
          isShowMarksMode ? " show-marks-mode" : ""
        }`}
        onClick={() => {
          if (phase !== "com" || rollMode) return;
          if (Date.now() - topClickDateNow < 500) {
            switchFullscreen();
            setTopClickDateNow(0);
          } else setTopClickDateNow(Date.now());
        }}
      >
        {/* <ComPlayerSignaler />
        {mainTopButtons()}
        <div key="tools-panel" className="tools-panel">
          <div
            key="bb-button"
            aria-label="back"
            className="bb-button weight"
            onClick={(event) => {
              event.stopPropagation();
              goBack();
            }}
          >
            {phase === "cats" ? (
              <EvaIcon name="arrowhead-left-outline" />
            ) : (
              <EvaIcon name="arrow-back-outline" />
            )}
          </div>
          <Marks key="marks-list" />
          {!isCanGoBack("news") || !isAccessed("canWatch") ? null : (
            <div
              key="execs-button"
              className="execs-button mbtn m-no mxs"
              onClick={() => setPhase("news")}
            >
              <EvaIcon name="list" />
            </div>
          )}
          {
            // !isAccessed("canShowTranslation") ||
            !ccom || !isCanGoBack("translations") ? null : (
              <div
                key="translations-button"
                className="translations-button mbtn m-no mxs"
                onClick={() => openTranslations()}
              >
                <EvaIcon name="monitor-outline" />
              </div>
            )
          }
          <TheMeetings />
          {(() => {
            const getComWindows = () =>
              document.querySelectorAll(".com-ord-list");

            return phase === "com" ? (
              <Resizer
                value={comFontSize}
                min={rangeMin}
                max={rangeMax}
                step={rangeStep}
                onRange={(value) => {
                  const comWindows = getComWindows();

                  comWindows &&
                    Array.from(comWindows).forEach((comWindow) => {
                      (comWindow as HTMLElement).style.fontSize = `${value}%`;
                    });
                }}
                onChange={(value) => dispatch(updateComFontSize(value))}
              />
            ) : null;
          })()}
        </div>*/}

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
              className={`footer-item ${phases.indexOf(phase) > -1 ? "active" : ""}`}
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
