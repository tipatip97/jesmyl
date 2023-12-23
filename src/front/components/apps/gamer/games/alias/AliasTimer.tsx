import { useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useAliasRoomState } from './hooks/state';

const takeSeconds = (time: number, start: number) => time - Math.floor((Date.now() - start) / 1000);

export default function GamerAliasTimer({ onTimeOut }: { onTimeOut: (is: true) => void }) {
  const [seconds, setSeconds] = useState<number | null>(null);
  const state = useAliasRoomState();
  const start = state?.startTs;
  const time = state?.roundTime;
  const onTimeOutRef = useRef(onTimeOut);
  onTimeOutRef.current = onTimeOut;

  useLayoutEffect(() => {
    if (!start || !time) return;

    if (seconds === null) {
      setSeconds(takeSeconds(time, start));
      return;
    }

    if (seconds > 0) {
      return setTimeoutEffect(() => setSeconds(takeSeconds(time, start)), 1000);
    } else {
      onTimeOutRef.current(true);
    }
  }, [seconds, start, time]);

  if (!start || (seconds && seconds < 0)) return null;

  return <Timer>{+seconds!}</Timer>;
}

const Timer = styled.div<{ children: number }>`
  position: absolute;
  top: 0;
  right: 0;
  transition: width, font-size, color;
  transition-duration: 0.5s;
  font-weight: bold;
  text-align: center;
  width: 3em;

  ${props =>
    props.children &&
    props.children < 6 &&
    css`
      font-size: 1.3em;
      color: var(--color--ko);
      count: ${props.children};
    `}
`;
