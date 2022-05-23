import { CSSProperties, useEffect, useState } from "react";
import EvaIcon from "../../../../../../../complect/eva-icon/EvaIcon";
import useExer from "../../../../../../../complect/exer/useExer";
import modalService from "../../../../../../../complect/modal/Modal.service";
import mylib from "../../../../../../../complect/my-lib/MyLib";
import { ChordVisibleVariant } from "../../../../Cm.model";
import { cmExer } from "../../../../Cm.store";
import ComLine from "../../../../col/com/line/ComLine";
import { Order } from "../../../../col/com/order/Order";
import { OrderRepeats } from "../../../../col/com/order/Order.model";
import TheOrder from "../../../../col/com/order/TheOrder";
import { EditableOrder } from "../complect/orders/EditableOrder";
import { useEditableCcom } from "../useEditableCcom";
import { IEditableComLineProps } from "./ComRepeats.model";
import "./ComRepeats.scss";

export default function ComRepeats() {
  const { exec } = useExer(cmExer);
  const [start, setStart] = useState<IEditableComLineProps | null>(null);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [isChordBlock, setIsChordBlock] = useState(false);
  const [isReadySetChordBlock, setIsReadySetChordBlock] = useState(false);
  const [flashCount, setFlashCount] = useState(2);

  const ccom = useEditableCcom();
  const startFlash = "/";
  const finishFlash = "\\";
  const flashDivider = "&nbsp;";
  const coln = "r";
  const {
    textLinei: startLinei,
    wordi: startWordi,
    orderUnit: startOrd,
  } = start || {};
  let startedFlashes = 0;
  let beforeFlashes = 0;
  let isInRegion = false;
  let isRegionEnds = false;

  const setField = (
    ord?: EditableOrder,
    repeateds?: OrderRepeats | nil,
    prevs?: OrderRepeats | nil
  ) => {
    if (!ord) return;

    const reps = typeof prevs === "number" ? { ".": prevs } : prevs || {};
    const repds =
      typeof repeateds === "number" ? { ".": repeateds } : repeateds || {};
    const repeats = { ...reps, ...repds };
    const keys = Object.keys(repeats);
    if (repeats["."] === 0) delete repeats["."];
    exec(
      ord.setField(
        coln,
        keys.length
          ? keys.length === 1 && keys[0] === "."
            ? repeats["."]
            : repeats
          : 0
      )
    );
  };

  useEffect(() => {
    if (isReadySetChordBlock) {
      setField(startOrd, flashCount);
      reset();
      setIsReadySetChordBlock(false);
    }
  }, [flashCount, isReadySetChordBlock, startOrd]);

  const reset = () => {
    setStart(null);
    setFlashCount(2);
    setIsChordBlock(false);
  };

  return (
    <div className={`com-repeats-editor ${start == null ? "" : "active"}`}>
      {ccom?.orders?.map((ord, ordi) => {
        return (
          <div
            key={`ord-${ordi}`}
            className="region-editor-block"
            onClick={
              ord.text
                ? undefined
                : (event) => {
                    if (start == null || !isChordBlock) {
                      setStart({
                        orderUnit: ord,
                        textLine: "",
                        textLinei: 0,
                        textLines: 0,
                        wordCount: 0,
                        wordi: 0,
                        words: [],
                      });

                      setIsChordBlock(true);
                      setXPos((event.target as any).offsetLeft);
                      setYPos((event.target as any).offsetTop);
                    } else {
                      setIsChordBlock(false);
                      setIsReadySetChordBlock(true);
                    }
                  }
            }
          >
            <TheOrder
              chordVisibleVariant={ChordVisibleVariant.None}
              com={ccom}
              orderUnit={ord}
              orderUniti={ordi}
              asLineComponent={(props) => {
                return (
                  <ComLine
                    {...props}
                    setWordClass={(props) => {
                      if (!start) return "";
                      const { wordi, wordCount, textLinei } = props;

                      const openers = ord.regions?.reduce(
                        (count: number, { startLinei, startWordi, startKey }) =>
                          count +
                          +(
                            textLinei === startLinei &&
                            wordi === startWordi &&
                            !(startKey || "").startsWith("~")
                          ),
                        0
                      );
                      if (openers) {
                        if (!isInRegion) beforeFlashes++;
                        startedFlashes += isInRegion ? openers : 1;
                      }

                      const prevStarteds = startedFlashes;
                      const prevEnds = isRegionEnds;

                      const closers = ord.regions?.reduce(
                        (count, { endLinei, endWordi = wordCount - 1 }) =>
                          count +
                          +(textLinei === endLinei && wordi === endWordi),
                        0
                      );

                      if (closers) {
                        if (isInRegion) {
                          if (
                            startedFlashes &&
                            startedFlashes === beforeFlashes
                          )
                            isRegionEnds = true;
                        } else beforeFlashes--;
                        startedFlashes -= closers;
                      }

                      const isLastInRange =
                        ord === startOrd &&
                        textLinei === startLinei &&
                        wordi === startWordi &&
                        startedFlashes + 1 === prevStarteds;

                      if (isLastInRange) isRegionEnds = true;

                      if (
                        !isInRegion &&
                        ord === startOrd &&
                        textLinei === startLinei &&
                        wordi === startWordi
                      )
                        isInRegion = true;

                      return isLastInRange ||
                        (isInRegion &&
                          (isLastInRange ? prevStarteds : startedFlashes) <=
                            beforeFlashes &&
                          !prevEnds)
                        ? ""
                        : "inactive-word";
                    }}
                    onClick={(event) => {
                      const clicked = event.nativeEvent
                        .composedPath()
                        .find((span) =>
                          (span as HTMLSpanElement)?.classList?.contains(
                            "com-word"
                          )
                        ) as HTMLSpanElement;

                      const [, wordi] =
                        (clicked &&
                          Array.from(clicked.classList)
                            .find((className) => className.startsWith("wordi_"))
                            ?.split("_")) ||
                        [];

                      const {
                        textLinei: linei,
                        textLines: lines,
                        wordCount,
                      } = props;

                      if (start == null || isChordBlock) {
                        setStart({ ...props, orderUnit: ord, wordi: +wordi });
                        setXPos((event.target as any).offsetLeft);
                        setYPos((event.target as any).offsetTop);
                        setIsChordBlock(false);
                      } else {
                        const nextLetter = ccom.getRegionNextLetter();
                        const [startDiap, finishDiap] =
                          startOrd === ord
                            ? startLinei === 0 &&
                              startWordi === 0 &&
                              linei === lines - 1 &&
                              +wordi === wordCount - 1
                              ? ["."]
                              : [
                                  `${startLinei}${
                                    startWordi ? `:${startWordi}` : ""
                                  }${
                                    startLinei === linei &&
                                    !startWordi &&
                                    wordCount - 1 === +wordi
                                      ? ""
                                      : `-${linei}${
                                          wordCount - 1 === +wordi
                                            ? ""
                                            : `:${wordi}`
                                        }`
                                  }`,
                                ]
                            : [
                                `${nextLetter}${startLinei}:${startWordi}`,
                                `${linei}:${wordi}${nextLetter}`,
                              ];

                        setField(
                          startOrd,
                          { [startDiap]: flashCount },
                          startOrd?.repeats
                        );

                        if (startOrd !== ord) {
                          setField(
                            ord,
                            { [finishDiap || ""]: flashCount },
                            ord.repeats
                          );
                          ord.resetRegions();
                        }

                        startOrd?.resetRegions();

                        reset();
                        exec();
                      }
                    }}
                  />
                );
              }}
            />

            {(() => {
              if (!start || start.orderUnit !== ord) return null;
              const { orderUnit: startOrd, textLinei, wordi } = start;

              const flashes = (ord.regions || []).filter(
                ({ startLinei, startWordi }) =>
                  startLinei === textLinei && startWordi === wordi
              );

              return (
                <div
                  className={`float-button-panel${
                    start && ord === start.orderUnit ? "" : " hidden"
                  }`}
                  style={
                    {
                      "--x": xPos,
                      "--y": yPos,
                    } as CSSProperties
                  }
                >
                  <div
                    className="button close"
                    onClick={(event) => {
                      event.stopPropagation();
                      reset();
                    }}
                  >
                    <EvaIcon name="close-outline" />
                  </div>
                  {!flashes.length ? null : (
                    <div
                      className="button remove"
                      onClick={async (event) => {
                        event.stopPropagation();

                        if (isChordBlock) {
                          if (
                            await modalService.confirm(
                              `Сбросить повторения блока "${startOrd.top.header()}"?`,
                              "Сброс"
                            )
                          ) {
                            startOrd.setField(coln, 0);
                            reset();
                          }
                          return;
                        }

                        modalService.open({
                          title: "Сброс границ",
                          inputs: ord.regions
                            ?.filter(
                              ({ startLinei, startWordi }) =>
                                textLinei === startLinei && wordi === startWordi
                            )
                            .map((flash) => {
                              const {
                                startLinei,
                                startWordi,
                                endLinei,
                                endWordi,
                                startOrd,
                                endOrd,
                                startKey,
                                count,
                              } = flash;
                              const fill = (
                                ord?: Order,
                                l?: number | nil,
                                w?: number | nil,
                                isBeg?: boolean,
                                fl?: number | und,
                                fw?: number | und
                              ) => {
                                const lines = (ord?.text || "").split(/\n+/);
                                return (
                                  isBeg
                                    ? lines.slice(
                                        l || 0,
                                        fl == null ? fl : fl + 1
                                      )
                                    : lines.slice(0, (l || 0) + 1)
                                )
                                  .map((line) =>
                                    (isBeg
                                      ? (line || "")
                                          .split(/ +/)
                                          .slice(
                                            w || 0,
                                            fw == null ? fw : fw + 1
                                          )
                                      : (line || "")
                                          .split(/ +/)
                                          .slice(0, (w || 0) + 1)
                                    ).join(" ")
                                  )
                                  .join("\n");
                              };

                              const text =
                                startFlash.repeat(count || 0) +
                                flashDivider +
                                ((startKey || "").startsWith("~")
                                  ? fill(
                                      startOrd,
                                      startLinei,
                                      startWordi,
                                      true,
                                      startLinei ?? undefined,
                                      startWordi ?? undefined
                                    )
                                  : startOrd === endOrd
                                  ? fill(
                                      startOrd,
                                      startLinei,
                                      startWordi,
                                      true,
                                      endLinei ?? undefined,
                                      endWordi ?? undefined
                                    )
                                  : `${fill(
                                      startOrd,
                                      startLinei,
                                      startWordi,
                                      true
                                    )}\n...\n${fill(
                                      endOrd,
                                      startLinei,
                                      startWordi,
                                      false
                                    )}`) +
                                flashDivider +
                                finishFlash.repeat(count || 0);

                              return {
                                title: (
                                  <pre
                                    dangerouslySetInnerHTML={{ __html: text }}
                                  />
                                ),
                                value: "Очистить границы",
                                type: "button",
                                closable: true,
                                onClick: () => {
                                  const { startOrd, endOrd, startKey, endKey } =
                                    flash;
                                  const srepeats = mylib.clone(
                                    startOrd?.repeats
                                  );

                                  if (
                                    srepeats &&
                                    typeof srepeats !== "number"
                                  ) {
                                    delete srepeats[startKey];
                                    setField(startOrd, srepeats);
                                  } else setField(startOrd, 0);

                                  startOrd?.resetRegions();

                                  if (startOrd !== endOrd && endOrd) {
                                    const frepeats = {
                                      ...(typeof endOrd.repeats === "number"
                                        ? { ".": endOrd.repeats }
                                        : endOrd.repeats || {}),
                                    };

                                    delete frepeats[endKey || "."];
                                    setField(endOrd, frepeats);
                                    endOrd?.resetRegions();
                                  }

                                  reset();
                                },
                              };
                            }),
                          buttons: [
                            {
                              title: "Отмена",
                            },
                            {
                              title: "Сброс",
                              onClick: () => reset(),
                            },
                          ],
                        });
                      }}
                    >
                      <EvaIcon name="trash-2-outline" />
                    </div>
                  )}
                  {[2, 3, 4, 5].map((currFlashCount) => {
                    return (
                      <div
                        key={`flash-${currFlashCount}`}
                        className={`button numeric${
                          flashCount === currFlashCount ? " active" : ""
                        }`}
                        onClick={() => setFlashCount(currFlashCount)}
                      >
                        {currFlashCount}
                      </div>
                    );
                  })}
                  {isChordBlock ? null : (
                    <div
                      className="button flag"
                      onClick={() => {
                        setField(
                          startOrd,
                          {
                            [`~${startLinei}:${startWordi}`]: flashCount - 1,
                          },
                          startOrd.repeats
                        );
                        reset();
                      }}
                    >
                      <EvaIcon name="flag-outline" />
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        );
      })}
    </div>
  );
}
