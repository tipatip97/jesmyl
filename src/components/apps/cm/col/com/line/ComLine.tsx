import { IComLineProps } from "./ComLine.model";

export default function ComLine(props: IComLineProps) {
  const {
    key,
    chordedOrd,
    textLine,
    textLinei,
    orderUnit,
    orderUniti,
    isJoinLetters = true,
    com,
  } = props;

  const lineKey = `line-${key}.${orderUniti}-${textLinei}`;

  if (!chordedOrd)
    return (
      <span>
        {textLine?.split(/ +/).map((word, wordi, worda) => {
          return (
            <span key={`song-line-woc-${word}-${lineKey}.${wordi}`}>
              <span dangerouslySetInnerHTML={{ __html: word }}></span>
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
    <span>
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
            <span key={`text-bit:${lineKey}.${txti}`}>
              <span dangerouslySetInnerHTML={{ __html: txt }} />
              {txti === txta.length - 1 ? null : (
                <>
                  {" "}
                  <wbr />
                </>
              )}
            </span>
          ));

        return [
          firstTextBit ? (
            <span
              key={`song-letterbit-${lineKey}`}
              className={`${isHasPre ? "chorded pre" : ""}`}
              dangerouslySetInnerHTML={{ __html: firstTextBit }}
              attr-chord={chordsLabels[0]}
            />
          ) : null,
          <span
            key={`chord_${lineKey}`}
            attr-chord={chord}
            attr-pchord={pchord}
            className={`chord ${
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
          </span>,
        ];
      })}
    </span>
  );
}
