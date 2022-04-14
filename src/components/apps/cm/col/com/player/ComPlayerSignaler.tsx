import { CSSProperties, useState } from "react";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useRollMode from "../../../base/useRoll";

export default function ComPlayerSignaler() {
  const closingTime = 1500;

  const [closing, setClosing] = useState(false);
  const [closingTimeout, setClosingTimeout] = useState<any | null>(null);

  const {
    rollMode,
    updateSpeedRollKf,
    setRollSpeedScreenContainer,
    switchRollModeMarks,
    switchRollMode,
  } = useRollMode();

  if (!rollMode) return null;

  return (
    <div
      className={`com-player-signaler-panel ${closing ? "closing" : ""} ${
        rollMode || "stop"
      }-mode`}
    >
      <div className="speed-panel">
        {(["plus", "", "minus"] as ["plus", "", "minus"]).map((sign, signi) => {
          return (
            <div
              key={`${sign}-sign of speed`}
              className="sign-digit"
              onClick={(event) => {
                event.stopPropagation();
                if (!sign) return;
                updateSpeedRollKf(signi ? -1 : 1);
              }}
              onTouchStart={(event) => {
                event.stopPropagation();
              }}
              ref={
                signi === 1
                  ? (element) => element && setRollSpeedScreenContainer(element)
                  : null
              }
            >
              {sign ? <EvaIcon name={`${sign}-square`} /> : "1.0"}
            </div>
          );
        })}
      </div>
      <div
        className={`com-player-signaler ${closing ? "closing" : ""}`}
        style={
          {
            "--slosing-time-kf": closingTime,
          } as CSSProperties
        }
        onClick={(event) => {
          event.stopPropagation();
        }}
        onTouchStart={() => {
          setClosing(true);
          clearTimeout(closingTimeout);
          setClosingTimeout(
            setTimeout(() => {
              switchRollMode(null);
              switchRollModeMarks(false);
              setClosing(false);
            }, closingTime)
          );
        }}
        onTouchEnd={() => {
          setClosing(false);
          clearTimeout(closingTimeout);
        }}
      >
        <EvaIcon name="music-outline" />
      </div>
    </div>
  );
}
