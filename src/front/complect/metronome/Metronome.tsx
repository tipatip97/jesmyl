import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { cmMolecule } from '../../components/apps/cm/molecules';
import { useAtom } from '../atoms';
import { isTouchDevice } from '../device-differences';
import KeyboardInput from '../keyboard/KeyboardInput';
import { IconMinusSignCircleBulkRounded } from '../the-icon/icons/minus-sign-circle';
import { IconPauseSolidRounded } from '../the-icon/icons/pause';
import { IconPlaySolidRounded } from '../the-icon/icons/play';
import { IconPlusSignCircleBulkRounded } from '../the-icon/icons/plus-sign-circle';
import { ActualRef, useActualRef } from '../useActualRef';

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
  const [accentes, setAccentes] = useAtom(cmMolecule.take('metronomeAccentes'));
  const accentesRef: ActualRef<string> = useActualRef(accentes);
  const [mainSound, setMainSound] = useAtom(cmMolecule.take('metronomeMainSound'));
  const [secondarySound, setSecondarySound] = useAtom(cmMolecule.take('metronomeSecondarySound'));
  const actualUserMeterSize = useActualRef(userMeterSize);
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

        if (accentesRef.current[currentDotMemo.current] === '1') note.frequency.value = accentPitch;
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
  }, [accentesRef, actualUserBpm, actualUserMeterSize, currentDotMemo, isPlay]);

  return (
    <Main className="com-metronome flex around full-width">
      <div
        ref={playButtonRef}
        className="pointer"
      >
        {isPlay ? <IconPauseSolidRounded /> : <IconPlaySolidRounded />}
      </div>
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
                className={`strong-size${accentesRef.current[doti] === '1' ? ' accent' : ''}`}
                onClick={() =>
                  setAccentes(
                    accentesRef.current
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

      <div className="flex column">
        <input
          ref={accentRangeRef}
          className="main"
          type="range"
          min="0"
          max="500"
          defaultValue={mainSound}
          onChange={event => {
            const value = event.currentTarget.value;
            clearTimeout(changeMainSoundTimeout);
            changeMainSoundTimeout = setTimeout(() => setMainSound(`${+value}`), 300);
          }}
        />
        <input
          ref={secondaryRangeRef}
          className="secondary"
          type="range"
          min="0"
          max="500"
          defaultValue={secondarySound}
          onChange={event => {
            const value = event.currentTarget.value;
            clearTimeout(changeSecondarySoundTimeout);
            changeSecondarySoundTimeout = setTimeout(() => setSecondarySound(`${+value}`), 300);
          }}
        />
      </div>
    </Main>
  );
};

let changeMainSoundTimeout: TimeOut;
let changeSecondarySoundTimeout: TimeOut;

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

const Main = styled.div`
  --dot-size: 10px;

  input[type='range'].secondary {
    opacity: 0.7;
  }

  /*********** Baseline, reset styles ***********/
  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
  }

  /* Removes default focus */
  input[type='range']:focus {
    outline: none;
  }

  /******** Chrome, Safari, Opera and Edge Chromium styles ********/
  /* slider track */
  input[type='range']::-webkit-slider-runnable-track {
    background-color: var(--color--7);
    border-radius: 4rem;
    height: var(--dot-size);
  }

  /* slider thumb */
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: 2px; /* Centers thumb on the track */
    background-color: #808080;
    border-radius: var(--dot-size);
    height: var(--dot-size);
    width: var(--dot-size);
  }

  input[type='range']:focus::-webkit-slider-thumb {
    outline: 3px solid #808080;
    outline-offset: 0.125rem;
  }

  /*********** Firefox styles ***********/
  /* slider track */
  input[type='range']::-moz-range-track {
    background-color: var(--color--7);
    border-radius: var(--dot-size);
    height: var(--dot-size);
  }

  /* slider thumb */
  input[type='range']::-moz-range-thumb {
    background-color: #808080;
    border: none; /*Removes extra border that FF applies*/
    border-radius: var(--dot-size);
    height: var(--dot-size);
    width: var(--dot-size);
  }

  input[type='range']:focus::-moz-range-thumb {
    outline: 3px solid #808080;
    outline-offset: 0.125rem;
  }
`;
