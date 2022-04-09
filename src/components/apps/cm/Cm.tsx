import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EvaIcon from "../../../complect/eva-icon/EvaIcon";
import { RootState } from "../../../store";
import { cmStorage } from "../../../store/jstorages";
import { usePhase } from "./base/usePhase";
import { Comps, isAccessed } from "./Cm.complect";
import "./Cm.scss";
import { updateComFontSize, updateIsComFullscreenMode } from "./Cm.store";
import { useCols } from "./cols/useCols";
import { mainTopButtons } from "./editor/Lazies";
import Marks from "./marks/Marks";
import TheMeetings from "./meetings/TheMeetings";
import Resizer from "./resizer/Resizer";

export default function CmApplication() {
  const rangeStep = 5;
  const rangeMin = 20;
  const rangeMax = 200;

  const dispatch = useDispatch();
  const { phase, setPhase, goBack, isCanGoBack } = usePhase();
  const rollMode = useSelector((state: RootState) => state.cm.rollMode);
  const isComFullscreenMode = useSelector(
    (state: RootState) => state.cm.isComFullscreenMode
  );
  const comFontSize = useSelector((state: RootState) => state.cm.comFontSize);
  const [, setCols] = useCols();

  const [topClickDateNow, setTopClickDateNow] = useState(0);

  cmStorage.listen("cols", "cols-update", (val) => setCols(val));

  return (
    <>
      <div
        key="app-container"
        className={`app-container phase-${phase}${
          isComFullscreenMode || rollMode ? " hidden-tools" : ""
        }${rollMode ? " roll-mode" : ""}`}
        onClick={() => {
          if (phase !== "com" || rollMode) return;
          if (Date.now() - topClickDateNow < 500) {
            dispatch(updateIsComFullscreenMode(!isComFullscreenMode));
            setTopClickDateNow(0);
          } else setTopClickDateNow(Date.now());
        }}
      >
        {/* <CComPlayerSignaler /> */}
        {mainTopButtons()}
        <div key="tools-panel" className="tools-panel">
          <button
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
          </button>
          <Marks key="marks-list" />
          {!isCanGoBack("news") || !isAccessed("canWatch") ? null : (
            <button
              key="execs-button"
              className="execs-button mbtn m-no mxs"
              onClick={() => setPhase("news")}
            >
              <EvaIcon name="list" />
            </button>
          )}
          {
            // !isAccessed("canShowTranslation") ||
            !isCanGoBack("translations") ? null : (
              <button
                key="translations-button"
                className="translations-button mbtn m-no mxs"
                onClick={() => setPhase('translations')}
              >
                <EvaIcon name="monitor-outline" />
              </button>
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
        </div>

        {Object.entries(Comps).map(([phasen, phaseComp]) => {
          return (
            <div
              key={`phase-body.${phasen}`}
              className={`phase-body phase-${phasen} ${
                phasen === phase ? "active" : ""
              }`}
            >
              {phasen === phase ? phaseComp() : null}
              {/* {mylib.func(g.comFooters).call(phasen)} */}
            </div>
          );
        })}
      </div>
    </>
  );
}
