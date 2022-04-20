import mylib from "../../../../../../complect/my-lib/MyLib";
import ComLine from "../line/ComLine";
import { IComLineProps } from "../line/ComLine.model";
import { ITheOrderProps } from "./Order.model";

export default function TheOrder(props: ITheOrderProps) {
  const {
    asLineComponent,
    orderUnit,
    orderUniti,
    currTransPosition,
    com,
    chordVisibleVariant,
    isHideAnchor,
  } = props || {};

  if (
    (isHideAnchor &&
      (orderUnit.top.isAnchorInherit ||
        orderUnit.top.isPrevAnchorInheritPlus)) ||
    !orderUnit.isVisible
  )
    return null;

  if (isHideAnchor && orderUnit.isAnchor && !orderUnit.isOpened) {
    return (
      <div
        id={`com-block-${orderUniti}`}
        className={`${orderUnit.top.headClassName} anchor styled-block`}
      >
        {orderUnit.top.header({ isTexted: false, r: orderUnit.repeatsTitle })}
      </div>
    );
  } else if (orderUnit.texti == null) {
    const chords = com.actualChords(orderUnit.chordsi, currTransPosition);

    if (!chords) return null;

    const hideChords =
      !chordVisibleVariant || (!orderUnit.isMin && chordVisibleVariant === 1);

    return (
      <div
        id={`com-block-${orderUniti}`}
        className="com-order-block styled-block flex flex-baseline"
      >
        <div
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

  const chordedOrd =
    orderUnit.chordsi > -1 &&
    (chordVisibleVariant === 2 ||
      (chordVisibleVariant === 1 && orderUnit.isMin));

  return (
    <div
      id={`com-block-${orderUniti}`}
      className="com-order-block song-part-wrapper Xuser-select"
    >
      <div
        className={`song-part ${chordedOrd ? "" : "without-chords"} ${
          orderUnit.top.textClassName
        }`}
      >
        {blockHeader ? (
          <span className={orderUnit.top.headClassName}>{blockHeader}</span>
        ) : null}
        {(orderUnit.repeated || "")
          .split(/\n/)
          .map((textLine, textLinei, textLinea) => (
            <div
              key={`song-line:${orderUniti}-${textLinei}`}
              className="song-line"
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
                  com,
                })}
            </div>
          ))}
      </div>
    </div>
  );
}
