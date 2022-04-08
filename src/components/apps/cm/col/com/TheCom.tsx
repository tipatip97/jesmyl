import { useState } from "react";
import { useSelector } from "react-redux";
import EvaIcon from "../../../../../complect/Eva";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../store";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import { usePhase } from "../../base/usePhase";
import { useMarks } from "../../marks/useMarks";
import { useCcol } from "../useCcol";
import ChordCard from "./chord-card/ChordCard";
import { Com } from "./Com";
import ComCtrlPanel from "./ctrl-panel/ComCtrlPanel";
import ComOrders from "./orders/ComOrders";

export default function TheCom() {
  const [isShowChordImages, setIsShowChordImages] = useState(false);
  const [chordVisibleVariant] = useChordVisibleVariant();
  const { setPhase } = usePhase();
  const fontSize = useSelector((state: RootState) => state.cm.comFontSize);
  const rollModeMarks = useSelector(
    (state: RootState) => state.cm.rollModeMarks
  );
  const isPlayerShown = useSelector(
    (state: RootState) => state.cm.isPlayerShown
  );
  const rollMode = useSelector((state: RootState) => state.cm.rollMode);

  const [ccom] = useCcol("com");

  const { markedComs } = useMarks();

  if (ccom == null) {
    setPhase("cat");
    return null;
  }

  // const actions = g.actions.com;

  return (
    <div
      key="com-ord-list-wrapper"
      className="com-screen"
      // ref={actions.winName}
      style={
        {
          // "--roll-mode-padding-kf": actions.rollYAxis,
        }
      }
    >
      <ComCtrlPanel ccom={ccom} />
      <div>
        {([] as Com[]).concat(rollModeMarks ? markedComs : ccom).map((com) => {
          return (
            ccom && (
              <ComOrders
                ccom={ccom}
                key={`main-com-${com.wid}`}
                fontSize={fontSize}
                // onClick: () => actions.turnRoll(),
                isAnchorInheritHide={!isPlayerShown} // && !g.streamManager.isSub
              />
            )
          );
        })}
      </div>
      <div
        key="rollYAxis thumb"
        className={`roll-y-axis-thumb ${rollMode ? "show" : ""}`}
        onClick={(event) => {
          event.stopPropagation();
          // actions.nextRollYAxis(() => this.fu());
        }}
        // ref={actions.rollYAxisThumbName}
      >
        svg('menu-arrow-outline')
      </div>
      <div
        key="some-vcom-wrppr"
        className={`chords-images-show-panel${
          !chordVisibleVariant || rollMode // || g.streamManager.isSub
            ? " hidden"
            : ""
        }`}
      >
        <div key="show-wrappper" className="mgroup msm">
          <button
            key="hiddener-chords-imgn"
            className="mbtn m-ok"
            onClick={() => setIsShowChordImages(!isShowChordImages)}
          >
            <span>
              <EvaIcon name="options-2-outline" />
              {isShowChordImages ? (
                <EvaIcon
                  name="chevron-up-outline"
                  alt="Скрыть изображения аккордов"
                />
              ) : (
                <EvaIcon
                  name="chevron-down-outline"
                  alt="Показать изображения аккордов"
                />
              )}
            </span>
          </button>
          {/* {g.usedChordsButtons} */}
        </div>
        <div
          key="usedChords"
          className={`used-chords ${isShowChordImages ? " shown" : ""}`}
        >
          <div>
            {null &&
              ccom.audio &&
              ccom.audio.split("\n\n").map((ablock) => {
                const [src, description] = mylib.explode("\n", ablock, 2);
                return (
                  src && [
                    <audio
                      key={`audio-${ablock}`}
                      controls
                      preload="none"
                      src={src}
                      style={{
                        width: "100%",
                        outline: "none",
                      }}
                    />,
                    <div
                      key={`audio-descr-${ablock}`}
                      style={{
                        whiteSpace: "pre",
                      }}
                    >
                      {description}
                    </div>,
                  ]
                );
              })}
          </div>
          {ccom.usedChords &&
            Object.keys(ccom.usedChords)
              .filter((uc) => uc)
              .map((chordName) => {
                return (
                  <div
                    key={`chord-used-${chordName}`}
                    className="chord-application"
                  >
                    <ChordCard
                      chordName={chordName}
                      chordLabel={
                        (ccom.usedChords && ccom.usedChords[chordName]) || "?"
                      }
                    />
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}