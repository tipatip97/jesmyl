import ComLine from "../line/ComLine";
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
      (orderUnit.top.isAnchorInherit || orderUnit.top.isAnchorInheritPlus)) ||
    (hideInvisibles && !orderUnit.isVisible)
  )
    return null;

  const className = orderUnit.top.style?.getStyleName(orderUnit);

  if (isMiniAnchor && orderUnit.isAnchor && !orderUnit.isOpened) {
    return (
      <div
        id={`com-block-${orderUniti}`}
        className={`${className} styled-header anchor`}
      >
        {orderUnit.top.header({ isTexted: false, r: orderUnit.repeatsTitle })}
      </div>
    );
  }
  const isTexted =
    orderUnit.texti == null
      ? !(
          !chordVisibleVariant ||
          (!orderUnit.isMin && chordVisibleVariant === 1)
        )
      : true;

  const blockHeader = orderUnit.top.isInherit
    ? null
    : orderUnit.top.header?.({
        isTexted,
        r: orderUnit.texti == null ? orderUnit.repeatsTitle : "",
      });

  const chordedOrd = !!(
    (!orderUnit.chordsi || orderUnit.chordsi > -1) &&
    (chordVisibleVariant === 2 ||
      (chordVisibleVariant === 1 && orderUnit.isMin))
  );

  const headerNode = (
    <div className={`styled-header ${className}`}>{blockHeader}</div>
  );

  const header = blockHeader
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
    : null;

  if (orderUnit.texti == null) {
    const chords = com.actualChords(orderUnit.chordsi, currTransPosition);

    if (!chords) return null;

    return (
      <div
        id={`com-block-${orderUniti}`}
        className={`composition-block styled-block ${
          orderUnit.isVisible ? "" : "invisible"
        } flex flex-baseline`}
      >
        {header}
        {!isTexted ? null : (
          <div
            key={`chorded-block-${orderUniti}-content`}
            className={`styled-block chords-block vertical-middle ${className}`}
          >
            {chords}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      id={`com-block-${orderUniti}`}
      className={`composition-block ${
        orderUnit.isVisible ? "" : "invisible"
      } styled-block ${
        chordedOrd ? "chorded-block" : "without-chords"
      } ${className}`}
    >
      {header}
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
  );
}
