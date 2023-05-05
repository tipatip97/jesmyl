import React from "react";
import { IComLineProps } from "../order/Order.model";

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
    <div className="composition-line" onClick={props.onClick}>
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
    </div>
  );
}
