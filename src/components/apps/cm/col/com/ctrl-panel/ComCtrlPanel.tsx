import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EvaIcon } from "../../../../../../complect/Eva";
import { Swipeabler } from "../../../../../../complect/swipeabler/Swipeabler";
import { RootState } from "../../../../../../store";
import { ChordVisibleVariant } from "../../../Cm.model";
import {
  comForceUpdate,
  updateIsPlayerShown,
} from "../../../Cm.store";
import { useChordVisibleVariant, useCols } from "../../../hooks";
import { marks } from "../../../marks/Marks";
import { Com } from "../Com";
import { TheComPlayerPanel } from "../player/ComPlayerPanel";
import { TheComCtrlPanelAdditionalButtons } from "./ComCtrlPanelAdditionalButtons";

export function TheComCtrlPanel({ ccom }: { ccom: Com }) {
  const dispatch = useDispatch();

  const [cols] = useCols();
  const cats = cols.cats;

  const [chordVisibleVariant, setChordVisibleVariant] = useChordVisibleVariant();

  const [isShowNatives, setIsShowNatives] = useState(false);
  const [songNumberElement, setSongNumberElement] = useState<Swipeabler | null>(
    null
  );
  const [comPlayerElement, setComPlayerElement] = useState<Swipeabler | null>(
    null
  );
  const [bemoleSwitcherElement, setBemoleSwitcherElement] =
    useState<Swipeabler | null>(null);

  const isPlayerShown = useSelector(
    (state: RootState) => state.cm.isPlayerShown
  );

  useEffect(() => {
    return () => {
      songNumberElement?.mute();
    };
  });

  if (ccom == null) return null;

  const isMarked = marks.isMarked(ccom.wid);
  const isWhole = !ccom.orders.some(
    (ord) => !ord.isMin && ord.texti != null && !ord.isAnchor
  );

  return (
    <div key="chord-ctrl" className="chord-ctrl">
      <div>
        <button
          key="song-number-button"
          id="song-number-button"
          title="Номер песни"
          ref={(element) => {
            if (songNumberElement || !element) return;
            setSongNumberElement(
              new Swipeabler(element).onSwipe((event) => {
                if (
                  (event.name === "start" || event.name === "change") &&
                  event.direction?.match(/d/)
                ) {
                  setIsShowNatives(true);
                } else if (event.name === "stop") {
                  setIsShowNatives(false);
                }
              })
            );
          }}
          className={`mbtn msm btn btn-sm btn-${
            !isMarked ? "secondary" : "success m-ok"
          } song-number`}
          onClick={(event) => {
            event.stopPropagation();

            if (event.ctrlKey) setIsShowNatives(!isShowNatives);
            // else g.marks.toggle(ccom.wid);
          }}
        >
          #{ccom.index == null ? "?" : ccom.index - -1}
        </button>
        ,
        {isShowNatives ? (
          <div key="native-numbers-list" className="native-numbers-list m-ok">
            {((refKeys) =>
              refKeys.length === 0 ? (
                <div key="empty-native-numbers-list">Нет данных</div>
              ) : (
                refKeys.map((catw) => {
                  const nativeNumber = ccom.refs && ccom.refs[catw];
                  const cat = cats.find((cat) => cat.wid === +catw);

                  if (cat == null) return null;

                  return (
                    <div
                      key={`native-number--${cat.wid}`}
                      className="native-number"
                    >
                      <span
                        key={`cat-native-name${cat.wid}`}
                        className="cat-native-name ellipsis"
                      >
                        {cat.name}
                      </span>
                      {nativeNumber ? (
                        <span
                          key={`cat-native-number${cat.wid}`}
                          className="cat-native-number"
                        >
                          №{nativeNumber}
                        </span>
                      ) : null}
                    </div>
                  );
                })
              ))(Object.keys(ccom.refs || {}))}
          </div>
        ) : null}
        {!ccom.orders?.some((ord) => ord.chordsi != null && ord.chordsi !== -1)
          ? null
          : [
              <div
                key="mgroup btn-group chord-binding"
                className="mgroup chord-binding"
                ref={(element) => {
                  if (comPlayerElement || !element) return;
                  setComPlayerElement(
                    new Swipeabler(element).onSwipe((event) => {
                      if (
                        event.name === "start" &&
                        event.direction?.match(/d/)
                      ) {
                        dispatch(updateIsPlayerShown(!isPlayerShown));
                        // g.updateFlexFontSize();
                      }
                    })
                  );
                }}
              >
                {[
                  ["file-outline", "нет"],
                  ["file-remove-outline", "мин"],
                  ["file-text-outline", "макс"],
                ].map(([name, alt], v) => {
                  if (chordVisibleVariant !== v) return null;
                  const id = `song-variant-switcher-${v}`;

                  return (
                    <button
                      key={`navigation-v-${v}`}
                      id={id}
                      title={
                        v
                          ? v === 1
                            ? "Показать минимальное количество аккордов"
                            : "Показать все аккорды"
                          : "Скрыть все аккорды"
                      }
                      className="mbtn msm m-ok"
                      onClick={(event) => {
                        event.stopPropagation();

                        if (event.ctrlKey) {
                          event.stopPropagation();
                          dispatch(updateIsPlayerShown(!isPlayerShown));
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
                        // g.updateFlexFontSize();
                      }}
                    >
                      {<EvaIcon name={name} alt={alt} />}
                    </button>
                  );
                })}
              </div>,
              <div
                key="transport-buttons"
                id="transport-buttons"
                className="mgroup btn-group transport"
                ref={(element) => {
                  if (bemoleSwitcherElement || !element) return;
                  let isSwitch = false;

                  setBemoleSwitcherElement(
                    new Swipeabler(element).onSwipe((event) => {
                      if (!chordVisibleVariant) return;
                      if (event.name === "start") {
                        isSwitch = !!event.direction?.match(/d/);
                      } else if (event.name === "stop" && isSwitch) {
                        isSwitch = false;
                        ccom.turnBemoled();
                        dispatch(comForceUpdate());
                      }
                    })
                  );
                }}
              >
                {[
                  ["arrow-down-outline", "-"],
                  null,
                  ["arrow-up-outline", "+"],
                ].map((sign, signi) => (
                  <button
                    key={`transport-${signi}`}
                    title={`Транспонировать песню на тон ${
                      sign
                        ? signi
                          ? "выше"
                          : "ниже"
                        : "в изначальную тональность"
                    }`}
                    className={`mbtn ${!ccom.isBemoled ? "m-ok" : "m-br"} msm ${
                      chordVisibleVariant ? "" : "disabled"
                    }`}
                    disabled={
                      !chordVisibleVariant ||
                      (!sign && ccom.transPosition === ccom.initialTransPos)
                    }
                    onClick={(event) => {
                      event.stopPropagation();

                      if (event.ctrlKey) ccom.turnBemoled();
                      else {
                        sign
                          ? ccom.transpose(!signi ? -1 : 1)
                          : ccom.setChordsInitialTon();
                      }

                      dispatch(comForceUpdate());
                      // g.updateFlexFontSize();
                    }}
                  >
                    {(sign && <EvaIcon name={sign[0]} alt={sign[1]} />) ||
                      ccom.firstChord}
                  </button>
                ))}
              </div>,
            ]}
        {<TheComCtrlPanelAdditionalButtons />}
      </div>
      {isPlayerShown ? <TheComPlayerPanel /> : null}
    </div>
  );
}
