import { useSelector } from "react-redux";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../../store";
import { useChordVisibleVariant } from "../../../base/useChordVisibleVariant";
import ComLine from "../line/ComLine";
import { IComLineProps } from "../line/ComLine.model";
import { Order } from "./Order";
import { ITheOrderProps } from "./Order.model";

export default function TheOrder(props: ITheOrderProps) {
  const {
    asLineComponent,
    setChorded,
    setHideAnchor,
    onLineClick,
    setOrdClassName,
    orderUnit,
    orderUniti,
    currTransPosition,
    isAnchorInheritHide,
    ccom,
  } = props || {};
  const isAnchorsVisible = useSelector(
    (state: RootState) => state.cm.isAnchorsVisible
  );

  const [chordVisibleVariant] = useChordVisibleVariant();

  if (
    (isAnchorInheritHide &&
      (orderUnit.top.isAnchorInherit ||
        orderUnit.top.isPrevAnchorInheritPlus)) ||
    !orderUnit.isVisible
  )
    return null;

  const params = (init = {}) => {
    return Object.assign({ id: `com-block-${orderUniti}` }, init);
  };

  const isHideAnchor =
    orderUnit.isAnchor &&
    mylib
      .func(setHideAnchor, (ord: Order) => !ord.isOpened && !isAnchorsVisible)
      .call(orderUnit);

  if (isHideAnchor) {
    return (
      <div
        {...params({
          className: `${orderUnit.top.headClassName} anchor styled-block`,
        })}
      >
        {orderUnit.top.header({ isTexted: false, r: orderUnit.repeatsTitle })}
      </div>
    );
  } else if (orderUnit.texti == null) {
    const chords = ccom.actualChords(orderUnit.chordsi, currTransPosition);
    if (!chords) return null;
    const hideChords =
      !chordVisibleVariant || (!orderUnit.isMin && chordVisibleVariant === 1);

    return (
      <div
        {...params({
          key: `chorded-block-${orderUniti}-${orderUnit.chordsi}`,
          className: "com-order-block styled-block flex flex-baseline",
        })}
      >
        <div
          key={`chorded-block-${orderUniti}-header`}
          className={`header ${hideChords ? "anchor styled-block" : ""} ${
            orderUnit.top.headClassName
          }`}
        >
          {orderUnit.top.header({
            isTexted: !hideChords,
            r: orderUnit.repeatsTitle,
          })}
        </div>
        {hideChords ? null : (
          <pre
            key={`chorded-block-${orderUniti}-content`}
            className={`body ${orderUnit.top.textClassName}`}
          >
            {chords}
          </pre>
        )}
      </div>
    );
  }

  const blockHeader = orderUnit.top.isInherit
    ? null
    : orderUnit.top.header({ isTexted: true });
  const chordedOrd = mylib
    .func(
      setChorded,
      (ord: Order) =>
        ord.chordsi > -1 &&
        (chordVisibleVariant === 2 || (chordVisibleVariant === 1 && ord.isMin))
    )
    .call(orderUnit);

  return (
    <div
      {...params({
        className: [
          "com-order-block song-part-wrapper Xuser-select",
          mylib.func(setOrdClassName).call(orderUnit),
        ].join(" "),
      })}
    >
      <div
        key={`song-part-woc-${orderUniti}`}
        className={`song-part ${chordedOrd ? "" : "without-chords"} ${
          orderUnit.top.textClassName
        }`}
      >
        {blockHeader ? (
          <span
            key={`song-part-header-${orderUniti}`}
            className={orderUnit.top.headClassName}
          >
            {blockHeader}
          </span>
        ) : null}
        {(orderUnit.repeated || "")
          .split(/\n/)
          .map((textLine, textLinei, textLinea) => (
            <div
              key={`song-line:${orderUniti}-${textLinei}`}
              className="song-line"
              onClick={() =>
                mylib
                  .func(onLineClick)
                  .call(textLine, textLinei, orderUnit, orderUniti)
              }
            >
              {mylib
                .func(asLineComponent, (props: IComLineProps) => (
                  <ComLine {...props} />
                ))
                .call({
                  chordedOrd,
                  textLine,
                  textLinei,
                  textLines: textLinea.length,
                  orderUnit,
                  orderUniti,
                  ccom,
                })}
            </div>
          ))}
      </div>
    </div>
  );
}
