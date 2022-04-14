import { useEffect } from "react";
import { useSelector } from "react-redux";
import EvaIcon from "../../../../../complect/eva-icon/EvaIcon";
import { EvaIconName } from "../../../../../complect/eva-icon/EvaIcon.model";
import { RootState } from "../../../../../store";
import PhaseContainer from "../../base/phase-container/PhaseContainer";
import { useChordVisibleVariant } from "../../base/useChordVisibleVariant";
import useLaterComList from "../../base/useLaterComList";
import useNav from "../../base/useNav";
import useRoll from "../../base/useRoll";
import { ChordVisibleVariant } from "../../Cm.model";
import useAbsolutePopup from "../../complect/absolute-popup/useAbsolutePopup";
import { useMarks } from "../../marks/useMarks";
import { useCcom } from "../useCcol";
import "./Com.scss";
import ComTools from "./ComTools";
import ComOrders from "./orders/ComOrders";

export default function TheCom() {
  const [chordVisibleVariant, setChordVisibleVariant] =
    useChordVisibleVariant();
  const { switchFullscreen } = useNav();
  const fontSize = useSelector((state: RootState) => state.cm.comFontSize);
  const isAnchorsVisible = useSelector(
    (state: RootState) => state.cm.isAnchorsVisible
  );

  const [ccom] = useCcom();

  const {
    toggleRoll,
    setRollModeContainer,
    rollMode,
    setRollSpeedScreenContainer,
    updateSpeedRollKf,
  } = useRoll();
  const { addLaterComw } = useLaterComList();
  const { openAbsolutePopup } = useAbsolutePopup();
  const { isMarked, toggleMarked } = useMarks();

  useEffect(() => {
    const addToLaterListTimeout = setTimeout(
      () => ccom && addLaterComw(ccom.wid),
      10000
    );
    return () => clearTimeout(addToLaterListTimeout);
  }, []);

  if (ccom == null) {
    return (
      <PhaseContainer
        topClass="com-container"
        head="Упс"
        content="Песня не найдена("
      />
    );
  }

  const isWhole = !ccom.orders?.some(
    (ord) => !ord.isMin && ord.texti != null && !ord.isAnchor
  );

  return (
    <PhaseContainer
      topClass="com-container"
      headClass="flex between"
      head={(backButton) => (
        <>
          <div className="flex between">
            {backButton}
            <span>{ccom.index + 1}</span>
          </div>
          <div className="flex between">
            <EvaIcon
              name={isMarked(ccom.wid) ? "star" : "star-outline"}
              className="action-button"
              onClick={() => toggleMarked(ccom.wid)}
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
        </>
      )}
      content={
        <>
          <div
            className="com-ord-list-content"
            onClick={() => toggleRoll()}
            ref={(element) => element && setRollModeContainer(element)}
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
            className={`roll-controls flex column center ${
              rollMode === "play" ? "open" : ""
            }`}
          >
            <EvaIcon name="minus" onClick={() => updateSpeedRollKf(-1)} />
            <div
              ref={(element) => element && setRollSpeedScreenContainer(element)}
            />
            <EvaIcon name="plus" onClick={() => updateSpeedRollKf(1)} />
          </div>
        </>
      }
    />
  );
}
