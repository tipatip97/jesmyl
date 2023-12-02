import React from "react";
import { IComLineProps } from "../order/Order.model";
import styled from "styled-components";

const spacePlusReg_g = / +/g;
const spaceReg = / /;

export default function ComLine(props: IComLineProps) {
  if (!props.chordedOrd)
    return (
      <div className="composition-line" onClick={props.onClick}>
        {props.words.map((word, wordi, worda) => {
          return (
            <span
              key={wordi}
              className={`com-word wordi_${wordi} ${props.setWordClass?.(props, wordi) || ""}`}
            >
              {word && <span dangerouslySetInnerHTML={{ __html: word }} />}
              {wordi !== worda.length - 1 && <>{" "}<wbr /></>}
            </span>
          );
        })}
      </div>
    );

  const letters = props.com.getVowelPositions(props.textLine);

  let chordIndex = 0;
  const chordsLabels = props.com.chordLabels[props.orderUniti]?.[props.textLinei] || [];
  const linePoss = props.orderUnit.positions?.[props.textLinei] || [];

  let points = letters;

  if (props.isJoinLetters !== false)
    points = letters.filter(
      (lett, letti) =>
        !letti || linePoss.includes(letti) || props.textLine[lett].match(spaceReg)
    );

  const isHasPre = linePoss.includes(-1);
  const isHasPost = linePoss.includes(-2);

  return (
    <Line className="composition-line" onClick={props.onClick}>
      {points.map((index, indexi, indexa) => {
        const isLast = indexi === indexa.length - 1;
        const firstTextBit = indexi === 0 ? props.textLine.slice(0, index) : "";
        const chordedFirst = indexi === 0 && isHasPre && firstTextBit === "";
        const chordedLast = isLast && isHasPost;
        const chorded = linePoss.includes(letters.indexOf(index));
        const chordLabel = chorded
          ? chordsLabels[chordIndex++ - (isHasPre ? -1 : 0)] || undefined
          : undefined;

        const chord = chordedFirst ? chordsLabels[0] : chordLabel;
        const pchord =
          isLast && isHasPost ? chordsLabels[chordsLabels.length - 1] : null;

        const baseTextBitOriginal = props.textLine.slice(index, indexa[indexi + 1]);
        const origBits = baseTextBitOriginal
          .split(spacePlusReg_g)
          .map((txt, txti, txta) => (
            <React.Fragment key={txti}>
              {txt && <span dangerouslySetInnerHTML={{ __html: txt }} />}
              {txti !== txta.length - 1 && <>{" "}<wbr /></>}
            </React.Fragment>
          ));

        return (
          <React.Fragment key={indexi}>
            {firstTextBit && <span
              className={isHasPre ? "chorded pre" : ""}
              dangerouslySetInnerHTML={{ __html: firstTextBit }}
              attr-chord={chordsLabels[0]}
            />}
            <span
              attr-chord={chord}
              attr-pchord={pchord}
              className={`com-letter letteri_${indexi}`
                + (chorded || chordedFirst || chordedLast ? " chorded" : '')
                + (chordedLast ? " post" : '')
                + (chordedFirst ? " pre" : '')
                + (baseTextBitOriginal.match(spaceReg) ? " spaced-word" : '')
                + (chorded && isLast && isHasPost ? " twice" : '')}
            >
              {chorded || chordedLast
                ? <span
                  className="fragment"
                  attr-chord={chord}
                  attr-pchord={pchord}
                >
                  {origBits}
                </span>
                : origBits}
            </span>
          </React.Fragment>
        );
      })}
    </Line>
  );
}

const Line = styled.div`
  .chorded {
      position: relative;
      display: inline-block;
      line-height: 1;
      white-space: pre;

      &:not(.pre):not(.post):before {
          left: 0;
      }

      &:not(.post) {

          &:before,
          &:after {
              position: absolute;
              z-index: 0;
              top: -1em;
              font-size: 1em;
              pointer-events: none;
          }

          .fragment {

              &:before {
                  content: attr(attr-pchord);
                  position: absolute;
                  top: -1em;
                  left: 100%;
              }

              &:after {
                  content: attr(attr-chord);
                  display: block;
                  margin-top: -1em;
                  color: transparent;
              }
          }
      }

      &.spaced-word:not(.post):after {
          content: '.';
          color: transparent;
          top: 0;
          width: .3em;
      }

      &.pre:before,
      &:not(.pre):not(.post):before {
          content: attr(attr-chord);
          white-space: nowrap;
          max-width: 500px;
      }

      &.pre:before {
          left: -.5em;
      }

      &.post {
          .fragment {
              position: relative;
              display: inline-block;

              &:before {
                  content: attr(attr-chord);
                  height: 1em;
                  display: block;
                  margin-top: -1em;
              }
          }

          &:before {
              position: absolute;
              right: 0;
              top: -1em;
          }

          &:after {
              content: attr(attr-pchord);
              position: relative;
              top: -1em;
              margin-left: .2em;
              display: inline-block;
          }
      }
  }
`;
