import ComLine from "../line/ComLine";
import "./ComOrder.scss";
import { IComLineProps, ITheOrderProps } from "./Order.model";

export default function TheOrder(props: ITheOrderProps) {
  const {
    asLineComponent,
    asHeaderComponent,
    orderUnit,
    orderUniti,
    currTransPosition,
    com,
    chordVisibleVariant,
    isMiniAnchor,
    hideInvisibles,
  } = props || {};

  if (
    (isMiniAnchor &&
      (orderUnit.top.isAnchorInherit ||
        orderUnit.top.isPrevAnchorInheritPlus)) ||
    (hideInvisibles && !orderUnit.isVisible)
  )
    return null;

  if (isMiniAnchor && orderUnit.isAnchor && !orderUnit.isOpened) {
    return (
      <div
        id={`com-block-${orderUniti}`}
        className={`${orderUnit.top.headClassName} anchor styled-block`}
      >
        {orderUnit.top.header({ isTexted: false, r: orderUnit.repeatsTitle })}
      </div>
    );
  }

  if (orderUnit.texti == null) {
    const chords = com.actualChords(orderUnit.chordsi, currTransPosition);

    if (!chords) return null;

    const hideChords =
      !chordVisibleVariant || (!orderUnit.isMin && chordVisibleVariant === 1);

    return (
      <div
        id={`com-block-${orderUniti}`}
        className={`com-order-block styled-block ${
          orderUnit.isVisible ? "" : "invisible"
        } flex flex-baseline`}
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
    : orderUnit.top.header?.({ isTexted: true });

  const chordedOrd = !!(
    (!orderUnit.chordsi || orderUnit.chordsi > -1) &&
    (chordVisibleVariant === 2 ||
      (chordVisibleVariant === 1 && orderUnit.isMin))
  );

  const headerNode = (
    <span className={orderUnit.top.headClassName}>{blockHeader}</span>
  );

  return (
    <div
      id={`com-block-${orderUniti}`}
      className={`com-order-block composition-block-wrapper Xuser-select ${
        orderUnit.isVisible ? "" : "invisible"
      }`}
    >
      <div
        className={`composition-block ${chordedOrd ? "" : "without-chords"} ${
          orderUnit.top.textClassName
        }`}
      >
        {blockHeader
          ? typeof asHeaderComponent === "function"
            ? asHeaderComponent({
                chordedOrd,
                orderUnit,
                orderUniti,
                com,
                isJoinLetters: true,
                headerNode,
              })
            : headerNode
          : null}
        {(orderUnit.repeated || "")
          .split(/\n/)
          .map((textLine, textLinei, textLinea) => {
            const words = textLine?.split(/ +/);
            const lineProps: IComLineProps = {
              chordedOrd,
              textLine,
              textLinei,
              textLines: textLinea.length,
              orderUnit,
              orderUniti,
              wordCount: words.length,
              words,
              com,
              isJoinLetters: true,
            };

            return (
              <div key={`song-line:${orderUniti}-${textLinei}`}>
                {typeof asLineComponent === "function" ? (
                  asLineComponent(lineProps)
                ) : (
                  <ComLine {...lineProps} />
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
