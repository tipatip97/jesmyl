import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import "./Com.scss";
import { EvaIconName } from "../../../../../complect/eva-icon/EvaIcon.model";
import { ChordVisibleVariant } from "../../Cm.model";
import useTranslation from "../../translation/useTranslation";
import useParanja from "../../base/useParanja";
import { settingsItems } from "./Com.complect";
import {
  comForceUpdate,
  updateComFontSize,
  updateIsPlayerShown,
} from "../../Cm.store";

export default function TheCom() {
  const dispatch = useDispatch();
  const [isShowChordImages, setIsShowChordImages] = useState(false);
  const [chordVisibleVariant, setChordVisibleVariant] =
    useChordVisibleVariant();
  const { setPhase, goBack } = useNav();
  const fontSize = useSelector((state: RootState) => state.cm.comFontSize);
  const isPlayerShown = useSelector(
    (state: RootState) => state.cm.isPlayerShown
  );
  const [isOpenSettings, setIsOpenSettings] = useState(false);

  const [ccom] = useCcol("com");

  const { toggleRoll, setRollModeContainer, rollMode } = useRoll();
  const { openTranslations } = useTranslation();
  const { openParanja } = useParanja();

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
            className="action-button"
            name="expand-outline"
            onClick={() => openTranslations()}
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
            onClick={() => {
              openParanja(() => setIsOpenSettings(false), "dark");
              setIsOpenSettings(true);
            }}
          />
        </div>
      </div>
      {/* <ComCtrlPanel ccom={ccom} /> */}
      <div className="com-ord-list-content" onClick={() => toggleRoll()}>
        <div key={`main-com-${ccom.wid}`}>
          <ComOrders
            ccom={ccom}
            fontSize={fontSize}
            isAnchorInheritHide={!isPlayerShown}
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
      <div className={`setting-popup ${isOpenSettings ? "open" : ""}`}>
        {settingsItems.map(({ title, name, icon }) => {
          return (
            <div key={`settingsItem-${name}`} className="item flex between">
              <EvaIcon name={icon} className="icon" />
              <div className="title">{title}</div>
              <div className="action flex around pointer">
                {name === "ton" ? (
                  <>
                    <EvaIcon
                      name="minus"
                      onClick={() => {
                        ccom.transpose(-1);
                        dispatch(comForceUpdate());
                      }}
                    />
                    <div
                      onClick={() => {
                        ccom.setChordsInitialTon();
                        dispatch(comForceUpdate());
                      }}
                    >
                      {ccom.firstChord}
                    </div>
                    <EvaIcon
                      name="plus"
                      onClick={() => {
                        ccom.transpose(-1);
                        dispatch(comForceUpdate());
                      }}
                    />
                  </>
                ) : name === "font-size" ? (
                  <>
                    <EvaIcon
                      name="minimize-outline"
                      onClick={() => dispatch(updateComFontSize(fontSize - 1))}
                    />
                    <div>{fontSize}</div>
                    <EvaIcon
                      name="maximize-outline"
                      onClick={() => dispatch(updateComFontSize(fontSize + 1))}
                    />
                  </>
                ) : name === "open-anchors" ? (
                  <div
                    className="full"
                    onClick={() =>
                      dispatch(updateIsPlayerShown(!isPlayerShown))
                    }
                  >
                    {!isPlayerShown ? "Открыть" : "Закрыть"}
                  </div>
                ) : (
                  <>
                    <span />
                    <span />
                    <span />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
