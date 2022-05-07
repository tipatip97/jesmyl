import { IComLineProps } from "../order/Order.model";

export default function ComLine(props: IComLineProps) {
  const {
    chordedOrd,
    textLine,
    textLinei,
    orderUnit,
    orderUniti,
    words,
    isJoinLetters = true,
    com,
    onClick,
    setWordClass,
  } = props;

  if (!chordedOrd)
    return (
      <span className="composition-line" onClick={onClick}>
        {words.map((word, wordi, worda) => {
          return (
            <span
              key={`composition-line-woc-${word}-${wordi}`}
              className={`com-word wordi_${wordi} ${
                (setWordClass && setWordClass({ ...props, wordi })) || ""
              }`}
            >
              <span dangerouslySetInnerHTML={{ __html: word }} />
              {wordi === worda.length - 1 ? null : (
                <>
                  {" "}
                  <wbr />
                </>
              )}
            </span>
          );
        })}
      </span>
    );

  const letters = com.getVowelPositions(textLine);

  let chordIndex = 0;
  const chordsLabels = (com.chordLabels[orderUniti] || [])[textLinei] || [];
  const linePoss = (orderUnit.positions || [])[textLinei] || [];

  let points = letters;

  if (isJoinLetters)
    points = letters.filter(
      (lett, letti) =>
        !letti || linePoss.indexOf(letti) >= 0 || / /.test(textLine[lett])
    );

  const isHasPre = linePoss.indexOf(-1) > -1;
  const isHasPost = linePoss.indexOf(-2) > -1;

  return (
    <span className="composition-line" onClick={onClick}>
      {points.map((index, indexi, indexa) => {
        let isLast = indexi === indexa.length - 1;
        let isFirst = indexi === 0;
        let firstTextBit = isFirst ? textLine.slice(0, index) : "";
        let chordedFirst = isFirst && isHasPre && firstTextBit === "";
        let chordedLast = isLast && isHasPost;
        let chorded = linePoss.indexOf(letters.indexOf(index)) > -1;
        let chordLabel = chorded
          ? chordsLabels[chordIndex++ - (isHasPre ? -1 : 0)] || ""
          : "";

        const chord = chordedFirst ? chordsLabels[0] : chordLabel;
        const pchord =
          isLast && isHasPost ? chordsLabels[chordsLabels.length - 1] : null;

        let baseTextBitOriginal = textLine.slice(index, indexa[indexi + 1]);
        const isSpacedWord = / /.test(baseTextBitOriginal);
        const origBits = baseTextBitOriginal
          .split(/ +/g)
          .map((txt, txti, txta) => (
            <span key={`text-bit:${txti}`}>
              <span dangerouslySetInnerHTML={{ __html: txt }} />
              {txti === txta.length - 1 ? null : (
                <>
                  {" "}
                  <wbr />
                </>
              )}
            </span>
          ));

        return (
          <span key={`composition-line-${indexi}`}>
            {firstTextBit ? (
              <span
                className={`${isHasPre ? "chorded pre" : ""}`}
                dangerouslySetInnerHTML={{ __html: firstTextBit }}
                attr-chord={chordsLabels[0]}
              />
            ) : null}
            <span
              attr-chord={chord}
              attr-pchord={pchord}
              className={`com-letter letteri_${indexi} ${
                (chorded || chordedFirst || chordedLast) && "chorded"
              } ${chordedLast && "post"} ${chordedFirst && "pre"} ${
                isSpacedWord && "spaced-word"
              } ${chorded && isLast && isHasPost && "twice"}`}
            >
              {chorded || chordedLast ? (
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
          </span>
        );
      })}
    </span>
  );
}
