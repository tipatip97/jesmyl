import { useEffect, useState } from "react";

export default function TimerScreen({
  start,
  pause,
  className,
}: { start: number; pause?: number, className?: string }) {
  const [current, setCurrent] = useState(0);
  const [timeOut, setTimeOut] = useState<any>();
  const [isWaitForStart, setIsWaitForStart] = useState(true);

  let time: string | number = '00:00';
  let hours: string | number = '';
  let milliseconds: string | number = '.';

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
    if (!hours) hours = '';
    else if (hours < 10) hours = '0' + hours;

    let minutes: string | number = date.getUTCMinutes();
    if (minutes < 10) minutes = '0' + minutes;

    let seconds: string | number = date.getUTCSeconds();
    if (seconds < 10) seconds = '0' + seconds;

    if (pause) milliseconds = '.' + ('' + date.getMilliseconds()).padStart(3, '0');

    time = `${minutes}:${seconds}`;
  }

  return (
    <div
      className={
        'timer-screen '
        + (pause ? ' paused ' : '')
        + (start ? ' started ' : '')
        + (className || '')}
    >
      {hours && <span className="text-underline">{hours}:</span>}
      {time}
      <span className="milliseconds-digits">{milliseconds}</span>
    </div>
  );
}
