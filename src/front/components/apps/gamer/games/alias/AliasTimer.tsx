
import { useLayoutEffect, useState } from "react";
import { useAliasState } from "./useAliasState";
import styled from "styled-components";

const takeSeconds = (time: number, start: number) => time - Math.floor((Date.now() - start) / 1000);

export default function GamerAliasTimer() {
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
            setTimeout(() => setSeconds(takeSeconds(time, start)), 1000);

    }, [seconds, start, time]);

    if (!start || (seconds && seconds < 0)) return null;

    return <Timer>{seconds}</Timer>;
}

const Timer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 3em;
    font-weight: bold;
    text-align: center;
`;
