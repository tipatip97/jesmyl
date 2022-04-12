import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { EvaIconName } from "../../../../../complect/eva-icon/EvaIcon.model";
import mylib from "../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../store";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import useLaterComList from "../../base/useLaterComList";
import useNav from "../../base/useNav";
import useRoll from "../../base/useRoll";
import { ChordVisibleVariant } from "../../Cm.model";
import useAbsolutePopup from "../../complect/absolute-popup/useAbsolutePopup";
import { useCcol } from "../useCcol";
import ChordCard from "./chord-card/ChordCard";
import "./Com.scss";
import ComAddMenu from "./ComAddMenu";
import ComTools from "./ComTools";
import ComOrders from "./orders/ComOrders";

export default function TheCom() {
  const [isShowChordImages, setIsShowChordImages] = useState(false);
  const [chordVisibleVariant, setChordVisibleVariant] =
    useChordVisibleVariant();
  const { setPhase, goBack, switchFullscreen } = useNav();
  const fontSize = useSelector((state: RootState) => state.cm.comFontSize);
  const isAnchorsVisible = useSelector(
    (state: RootState) => state.cm.isAnchorsVisible
  );

  const [ccom] = useCcol("com");

  const { toggleRoll, setRollModeContainer, rollMode } = useRoll();
  const { addLaterComw } = useLaterComList();
  const { openAbsolutePopup, closeAbsolutePopup } = useAbsolutePopup();

  useEffect(() => {
    const addToLaterListTimeout = setTimeout(
      () => ccom && addLaterComw(ccom.wid),
      10000
    );
    return () => clearTimeout(addToLaterListTimeout);
  }, []);

  if (ccom == null) {
    setPhase("cat");
    return null;
  }

  const isWhole = !ccom.orders.some(
    (ord) => !ord.isMin && ord.texti != null && !ord.isAnchor
  );

  return (
    <div
      key="com-container"
      className="com-container"
      ref={(element) => element && setRollModeContainer(element)}
    >
      <div className="header-content flex between">
        <div className="flex between">
          <EvaIcon
            name="arrow-back"
            className="action-button"
            onClick={() => goBack()}
          />
          <span>{ccom.index + 1}</span>
        </div>
        <div className="flex between">
          <EvaIcon
            name="plus-circle"
            className="action-button"
            onClick={() =>
              openAbsolutePopup(
                <ComAddMenu onClick={() => closeAbsolutePopup()} com={ccom} />
              )
            }
          />
          <EvaIcon
            className="action-button"
            name="expand-outline"
            onClick={() => switchFullscreen(true)}
          />
          {(
            [
              ["file-outline", "нет"],
              ["file-remove-outline", "мин"],
              ["file-text-outline", "макс"],
            ] as [EvaIconName, string][]
          ).map(([name, alt], v) => {
            if (chordVisibleVariant !== v) return null;
            const id = `song-variant-switcher-${v}`;

            return (
              <EvaIcon
                key={`navigation-v-${v}`}
                name={name}
                alt={alt}
                id={id}
                className="action-button"
                title={
                  v
                    ? v === 1
                      ? "Показать минимальное количество аккордов"
                      : "Показать все аккорды"
                    : "Скрыть все аккорды"
                }
                onClick={(event) => {
                  event.stopPropagation();

                  if (event.ctrlKey) {
                    event.stopPropagation();
                  } else {
                    setChordVisibleVariant(
                      isWhole
                        ? chordVisibleVariant
                          ? 0
                          : 2
                        : ((chordVisibleVariant -
                            (chordVisibleVariant > 1
                              ? 2
                              : -1)) as ChordVisibleVariant)
                    );
                  }
                }}
              />
            );
          })}

          <EvaIcon
            className="action-button"
            name="more-vertical"
            onClick={() => openAbsolutePopup(<ComTools />)}
          />
        </div>
      </div>
      <div
        className="com-ord-list-content content-container"
        onClick={() => toggleRoll()}
      >
        <div key={`main-com-${ccom.wid}`}>
          <ComOrders
            ccom={ccom}
            fontSize={fontSize}
            isAnchorInheritHide={!isAnchorsVisible}
          />
        </div>
      </div>
      <div
        key="some-vcom-wrppr"
        className={`chords-images-show-panel${
          !chordVisibleVariant || rollMode ? " hidden" : ""
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
