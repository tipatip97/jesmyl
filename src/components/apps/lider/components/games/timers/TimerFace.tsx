import { HTMLAttributes } from "react";
import EvaIcon from "../../../../../../complect/eva-icon/EvaIcon";
import useFullscreenContent from "../../../../../../complect/fullscreen-content/useFullscreenContent";
import GameTimer from "./GameTimer";
import GameTimerMaster from "./GameTimerMaster";

export default function TimerFace({
  timer,
  onSelect,
  isSelected,
  ...props
}: {
  timer: GameTimer;
  onSelect?: () => void;
  isSelected?: boolean;
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
        className={`face-logo ${isSelected ? "selected" : ""}`}
        onClick={(event) => {
          event.stopPropagation();
          onSelect?.();
        }}
      >
        <EvaIcon name="clock-outline" />
      </span>
      <span className="face-title">
        {timer.isNewTimer ? (
          <span className="color--7">
            Новый таймер{timer.name ? ` - ${timer.name}` : ""}
          </span>
        ) : (
          timer.name
        )}{" "}
        {timer.isNewTimer && timer.isStarted && (
          <span className="error-message">(Запущен)</span>
        )}
      </span>
    </div>
  );
}
