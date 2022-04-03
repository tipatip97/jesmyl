import { CSSProperties, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EvaIcon } from "../../../../../../complect/Eva";
import { RootState } from "../../../../../../store";
import { changeRollMode, changeRollModeMarks } from "../../../Cm.store";

export function TheComPlayerSignaler() {
  const closingTime = 1500;

  const dispatch = useDispatch();

  const [closing, setClosing] = useState(true);
  const [closingTimeout, setClosingTimeout] = useState<any | null>(null);

  const rollMode = useSelector((state: RootState) => state.cm.rollMode);

  return (
    <div
      key="com-player-signaler-panel"
      className={`com-player-signaler-panel ${closing ? "closing" : ""} ${
        rollMode || "stop"
      }-mode`}
    >
      <div className="speed-panel">
        {["plus", "", "minus"].map((sign, signi) => {
          const isActive = false; //g.actions.com.isSpeedRollKfSetterActive(signi);

          return (
            <div
              key={`${sign}-sign of speed`}
              className="sign-digit"
              onClick={(event) => {
                event.stopPropagation();
                if (!isActive || !sign) return;
                // g.actions.com.updateSpeedRollKf(signi ? 1 : -1);
                // this.fu();
              }}
              onTouchStart={(event) => {
                event.stopPropagation();
              }}
            >
              {sign ? (
                <EvaIcon name={`${sign}-square${isActive ? "" : "-outline"}`} />
              ) : (
                '?'//g.actions.com.speedRollKfLabel
              )}
            </div>
          );
        })}
      </div>
      <div
        key="com-player-signaler"
        className={`com-player-signaler ${closing ? "closing" : ""}`}
        style={{
          "--slosing-time-kf": closingTime,
        } as CSSProperties}
        onClick={(event) => {
          event.stopPropagation();
        }}
        onTouchStart={() => {
          setClosing(true);
          clearTimeout(closingTimeout);
          setClosingTimeout(
            setTimeout(() => {
              dispatch(changeRollMode(null));
              dispatch(changeRollModeMarks(false));
              setClosing(false);
              // g.updateFlexFontSize(400);
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
