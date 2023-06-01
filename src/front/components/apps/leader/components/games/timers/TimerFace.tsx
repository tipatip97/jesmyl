import { ReactNode } from "react";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../../complect/fullscreen-content/useFullscreenContent";
import { TeamGameImportable } from "../../../Leader.model";
import { LeaderCleans } from "../../LeaderCleans";
import { GameTimerMode } from "./GameTimer.model";
import LeaderGameTimerMaster from "./GameTimerMaster";
import useGameTimer from "./useGameTimer";

export default function LeaderGameTimerFace({
  timerw,
  onSelect,
  selectedPosition,
  namePostfix,
  game,
}: {
  timerw: number,
  onSelect?: () => void,
  selectedPosition?: number,
  namePostfix?: ReactNode,
  game: TeamGameImportable,
}) {
  const { openFullscreenContent } = useFullscreenContent();
  const { timer } = useGameTimer(game, timerw);

  if (!timer) return null;

  return (
    <div
      className="face-item"
      onClick={() =>
        openFullscreenContent((close) => (
          <LeaderGameTimerMaster game={game} close={close} timer={timer} />
        ))
      }
    >
      <span
        className={`face-logo ${selectedPosition ? "selected" : ""}`}
        selected-position={selectedPosition || null}
        onClick={(event) => {
          event.stopPropagation();
          onSelect?.();
        }}
      >
        <EvaIcon
          name={LeaderCleans.getTimerConfigurableField('mode', timer, game) === GameTimerMode.Messager ? "message-circle-outline" : "clock-outline"}
        />
      </span>
      <span className="face-title flex between full-width">
        <span className="flex flex-gap">
          {!timer.w ? (
            <span className="color--7">
              Новый таймер{timer.name ? ` - ${timer.name}` : ""}
            </span>
          ) : (
            <span className={`${timer.isInactive ? "text-strike" : ""}`}>
              {timer.name}
              {timer.fio ? ` (${timer.fio})` : ""}
            </span>
          )}
          {namePostfix}
        </span>
        {!!timer.comments?.length && (
          <div>
            <EvaIcon name="message-square-outline" />
            <sub>{timer.comments.length}</sub>
          </div>
        )}
      </span>
    </div>
  );
}
