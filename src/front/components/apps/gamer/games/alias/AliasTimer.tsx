
import { useLayoutEffect, useState } from "react";
import useAliasState from "./useAliasState";

const takeSeconds = (time: number, start: number) => time - Math.floor((Date.now() - start) / 1000);

export default function GamerAliasTimer({ onTimeOut }: { onTimeOut?: () => Promise<unknown> | und }) {
    const [seconds, setSeconds] = useState<number | null>(null);
    const { state } = useAliasState();
    const start = state?.startTs;
    const time = state?.roundTime;

    useLayoutEffect(() => {
        if (!start || !time) return;

        if (seconds === null) {
            setSeconds(takeSeconds(time, start));
            return;
        }

        if (seconds > 0)
            setTimeout(() => {
                setSeconds(takeSeconds(time, start));
            }, 1000);
        else onTimeOut?.();

    }, [seconds, start, time, onTimeOut]);

    if (!start || (seconds && seconds < 0)) return null;

    return <div className="timeout-timer-screen">{seconds}</div>;
}