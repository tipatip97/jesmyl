import mylib from "../../../../../../complect/my-lib/MyLib";
import { IComLineProps } from "./ComLine.model";

export function TheComLine(props: IComLineProps) {
  const {
    key,
    chordedOrd,
    textLine,
    textLinei,
    textLines,
    orderUnit,
    orderUniti,
    onLetterClick,
    onWordClick,
    setWordClass,
    isJoinLetters = true,
    setLineClassName,
    setChorded,
    ccom,
  } = props;

  const lineKey = `line-${key}.${orderUniti}-${textLinei}`;

  if (!chordedOrd)
    return (
      <span key={`song-woc-part-${lineKey}`}>
        {textLine?.split(/ +/).map((word, wordi, worda) => {
          const actionProps = {
            ord: orderUnit,
            linei: textLinei,
            wordi,
            word,
            words: worda.length,
            lines: textLines,
          };
          return (
            <span key={`song-line-woc-${word}-${lineKey}.${wordi}`}>
              <span
                key={`song-line-withc-${word}-${lineKey}.${wordi}`}
                className={mylib.func(setWordClass).call(actionProps)}
                onClick={
                  mylib.isFunc(onWordClick)
                    ? (event) => onWordClick(actionProps, event as never)
                    : undefined
                }
                dangerouslySetInnerHTML={{ __html: word }}
              ></span>
              {wordi === worda.length - 1
                ? null
                : [
                    [
                      " ",
                      <wbr key={`song-line-woc-wbr-${lineKey}.${wordi}`}></wbr>,
                    ],
                  ]}
            </span>
          );
        })}
      </span>
    );

  const letters = ccom.getVowelPositions(textLine);

  let chordIndex = 0;
  const chordsLabels = (ccom.chordLabels[orderUniti] || [])[textLinei] || [];
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
    <span key={`song-line-wrapper-${lineKey}`}>
      {points.map((index, indexi, indexa) => {
        const indexKey = `${lineKey}-${indexi}`;
        let isLast = indexi === indexa.length - 1;
        let isFirst = indexi === 0;
        let firstTextBit = isFirst ? textLine.slice(0, index) : "";
        let chordedFirst = isFirst && isHasPre && firstTextBit === "";
        let chordedLast = isLast && isHasPost;
        let chorded = setChorded
          ? setChorded(indexi)
          : linePoss.indexOf(letters.indexOf(index)) > -1;
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
              <span
                key={`text-bvit:${lineKey}.${txti}`}
                dangerouslySetInnerHTML={{ __html: txt }}
              />
              {txti === txta.length - 1
                ? null
                : [" ", <wbr key={`song-line-wbr-${indexKey}.${txti}`} />]}
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
            id={`chord_${lineKey}`}
            attr-chord={chord}
            attr-pchord={pchord}
            className={[
              "chord",
              (chorded || chordedFirst || chordedLast) && "chorded",
              chordedLast && "post",
              chordedFirst && "pre",
              isSpacedWord && "spaced-word",
              chorded && isLast && isHasPost && "twice",
              mylib.func(setLineClassName).call(chorded),
            ].join(" ")}
            onClick={
              !onLetterClick || (isHasPre && isFirst && !chorded)
                ? undefined
                : () => onLetterClick(indexi)
            }
          >
            {chorded || chordedLast ? (
              <span
                key={`fragment-${lineKey}-${indexi}`}
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
