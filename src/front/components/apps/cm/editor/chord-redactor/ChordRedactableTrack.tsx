import React from "react";
import Dropdown from "../../../../../complect/dropdown/Dropdown";
import EvaButton from "../../../../../complect/eva-icon/EvaButton";
import { ChordTrack } from "../../col/com/chord-card/ChordCard.model";
import ChordCardTracked from "../../col/com/chord-card/ChordCardTracked";

const ladLine = Array(20).fill(0);

export default function ChordRedactableTrack({ redactableChord, modifyTrack }: { redactableChord: ChordTrack, modifyTrack: (map: (track: ChordTrack) => void) => void }) {

    return <>
        <Dropdown
            placeholder="Начальный лад"
            className="half-width"
            id={Math.trunc(redactableChord[0])}
            items={ladLine.map((_, lad) => ({
                title: `Лад ${lad + 1}`,
                id: lad,
            }))}
            onSelect={({ id }) => {
                modifyTrack((track) => {
                    track[0] = +`${id}.${('' + track[0]).split('.')[1] || ''}`;
                });
            }}
        />
        <div className="flex flex-gap">
            <ChordCardTracked
                track={redactableChord}
                bottomPadding={20}
                additions={(lads, strings, stringsCount, leftMargin, betweenStr, betweenLad, track, mutes, baseLad) => {
                    const ladHeight = stringsCount * betweenStr;

                    return <>{
                        lads.map((lad) => {
                            const x1 = leftMargin + (lad * betweenLad - betweenLad / 2);
                            const y1 = ladHeight;
                            const wt = betweenLad / 5;
                            const x2 = x1 - wt / 2;
                            const y2 = y1 + wt;
                            const x3 = x1 + wt / 2;
                            const position = track[lad] || 0;
                            const isBare = position < 0;

                            return <polygon
                                key={`chord-bare-adder-${lad}`}
                                className={`chord-bare-adder ${isBare ? 'fill' : ''}`}
                                points={`${x1},${y1} ${x2},${y2} ${x3},${y2}`}
                                onClick={() => {
                                    modifyTrack((track) => {
                                        if (isBare) track[lad] = position === -1 ? 0 : -position;
                                        else {
                                            if (position > 100) {
                                                const line = ('' + position).split('').sort();
                                                track[lad] = -`${line[0]}${line.at(-1)}`;
                                            } else if (position) track[lad] = -position;
                                            else track[lad] = -1;
                                        }
                                    });
                                }}
                            />
                        })}
                        {strings.map((strNum, strNumi) => {
                            const y = strNum * betweenStr - betweenStr / 2;

                            return <React.Fragment key={`strin-${strNum}`}>
                                <text
                                    className="mute-string-indicator button"
                                    x={leftMargin - 5}
                                    y={y + 4}
                                    onClick={() => {
                                        modifyTrack((track) => {
                                            if (mutes.includes(strNum)) {
                                                const newMutes = mutes.filter((num) => num !== strNum);
                                                track[0] = +`${baseLad}.${newMutes.sort().join('')}`;
                                            } else {
                                                return track.map((trace, tracei) => {
                                                    if (tracei === 0) return +`${baseLad}.${mutes.concat(strNum).sort().join('')}`;
                                                    if (!trace || trace < 0) return trace;
                                                    const points = ('' + trace).split('');
                                                    const strNumStr = '' + strNum;

                                                    if (points.includes(strNumStr)) {
                                                        return +points.filter((point) => point !== strNumStr).join('');
                                                    } else return trace;
                                                });
                                            }
                                        });
                                    }}
                                >&times;</text>
                                {lads.map(ladNum => {
                                    const lad = track[ladNum] || 0;

                                    const strNumInLad = ('' + lad).indexOf('' + strNum);
                                    const isPointed = lad > 0 && strNumInLad > -1;
                                    const x = leftMargin + (ladNum * betweenLad - betweenLad / 2);

                                    return <polyline
                                        key={`chord-shadow-point-${ladNum}-${strNumi}`}
                                        className='chord-point shadow'
                                        points={`${x},${y} ${x},${y}`}
                                        onClick={() => {
                                            modifyTrack((track) => {
                                                if (isPointed) {
                                                    const digits = ('' + lad).split('');
                                                    digits.splice(strNumInLad, 1);
                                                    if (digits.length === 0) track[ladNum] = 0;
                                                    else track[ladNum] = +digits.join('');
                                                } else {
                                                    if (lad === 0 || lad == null || lad < 1) track[ladNum] = strNum;
                                                    else track[ladNum] = +('' + track[ladNum]).split('').concat('' + strNum).sort().join('');

                                                    if (mutes.includes(strNum)) {
                                                        const newMutes = mutes.filter((num) => num !== strNum);
                                                        track[0] = (+`${baseLad}.${newMutes.sort().join('')}`);
                                                    }
                                                }
                                            });
                                        }}
                                    />;
                                })}
                            </React.Fragment>;
                        })}</>;
                }} />
            {redactableChord.length < 6 && <EvaButton
                name="plus-circle"
                onClick={() => modifyTrack((track) => track.push(0))}
            />}
        </div>
    </>;
}