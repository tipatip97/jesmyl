import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { isTouchDevice } from '../device-differences';
import KeyboardInput from '../keyboard/KeyboardInput';
import { IconMinusSignCircleBulkRounded } from '../the-icon/icons/minus-sign-circle';
import { IconPauseSolidRounded } from '../the-icon/icons/pause';
import { IconPlaySolidRounded } from '../the-icon/icons/play';
import { IconPlusSignCircleBulkRounded } from '../the-icon/icons/plus-sign-circle';
import { useActualRef } from '../useActualRef';

interface Props {
  meterSize: 3 | 4 | und;
  bpm?: number;
}

const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
var context = new AudioContext();

let lastTs: number;

export const Metronome = ({ meterSize = 4, bpm = 120 }: Props) => {
  const [userBpm, setUserBpm] = useState(bpm);
  const [userMeterSize, setUserMeterSize] = useState(meterSize);
  const currentDotMemo = useMemo(() => ({ current: 0 }), []);
  const [accentes, setAccentes] = useState('1000');
  const actualUserMeterSize = useActualRef(userMeterSize);
  const actualAccentes = useActualRef(accentes);
  const actualUserBpm = useActualRef(userBpm);

  const [isPlay, setIsPlay] = useState(false);

  const playButtonRef = useRef<HTMLDivElement>(null);
  const meterDotsRef = useRef<HTMLDivElement>(null);
  const secondaryRangeRef = useRef<HTMLInputElement>(null);
  const accentRangeRef = useRef<HTMLInputElement>(null);

  useEffect(() => setUserMeterSize(meterSize), [meterSize]);
  useEffect(() => setUserBpm(bpm), [bpm]);

  const touchBpm = () => {
    const delta = Date.now() - (lastTs ?? Date.now());
    lastTs = Date.now();
    if (delta < 0 || delta > 12000) return;
    setUserBpm(Math.ceil(60_000 / delta));
  };

  useEffect(() => {
    if (
      playButtonRef.current === null ||
      meterDotsRef.current === null ||
      secondaryRangeRef.current === null ||
      accentRangeRef.current === null
    )
      return;
    const playButtonNode = playButtonRef.current;
    const meterDotsNode = meterDotsRef.current;
    const accentRangeNode = accentRangeRef.current;
    const secondaryRangeNode = secondaryRangeRef.current;

    const setIsCurrentDot = () => {
      meterDotsNode.children[currentDotMemo.current]?.classList.toggle('current');
      currentDotMemo.current = (currentDotMemo.current + 1) % actualUserMeterSize.current;
    };

    let timer: TimeOut;
    let curTime = context.currentTime;
    let accentPitch = +accentRangeNode.value;
    let secondaryPitch = +secondaryRangeNode.value;

    const schedule = () => {
      if (curTime < context.currentTime + 0.1) {
        var note = context.createOscillator();

        if (actualAccentes.current[currentDotMemo.current] === '1') note.frequency.value = accentPitch;
        else note.frequency.value = secondaryPitch;

        note.connect(context.destination);

        note.start(curTime);
        note.stop(curTime + 0.05);

        curTime += 60 / actualUserBpm.current;

        setIsCurrentDot();
      }
      timer = setTimeout(schedule, 0.1);
    };

    if (isPlay) schedule();
    else currentDotMemo.current = 0;

    const onClick = () => setIsPlay(!isPlay);
    playButtonNode.addEventListener('click', onClick);

    const onSecondaryRangeChange = ((event: ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget) secondaryPitch = +event.currentTarget.value;
    }) as any;
    secondaryRangeNode.addEventListener('input', onSecondaryRangeChange);

    const onAccentRangeChange = ((event: ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget) accentPitch = +event.currentTarget.value;
    }) as any;
    accentRangeNode.addEventListener('input', onAccentRangeChange);

    return () => {
      clearTimeout(timer);
      playButtonNode.removeEventListener('click', onClick);
      accentRangeNode.removeEventListener('input', onSecondaryRangeChange);
      secondaryRangeNode.removeEventListener('input', onAccentRangeChange);
    };
  }, [actualAccentes, actualUserBpm, actualUserMeterSize, currentDotMemo, isPlay]);

  return (
    <div className="com-metronome flex around full-width">
      <div
        ref={playButtonRef}
        className="pointer"
      >
        {isPlay ? <IconPauseSolidRounded /> : <IconPlaySolidRounded />}
      </div>
      <StyledMeterDots
        ref={meterDotsRef}
        className="flex flex-gap"
      >
        {Array(userMeterSize)
          .fill(1)
          .map((_und, doti) => {
            return (
              <i
                key={doti}
                className={`strong-size${accentes[doti] === '1' ? ' accent' : ''}`}
                onClick={() =>
                  setAccentes(
                    accentes
                      .split('')
                      .map((num, numi) => (numi === doti ? (num === '1' ? '0' : '1') : num))
                      .join(''),
                  )
                }
              />
            );
          })}
      </StyledMeterDots>
      <div onClick={() => setUserMeterSize(userMeterSize === 3 ? 4 : 3)}>{userMeterSize}/4</div>

      <label className="flex column center flex-gap">
        <IconMinusSignCircleBulkRounded
          className="pointer"
          onClick={() => setUserBpm(prev => prev - 1)}
        />
        <StyledBpmInput
          type="number"
          withoutCloseButton
          value={'' + userBpm}
          onChange={value => setUserBpm(+value)}
        />
        <IconPlusSignCircleBulkRounded
          className="pointer"
          onClick={() => setUserBpm(prev => prev + 1)}
        />
      </label>
      <StyledTapButton
        className="strong-size"
        onMouseDown={isTouchDevice ? undefined : touchBpm}
        onTouchStart={isTouchDevice ? touchBpm : undefined}
      />
      <div className="flex column">
        <input
          ref={accentRangeRef}
          type="range"
          min="0"
          max="500"
          defaultValue="380"
        />
        <input
          ref={secondaryRangeRef}
          type="range"
          min="0"
          max="500"
          defaultValue="200"
        />
      </div>
    </div>
  );
};

const PulseAnimationName1 = ['pulse1'] as const;
const PulseAnimationName2 = ['pulse2'] as const;

const StyledMeterDots = styled.div`
  > * {
    --size: 10px;

    background-color: var(--color--7);
    border-radius: var(--size);
    opacity: 0.7;
    animation: ${props => props.theme.id(PulseAnimationName1)} 0.25s;

    &.current {
      animation: ${props => props.theme.id(PulseAnimationName2)} 0.2s;
    }

    &.accent {
      opacity: 1;
    }
  }

  @keyframes ${props => props.theme.id(PulseAnimationName1)} {
    from {
      scale: 1;
    }
    to {
      scale: 2;
    }
  }

  @keyframes ${props => props.theme.id(PulseAnimationName2)} {
    from {
      scale: 1;
    }
    to {
      scale: 2;
    }
  }
`;

const StyledBpmInput = styled(KeyboardInput)`
  width: 3em;
  text-align: center;
`;

const StyledTapButton = styled.div`
  --size: 10vw;

  background-color: var(--color--7);
  border-radius: var(--size);
`;
