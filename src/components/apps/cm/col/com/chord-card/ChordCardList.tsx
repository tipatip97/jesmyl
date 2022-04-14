import { useState } from "react";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { useChordVisibleVariant } from "../../../base/useChordVisibleVariant";
import useRoll from "../../../base/useRoll";
import { useCcom } from "../../useCcol";
import ChordCard from "./ChordCard";

export default function ChordCardList() {
  const [isShowChordImages, setIsShowChordImages] = useState(false);
  const [chordVisibleVariant] = useChordVisibleVariant();
  const { rollMode } = useRoll();
  const [ccom] = useCcom();

  return (
    <div
      className={`chords-images-show-panel${
        !chordVisibleVariant || rollMode ? " hidden" : ""
      }`}
    >
      <div className="mgroup msm">
        <div
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
      </div>
      <div className={`used-chords ${isShowChordImages ? " shown" : ""}`}>
        <div>
          {null &&
            ccom?.audio &&
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
        {ccom?.usedChords &&
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
  );
}
