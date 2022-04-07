import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EvaIcon from "../../../complect/Eva";
import { RootState } from "../../../store";
import { cmStorage } from "../../../store/jstorages";
import { Comps, isAccessed } from "./Cm.complect";
import "./Cm.scss";
import { updateIsComFullscreenMode } from "./Cm.store";
import TheMeetings from "./meetings/TheMeetings";
import { mainTopButtons } from "./editor/Lazies";
import Marks from "./marks/Marks";
import { usePhase } from "./base/usePhase";
import { useCols } from "./cols/useCols";

export default function CmApplication() {
  // if (g.nav.phase < 3) setTimeout(() => {
  //   const view = document.getElementById((g.nav[g.nav.phase - -1] || '').toString());
  //   if (view) mylib.scrollToView(view, 'top');
  // }, 100);

  // const rangeStep = 5;
  // let rangeValue = parseFloat(localStorage[g.lsCurrentCompositionFontSize] || '100');
  // const rangeMin = 20;
  // const rangeMax = 200;

  // rangeValue = rangeValue < rangeMin && rangeValue > 0 ? rangeMin : rangeValue > rangeMax ? rangeMax : rangeValue;

  const dispatch = useDispatch();
  // const phase = useSelector((state: RootState) => state.cm.phase);
  const { phase, setPhase, goBack, isCanGoBack } = usePhase();
  const rollMode = useSelector((state: RootState) => state.cm.rollMode);
  const isComFullscreenMode = useSelector(
    (state: RootState) => state.cm.isComFullscreenMode
  );
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
          if (phase !== "com" || rollMode) return; ///* || g.streamManager.isCurr
          if (Date.now() - topClickDateNow < 500) {
            dispatch(updateIsComFullscreenMode(!isComFullscreenMode));
            // updateFlexFontSize(400);
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
              <EvaIcon name="chevron-left-outline" />
            )}
          </button>
          {/* {g.streamManager.isJustSub ? null :  */}
          <Marks key="marks-list" />
          {!isCanGoBack("news") ? null : (
            <button
              key="execs-button"
              className="execs-button mbtn m-no mxs"
              onClick={() => setPhase("news")}
            >
              <EvaIcon name="list" />
            </button>
          )}
          {!isCanGoBack("translations") ||
          !isAccessed("canShowTranslation") ? null : (
            <button
              key="translations-button"
              className="translations-button mbtn m-no mxs"
              onClick={() => setPhase("translations")}
            >
              <EvaIcon name="monitor-outline" />
            </button>
          )}
          {/* {g.streamManager.isJustSub ? null : ( */}
          <TheMeetings />
          {/* {(() => {
            const getComWindows = () =>
              document.querySelectorAll(".com-ord-list");

            return g.nav.isPhase(g.Phase.Com, g.Phase.Editor) &&
              g.RangePanel ? (
              <RangePanel
                value={rangeValue}
                min={rangeMin}
                max={rangeMax}
                step={rangeStep}
                textElem={() => Array.from(getComWindows())}
                textWide={() => "parent"}
                onRange={(value, per) => {
                  const comWindows = getComWindows();
                  comWindows &&
                    Array.from(comWindows).forEach((comWindow) => {
                      comWindow.style.fontSize = `${value}%`;
                    });
                }}
                onChange={(value, per) => {
                  localStorage.setItem(g.lsCurrentCompositionFontSize, value);
                  rangeValue = value.toFixed(0);
                }}
                registerUpdaters={(update) => {
                  g.updateFlexFontSize = update;
                }}
              />
            ) : null;
          })()} */}
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
