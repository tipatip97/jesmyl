import { useState } from "react";
import mylib from "../../../../../complect/my-lib/MyLib";
import QRCode from "../../../../../complect/qr-code/QRCode";
import { initialTeamPoints } from "./complect";
import "./Templates.scss";

const fades = [2, 3, 4, 5, 6, 7, 8, 9];

export default function QRQuest() {
  const [fade, setFade] = useState(3);

  return (
    <div className="qr-quest print-template-page full-container for-print break-inside-avoid">
      {initialTeamPoints.map(({ text, color }) => (
        <div
          key={color}
          className="qr-code-wrapper relative flex center full-width full-height for-print break-inside-avoid"
          onClick={() => setFade(mylib.findNext(fades, fade))}
        >
          <div className="flex center full-width margin-big-gap relative">
            <QRCode className="qr-code full-width" text={text} />
            <div
              className={`absolute full-fill fade-0${fade}`}
              style={{ background: color }}
            />
          </div>
          <div className="absolute pos-top pos-left margin-big-gap">{fade}</div>
        </div>
      ))}
    </div>
  );
}
