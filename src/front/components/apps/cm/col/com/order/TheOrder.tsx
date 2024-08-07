import React from 'react';
import { makeRegExp } from '../../../../../../../back/complect/makeRegExp';
import ComLine from '../line/ComLine';
import { ITheOrderProps } from './Order.model';

export default function TheOrder(props: ITheOrderProps) {
  const orderUnit = props.orderUnit;

  if (
    (props.isMiniAnchor && (orderUnit.top.isAnchorInherit || orderUnit.top.isAnchorInheritPlus)) ||
    (!props.showInvisibles && !orderUnit.isVisible)
  )
    return null;
  const { orderUniti, com } = props;

  const className = orderUnit.top.style?.getStyleName(orderUnit);

  if (props.isMiniAnchor && orderUnit.isAnchor && !orderUnit.isOpened) {
    return (
      <div
        id={`com-block-${orderUniti}`}
        className={`${className} styled-header anchor`}
        ref={el => el && (orderUnit.element = el)}
      >
        {orderUnit.top.header?.({
          isTexted: false,
          repeats: orderUnit.repeatsTitle,
        })}
      </div>
    );
  }

  const isTexted =
    orderUnit.texti == null
      ? !(!props.chordVisibleVariant || (!orderUnit.isMin && props.chordVisibleVariant === 1))
      : true;

  const blockHeader = orderUnit.top.isInherit
    ? null
    : orderUnit.top.header?.({
        isTexted,
        repeats: orderUnit.texti == null ? orderUnit.repeatsTitle : '',
      });

  const chordedOrd = !!(
    (!orderUnit.chordsi || orderUnit.chordsi > -1) &&
    (props.chordVisibleVariant === 2 || (props.chordVisibleVariant === 1 && orderUnit.isMin))
  );

  const headerNode = blockHeader && <div className={`styled-header ${className}`}>{blockHeader}</div>;

  const header =
    typeof props.asHeaderComponent === 'function'
      ? props.asHeaderComponent({
          chordedOrd,
          orderUnit,
          orderUniti,
          com: props.com,
          isJoinLetters: true,
          headerNode,
        })
      : headerNode;

  if (!orderUnit.text) {
    if (!orderUnit.chords) return null;

    return (
      <div
        id={`com-block-${orderUniti}`}
        className={
          (props.specialClassId || '') +
          'composition-block styled-block flex flex-baseline' +
          (orderUnit.isVisible ? '' : ' invisible')
        }
        ref={el => el && (orderUnit.element = el)}
      >
        {header}
        {isTexted && (
          <div
            key={orderUniti}
            className={`styled-block chords-block vertical-middle ${className}`}
          >
            {com.chordLabels[orderUniti].map(line => line.join(' ')).join('\n')}
          </div>
        )}
      </div>
    );
  }

  const lines = (orderUnit.repeatedText() || '').split(makeRegExp('/\\n/'));

  return (
    <div
      id={`com-block-${orderUniti}`}
      className={
        (props.specialClassId || '') +
        `composition-block styled-block ${className}` +
        (orderUnit.isVisible ? '' : ' invisible') +
        (chordedOrd ? ' chorded-block' : ' without-chords')
      }
      ref={el => el && (orderUnit.element = el)}
    >
      {header}
      {lines.map((textLine, textLinei, textLinea) => {
        const words = textLine?.split(makeRegExp('/ +/'));

        return (
          <React.Fragment key={textLinei}>
            {typeof props.asLineComponent === 'function' ? (
              props.asLineComponent({
                chordedOrd,
                textLine,
                textLinei,
                textLines: textLinea.length,
                orderUnit,
                orderUniti,
                wordCount: words.length,
                words,
                prevLinesCount: 1,
                com: props.com,
                isJoinLetters: true,
              })
            ) : (
              <ComLine
                chordedOrd={chordedOrd}
                textLine={textLine}
                textLinei={textLinei}
                prevLinesCount={1}
                textLines={textLinea.length}
                orderUnit={orderUnit}
                orderUniti={orderUniti}
                wordCount={words.length}
                words={words}
                com={props.com}
                isJoinLetters
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
