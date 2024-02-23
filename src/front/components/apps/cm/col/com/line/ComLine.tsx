import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { IComLineProps } from '../order/Order.model';

const spacePlusReg_g = / +/g;
const spaceReg = / /;

export default function ComLine(props: IComLineProps) {
  if (!props.chordedOrd)
    return (
      <Line
        className="composition-line"
        onClick={props.onClick}
      >
        {props.words.map((word, wordi) => {
          return (
            <span
              key={wordi}
              className={`com-word wordi_${wordi} ${props.setWordClass?.(props, wordi) ?? ''}`}
            >
              {word && <span dangerouslySetInnerHTML={{ __html: word }} />}{' '}
            </span>
          );
        })}
      </Line>
    );

  const vowelPositions = props.com.getVowelPositions(props.textLine);
  let chordIndex = 0;
  let points = vowelPositions;

  const chordsLabels = props.com.chordLabels[props.orderUniti]?.[props.textLinei] || [];
  const linePositions = props.orderUnit.positions?.[props.textLinei] || [];

  if (props.isJoinLetters !== false)
    points = vowelPositions.filter(
      (lett, letti) => !letti || linePositions.includes(letti) || props.textLine[lett].match(spaceReg),
    );

  const isHasPre = linePositions.includes(-1);
  const isHasPost = linePositions.includes(-2);

  let wordBitNodes: ReactNode[] = [];
  const wordsNodes: ReactNode[] = [];
  const pushWordNode = (index: number) => {
    wordsNodes.push(
      <span
        key={index}
        className="nowrap"
      >
        {wordBitNodes}
      </span>,
      ' ',
    );
    wordBitNodes = [];
  };

  points.forEach((index, indexi, indexa) => {
    const isLast = indexi === indexa.length - 1;
    const firstTextBit = indexi === 0 ? props.textLine.slice(0, index) : '';
    const isChordedFirst = indexi === 0 && isHasPre && firstTextBit === '';
    const isChordedLast = isLast && isHasPost;
    const isChorded = linePositions.includes(vowelPositions.indexOf(index));
    const chordLabel = isChorded ? chordsLabels[chordIndex++ - (isHasPre ? -1 : 0)] || undefined : undefined;

    const chord = isChordedFirst ? chordsLabels[0] : chordLabel;
    const pchord = isLast && isHasPost ? chordsLabels[chordsLabels.length - 1] : null;

    const baseTextBitOriginal = props.textLine.slice(index, indexa[indexi + 1]);
    const origBits = baseTextBitOriginal
      .split(spacePlusReg_g)
      .map((txt, txti) => (
        <React.Fragment key={txti}>{txt && <span dangerouslySetInnerHTML={{ __html: txt }} />}</React.Fragment>
      ));

    let firstBitNode: ReactNode = firstTextBit !== '' && (
      <span
        className={isHasPre ? 'chorded pre' : undefined}
        dangerouslySetInnerHTML={{ __html: firstTextBit }}
        attr-chord={isHasPre ? chordsLabels[0] : undefined}
      />
    );

    if (baseTextBitOriginal.startsWith(' ')) {
      pushWordNode(indexi);

      if (firstTextBit !== '') {
        wordBitNodes.push(<React.Fragment key={indexi + '-word'}>{firstBitNode}</React.Fragment>, ' ');
        firstBitNode = null;
      }
    }

    const node = (
      <React.Fragment key={indexi}>
        {firstBitNode}
        <span
          attr-chord={chord}
          attr-pchord={pchord}
          className={
            `com-letter letteri_${indexi}` +
            (isChorded || isChordedFirst || isChordedLast ? ' chorded' : '') +
            (isChordedLast ? ' post' : '') +
            (isChordedFirst ? ' pre' : '') +
            (baseTextBitOriginal.match(spaceReg) ? ' spaced-word' : '') +
            (isChorded && isLast && isHasPost ? ' twice' : '')
          }
        >
          {isChorded || isChordedLast ? (
            <span
              className="fragment"
              attr-chord={chord}
              attr-pchord={pchord}
            >
              {origBits}
            </span>
          ) : (
            origBits
          )}
        </span>
      </React.Fragment>
    );

    wordBitNodes.push(node);

    if (indexa.length - 1 === indexi) pushWordNode(indexi + 1);
  });

  return (
    <Line
      className="composition-line"
      onClick={props.onClick}
    >
      {wordsNodes}
    </Line>
  );
}

const Line = styled.div`
  white-space: normal;

  * {
    font-size: 1em;

    &::before,
    &::after {
      font-size: 1em;
    }
  }

  .chorded {
    display: inline-block;
    position: relative;
    line-height: 1;
    white-space: pre;

    &.pre,
    &.post,
    &.spaced-word {
      &::before,
      &::after {
        color: color-mix(in lch, currentColor 50%, var(--color--7));
      }
    }

    &:not(.pre):not(.post) {
      &.spaced-word::before {
        left: -0.2em;
      }

      &::before {
        left: 0;
      }
    }

    &:not(.post) {
      &::before,
      &::after {
        position: absolute;
        top: -1em;
        z-index: 0;
        pointer-events: none;
        font-size: 1em;
      }

      .fragment {
        &::before {
          content: attr(attr-pchord);
          position: absolute;
          top: -1em;
          left: 100%;
        }

        &::after {
          content: attr(attr-chord);
          display: block;
          margin-top: -1em;
          color: transparent;
        }
      }
    }

    &.spaced-word:not(.post)::after {
      content: '.';
      top: 0;
      width: 0.3em;
      color: transparent;
    }

    &.pre::before,
    &:not(.pre):not(.post)::before {
      content: attr(attr-chord);
      max-width: 500px;
      white-space: nowrap;
    }

    &.pre::before {
      left: -0.5em;
    }

    &.post {
      .fragment {
        display: inline-block;
        position: relative;

        &::before {
          content: attr(attr-chord);
          display: block;
          margin-top: -1em;
          height: 1em;
        }
      }

      &::before {
        position: absolute;
        top: -1em;
        right: 0;
      }

      &::after {
        content: attr(attr-pchord);
        display: inline-block;
        position: relative;
        top: -1em;
        margin-left: 0.2em;
      }
    }
  }
`;
