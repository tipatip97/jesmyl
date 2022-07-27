import { HTMLAttributes, useEffect, useState } from "react";
import "./GameTimer.scss";

export default function GameTimerScreen({
  start,
  pause,
  ...props
}: { start: number; pause?: number } & HTMLAttributes<HTMLDivElement>) {
  const [current, setCurrent] = useState(0);
  const [timeOut, setTimeOut] = useState<any>();
  const [isWaitForStart, setIsWaitForStart] = useState(true);

  let hours: string | number = "";
  let minutes: string | number = "00";
  let seconds: string | number = "00";
  let milliseconds: string | number = "";

  useEffect(() => setIsWaitForStart(true), [start, pause]);

  useEffect(() => {
    if (start) {
      const startTimer = () => {
        setCurrent(Date.now() - start);
        setTimeOut(setTimeout(startTimer, 1000));
      };

      if (!pause && isWaitForStart) {
        setIsWaitForStart(false);
        startTimer();
      }
    }
    return () => clearTimeout(timeOut);
  }, [current, start, timeOut, isWaitForStart, pause]);

  if (start || pause) {
    const date = new Date(pause ? pause - start : current);

    hours = date.getUTCHours();
    if (!hours) hours = "";
    else if (hours < 10) hours = "0" + hours;

    minutes = date.getUTCMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    seconds = date.getUTCSeconds();
    if (seconds < 10) seconds = "0" + seconds;
    if (pause) milliseconds = ("" + date.getMilliseconds()).padStart(3, "0");
  }

  return (
    <div
      {...props}
      className={`timer-screen ${start ? (pause ? "paused" : "started") : ""} ${
        props.className || ""
      }`}
    >
      {hours ? (
        <>
          <span className="text-underline">{hours}</span>:
        </>
      ) : (
        ""
      )}
      {minutes}:{seconds}
      <span className="milliseconds-digits">.{milliseconds}</span>
    </div>
  );
}
