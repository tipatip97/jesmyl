import { HTMLAttributes } from "react";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../../complect/fullscreen-content/useFullscreenContent";
import GameTimer from "./GameTimer";
import GameTimerMaster from "./GameTimerMaster";

export default function TimerFace({
  timer,
  onSelect,
  selectedPosition,
  ...props
}: {
  timer: GameTimer;
  onSelect?: () => void;
  selectedPosition?: number;
} & HTMLAttributes<HTMLDivElement>) {
  const { openFullscreenContent } = useFullscreenContent();

  return (
    <div
      {...props}
      className="face-item"
      onClick={() =>
        openFullscreenContent((close) => (
          <GameTimerMaster close={close} timer={timer} />
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
        <EvaIcon name="clock-outline" />
      </span>
      <span className="face-title flex between full-width">
        {timer.isNewTimer ? (
          <span className="color--7">
            Новый таймер{timer.name ? ` - ${timer.name}` : ""}
          </span>
        ) : (
          <span className={`${timer.isInactive ? "text-strike" : ""}`}>
            {timer.name}
            {timer.fio ? ` (${timer.fio})` : ""}
          </span>
        )}{" "}
        {timer.isNewTimer && timer.isStarted && (
          <span className="error-message">(Запущен)</span>
        )}
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
