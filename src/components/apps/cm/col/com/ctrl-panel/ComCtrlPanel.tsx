import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import { EvaIconName } from "../../../../../../complect/eva-icon/EvaIcon.model";
import { Swipeabler } from "../../../../../../complect/swipeabler/Swipeabler";
import { RootState } from "../../../../../../store";
import { useChordVisibleVariant } from "../../../base/useChordVisibleVariant";
import { ChordVisibleVariant } from "../../../Cm.model";
import { riseUpComUpdate, switchAnchorsVisible } from "../../../Cm.store";
import { useCols } from "../../../cols/useCols";
import { useMarks } from "../../../marks/useMarks";
import { Com } from "../Com";
import ComPlayerPanel from "../player/ComPlayerPanel";
import TheComCtrlPanelAdditionalButtons from "./ComCtrlPanelAdditionalButtons";

export default function ComCtrlPanel({ ccom }: { ccom: Com }) {
  const dispatch = useDispatch();

  const [cols] = useCols();
  const cats = cols.cats;

  const { toggle: toggleMark, isMarked } = useMarks();

  const [chordVisibleVariant, setChordVisibleVariant] =
    useChordVisibleVariant();

  const [isShowNatives, setIsShowNatives] = useState(false);
  const [songNumberElement, setSongNumberElement] = useState<Swipeabler | null>(
    null
  );
  const [comPlayerElement, setComPlayerElement] = useState<Swipeabler | null>(
    null
  );
  const [bemoleSwitcherElement, setBemoleSwitcherElement] =
    useState<Swipeabler | null>(null);

  const isAnchorsVisible = useSelector(
    (state: RootState) => state.cm.isAnchorsVisible
  );

  useEffect(() => {
    return () => {
      songNumberElement?.mute();
    };
  });

  if (ccom == null) return null;

  const isWhole = !ccom.orders.some(
    (ord) => !ord.isMin && ord.texti != null && !ord.isAnchor
  );

  return (
    <div key="chord-ctrl" className="chord-ctrl">
      <div>
        <div
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
            isMarked(ccom.wid) ? "success m-ok" : "secondary"
          } song-number`}
          onClick={(event) => {
            event.stopPropagation();

            if (event.ctrlKey) setIsShowNatives(!isShowNatives);
            else toggleMark(ccom.wid);
          }}
        >
          #{ccom.index == null ? "?" : ccom.index - -1}
        </div>
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
                        dispatch(switchAnchorsVisible());
                      }
                    })
                  );
                }}
              >
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
                    <div
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
                          dispatch(switchAnchorsVisible());
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
                    >
                      {<EvaIcon name={name} alt={alt} />}
                    </div>
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
                        dispatch(riseUpComUpdate());
                      }
                    })
                  );
                }}
              >
                {[
                  ["arrow-down-outline", "-"] as [EvaIconName, string],
                  null,
                  ["arrow-up-outline", "+"] as [EvaIconName, string],
                ].map((sign, signi) => (
                  <div
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
                    }${
                      !chordVisibleVariant ||
                      (!sign && ccom.transPosition === ccom.initialTransPos)
                        ? "mdisabled"
                        : ""
                    }`}
                    onClick={(event) => {
                      event.stopPropagation();

                      if (event.ctrlKey) ccom.turnBemoled();
                      else {
                        sign
                          ? ccom.transpose(!signi ? -1 : 1)
                          : ccom.setChordsInitialTon();
                      }

                      dispatch(riseUpComUpdate());
                    }}
                  >
                    {(sign && <EvaIcon name={sign[0]} alt={sign[1]} />) ||
                      ccom.firstChord}
                  </div>
                ))}
              </div>,
            ]}
        {<TheComCtrlPanelAdditionalButtons />}
      </div>
      {isAnchorsVisible ? <ComPlayerPanel /> : null}
    </div>
  );
}
