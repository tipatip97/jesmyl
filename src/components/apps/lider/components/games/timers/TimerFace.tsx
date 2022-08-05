import { HTMLAttributes } from "react";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../../complect/fullscreen-content/useFullscreenContent";
import LeaderGameTimer from "./GameTimer";
import { GameTimerMode } from "./GameTimer.model";
import LeaderGameTimerMaster from "./GameTimerMaster";

export default function LeaderGameTimerFace({
  timer,
  onSelect,
  selectedPosition,
  isTimerOnRedaction,
  ...props
}: {
  timer: LeaderGameTimer;
  onSelect?: () => void;
  selectedPosition?: number;
  isTimerOnRedaction?: boolean;
} & HTMLAttributes<HTMLDivElement>) {
  const { openFullscreenContent } = useFullscreenContent();

  return (
    <div
      {...props}
      className="face-item"
      onClick={() =>
        openFullscreenContent((close) => (
          <LeaderGameTimerMaster close={close} timer={timer} />
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
          name={`${
            timer.mode === GameTimerMode.Messager ? "message-circle" : "clock"
          }-outline`}
        />
      </span>
      <span className="face-title flex between full-width">
        <span className="flex flex-gap">
          {timer.isNew ? (
            <span className="color--7">
              Новый таймер{timer.name ? ` - ${timer.name}` : ""}
            </span>
          ) : (
            <span className={`${timer.isInactive ? "text-strike" : ""}`}>
              {timer.name}
              {timer.fio ? ` (${timer.fio})` : ""}
            </span>
          )}
          {timer.isNew && timer.isStarted && (
            <span className="error-message">(Запущен)</span>
          )}
          {isTimerOnRedaction && (
            <EvaIcon name="edit-outline" className="fade-05" />
          )}
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
