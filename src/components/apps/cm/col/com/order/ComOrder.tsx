import { useSelector } from "react-redux";
import mylib from "../../../../../../complect/my-lib/MyLib";
import { RootState } from "../../../../../../store";
import { useChordVisibleVariant } from "../../../hooks";
import { TheComLine } from "../line/ComLine";
import { IComLineProps } from "../line/ComLine.model";
import { Order } from "./Order";
import { ITheOrderProps } from "./Order.model";

export function TheComOrder(props: ITheOrderProps) {
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
  const isPlayerShown = useSelector(
    (state: RootState) => state.cm.isPlayerShown
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
    return Object.assign(
      {
        id: `com-block-${orderUniti}`,
        // ref: (element) =>
        //   element && g.actions.com.registerBlock(orderUniti, element),
        // onContextMenu: (event) => {
        //   event.preventDefault();
        //   // navigator.clipboard.writeText('text123');
        // },
      },
      init
      // g.streamManager.isCurr
      //   ? {
      //       onDoubleClick: () =>
      //         g.streamManager.setBlocki(orderUniti, () => g.ss()),
      //     }
      //   : null,
      // g.streamManager.isSub
      //   ? {
      //       style: Object.assign(
      //         {},
      //         g.streamManager.isCurr
      //           ? {
      //               borderTop: "dotted var(--color-far) 1px",
      //             }
      //           : null,
      //         g.streamManager.isSubBlocki(orderUniti)
      //           ? {
      //               backgroundColor: "var(--color-light-far)",
      //             }
      //           : null
      //       ),
      //     }
      //   : null
    );
  };

  const isHideAnchor =
    // !g.streamManager.isSub &&
    orderUnit.isAnchor &&
    mylib
      .func(setHideAnchor, (ord: Order) => !ord.isOpened && !isPlayerShown)
      .call(orderUnit);

  if (isHideAnchor) {
    return (
      <div
        {...params({
          key: `anchor-block-${orderUniti}-${orderUnit.anchor}`,
          className: `${orderUnit.top.headClassName} anchor styled-block`,
        })}
      >
        {orderUnit.top.header({ isTexted: false, r: orderUnit.repeatsTitle })}
      </div>
    );
  } else if (orderUnit.texti == null) {
    const chords = ccom.actualChords(orderUnit.chordsi, currTransPosition);
    if (!chords) return null;

    return (
      <div
        {...params({
          key: `chorded-block-${orderUniti}-${orderUnit.chordsi}`,
          className: "com-order-block styled-block flex flex-baseline",
        })}
      >
        <div
          key={`chorded-block-${orderUniti}-header`}
          className={`header ${
            !chordVisibleVariant ? "anchor styled-block" : ""
          } ${orderUnit.top.headClassName}`}
        >
          {orderUnit.top.header({
            isTexted: !!chordVisibleVariant,
            r: orderUnit.repeatsTitle,
          })}
        </div>
        {!chordVisibleVariant ? null : (
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
        key: `song-part-wrapper user-select${orderUniti}`,
        className: [
          "com-order-block song-part-wrapper Xuser-select",
          mylib.func(setOrdClassName).call(orderUnit),
        ]
          .join(" "),
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
                  <TheComLine {...props} />
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
