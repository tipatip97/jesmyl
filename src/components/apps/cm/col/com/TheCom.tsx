import { useState } from "react";
import { useSelector } from "react-redux";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../store";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import useNav from "../../base/useNav";
import useRoll from "../../base/useRoll";
import FontSizeContain from "../../complect/font-size-contain/FontSizeContain";
import { useMarks } from "../../marks/useMarks";
import { useCcol } from "../useCcol";
import ChordCard from "./chord-card/ChordCard";
import ComCtrlPanel from "./ctrl-panel/ComCtrlPanel";
import ComOrders from "./orders/ComOrders";

export default function TheCom() {
  const [isShowChordImages, setIsShowChordImages] = useState(false);
  const [chordVisibleVariant] = useChordVisibleVariant();
  const { setPhase } = useNav();
  const fontSize = useSelector((state: RootState) => state.cm.comFontSize);
  const isPlayerShown = useSelector(
    (state: RootState) => state.cm.isPlayerShown
  );

  const [ccom] = useCcol("com");

  const { markedComs } = useMarks();
  const { toggleRoll, setRollModeContainer, rollModeMarks, rollMode } =
    useRoll();

  if (ccom == null) {
    setPhase("cat");
    return null;
  }

  const content = [rollModeMarks ? markedComs : ccom].flat().map(
    (com) =>
      com && (
        <div key={`main-com-${com.wid}`}>
          <ComOrders
            ccom={com}
            fontSize={fontSize}
            isAnchorInheritHide={!isPlayerShown}
          />
        </div>
      )
  );

  return (
    <div
      key="com-ord-list-wrapper"
      className="com-screen"
      ref={(element) => element && setRollModeContainer(element)}
    >
      <ComCtrlPanel ccom={ccom} />
      <div className="com-ord-list-content" onClick={() => toggleRoll()}>
        {fontSize < 0 ? (
          <FontSizeContain fixOnly="width">{content}</FontSizeContain>
        ) : (
          content
        )}
      </div>
      <div
        key="rollYAxis thumb"
        className={`roll-y-axis-thumb ${rollMode ? "show" : ""}`}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        svg('menu-arrow-outline')
      </div>
      <div
        key="some-vcom-wrppr"
        className={`chords-images-show-panel${
          !chordVisibleVariant || rollMode
            ? " hidden"
            : ""
        }`}
      >
        <div key="show-wrappper" className="mgroup msm">
          <div
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
          </div>
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
