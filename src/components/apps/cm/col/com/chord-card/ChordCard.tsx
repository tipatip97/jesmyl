import { useState } from "react";
import { ChordCardProps } from "./ChordCard.model";
import { useChords } from "./hooks";

export default function ChordCard(props: ChordCardProps) {
  const stringsCount = 6;
  const { chords } = useChords();

  const chordName = props.chordName || `?`;
  const chordLabel = props.chordLabel;
  const [track] = useState(chords[chordName] || [0]);
  const betweenStr = 20 + track[0] * 0.3;
  const betweenLad = 80 - track[0] * 0.7;
  const isFLad = track[0] === 0;

  const isRedaction = false; //props.isRedaction;

  const lads: number[] = [];

  for (let i = 1; i <= (track.length > 4 ? track.length - 1 : 3); i++)
    lads.push(i);

  const stringLength = betweenLad * lads.length;

  const strings: number[] = [];
  for (let i = 1; i <= stringsCount; i++) strings.push(i);

  // const onPointClick = (poss: number | number[], i: number, pos: number) => {
  //   return !props.isRedaction
  //     ? undefined
  //     : () => {
  //         const prev = track.slice(0);
  //         if (mylib.isNum(poss)) {
  //           track[i] = 0;
  //         } else {
  //           track[i].splice(track[i].indexOf(pos), 1);
  //           if (track[i].length === 0) track[i] = 0;
  //           else if (track[i].length === 1) track[i] = track[i][0];
  //         }
  //         this.fu(prev);
  //       };
  // };

  // const buttons = () => {
  //   const ladHeight = stringsCount * betweenStr;

  //   return !props.isRedaction
  //     ? null
  //     : [
  //       lads.map((lad) => {
  //         const x1 = lad * betweenLad - betweenLad / 2;
  //         const y1 = ladHeight;
  //         const wt = betweenLad / 5;
  //         const x2 = x1 - wt / 2;
  //         const y2 = y1 + wt;
  //         const x3 = x1 + wt / 2;
  //         const isBare = !~track[lad];
  //         const color = isBare ? 'white' : 'red';

  //         return <polygon
  //           key={`chord-bare-adder-${lad}:${chordName}`}
  //           className={'chord-bare-adder'}
  //           points={`${x1},${y1} ${x2},${y2} ${x3},${y2}`}
  //           style={{
  //             fill: color,
  //             stroke: color
  //           }}
  //           onClick={() => {
  //             const prev = track.slice(0);
  //             track[lad] = isBare ? 0 : -1;
  //             this.fu(prev);
  //           }}
  //         />
  //       }),
  //       strings.map((strNum, strNumi) => {
  //         return lads.map(ladNum => {
  //           const lad = track[ladNum];

  //           if (lad == null || !~lad || mylib.isNum(lad) ? lad === strNum : ~lad.indexOf(strNum)) return null;
  //           const x = ladNum * betweenLad - betweenLad / 2;
  //           const y = strNum * betweenStr - betweenStr / 2;

  //           return ce('polyline', {
  //             key: `chord-shadow-point-${ladNum}-${strNumi}:${chordName}`,
  //             className: 'chord-point shadow',
  //             points: `${x},${y} ${x},${y}`,
  //             onClick: async () => {
  //               const prev = track.slice(0);

  //               if (track[ladNum + 1] == null) {
  //                 track[ladNum + 1] = 0;
  //               }

  //               if (lad == null || lad < 1) track[ladNum] = strNum;
  //               else if (mylib.isNum(lad)) track[ladNum] = lad === 0 ? strNum : [track[ladNum], strNum];
  //               else {
  //                 lad.push(strNum);
  //                 lad.sort((a, b) => a - b);
  //               }
  //               this.fu(prev);
  //             }
  //           });
  //         });
  //       })
  //     ];
  // }

  const getPoints = (poss: number | number[], i: number) => {
    const x = i * betweenLad - betweenLad / 2;
    if (!~poss)
      return (
        <polyline
          key={`point-${poss}...${i}`}
          className="chord-point"
          points={`${x},${betweenStr / 2} ${x},${
            betweenStr * stringsCount - betweenStr / 2
          }`}
        />
      );

    const points: JSX.Element[] = [];

    [poss].flat().forEach((pos) => {
      const y = betweenStr * pos - betweenStr / 2;
      points.push(
        <polyline
          key={`chord-point-${pos}`}
          className="chord-point"
          points={`${x},${y} ${x},${y}`}
          // onClick={onPointClick(poss, i, pos)}
        />
      );
    });
    return points;
  };

  // const onLabelClick = !props.isRedaction
  //   ? undefined
  //   : async () => {
  //       const prev = track.slice(0);
  //       const lad = await modalService.prompt("Стартовый лад:", track[0] + 1);
  //       if (lad == null) return;
  //       track[0] = (Math.abs(parseInt(lad)) || 1) - 1;
  //       this.fu(prev);
  //     };

  return (
    <>
      <span
        key={`first-lad-counter-${chordName}`}
        className="first-lad-counter"
        // onClick={onLabelClick}
      >
        {(chordLabel || chordName) + (track[0] ? ` [${track[0] + 1}]` : "")}
      </span>
      <svg
        key={`chord-board:${chordName}`}
        className="chord-board"
        style={{
          width: stringLength + 3.5,
          height:
            betweenStr * stringsCount + (isRedaction ? betweenLad / 5 + 3 : 0),
        }}
      >
        [
        <polyline
          // zero line
          key={`zero-line.${chordName}`}
          points={`2,0 2,${betweenStr * stringsCount}`}
          className={!isFLad ? "chord-lad" : "chord-zero-line"}
        />
        {lads.map((ladPos) => {
          const x = betweenLad * ladPos;

          return (
            <polyline
              points={`${x},0 ${x},${betweenStr * stringsCount}`}
              className="chord-lad"
              key={`chord-lad_${ladPos}:${chordName}`}
            />
          );
        })}
        {strings.map((stringPos) => {
          const y = betweenStr * stringPos - betweenStr / 2;

          return (
            <polyline
              points={`0,${y} ${stringLength + 3.5},${y}`}
              key={`chord-string-${stringPos}:${chordName}`}
              className="chord-string"
              strokeWidth={0.5 + stringPos / 5}
            />
          );
        })}
        {track.map((stage, stagei) =>
          stagei === 0 || !stage ? null : getPoints(stage, stagei)
        )}
        {/* {buttons} */}
      </svg>
    </>
  );
}
