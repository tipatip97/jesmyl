import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

export const SpyRoomGameTimer = ({ roundTm = 480, startMs }: { startMs?: number; roundTm?: number }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(roundTm);

  useEffect(() => {
    if (startMs === undefined) return;

    const interval = setInterval(() => {
      const time = roundTm - Math.floor((Date.now() - startMs) / 1000);
      setSecondsRemaining(time);
      if (time < 1) clearInterval(interval);
    }, 500);

    return () => clearInterval(interval);
  }, [roundTm, startMs]);

  if (!startMs || secondsRemaining < 1) return <Timer>Время вышло</Timer>;

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = ('' + (secondsRemaining - minutes * 60)).padStart(2, '0');

  return (
    <Timer $time={secondsRemaining}>
      {minutes}:{seconds}
    </Timer>
  );
};

const Timer = styled.div<{ $time?: number }>`
  transform-origin: bottom;
  transition: scale, color;
  transition-duration: 0.3s;

  ${props =>
    (!props.$time || props.$time < 20) &&
    css`
      scale: ${props.$time ? '1.3' : '1.5'};
      color: var(--color--ko);
      font-weight: bold;
    `}
`;
